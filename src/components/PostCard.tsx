import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import type { Post } from "@/types";

export default function PostCard({ post }: { post: Post }) {
  const url = `/blog/${post.id}`;

  return (
    <a href={url}>
      <Card
        className="hover:shadow-lg transition-shadow duration-300 cursor-pointer animate-fade-in h-full "
        //   style={{ animationDelay: `${index * 0.1}s` }}
      >
        <CardHeader>
          <CardTitle className="line-clamp-2">{post.data.title}</CardTitle>
          <CardDescription className="line-clamp-3">
            {post.data.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.data.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            {new Date(post.data.pubDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </CardContent>
      </Card>
    </a>
  );
}
