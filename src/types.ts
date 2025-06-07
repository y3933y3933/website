export type Metadata = {
  title: string;
  description: string;
};

type Social = "github" | "linkedin" | "email";

export type SocialMap = Record<Social, string>;
