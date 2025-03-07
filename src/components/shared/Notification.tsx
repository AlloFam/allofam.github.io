import { useEffect, useState } from "react";

const Notification = ({ message }: { message: string }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, []);

  return (
    <div
      className={`bg-teal-s75 p-4 w-full my-5 rounded-lg border-2 border-teal-s500 text-center text-sm font-bold text-teal-s500 transition-all duration-300 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <p>{message}</p>
    </div>
  );
};

export default Notification;
