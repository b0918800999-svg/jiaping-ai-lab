export default function Home() {
  const milestones = [
    "第一個網站",
    "百鬼地鼠祭",
    "55 不晚黑膠專輯",
    "時光郵局",
    "以及更多正在長大的 AI 作品",
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#fff8e7_0%,#f8ead4_32%,#fdfaf4_68%,#fffaf0_100%)] text-zinc-950">
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-7 sm:px-10 lg:px-14">
        <div className="pointer-events-none absolute -right-28 top-20 h-72 w-72 rounded-full bg-amber-200/35 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

        <header className="relative z-10 flex items-center justify-between">
          <p className="text-xs font-semibold tracking-[0.3em] text-zinc-700 sm:text-sm">
            JIAPING AI LAB
          </p>
          <div className="hidden rounded-full bg-white/55 px-4 py-2 text-sm text-zinc-500 shadow-sm ring-1 ring-white/70 sm:block">
            55歲，也可以重新開始
          </div>
        </header>

        <section className="relative z-10 grid flex-1 items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-5 w-fit rounded-full bg-white/65 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm ring-1 ring-amber-100">
              一邊學，一邊把人生做成作品
            </p>

            <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
              佳萍 AI 創作實驗室
            </h1>

            <p className="mt-8 max-w-2xl whitespace-pre-line text-xl leading-10 text-zinc-700 sm:text-2xl sm:leading-[3rem]">
              {`55歲開始學 AI，
從不懂程式到做出網站、遊戲、音樂與作品。
每一次跌倒，都是我重新出發的證明。`}
            </p>

            <a
              href="/growth"
              className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-zinc-950 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(39,27,15,0.22)] transition hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_24px_60px_rgba(39,27,15,0.28)] focus:outline-none focus:ring-4 focus:ring-amber-300 sm:px-9 sm:text-lg"
            >
              開始 AI 成長日記 →
            </a>
          </div>

          <aside className="rounded-[2rem] bg-white/70 p-5 shadow-[0_24px_70px_rgba(120,77,28,0.14)] ring-1 ring-white/80 backdrop-blur sm:p-7 lg:p-8">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 shadow-inner shadow-amber-100/60 sm:p-8">
              <p className="text-2xl font-bold leading-snug text-zinc-900 sm:text-3xl">
                目前收錄的成長足跡
              </p>

              <div className="mt-7 space-y-3">
                {milestones.map((milestone) => (
                  <div
                    key={milestone}
                    className="flex items-center gap-3 rounded-2xl bg-white/75 px-4 py-3 text-base font-medium text-zinc-700 shadow-sm ring-1 ring-amber-100/70 sm:text-lg"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.55)]" />
                    <span>{milestone}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl bg-[#fff7e8] px-5 py-4 text-base leading-8 text-zinc-600 ring-1 ring-amber-100">
                這裡不是完美履歷，而是一段把害怕、練習和好奇心慢慢收藏起來的旅程。
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
