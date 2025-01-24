import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";
import Image from "next/image";

interface Review {
    name: string;
    username: string;
    body: string;
    img: string;
  }
  
  interface MarqueeDemoProps {
    reviews: Review[];
  }
  
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-mono dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-mono dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
export function MarqueeDemo({ reviews }: MarqueeDemoProps) {
    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);
  
    return (
      <div className=" font-mono relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-transparent md:shadow-xl">
        <h1 className="text-4xl md:text-5xl font-mono text-green-400 p-1">Student Reviews</h1>
        <p className=" font-mono text-red-200 mb-4">Exciting reviews by the Students</p>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className=" font-mono pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    );
  }
  