import { useState } from "react";
//  Icons
import { SendHorizonal } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Join = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const { target } = e;
    const data = new FormData(target as HTMLFormElement);
    console.log("data", Object.fromEntries(data));
    (target as HTMLFormElement).reset();
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={onsubmit}
      className="flex flex-col items-center w-full py-5 lg:px-20"
    >
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
          <Input id="last" type="text" required className="mt-3" name="last" />
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
          <Input id="zip" type="number" required className="mt-3" name="zip" />
        </fieldset>
      </div>
      <Button
        type="submit"
        className="bg-teal text-lg font-bold px-10 py-5"
        disabled={isLoading}
      >
        Join Waitlist <SendHorizonal className="hidden lg:block" />
      </Button>
    </form>
  );
};

export default Join;
