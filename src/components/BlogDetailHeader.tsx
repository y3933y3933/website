import type { Post } from "@/types";
import { Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "./ui/badge";

interface BlogDetailHeaderProps {
  title: string;
  pubDate: Date;
  description: string;
  tags: string[];
}

export default function BlogDetailHeader({
  title,
  pubDate,
  description,
  tags,
}: BlogDetailHeaderProps) {
  return (
    <header className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center text-muted-foreground text-sm">
          <Calendar className="mr-1 h-4 w-4" />
          {new Date(pubDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        {/* <div className="flex items-center text-muted-foreground text-sm">
          <Clock className="mr-1 h-4 w-4" />
          {post.readTime}
        </div> */}
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-primary">
        {title}
      </h1>

      <p className="text-xl text-muted-foreground mb-6">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              <Tag className="mr-1 h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </header>
  );
}
