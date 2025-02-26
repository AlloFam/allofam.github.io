import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CardServiceProps {
  title: string;
  src: string;
}

const CardService = ({ title, src }: CardServiceProps) => (
  <Card className="w-[45%] lg:w-[300px] m-5 shadow-md shadow-teal border border-teal m-2 lg:m-5">
    <CardContent className="py-5 flex justify-center">
      <img src={src} alt={title} className="w-[128px]" />
    </CardContent>
    <CardFooter className="flex justify-center bg-teal-s75 p-5 rounded-b-lg">
      <p className="font-bold text-teal-s500">{title}</p>
    </CardFooter>
  </Card>
);

export default CardService;
