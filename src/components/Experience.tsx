import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { EXPERIENCE } from "@/const";

export default function Experience() {
  return (
    <div className="space-y-8">
      {EXPERIENCE.map((exp, index) => (
        <Card
          key={index}
          className="animate-fade-in hover:shadow-lg transition-shadow duration-300"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle className="text-xl">{exp.title}</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">
                  <a
                    href={exp.company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:border-b"
                  >
                    {exp.company.name}
                  </a>
                </CardDescription>
              </div>
              <Badge variant="outline" className="w-fit">
                {exp.period}
              </Badge>
            </div>
            <p className="text-muted-foreground mt-2">{exp.description}</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
