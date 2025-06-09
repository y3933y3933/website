import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { SOCIAL } from "@/const";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: SOCIAL.email.split(":")[1],
    link: SOCIAL.email,
  },

  {
    icon: MapPin,
    label: "Location",
    value: "Taiwan, Taipei",
    link: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    url: SOCIAL.github,
    color: "hover:text-gray-900 dark:hover:text-gray-100",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: SOCIAL.linkedin,
    color: "hover:text-blue-600",
  },
  {
    icon: Mail,
    label: "Email",
    url: SOCIAL.email,
    color: "hover:text-green-600",
  },
];

export default function ContactInfo() {
  return (
    <div
      className="space-y-8 animate-fade-in"
      style={{ animationDelay: "0.1s" }}
    >
      {/* Contact Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Contact Information</CardTitle>
          <CardDescription>
            Prefer to reach out directly? Here are my contact details.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactInfo.map((info, index) => (
            <div key={info.label} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <info.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">{info.label}</p>
                <a
                  href={info.link}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {info.value}
                </a>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Social Links */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Connect With Me</CardTitle>
          <CardDescription>
            Follow me on social media for updates and insights.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-200 ${social.color}`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
