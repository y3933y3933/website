import { HASHTAGS } from "@/const";

export default function PersonalStory() {
  return (
    <div className="animate-fade-in">
      <div className="space-y-4 text-muted-foreground">
        <p className="text-left">
          嗨，我是傑尼安，一名前端工程師，寫過 React 和 Angular，喜歡 Tailwind
          CSS 勝過於 Styled Component，不能活在沒有 TypeScript 的 JS 世界。
        </p>
        <p className="text-left">
          畢業於台大心理系，大四修了兩門程式設計相關的課：《Java 程式設計》與
          《前端程式設計》，因緣際會下開啟了前端開發之路。
        </p>
        <p className="text-left">
          比起自己埋頭苦幹寫 code
          ，更喜歡成為團隊貢獻者，認為溝通與理解是比技術更重要的能力，期許自己能成為技術與溝通兼具的工程師。
        </p>
        <p className="text-left">
          蓋洛普測驗的 Top 5
          依序是：Developer、Positivity、Adaptability、Empathy、Relator
        </p>

        <div className="flex flex-wrap gap-2">
          {HASHTAGS.map((tag) => (
            <span className="inline-block px-2 py-1 text-sm font-medium rounded-full bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
