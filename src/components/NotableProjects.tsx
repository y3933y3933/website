import { PROJECTS } from "@/const";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

export default function NotableProjects() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {PROJECTS.map((project, index) => (
        <Card
          key={index}
          className="animate-fade-in hover:shadow-lg transition-shadow duration-300"
          style={{ animationDelay: `${(index + 3) * 0.1}s` }}
        >
          <CardHeader>
            <CardTitle className="text-lg">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-b"
                >
                  {project.name}
                </a>
              )}
              {!project.link && project.name}
            </CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          {project.impact && (
            <CardContent>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p className="text-sm font-medium text-green-700 dark:text-green-300">
                  Impact: {project.impact}
                </p>
              </div>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  );
}
