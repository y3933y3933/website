import { useState, useEffect } from "react";

interface Heading {
  id: string;
  text: string;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const els = Array.from(document.querySelectorAll("article h2[id]"));
    const items = els.map((el) => ({
      id: el.id,
      text: el.childNodes[0]?.textContent?.trim() || "",
    }));
    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-10% 0px -85% 0px" }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
        目錄
      </p>
      <ul className="space-y-2">
        {headings.map(({ id, text }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`text-sm transition-colors block ${
                activeId === id
                  ? "text-blue-600 font-medium"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
