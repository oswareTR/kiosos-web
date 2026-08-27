import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type NavbarActionsProps = {
  className?: string;
  onNavigate?: () => void;
};

export function NavbarActions({ className, onNavigate }: NavbarActionsProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button variant="secondary" size="sm" href="/#app" onClick={onNavigate}>
        Uygulamayı indir
      </Button>
      <Button variant="primary" size="sm" href="/#contact" onClick={onNavigate}>
        Demo randevusu
      </Button>
    </div>
  );
}
