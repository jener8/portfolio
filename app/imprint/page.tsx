import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import * as Icons from "lucide-react"
import Link from "next/link"

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="sm" className="h-9">
                <Icons.ArrowLeft className="h-4 w-4 mr-2" />
                Back to Start
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <Card className="rounded-2xl shadow-sm border-border bg-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">Imprint</CardTitle>
            <p className="text-sm text-muted-foreground">Legal Information (Impressum)</p>
          </CardHeader>
          <CardContent className="space-y-6 text-sm">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">Information according to § 5 TMG</h2>
              <div className="space-y-1 text-card-foreground">
                <p className="font-medium">Jennifer Simonds-Spellmann</p>
                <p>UX for AI · Responsible AIx & Research Lead</p>
                <p>Berlin, Germany</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">Contact</h2>
              <div className="space-y-1 text-card-foreground">
                <p className="flex items-center gap-2">
                  <Icons.Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:info@jennifersimonds.com" className="hover:text-primary transition-colors">
                    info@jennifersimonds.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Icons.Linkedin className="h-4 w-4 text-primary" />
                  <a
                    href="https://linkedin.com/in/jennifersimonds"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/jennifersimonds
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">Responsible for Content</h2>
              <p className="text-card-foreground">
                Jennifer Simonds-Spellmann is responsible for the content of this website according to § 55 Abs. 2 RStV.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">Disclaimer</h2>
              <div className="space-y-3 text-card-foreground">
                <div>
                  <h3 className="font-medium mb-1">Liability for Content</h3>
                  <p className="text-xs leading-relaxed">
                    The contents of our pages have been created with the utmost care. However, we cannot guarantee the
                    contents' accuracy, completeness, or topicality. According to statutory provisions, we are
                    furthermore responsible for our own content on these web pages. In this matter, please note that we
                    are not obliged to monitor the transmitted or saved information of third parties, or investigate
                    circumstances pointing to illegal activity.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Liability for Links</h3>
                  <p className="text-xs leading-relaxed">
                    Our offer contains links to external third-party websites. We have no influence on the contents of
                    those websites, therefore we cannot guarantee for those contents. Providers or administrators of
                    linked websites are always responsible for their own contents.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-2">Credits</h2>
              <div className="space-y-2 text-card-foreground text-xs">
                <p className="flex items-start gap-2">
                  <Icons.Sparkles className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    This website was built with AI assistance using{" "}
                    <a
                      href="https://v0.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      V0.app
                    </a>
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <Icons.Image className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    Icons and collaboration image created with{" "}
                    <a
                      href="https://gamma.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      Gamma.app
                    </a>
                  </span>
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-card/80 backdrop-blur-sm border-t border-border mt-8">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="text-xs">© 2025 Jennifer Simonds-Spellmann</p>
            <div className="flex flex-col items-center md:items-end gap-2 text-xs">
              <p className="flex items-center gap-1.5">
                Built with AI using
                <a
                  href="https://v0.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  V0.app
                </a>
              </p>
              <p className="flex items-center gap-1.5">
                Collaboration image created with
                <a
                  href="https://gamma.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Gamma.app
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
