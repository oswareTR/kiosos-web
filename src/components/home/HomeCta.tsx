import { Button } from "@/components/ui/Button";

export function HomeCta() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="surface-card px-6 py-12 sm:px-12">
          <p className="eyebrow">Next step</p>
          <h2 className="display mt-3 max-w-xl text-3xl sm:text-4xl">
            Ready to put a Kiosos kiosk on your floor?
          </h2>
          <p className="lede mt-4 max-w-lg">
            Tell us about your cafe or restaurant. We will walk through
            software, hardware, and a rollout that your staff can actually run.
          </p>
          <div className="mt-8">
            <Button href="mailto:hello@kiosos.com">Talk to the team</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
