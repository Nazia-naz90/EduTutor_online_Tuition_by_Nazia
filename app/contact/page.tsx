import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, Facebook } from "lucide-react"

export default function ContactPage() {
  return (
    <main id="contact" className="container mx-auto px-4 py-10">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-balance text-secondary">Contact Us</h1>
        <p className="mt-3 text-muted-foreground">
          Reach out to EduTutor for admissions, course guidance, or general queries. We typically respond within 24
          hours.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-green-400" />
                WhatsApp
              </CardTitle>
              <CardDescription>Chat with us on WhatsApp for quick questions.</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
                aria-label="Chat with us on WhatsApp"
              >
                <Button className="font-medium bg-blue-400 in-hover:bg-blue-200 in-hover:text-blue-600">Open WhatsApp</Button>
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                Replace your-number with your full phone in international format. Example: 15551234567.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Facebook className="h-5 w-5 text-secondary" />
                Facebook
              </CardTitle>
              <CardDescription>Follow and message us on Facebook.</CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="https://facebook.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
                aria-label="Visit our Facebook page"
              >
                <Button className="font-medium  bg-blue-400 in-hover:bg-blue-200 in-hover:text-blue-600">Open Facebook</Button>
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                Replace your-profile with your page or profile handle.
              </p>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-destructive" />
                Gmail
              </CardTitle>
              <CardDescription>Send us an email for detailed queries.</CardDescription>
            </CardHeader>
            <CardContent>
              <a href="mailto:your-email@gmail.com" className="inline-flex" aria-label="Email us">
                <Button className="font-medium bg-blue-400 in-hover:bg-blue-200 in-hover:text-blue-600">Email Us</Button>
              </a>
              <p className="mt-2 text-xs text-muted-foreground">
                Replace your-email@gmail.com with your email address.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
