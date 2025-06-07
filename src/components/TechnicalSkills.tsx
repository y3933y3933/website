import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import ReactIcon from "./ui/icons/react";
import AngularIcon from "./ui/icons/angular";
import JavaScriptIcon from "./ui/icons/javascript";
import TypeScriptIcon from "./ui/icons/typescript";
import TailwindCssIcon from "./ui/icons/tailwindcss";
import RxJSIcon from "./ui/icons/rxjs";
import HTMLIcon from "./ui/icons/html";
import CSSIcon from "./ui/icons/css";

const frontendSkills = [
  { name: "React", icon: ReactIcon },
  { name: "Angular", icon: AngularIcon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "TailwindCSS", icon: TailwindCssIcon },
  { name: "RxJS", icon: RxJSIcon },
  { name: "HTML5", icon: HTMLIcon },
  { name: "CSS3", icon: CSSIcon },
];

export default function TechnicalSkills() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl text-primary font-bold text-center mb-12">
        Technical Skills
      </h2>
      <div className="space-y-8">
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl text-left">
              Frontend Development
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {frontendSkills.map((Item) => (
              <div
                key={Item.name}
                className="rounded-full  border border-border gap-x-2 flex py-2 px-3 items-center "
              >
                <Item.icon className="w-4 h-4" />
                <span className="text-xs text-primary font-semibold">
                  {Item.name}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
