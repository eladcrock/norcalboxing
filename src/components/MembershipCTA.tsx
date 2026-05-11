import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const MembershipCTA = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Grand Opening Special
            </span>
            <h2 className="mt-4 text-3xl font-bold uppercase tracking-tight md:text-4xl">
              Membership <span className="text-primary">Pricing</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border bg-card">
              <CardContent className="flex h-full flex-col p-8 text-center">
                <h3 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground">
                  Standard Membership
                </h3>
                <p className="my-4 text-5xl font-bold">
                  $140<span className="text-base font-normal text-muted-foreground">/month</span>
                </p>
                <p className="mb-6 text-sm text-muted-foreground">Unlimited classes</p>
                <Button asChild variant="outline" className="mt-auto text-base font-semibold uppercase tracking-wider">
                  <Link to="/contact">Join Now</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="relative border-2 border-primary bg-card shadow-lg">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                First 50 Members
              </span>
              <CardContent className="flex h-full flex-col p-8 text-center">
                <h3 className="text-lg font-semibold uppercase tracking-wider text-primary">
                  Grand Opening Special
                </h3>
                <p className="my-4 text-5xl font-bold">
                  $100<span className="text-base font-normal text-muted-foreground">/month</span>
                </p>
                <p className="mb-6 text-sm text-muted-foreground">Unlimited classes. Limited spots.</p>
                <Button asChild className="mt-auto text-base font-semibold uppercase tracking-wider">
                  <Link to="/contact">Claim Your Spot</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipCTA;
