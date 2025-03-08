import { Handler } from "@netlify/functions";
import mailchimp from "@mailchimp/mailchimp_marketing";

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID) {
  console.error("Missing Mailchimp environment variables.");
}

const DATACENTER = MAILCHIMP_API_KEY?.split("-")[1];

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: DATACENTER,
});

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { email, first, last, zip } = JSON.parse(event.body || "{}");

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Email is required" }),
      };
    }

    await mailchimp.lists.addListMember(MAILCHIMP_AUDIENCE_ID as string, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: first || "",
        LNAME: last || "",
        ZIP: zip || "",
        EMAIL: email,
        ADDRESS: {
          zip: zip || "",
        },
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Successfully subscribed!" }),
    };
  } catch (error) {
    console.error("Mailchimp error details:", JSON.stringify(error, null, 2));
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message || "Failed to subscribe" }),
    };
  }
};

export { handler };
