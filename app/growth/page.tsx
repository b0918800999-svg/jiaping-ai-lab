import Image from "next/image";

const works = [
  {
    id: "first-site",
    emoji: "🟨",
    title: "第一個網站",
    category: "網站作品",
    description:
      "從看不懂程式碼開始，第一次把自己的首頁、作品與故事放上網路。",
    href: "/",
    action: "回到首頁",
    tone: "from-amber-50 to-yellow-100 border-amber-200",
  },
  {
    id: "hyakki",
    emoji: "🟦",
    title: "百鬼地鼠祭",
    category: "遊戲作品",
    description:
      "原創手機遊戲，結合地鼠玩法、挑戰模式與佳萍式的華麗祭典感。",
    href: "https://hyakki-survival-game.vercel.app",
    action: "查看作品",
    tone: "from-sky-50 to-blue-100 border-sky-200",
  },
  {
    id: "not-late",
    emoji: "🟩",
    title: "55 不晚",
    category: "黑膠專輯",
    description:
      "用 AI 音樂、黑膠播放器與人生故事，記錄 55 歲重新開始的聲音。",
    href: "https://55-not-late.vercel.app",
    action: "查看專輯",
    tone: "from-emerald-50 to-green-100 border-emerald-200",
  },
  {
    id: "time-post",
    emoji: "🟪",
    title: "時光郵局",
    category: "故事作品",
    description:
      "把回憶、祝福和想說的話寄給未來，像一間收藏人生片段的郵局。",
    href: "https://time-post-office.vercel.app/",
    action: "查看作品",
    tone: "from-purple-50 to-violet-100 border-violet-200",
  },
  {
    id: "wall-street-17",
    emoji: "🟥",
    title: "華爾街17號",
    category: "音樂專輯",
    description:
      "新的音樂故事作品，延伸佳萍的 AI 音樂宇宙，也讓作品牆更完整。",
    cover: "/wall-street-17.jpg",
    href: "#wall-street-17",
    action: "專輯整理中",
    tone: "from-rose-50 to-red-100 border-rose-200",
  },
  {
    id: "ai-truck",
    emoji: "⬛",
    title: "AI 運送車",
    category: "系統作品",
    description:
      "把物流、打卡、管理與 AI 想像整理成可以繼續擴充的作品方向。",
    href: "#ai-truck",
    action: "整理中",
    tone: "from-stone-50 to-zinc-200 border-zinc-200",
  },
];

export default function GrowthPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#fffaf0_0%,#f7e8d3_42%,#fffdf8_100%)] px-6 py-8 text-zinc-950 sm:px-10 sm:py-10">
      <section className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold tracking-[0.28em] text-zinc-700 sm:text-sm">
            JIAPING AI LAB
          </p>
          <a
            href="/"
            className="rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm ring-1 ring-amber-100 transition hover:-translate-y-0.5 hover:text-zinc-950"
          >
            回首頁
          </a>
        </header>

        <div className="py-14 sm:py-18">
          <p className="mb-5 w-fit rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm ring-1 ring-amber-100">
            佳萍做出來的作品，都在這裡
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl">
            佳萍 AI 作品展示牆
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-10 text-stone-700">
            這一頁不再只是日記，而是把已完成和正在整理的作品放在一起，
            讓每一個作品都有自己的位置。
          </p>
        </div>

        <div className="grid gap-5 pb-16 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <article
              id={work.id}
              key={work.id}
              className={`scroll-mt-8 rounded-[2rem] border bg-gradient-to-br ${work.tone} p-6 shadow-[0_18px_46px_rgba(120,77,28,0.11)]`}
            >
              {"cover" in work && work.cover ? (
                <div className="mb-6 overflow-hidden rounded-[1.5rem] bg-black/5 shadow-sm">
                  <Image
                    src={work.cover}
                    alt={`${work.title} 專輯封面`}
                    width={1600}
                    height={900}
                    className="aspect-[16/9] w-full object-cover"
                  />
                </div>
              ) : null}
              <div className="text-4xl">{work.emoji}</div>
              <p className="mt-8 text-sm font-semibold tracking-[0.16em] text-stone-500">
                {work.category}
              </p>
              <h2 className="mt-3 text-3xl font-black text-zinc-950">
                {work.title}
              </h2>
              <p className="mt-4 min-h-24 text-base leading-8 text-stone-700">
                {work.description}
              </p>
              <a
                href={work.href}
                target={work.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  work.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="mt-7 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(39,27,15,0.18)] transition hover:-translate-y-0.5 hover:bg-black"
              >
                {work.action} →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
