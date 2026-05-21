import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, service, message, appointment } = body;
    
    const finalService = service || subject;

    // 1. Validation: Phone bhi aksar zaroori hota ha leads ke liye
    if (!name || !email || !finalService) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Security: Simple cleanup for message to prevent HTML injection
    const cleanMessage = message?.replace(/<[^>]*>?/gm, '');

    const data = await resend.emails.send({
      // 🚨 Make sure this domain is verified in Resend Dashboard
      from: 'BizGrow Media <info@bizgrowstudios.co.uk>', 
      to: ['info@bizgrowstudios.co.uk'],
      reply_to: email, // Is se 'Reply' dabane par direct customer ko email jayegi
      subject: `New Lead: ${name} - ${finalService}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; max-width: 600px; color: #333;">
          <h2 style="color: #12066a; border-bottom: 2px solid #997819; padding-bottom: 10px;">New Business Enquiry</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Service:</strong> ${finalService}</p>
          </div>

          ${appointment && appointment.date ? `
            <div style="background: #f4f7ff; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 5px solid #997819;">
              <h3 style="margin-top: 0; color: #12066a;">📅 Discovery Call Requested</h3>
              <p style="margin-bottom: 5px;"><strong>Date:</strong> ${appointment.date}</p>
              <p style="margin-bottom: 5px;"><strong>Time:</strong> ${appointment.time}</p>
              <p style="margin-bottom: 0;"><strong>Timezone:</strong> ${appointment.timezone}</p>
            </div>
          ` : ''}

          <div style="margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #12066a; white-space: pre-wrap;">
              ${cleanMessage || 'No additional message provided.'}
            </div>
          </div>
          <p style="font-size: 11px; color: #888; text-align: center; margin-top: 30px;">Sent from BizGrow Digital Website</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true, id: data.id }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Backend Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}