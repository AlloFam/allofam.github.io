import { useState } from "react";
//  Icons
import { SendHorizonal } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Notification from "../shared/Notification";

/**
 * Join component
 * @returns {React.ReactNode}
 */
const Join = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    const { target } = e;
    const data = new FormData(target as HTMLFormElement);
    const formData = Object.fromEntries(data);

    try {
      const response = await fetch("/.netlify/functions/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          first: formData.first,
          last: formData.last,
          zip: formData.zip,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      (target as HTMLFormElement).reset();
      setSuccessMessage(
        "Thank you for subscribing! Please check your email for confirmation."
      );
    } catch {
      setError("Failed to subscribe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center p-10 lg:p-20">
      <h2 className="text-5xl font-bold text-center">
        Join Our Self-Service Platform Waitlist
      </h2>
      <p className="lg:mx-20 text-lg mb-5 text-center mt-10">
        Do you have young children - or planning to?
      </p>
      <p className="lg:mx-20 text-lg mb-10 text-center">
        Join the waitlist to be the first to know when we launch our
        self-service platform in your city to serve you vetted healthcare
        providers for your children.
      </p>
      <form
        onSubmit={onsubmit}
        className="flex flex-col items-center w-full py-5 lg:px-20"
      >
        {error && <Notification message={error} />}
        {successMessage && <Notification message={successMessage} />}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-15 w-full">
          <fieldset className="col-span-1">
            <Label htmlFor="first" className="font-bold text-lg">
              First Name<sup>*</sup>
            </Label>
            <Input
              id="first"
              type="text"
              required
              className="mt-3"
              name="first"
            />
          </fieldset>
          <fieldset className="col-span-1">
            <Label htmlFor="last" className="font-bold text-lg">
              Last Name<sup>*</sup>
            </Label>
            <Input
              id="last"
              type="text"
              required
              className="mt-3"
              name="last"
            />
          </fieldset>
          <fieldset className="col-span-1">
            <Label htmlFor="email" className="font-bold text-lg">
              Email <sup>*</sup>
            </Label>
            <Input
              id="email"
              type="email"
              required
              className="mt-3"
              name="email"
            />
          </fieldset>
          <fieldset className="col-span-1">
            <Label htmlFor="zip" className="font-bold text-lg">
              Postal / Zip Code <sup>*</sup>
            </Label>
            <Input
              id="zip"
              type="number"
              required
              className="mt-3"
              name="zip"
            />
          </fieldset>
        </div>
        <Button
          type="submit"
          className="bg-teal font-bold text-white px-8 rounded-full ml-5 hover:bg-teal-s500 hover:text-white transition-all hover:cursor-pointer"
          disabled={isLoading}
        >
          Submit <SendHorizonal className="hidden lg:block" />
        </Button>
      </form>
    </section>
  );
};

export default Join;
