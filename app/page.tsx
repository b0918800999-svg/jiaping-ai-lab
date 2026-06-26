import Image from "next/image";

const floatingWorks = [
  { name: "百鬼地鼠祭", position: "left-2 top-[18%] rotate-[-8deg]" },
  { name: "時光郵局", position: "right-0 top-[16%] rotate-[7deg]" },
  { name: "華爾街17號", position: "right-6 top-[44%] rotate-[-5deg]" },
  { name: "55 不晚", position: "left-0 top-[52%] rotate-[6deg]" },
  { name: "打卡系統", position: "left-10 bottom-[10%] rotate-[-4deg]" },
  { name: "楊家將物流", position: "right-3 bottom-[12%] rotate-[5deg]" },
];

const growthCards = [
  {
    icon: "🟦",
    title: "百鬼地鼠祭",
    href: "https://hyakki-survival-game.vercel.app",
    tone: "from-sky-50 to-blue-100 ring-sky-200",
  },
  {
    icon: "🟩",
    title: "55 不晚",
    href: "https://55-not-late.vercel.app",
    tone: "from-emerald-50 to-green-100 ring-emerald-200",
  },
  {
    icon: "🟪",
    title: "時光郵局",
    href: "https://time-post-office.vercel.app/",
    tone: "from-purple-50 to-violet-100 ring-violet-200",
  },
  {
    icon: "🟥",
    title: "華爾街17號",
    href: "/growth#wall-street-17",
    tone: "from-rose-50 to-red-100 ring-rose-200",
  },
  {
    icon: "⬛",
    title: "AI 運送車",
    href: "/growth#ai-truck",
    tone: "from-stone-50 to-zinc-200 ring-zinc-200",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#fffaf0_0%,#f7e8d3_42%,#fffdf8_100%)] text-zinc-950">
      <main className="mx-auto w-full max-w-7xl px-6 py-7 sm:px-10 lg:px-14">
        <header className="flex items-center justify-between">
          <p className="text-xs font-semibold tracking-[0.28em] text-zinc-700 sm:text-sm">
            JIAPING AI LAB
          </p>
          <a
            href="#growth-map"
            className="hidden rounded-full bg-white/65 px-4 py-2 text-sm font-medium text-stone-600 shadow-sm ring-1 ring-amber-100 transition hover:-translate-y-0.5 hover:text-zinc-950 sm:block"
          >
            看作品地圖
          </a>
        </header>

        <section className="grid min-h-[calc(100vh-76px)] items-center gap-10 py-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-10 lg:py-10">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-6 w-fit rounded-full bg-white/75 px-5 py-3 text-base font-semibold text-amber-900 shadow-sm ring-1 ring-amber-200 sm:text-lg">
              55 歲開始，把人生做成一件一件作品
            </p>

            <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-zinc-950 sm:text-6xl lg:text-[4.7rem]">
              佳萍 AI
              <span className="block text-stone-700">創作實驗室</span>
            </h1>

            <p className="mt-8 max-w-xl whitespace-pre-line text-xl leading-10 text-stone-700 sm:text-2xl sm:leading-[3rem]">
              {`從不懂程式，到做出網站、遊戲、音樂與 AI 作品。
每一次跌倒，都是我重新出發的證明。`}
            </p>

            <div className="mt-8 max-w-xl rounded-[1.75rem] bg-white/62 px-6 py-5 text-lg leading-9 text-stone-600 shadow-[0_18px_45px_rgba(120,77,28,0.10)] ring-1 ring-white/80">
              這裡的主角不是技術名詞，而是佳萍本人：願意學、願意試，也願意把生命慢慢變成作品。
            </div>
          </div>

          <div className="group relative mx-auto flex min-h-[520px] w-full max-w-3xl items-center justify-center sm:min-h-[640px] lg:min-h-[700px]">
            <div className="absolute inset-x-8 bottom-10 h-24 rounded-full bg-amber-900/10 blur-2xl" />
            <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/45 shadow-[0_26px_90px_rgba(120,77,28,0.14)] ring-1 ring-white/70" />

            {floatingWorks.map((work, index) => (
              <div
                key={work.name}
                className={`absolute z-20 rounded-full bg-white/80 px-4 py-2 text-sm font-bold text-stone-700 shadow-[0_14px_35px_rgba(120,77,28,0.16)] ring-1 ring-amber-100 backdrop-blur transition duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_20px_48px_rgba(120,77,28,0.22)] sm:px-5 sm:py-3 sm:text-base ${work.position}`}
                style={{ transitionDelay: `${index * 45}ms` }}
              >
                {work.name}
              </div>
            ))}

            <Image
              src="/jiaping-chibi.png"
              alt="Q 版佳萍拿著筆電、黑膠唱片、遊戲與 AI 作品"
              width={1536}
              height={1024}
              priority
              className="relative z-10 w-full max-w-[760px] drop-shadow-[0_28px_45px_rgba(88,55,24,0.18)] transition duration-500 group-hover:scale-[1.025]"
            />
          </div>
        </section>

        <section id="growth-map" className="scroll-mt-8 pb-16 pt-8 sm:pb-24">
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-amber-700">
                WORK ENTRANCE
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl">
                主要作品入口
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-stone-600">
              首頁先放最重要的作品入口；完整整理和正在補上的作品，放在作品展示牆裡。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {growthCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  card.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className={`group min-h-48 rounded-[1.75rem] bg-gradient-to-br ${card.tone} p-5 shadow-[0_18px_46px_rgba(120,77,28,0.11)] ring-1 transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_60px_rgba(120,77,28,0.18)]`}
              >
                <div className="text-3xl">{card.icon}</div>
                <h3 className="mt-8 text-2xl font-black text-zinc-950">
                  {card.title}
                </h3>
                <p className="mt-5 text-sm font-semibold text-stone-600 transition group-hover:translate-x-1">
                  點進去看看 →
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
