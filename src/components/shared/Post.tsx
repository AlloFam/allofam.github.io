import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface BlogProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Post = ({ title, description, image, link }: BlogProps) => {
  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader className="p-0">
        <CardTitle>
          <img
            src={image}
            alt={title}
            className="w-full h-[200px] object-cover rounded-t-lg"
          />
        </CardTitle>
        <CardDescription>
          <div className="flex justify-center items-center gap-2 my-5">
            <div className="w-[100px] h-[1px] bg-light-teal" />
            <small className="text-light-teal text-sm">Blog Post</small>
            <div className="w-[100px] h-[1px] bg-light-teal" />
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h3 className="text-center text-2xl font-bold rasa">{title}</h3>
        <br />
        <p className="text-center">{description}</p>
      </CardContent>
      <CardFooter>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center px-5 py-2 rounded-lg gap-2 w-full text-teal hover:bg-gray hover:text-teal transition-all"
        >
          Read More <ChevronRight className="w-4 h-4" />
        </a>
      </CardFooter>
    </Card>
  );
};

export default Post;
