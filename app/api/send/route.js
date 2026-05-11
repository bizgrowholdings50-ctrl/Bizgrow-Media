import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Incoming Data:", body);

    // Appointment data ko extract karein (jo frontend se optional aayega)
    const { name, email, phone, service, message, appointment } = body;

    // Validation
    if (!name || !email || !service) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'BizGrow Media <info@bizgrowmedia.co.uk>',
      to: ['info@bizgrow-digital.co.uk'],
      subject: `New Lead: ${name} - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; max-width: 600px;">
          <h2 style="color: #12066a; border-bottom: 2px solid #997819; padding-bottom: 10px;">New Business Enquiry</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Service:</strong> ${service}</p>
          </div>

          ${appointment ? `
            <div style="background: #f4f7ff; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 5px solid #997819;">
              <h3 style="margin-top: 0; color: #12066a;">📅 Appointment Requested</h3>
              <p style="margin-bottom: 5px;"><strong>Date:</strong> ${appointment.date}</p>
              <p style="margin-bottom: 5px;"><strong>Time:</strong> ${appointment.time}</p>
              <p style="margin-bottom: 0;"><strong>Timezone:</strong> ${appointment.timezone}</p>
            </div>
          ` : ''}

          <div style="margin-top: 20px;">
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #12066a; color: #333;">
              ${message || 'No additional message provided.'}
            </div>
          </div>

          <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 11px; color: #888; text-align: center;">Sent from BizGrow Digital Website</p>
        </div>
      `,
    });

    console.log("Resend Response:", data);
    return new Response(JSON.stringify(data), { status: 200 });

  } catch (error) {
    console.error("Backend Error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}