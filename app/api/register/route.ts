import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Create URL parameters for the n8n webhook
    const params = new URLSearchParams({
      type: "student_registration",
      name: body.name,
      email: body.email,
      phone: body.phone,
      course: body.course,
      rollNumber: body.rollNumber,
      idNumber: body.idNumber,
      registrationDate: body.registrationDate,
    })

    const webhookUrl = `https://nazia1.app.n8n.cloud/webhook-test/865073e0-cb6b-4bbd-a102-804bb4b8e4c7?${params.toString()}`

    // Make the request to n8n webhook from server-side
    const response = await fetch(webhookUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })

    if (response.ok) {
      const data = await response.text()
      return NextResponse.json({ success: true, data })
    } else {
      const errorText = await response.text()
      return NextResponse.json(
        { success: false, error: `Webhook failed: ${response.status} - ${errorText}` },
        { status: response.status },
      )
    }
  } catch (error) {
    console.error("Registration API error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
