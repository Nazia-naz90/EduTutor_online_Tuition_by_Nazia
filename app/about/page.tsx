"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Mail, MessageCircle, Facebook, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react"
import { useRef, useState } from "react"

export default function AboutPage() {
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({})

  const courses: { name: string; imageUrl: string; description: string }[] = [
    {
      name: "HTML",
      imageUrl: "/Html-img.jpg",
      description: "Learn semantic HTML5, accessibility best practices, and structure pages with clean, maintainable markup.",
    },
    {
      name: "CSS",
      imageUrl: "/css-img.jpg",
      description: "Master layouts, responsive design, and modern CSS features to build beautiful, consistent interfaces.",
    },
    {
      name: "Tailwind CSS",
      imageUrl: "/tailwind-css-course-cover.jpg",
      description: "Build fast with utility-first styling, scalable design systems, and production-ready component patterns.",
    },
    {
      name: "JavaScript",
      imageUrl: "/javascript-course-cover.jpg",
      description: "From fundamentals to modern ES features, write clean logic, handle events, and integrate with APIs.",
    },
    {
      name: "TypeScript",
      imageUrl: "/typescript-img.png",
      description: "Type your apps for reliability: generics, utility types, strict mode, and scalable app architecture.",
    },
    {
      name: "Python",
      imageUrl: "/python-image.jpg",
      description: "Understand Python syntax, data structures, scripting, and practical problem solving for the web.",
    },
    {
      name: "Next.js",
      imageUrl: "/nextJs.jpeg",
      description: "Full‑stack apps with routing, data fetching, server components, and performance best practices.",
    },
    {
      name: "PostgreSQL",
      imageUrl: "/postgreSql-img.jpeg",
      description: "SQL mastery with Postgres: schema design, queries, functions, and performance tuning basics.",
    },
    {
      name: "MongoDB",
      imageUrl: "/mangoDb-img.png",
      description: "Document databases, flexible schemas, and aggregation for modern application needs.",
    },
    {
      name: "n8n",
      imageUrl: "/n8n-img.jpg",
      description: "Automate workflows with webhooks, integrations, and low‑code pipelines for real results.",
    },
    {
      name: "Agentic AI",
      imageUrl: "/agentic-ai-img.png",
      description: "Design agentic systems, tool usage, planning loops, and safe, reliable AI integrations.",
    },
    {
      name: "WordPress",
      imageUrl: "/wordpress-img.jpg",
      description: "Build and customize dynamic websites, themes, and plugins following best practices.",
    },
  ]

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      })
    }
  }

  const handleImageError = (courseName: string) => {
    setImageErrors(prev => ({ ...prev, [courseName]: true }))
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-10">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8 text-secondary" />
            <h1 className="text-3xl md:text-4xl font-bold font-sans text-secondary">About EduTutor</h1>
          </div>
          <Badge variant="secondary" className="mb-4">
            Online Coding Tuition
          </Badge>
          <p className="text-muted-foreground max-w-3xl">
            I am <span className="font-semibold text-secondary">Nazia Shoukat</span> — a Frontend Developer and
            dedicated instructor. I teach you the skills that matter in modern web development: from strong fundamentals
            to production‑ready workflows. With real-world examples, clean coding habits, and project‑based learning,
            I'll help you build confidence, ship quality, and think like a professional developer and teacher guiding
            you at every step.
          </p>
        </div>
      </section>

      <section className="py-14" id="courses">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">Courses I Teach</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Each course is designed with clear outcomes, hands‑on exercises, and best practices that mirror professional
            standards.
          </p>

          {/* Courses Slider Container */}
          <div className="relative">
            {/* Left Arrow Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background border-2 -ml-4"
              onClick={scrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Courses Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 py-4 scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {courses.map((course) => (
                <Card 
                  key={course.name} 
                  className="hover:shadow-md transition-shadow min-w-[300px] max-w-[300px] flex-shrink-0"
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{course.name}</CardTitle>
                    <CardDescription>Beginner to professional outcomes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-36 rounded-md border mb-3 overflow-hidden bg-muted flex items-center justify-center">
                      {imageErrors[course.name] ? (
                        <div className="flex flex-col items-center justify-center text-muted-foreground">
                          <ImageIcon className="h-8 w-8 mb-2" />
                          <span className="text-xs">Course Image</span>
                        </div>
                      ) : (
                        <img
                          src={course.imageUrl}
                          alt={`${course.name} course`}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(course.name)}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Arrow Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background border-2 -mr-4"
              onClick={scrollRight}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Custom scrollbar hide styles */}
          <style jsx>{`
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </section>

      <section className="py-14 border-t bg-muted/20" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary">Contact Us</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            Have questions or want to enroll? Reach out via your preferred platform and I'll get back to you promptly.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-green-500" />
                  <CardTitle className="text-lg">WhatsApp</CardTitle>
                </div>
                <CardDescription>Quick messages and scheduling</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary" className="w-full in-hover:bg-blue-200">
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    Message on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg">Facebook</CardTitle>
                </div>
                <CardDescription>Follow and contact on Facebook</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary" className="w-full in-hover:bg-blue-200">
                  <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    Visit Facebook
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-red-500" />
                  <CardTitle className="text-lg">Gmail</CardTitle>
                </div>
                <CardDescription>Send an email inquiry</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary" className="w-full in-hover:bg-blue-200">
                  <a href="mailto:your-email@example.com">Send an Email</a>
                </Button>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
    </main>
  )
}