import { storeMessage } from '@/lib/db';
import { addDoc } from 'firebase/firestore';
import { headers } from 'next/headers';
import twilio from 'twilio';
import { xml2js, xml2json } from 'xml-js';
const accountSid = process.env.TWILIOID;
const authToken = process.env.TWILIOTOKEN;
export async function GET(request: Request) {
  // Your AccountSID and Auth Token from console.twilio.com

  console.log({ accountSid, authToken })

  const client = twilio(accountSid, authToken);
  const body = await request.json()

  const message = await client.messages.create({
    body: 'Hello from twilio-farid',
    to: body.number, // Text your number
    from: process.env.TWILIONUMBER, // From a valid Twilio number
  }
  )
  console.log(message)
  const messagseId = message.sid;
  return Response.json({ message: 'Message sent', messagseId });

}
export async function POST(request: Request) {
  const MessagingResponse = twilio.twiml.MessagingResponse;
  const twiml = new MessagingResponse();
  const xml = await request.text();
  const jsonData = xml2json(xml, {compact: true});
  storeMessage(jsonData);

  twiml.message('Thanks for your message');

  //twiml.message('The Robots are coming! Head for the hills!');
  return new Response(twiml.toString(), { headers: { 'Content-Type': 'text/xml' } });

}
