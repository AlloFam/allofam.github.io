import { Handler } from "@netlify/functions";

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { email, first, last, zip } = JSON.parse(event.body || "{}");

    const response = await fetch(
      `https://us21.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: first,
            LNAME: last,
            ZIP: zip,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Successfully subscribed!" }),
    };
  } catch {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to subscribe" }),
    };
  }
};

export { handler };
