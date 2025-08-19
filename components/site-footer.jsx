import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

export function SiteFooter({ className }) {
  return (
    <footer
      className={cn(
        "relative overflow-hidden border-t border-border/50 bg-gradient-to-br from-background via-muted/20 to-muted/40",
        className
      )}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="container relative">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:gap-8 lg:py-20">
          {/* Brand Section - Takes more space */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="space-y-6">
              <div className="group">
                <Logo />
              </div>
              <div className="space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                  Building the future of web development with beautiful,
                  accessible, and performant components.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground/80">
                  <span className="inline-flex items-center gap-1 rounded-full border border-border/50 bg-muted/50 px-3 py-1">
                    Built with
                    <a
                      href="https://ui.shadcn.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors"
                    >
                      shadcn/ui
                      <ArrowUpRight size={12} />
                    </a>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border/50 bg-muted/50 px-3 py-1">
                    Hosted on
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Vercel
                      <ArrowUpRight size={12} />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:gap-12">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground">
                  Product
                </h3>
                <nav className="space-y-3">
                  {[
                    { label: "Documentation", href: "#" },
                    { label: "Components", href: "#" },
                    { label: "Templates", href: "#" },
                    { label: "Changelog", href: "#" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="group block text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1"
                    >
                      <span className="group-hover:underline underline-offset-4">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-foreground">
                  Company
                </h3>
                <nav className="space-y-3">
                  {[
                    { label: "About", href: "#" },
                    { label: "Blog", href: "#" },
                    { label: "Contact", href: "#" },
                    { label: "Support", href: "#" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="group block text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-1"
                    >
                      <span className="group-hover:underline underline-offset-4">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Connect</h3>
              <div className="flex gap-3">
                {[
                  { Icon: Github, href: "#", label: "GitHub" },
                  { Icon: Twitter, href: "#", label: "Twitter" },
                  { Icon: Linkedin, href: "#", label: "LinkedIn" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/50 text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 hover:text-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                    aria-label={label}
                  >
                    <Icon
                      size={18}
                      className="transition-transform group-hover:scale-110"
                    />
                  </a>
                ))}
              </div>
              <div className="pt-4">
                <p className="text-xs text-muted-foreground/70">
                  Follow us for updates and behind-the-scenes content.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground/80">
              © {new Date().getFullYear()} Rabiul Rafee. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <a
                href="#"
                className="text-muted-foreground/70 hover:text-foreground transition-colors hover:underline underline-offset-4"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground/70 hover:text-foreground transition-colors hover:underline underline-offset-4"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground/70 hover:text-foreground transition-colors hover:underline underline-offset-4"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
