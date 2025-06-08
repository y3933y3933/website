import type { Metadata, Project, SocialMap, WorkExperience } from "./types";

export const HOME: Metadata = {
  title: "首頁",
  description: "",
};

export const ABOUT: Metadata = {
  title: "關於我",
  description: "",
};

export const SOCIAL: SocialMap = {
  github: "https://github.com/y3933y3933",
  linkedin: "https://www.linkedin.com/in/hamster3933/",
  email: "mailto:y3933y3933@gmail.com",
};

export const HASHTAGS: string[] = [
  "雙子座",
  "INFP",
  "梗圖愛好者",
  "羽球",
  "Game",
];

export const EXPERIENCE: WorkExperience[] = [
  {
    title: "Frontend Developer",
    company: {
      name: "Performics",
      link: "https://taiwan.publicisgroupe.com/",
    },
    period: "2024/10 - 2024/11",
    description: "開發內部人員使用工具",
    responsibilities: [
      "使用 Google App Script 串接 Google Analytics API，開發自動化抓取 GA 資料工具。",
    ],
    technologies: ["JavaScript", "Google Analytics"],
  },
  {
    title: "Senior Frontend Developer",
    company: {
      name: "OneClass",
      link: "https://tutor.oneclass.com.tw/",
    },
    description: "開發前端新產品架構，維護既有內部平台，推動團隊技術分享",
    period: "2023/11 - 2024/10",
    responsibilities: [
      "主導 Next.js 前端新產品架構，導入 Tailwindcss 與 Shadcn/ui 加速開發流程。",
      "推動團隊內部技術文件撰寫及自主撰寫前端 on-board 文件",
      "維護既有內部 React 系統並逐步調整原架構。",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Tanstack Query",
      "Shadcn/ui",
      "Zod",
    ],
  },
  {
    title: "Frontend Developer",
    company: {
      name: "Duotify",
      link: "https://www.duotify.com/",
    },
    period: "2021/08 - 2023/11",
    description: "開發前端平台",
    responsibilities: [
      "主導 Angular 開發的前端前後台系統。",
      "擔任團隊技術窗口，與外部後端廠商、使用者、設計溝通制定需求規格。",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Angular Material",
      "HighChart.js",
      "Google Analytics",
    ],
  },
  {
    title: "Frontend Developer",
    company: {
      name: "TPIsoftware",
      link: "https://www.tpisoftware.com/",
    },
    period: "2020/08 - 2021/06",
    description: "開發前端平台",
    responsibilities: [
      "使用 Angular 開發銀行後台系統",
      "使用 Vue 2 開發公司內部投票網系統",
    ],
    technologies: ["Angular", "TypeScript", "Angular Material", "Vue"],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "OneClassNow",
    link: "https://oneclassnow.oneclass.com.tw/",
    description:
      "參與課程商品販售平台開發，負責整體前端架構設計與實作，提供使用者登入、註冊、瀏覽與購買商品功能。",
    impact: "導入 SSR 與減少 bundle size，lighthouse 評分曾達滿分",
  },
  {
    name: "基金資訊平台",
    description:
      "參與政府基金資訊系統開發，負責整體前端架構設計與實作，整合多項資料查詢功能與後台操作介面。",
    impact: "規劃共用 UI 元件庫與指令封裝，提升後續開發效率與風格一致性。",
  },
  {
    name: "基富通",
    link: "https://www.fundrich.com.tw/2022OfficialWeb/",
    description:
      "台灣最大線上基金交易平台改版案，負責實作基金資訊查訊、投資文章瀏覽等功能。",
    impact: "作為技術窗口協調前後端與客戶需求。",
  },
];
