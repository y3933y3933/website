import { SOCIAL } from "@/const";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-primary">
          Hi, I'm{" "}
          <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Joanne Lin
          </span>
        </h1>
        <p className="text-xl text-muted-foreground">Frontend Developer</p>
      </div>
      <p className="text-lg text-muted-foreground leading-relaxed">
        I'm a frontend developer who enjoys building intuitive interfaces with
        React, Angular, and Tailwind CSS. <br />
      </p>
      <p className="text-lg text-muted-foreground leading-relaxed">
        Former psych major turned developer. I care about people, not just
        pixels. INFP, Gemini ♊, meme lover & casual badminton player 🏸.
      </p>

      <div className="flex flex-wrap gap-4">
        <a href="/work-experience">
          <Button size="lg" className="group">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </a>

        <a href="/cv.pdf" download="Chiao-An Lin Frontend Developer">
          <Button variant="outline" size="lg" className="text-primary">
            Download CV
          </Button>
        </a>
      </div>
      {/* Social Links */}
      <div className="flex space-x-6 pt-4">
        <a
          href={SOCIAL.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full text-primary bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
        >
          <Github size={20} />
        </a>
        <a
          href={SOCIAL.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full  text-primary bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={SOCIAL.email}
          className="p-2 rounded-full  text-primary bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  );
}
