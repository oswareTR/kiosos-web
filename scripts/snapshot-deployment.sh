#!/usr/bin/env bash
# Fast-forward `deployment` to `main` and push a versioned snapshot.
set -euo pipefail

SOURCE_BRANCH="${SOURCE_BRANCH:-main}"
TARGET_BRANCH="${TARGET_BRANCH:-deployment}"
REMOTE="${REMOTE:-origin}"
DRY_RUN=0

usage() {
  cat <<EOF
Usage: $(basename "$0") [--dry-run]

Fast-forwards ${TARGET_BRANCH} to ${SOURCE_BRANCH} (no merge commits) and
pushes ${TARGET_BRANCH} to ${REMOTE}. Restores your original branch after.

Environment:
  SOURCE_BRANCH  Development branch (default: main)
  TARGET_BRANCH  Snapshot branch (default: deployment)
  REMOTE         Git remote (default: origin)
EOF
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run) DRY_RUN=1 ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1" >&2
      usage >&2
      exit 1
      ;;
  esac
  shift
done

repo_root="$(git rev-parse --show-toplevel 2>/dev/null)" || {
  echo "Not inside a git repository." >&2
  exit 1
}
cd "$repo_root"

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Working tree is not clean. Commit or stash changes first." >&2
  exit 1
fi

original_branch="$(git branch --show-current)"
if [[ -z "$original_branch" ]]; then
  echo "Detached HEAD. Check out ${SOURCE_BRANCH} first." >&2
  exit 1
fi

restore_branch() {
  local current
  current="$(git branch --show-current || true)"
  if [[ -n "$original_branch" && "$current" != "$original_branch" ]]; then
    git checkout "$original_branch"
  fi
}
trap restore_branch EXIT

git fetch "$REMOTE" "$SOURCE_BRANCH" "$TARGET_BRANCH"

if ! git show-ref --verify --quiet "refs/heads/${SOURCE_BRANCH}"; then
  echo "Local branch '${SOURCE_BRANCH}' does not exist." >&2
  exit 1
fi
if ! git show-ref --verify --quiet "refs/heads/${TARGET_BRANCH}"; then
  echo "Local branch '${TARGET_BRANCH}' does not exist." >&2
  exit 1
fi

source_sha="$(git rev-parse "$SOURCE_BRANCH")"
target_sha="$(git rev-parse "$TARGET_BRANCH")"

if [[ "$source_sha" == "$target_sha" ]]; then
  echo "${TARGET_BRANCH} is already at ${SOURCE_BRANCH} (${source_sha:0:7}). Nothing to snapshot."
  exit 0
fi

if git merge-base --is-ancestor "$SOURCE_BRANCH" "$TARGET_BRANCH"; then
  echo "${SOURCE_BRANCH} is behind ${TARGET_BRANCH}. Refusing to snapshot (would not be a fast-forward)." >&2
  exit 1
fi

if ! git merge-base --is-ancestor "$TARGET_BRANCH" "$SOURCE_BRANCH"; then
  echo "${TARGET_BRANCH} and ${SOURCE_BRANCH} have diverged. Fast-forward only; resolve this manually." >&2
  exit 1
fi

echo "Snapshot: ${TARGET_BRANCH} ${target_sha:0:7} -> ${SOURCE_BRANCH} ${source_sha:0:7}"

if [[ "$DRY_RUN" -eq 1 ]]; then
  echo "Dry run. Would run:"
  echo "  git checkout ${TARGET_BRANCH}"
  echo "  git merge --ff-only ${SOURCE_BRANCH}"
  echo "  git push ${REMOTE} ${TARGET_BRANCH}"
  echo "  git checkout ${original_branch}"
  exit 0
fi

git checkout "$TARGET_BRANCH"
git merge --ff-only "$REMOTE/$TARGET_BRANCH"
git merge --ff-only "$SOURCE_BRANCH"
git push "$REMOTE" "$TARGET_BRANCH"

echo "Pushed ${TARGET_BRANCH} snapshot ${source_sha:0:7} to ${REMOTE}."
