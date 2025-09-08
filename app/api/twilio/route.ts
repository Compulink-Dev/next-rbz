import twilio from "twilio";

export async function POST(req: Request) {
  const formData = await req.formData();
  const incomingMsg = formData.get("Body") as string;

  // Example: simple rules
  let reply = "🤖 I didn’t get that.";
  if (incomingMsg.toLowerCase().includes("hello")) {
    reply = "👋 Hi there! How can I help you today?";
  }
  if (incomingMsg.toLowerCase().includes("help")) {
    reply = "Here are some things you can ask me:\n- Account info\n- Support\n- Services";
  }

  // Create TwiML response
  const twiml = new twilio.twiml.MessagingResponse();
  twiml.message(reply);

  return new Response(twiml.toString(), {
    headers: { "Content-Type": "text/xml" },
  });
}
