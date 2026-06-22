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

    // Validation (critical fields)
    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Missing Name or Email" }), {
        status: 400,
      });
    }

    // Dynamic Subject Line for Admin
    const adminSubject = appointment && appointment.date
      ? `📅 [DISCOVERY CALL] New Lead: ${name} - ${service}`
      : `🚀 New Lead: ${name} - ${service}`;

    // --- PARALLEL EMAIL SENDING ---
    const [adminResult, clientResult] = await Promise.allSettled([
      
      // 1. ADMIN NOTIFICATION EMAIL (Media/Studio Sales Team Ke Liye)
      resend.emails.send({
        from: "BizGrow Media <info@bizgrowstudios.co.uk>",
        to: ["info@bizgrowstudios.co.uk"],
        reply_to: email,
        subject: adminSubject,
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
            <p style="font-size: 11px; color: #888; text-align: center; margin-top: 30px;">Sent from BizGrow Media Website</p>
          </div>
        `,
      }),

      // 2. CLIENT THANK YOU EMAIL (Automated Auto-Responder)
      resend.emails.send({
        from: "BizGrow Studios <info@bizgrowstudios.co.uk>",
        to: [email],
        subject: `Thank you for contacting BizGrow Studios!`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #e0e0e0; padding: 30px; border-radius: 12px; color: #333;">
            <h2 style="color: #12066a; margin-top: 0;">Hi ${name}, Thank You!</h2>
            <p style="font-size: 15px; line-height: 1.6;">
              We have successfully received your message regarding <strong>${service}</strong>. Our creative production team is reviewing your requirements, and we will get back to you shortly.
            </p>
            
            ${
              appointment && appointment.date
                ? `
              <div style="background: #fffdf6; border: 1px solid #fde68a; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 5px solid #997819;">
                <h3 style="margin-top: 0; color: #12066a; font-size: 16px;">📅 Your Discovery Call Details:</h3>
                <p style="margin: 0 0 5px 0; font-size: 14px;"><strong>Date:</strong> ${appointment.date}</p>
                <p style="margin: 0 0 5px 0; font-size: 14px;"><strong>Time:</strong> ${appointment.time} (${appointment.timezone})</p>
                <p style="margin: 5px 0 0 0; font-size: 12px; color: #666;">Our team will connect with you at the scheduled time.</p>
              </div>
            `
                : ""
            }

            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin-top: 20px; border-top: 3px solid #12066a;">
              <h4 style="margin-top: 0; margin-bottom: 10px; color: #12066a;">What Happens Next?</h4>
              <ul style="margin: 0; padding-left: 20px; line-height: 1.5; font-size: 14px; color: #555;">
                <li>Our media consultants will review your project blueprint.</li>
                <li>We usually respond via email or phone within 24 business hours.</li>
              </ul>
            </div>

            <p style="font-size: 14px; margin-top: 25px;">
              If you have any creative references, project briefs, or brand guidelines to share, feel free to reply directly to this email so we can fast-track your review.
            </p>

            <br />
            <p style="margin-bottom: 5px; font-size: 14px;">Best regards,</p>
            <p style="margin-top: 0; font-weight: bold; color: #12066a; font-size: 16px;">BizGrow Studios Team</p>
            
            <hr style="border: 0; border-top: 1px solid #eee; margin-top: 30px;" />
            <p style="font-size: 11px; color: #aaa; text-align: center;">
              This is an automated confirmation of your form submission.
            </p>
          </div>
        `,
      })
    ]);

    // Check results
    if (adminResult.status === "rejected") {
      console.error("Admin notification failed:", adminResult.reason);
      return new Response(JSON.stringify({ error: "Failed to send lead to admin." }), {
        status: 500,
      });
    }

    if (clientResult.status === "rejected") {
      console.warn("Client auto-responder failed:", clientResult.reason);
      // Agar client email fail ho jaye tab bhi success true bhejenge kyunke lead admin ko mil chuki hai
      return new Response(JSON.stringify({ 
        success: true, 
        message: "Lead saved, thank-you email failed.", 
        id: adminResult.value.id 
      }), {
        status: 200,
      });
    }

    return new Response(JSON.stringify({ success: true, id: adminResult.value.id }), {
      status: 200,
    });

  } catch (error) {
    console.error("Backend Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}