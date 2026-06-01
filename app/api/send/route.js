import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    // Data safely extract karein
    const name = body.name;
    const email = body.email;
    const phone = body.phone || "Not provided";
    const service = body.service || body.subject || "General Enquiry";
    const message = body.message || "No additional message provided.";
    const appointment = body.appointment;

    // Clean message
    const cleanMessage = message.replace(/<[^>]*>?/gm, "");

    // Validation (sirf un fields ke liye jo critical hain)
    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Missing Name or Email" }), {
        status: 400,
      });
    }

    const data = await resend.emails.send({
      from: "BizGrow Media <info@bizgrowstudios.co.uk>",
      to: ["info@bizgrowstudios.co.uk"],
      reply_to: email,
      subject: `New Lead: ${name} - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; max-width: 600px; color: #333;">
          <h2 style="color: #12066a; border-bottom: 2px solid #997819; padding-bottom: 10px;">New Business Enquiry</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service}</p>
          </div>

          ${
            appointment && appointment.date
              ? `
            <div style="background: #f4f7ff; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 5px solid #997819;">
              <h3 style="margin-top: 0; color: #12066a;">📅 Discovery Call Requested</h3>
              <p style="margin-bottom: 5px;"><strong>Date:</strong> ${appointment.date}</p>
              <p style="margin-bottom: 5px;"><strong>Time:</strong> ${appointment.time}</p>
              <p style="margin-bottom: 0;"><strong>Timezone:</strong> ${appointment.timezone}</p>
            </div>
          `
              : ""
          }

          <div style="margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #12066a; white-space: pre-wrap;">
              ${cleanMessage}
            </div>
          </div>
          <p style="font-size: 11px; color: #888; text-align: center; margin-top: 30px;">Sent from BizGrow Digital Website</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
    });
  } catch (error) {
    console.error("Backend Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
