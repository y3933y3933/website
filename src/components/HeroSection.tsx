import { SOCIAL } from "@/const";
import { Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-primary">
                Hi, I'm{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Joanne Lin
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Frontend Developer
              </p>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a frontend developer who enjoys building intuitive interfaces
              with React, Angular, and Tailwind CSS. <br />
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Former psych major turned developer. I care about people, not just
              pixels. INFP, Gemini ♊, meme lover & casual badminton player 🏸.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* <Link to="/portfolio">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Get In Touch
                </Button>
              </Link> */}
            </div>
            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={SOCIAL.email}
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-blue-600/20 p-2">
                <img
                  src="./cat.png"
                  alt="Joanne Lin"
                  className="w-full h-full object-cover rounded-full border-4 border-background shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                <span className="text-center text-sm">
                  Available
                  <br />
                  for hire
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
