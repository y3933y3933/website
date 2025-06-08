export type Metadata = {
  title: string;
  description: string;
};

type Social = "github" | "linkedin" | "email";

export type SocialMap = Record<Social, string>;

export type WorkExperience = {
  title: string;
  company: { name: string; link: string };
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

export type Project = {
  name: string;
  link?: string;
  description: string;
  impact?: string;
};
