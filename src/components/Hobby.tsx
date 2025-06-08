import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const hobbies = [
  {
    title: "羽球",
    description: "從大學開始打羽球，是我最熱衷的運動。",
    icon: "🏸",
  },
  {
    title: "迷因",
    description: "收集、創作、轉發各種無厘頭的迷因。",
    icon: "😆",
  },
  {
    title: "遊戲",
    description:
      "熱愛各種類型的遊戲，平台不限於手遊、PC、Switch，如：傳說對決、刺客教條、薩爾達傳說。",
    icon: "🎮",
  },
  {
    title: "寫作",
    description: "最近開始嘗試撰寫技術文章，喜歡用文字整理資訊。",
    icon: "✍️",
  },
];

export default function Hobby() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">
        Beyond Code
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {hobbies.map((hobby, index) => (
          <Card
            key={hobby.title}
            className="animate-fade-in hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{hobby.icon}</div>
                <div>
                  <CardTitle className="text-xl">{hobby.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-left">
                {hobby.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
