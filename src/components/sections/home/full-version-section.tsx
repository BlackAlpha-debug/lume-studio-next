import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, SendHorizonal } from "lucide-react";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function FullVersionSection() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h1"
            className="text-balance text-5xl font-medium md:text-6xl"
          >
            Let&apos;s Work Together
          </TextEffect>
          <TextEffect
            per="line"
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.5}
            as="p"
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg"
          >
            Have a project in mind? We&apos;d love to hear about it. Reach out
            and let&apos;s create something remarkable together.
          </TextEffect>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="mt-12"
          >
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 md:grid-cols-5">
                {/* Contact Info */}
                <div className="md:col-span-2 space-y-6 text-left">
                  <div>
                    <h3 className="text-lg font-semibold">Get in Touch</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      We respond within 24 hours. Feel free to reach out
                      through any channel.
                    </p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                        <Mail className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <a
                          href="mailto:contact@lumestudio.com"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          contact@lumestudio.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                        <Phone className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <a
                          href="tel:+15555555555"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          +1 (555) 555-5555
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                        <MapPin className="size-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">
                          Available Worldwide
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Contact Form */}
                <Card className="md:col-span-3 p-6 sm:p-8 shadow-md">
                  <form className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          type="text"
                          id="firstName"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          type="text"
                          id="lastName"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        type="text"
                        id="subject"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your project..."
                        required
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      <SendHorizonal className="mr-2 size-4" />
                      Send Message
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}
