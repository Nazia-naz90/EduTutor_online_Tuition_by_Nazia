"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Star, GraduationCap, Clock, UserPlus, ChevronLeft, ChevronRight } from "lucide-react"

export default function TuitionWebsite() {
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  })
  const [registrationResult, setRegistrationResult] = useState<{
    name: string
    course: string
    rollNumber: string
    idNumber: string
  } | null>(null)
  const [isRegistering, setIsRegistering] = useState(false)

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const registrationSectionRef = useRef<HTMLDivElement>(null)

  const courses = ["HTML", "CSS","Tailwind CSS","javaScript" ,"TypeScript", "Python","Mango Db" ,"NextJS", "Agentic AI", "n8n", "WordPress", "Backend"]

  const courseCatalog = [
    {
      name: "HTML",
      img: "/Html-img.jpg",
      desc: "Structure web pages and build strong foundations with semantic markup.",
    },
    {
      name: "CSS",
      img: "/css-img.jpg",
      desc: "Style and layout websites with modern CSS features and best practices.",
    },
    {
      name: "Tailwind CSS",
      img: "/tailwind-css-course-cover.jpg",
      desc: "Design faster using utility-first classes and responsive design patterns.",
    },
    {
      name: "JavaScript",
      img: "/javascript-course-cover.jpg",
      desc: "Make websites interactive, mastering modern ES features and DOM APIs.",
    },
    {
      name: "TypeScript",
      img: "/typeScript-img.png",
      desc: "Add static typing for safer, scalable frontend and backend applications.",
    },
    {
      name: "Python",
      img: "/python-image.jpg",
      desc: "Learn versatile scripting for automation, data, and backend services.",
    },
    {
      name: "Next.js",
      img: "/nextJs.jpeg",
      desc: "Build production-grade React apps with routing, RSCs, and server actions.",
    },
    {
      name: "PostgreSQL",
      img: "/postgreSql-img.jpeg",
      desc: "Write efficient SQL, design schemas, and optimize real-world workloads.",
    },
    {
      name: "Mango Db",
      img: "/mongodb-course-cover.jpg",
      desc: "Model documents, aggregate data, and scale NoSQL applications.",
    },
    {
      name: "n8n",
      img: "/n8n-img.jpg",
      desc: "Automate workflows, connect APIs, and build robust integrations.",
    },
    {
      name: "Agentic AI",
      img: "/agentic-ai-img.png",
      desc: "Design AI agents, tools, and reasoning loops for real tasks.",
    },
    {
      name: "WordPress",
      img: "/wordpress-img.jpg",
      desc: "Create sites, customize themes, and extend functionality safely.",
    },
  ]

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

  const handleEnrollNow = (courseName: string) => {
    // Set the selected course in the registration form
    setRegistrationData(prev => ({
      ...prev,
      course: courseName
    }))

    // Scroll to registration section
    if (registrationSectionRef.current) {
      registrationSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault()
    if (
      !registrationData.name.trim() ||
      !registrationData.email.trim() ||
      !registrationData.phone.trim() ||
      !registrationData.course
    )
      return

    setIsRegistering(true)

    // Generate roll number and ID number
    const rollNumber = `ET${Date.now().toString().slice(-6)}`
    const idNumber = `ID${Math.random().toString(36).substr(2, 8).toUpperCase()}`

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "student_registration",
          name: registrationData.name,
          email: registrationData.email,
          phone: registrationData.phone,
          course: registrationData.course,
          rollNumber: rollNumber,
          idNumber: idNumber,
          registrationDate: new Date().toISOString(),
        }),
      })

      const result = await res.json()

      if (result.success) {
        // Show success result
        setRegistrationResult({
          name: registrationData.name,
          course: registrationData.course,
          rollNumber,
          idNumber,
        })

        // Reset form
        setRegistrationData({
          name: "",
          email: "",
          phone: "",
          course: "",
        })
      } else {
        throw new Error(result.error || "Registration failed")
      }
    } catch (error) {
      setRegistrationResult({
        name: registrationData.name,
        course: registrationData.course,
        rollNumber,
        idNumber,
      })

      // Reset form
      setRegistrationData({
        name: "",
        email: "",
        phone: "",
        course: "",
      })
    } finally {
      setIsRegistering(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            <Star className="h-4 w-4 mr-1" />
            Trusted by 10,000+ Students
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Excellence in <span className="text-accent">Online Tuition</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Unlock your potential with personalized online tutoring from expert educators. Join thousands of students
            achieving academic success.
          </p>
        </div>
      </section>

      {/* Course Cards Slider */}
      <section id="course-cards" className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary">Explore Our Courses</h3>
            <p className="max-w-2xl mx-auto mt-2 text-blue-700">
              Choose from a curated set of practical, industry-relevant courses to accelerate your learning.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative">
            {/* Left Arrow Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background border-2 -ml-4 hidden md:flex"
              onClick={scrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Courses Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 py-4 scrollbar-hide scroll-smooth px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {courseCatalog.map((course) => (
                <Card 
                  key={course.name} 
                  className="hover:shadow-lg transition-all duration-300 min-w-[280px] max-w-[280px] flex-shrink-0 border-2 hover:border-accent/20 hover:scale-105"
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-secondary">{course.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="w-full h-32 rounded-md border border-blue-300 overflow-hidden bg-muted flex items-center justify-center">
                      <img
                        src={course.img || "/placeholder.svg"}
                        alt={`${course.name} course thumbnail`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{course.desc}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-2 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                      onClick={() => handleEnrollNow(course.name)}
                    >
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right Arrow Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background border-2 -mr-4 hidden md:flex"
              onClick={scrollRight}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Scroll indicators for mobile */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
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

      {/* Registration Section with ref */}
      <section id="register" className="py-16 bg-muted/10" ref={registrationSectionRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <UserPlus className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4 text-secondary">Student Registration</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Register now to get your student ID and roll number. Start your learning journey with us today!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {!registrationResult ? (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Register as Student</CardTitle>
                  <CardDescription>Fill in your details to complete registration</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegistration} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="reg-name" className="text-sm font-medium text-blue-700">
                          Full Name *
                        </label>
                        <Input
                          id="reg-name"
                          type="text"
                          placeholder="Enter your full name"
                          value={registrationData.name}
                          onChange={(e) => setRegistrationData({ ...registrationData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="reg-email" className="text-sm font-medium text-blue-700">
                          Email Address *
                        </label>
                        <Input
                          id="reg-email"
                          type="email"
                          placeholder="Enter your email"
                          value={registrationData.email}
                          onChange={(e) => setRegistrationData({ ...registrationData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="reg-phone" className="text-sm font-medium text-blue-700">
                          Phone Number *
                        </label>
                        <Input
                          id="reg-phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          value={registrationData.phone}
                          onChange={(e) => setRegistrationData({ ...registrationData, phone: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="reg-course" className="text-sm font-medium text-blue-700">
                          Select Course *
                        </label>
                        <select
                          id="reg-course"
                          value={registrationData.course}
                          onChange={(e) => setRegistrationData({ ...registrationData, course: e.target.value })}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                          required
                        >
                          <option value="">Choose a course...</option>
                          {courses.map((course) => (
                            <option key={course} value={course}>
                              {course}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Show selected course info if coming from Enroll Now button */}
                    {registrationData.course && (
                      <div className="p-3 bg-blue-50 border border-blue-200 rounded-md">
                        <p className="text-sm text-blue-700">
                          <strong>Selected Course:</strong> {registrationData.course}
                        </p>
                        <p className="text-xs text-blue-600 mt-1">
                          You selected this course from the course catalog. Fill in your details to complete registration.
                        </p>
                      </div>
                    )}

                    <Button type="submit" className="w-full bg-blue-400 " disabled={isRegistering}>
                      {isRegistering ? "Registering..." : "Register Now"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-green-200 bg-green-50/50">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl text-green-800">Registration Successful!</CardTitle>
                  <CardDescription className="text-green-600">
                    Welcome to EduTutor! Here are your registration details:
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-foreground mb-2">Student Name</h4>
                      <p className="text-lg text-foreground">{registrationResult.name}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-foreground mb-2">Selected Course</h4>
                      <p className="text-lg text-foreground">{registrationResult.course}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-foreground mb-2">Roll Number</h4>
                      <p className="text-lg font-mono text-accent">{registrationResult.rollNumber}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-foreground mb-2">Student ID</h4>
                      <p className="text-lg font-mono text-accent">{registrationResult.idNumber}</p>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      Please save these details for future reference. You will need them to access your student portal.
                    </p>
                    <Button onClick={() => setRegistrationResult(null)} variant="outline">
                      Register Another Student
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="courses" className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-secondary">Why Choose EduTutor?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive online tutoring services designed to help students excel in their academic
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Expert Tutors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn from qualified educators with years of teaching experience and subject expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Personalized Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Customized lesson plans tailored to your learning style and academic goals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <CardTitle>Flexible Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Book sessions at your convenience with 24/7 availability and easy rescheduling.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 text-primary-foreground font-sans bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-primary-foreground/80">Students Taught</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Expert Tutors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-foreground/80">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6 text-secondary" />
                <span className="text-lg font-bold text-secondary">EduTutor</span>
              </div>
              <p className="text-muted-foreground">
                Empowering students through quality online education and personalized tutoring services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-secondary">Subjects</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>HTML & CSS</li>
                <li>TypeScript & Python</li>
                <li>NextJS & Backend</li>
                <li>WordPress & n8n</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-secondary">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Live Chat</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-secondary">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p className="text-secondary">&copy; 2025 EduTutor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}