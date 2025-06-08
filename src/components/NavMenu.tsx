import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Work Experience", path: "/work-experience" },
  { name: "About", path: "/about" },
];

interface Props {
  mobile?: boolean;
}

export default function NavMenu({ mobile = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const renderLink = (item: (typeof navItems)[0]) => (
    <a
      key={item.path}
      href={item.path}
      onClick={() => mobile && setIsOpen(false)}
      className={clsx(
        mobile ? "block" : "",
        "transition-colors duration-200 hover:text-primary",
        currentPath === item.path
          ? "text-primary font-medium"
          : "text-muted-foreground"
      )}
    >
      {item.name}
    </a>
  );

  if (!mobile) {
    return <div className="flex gap-x-8">{navItems.map(renderLink)}</div>;
  }

  return (
    <>
      <button className="p-2 text-primary" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border animate-fade-in">
          <div className="px-4 py-4 space-y-4">{navItems.map(renderLink)}</div>
        </div>
      )}
    </>
  );
}
