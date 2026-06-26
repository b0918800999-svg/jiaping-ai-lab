export default function Home() {
  const milestones = [
    {
      title: "第一個網站",
      note: "把不會寫程式的害怕，變成可以被看見的第一步。",
    },
    {
      title: "百鬼地鼠祭",
      note: "第一次把遊戲想像、玩法和部署真的做出來。",
    },
    {
      title: "55 不晚黑膠專輯",
      note: "用音樂留下重新開始的聲音。",
    },
    {
      title: "時光郵局",
      note: "把故事、回憶和 AI 創作寄給未來。",
    },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#fffaf0_0%,#f8ead7_44%,#fffdf8_100%)] text-zinc-950">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-7 sm:px-10 lg:px-14">
        <header className="flex items-center justify-between">
          <p className="text-xs font-semibold tracking-[0.28em] text-zinc-700 sm:text-sm">
            JIAPING AI LAB
          </p>
          <div className="hidden rounded-full bg-white/60 px-4 py-2 text-sm text-stone-600 shadow-sm ring-1 ring-amber-100 sm:block">
            55歲開始，也很美
          </div>
        </header>

        <section className="grid flex-1 items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:py-18">
          <div className="max-w-3xl">
            <p className="mb-6 w-fit rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm ring-1 ring-amber-100">
              一邊學，一邊把人生慢慢做成作品
            </p>

            <h1 className="max-w-2xl text-5xl font-black leading-[1.12] tracking-tight text-zinc-950 sm:text-6xl lg:text-[4.8rem]">
              佳萍 AI
              <span className="block text-stone-700">創作實驗室</span>
            </h1>

            <p className="mt-8 max-w-2xl whitespace-pre-line text-xl leading-10 text-stone-700 sm:text-2xl sm:leading-[3rem]">
              {`55歲開始學 AI，
從不懂程式到做出網站、遊戲、音樂與作品。
每一次跌倒，都是我重新出發的證明。`}
            </p>

            <div className="mt-8 max-w-xl rounded-[1.75rem] bg-white/62 px-6 py-5 text-lg leading-9 text-stone-600 shadow-[0_18px_45px_rgba(120,77,28,0.10)] ring-1 ring-white/80">
              我不是從一開始就會，而是願意一次又一次打開電腦，慢慢把想做的事變成真的。
            </div>

            <a
              href="/growth"
              className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-zinc-950 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(39,27,15,0.22)] transition hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_24px_60px_rgba(39,27,15,0.28)] focus:outline-none focus:ring-4 focus:ring-amber-300 sm:px-9 sm:text-lg"
            >
              開始 AI 成長日記 →
            </a>
          </div>

          <aside className="space-y-5">
            <div className="rounded-[2rem] bg-white/72 p-7 shadow-[0_24px_70px_rgba(120,77,28,0.13)] ring-1 ring-white/85 sm:p-8">
              <p className="text-sm font-medium tracking-[0.18em] text-amber-700">
                成長足跡
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-snug text-zinc-900 sm:text-4xl">
                目前收錄的成長足跡
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-600">
                每一個作品，都不是成績單，而是一段「我真的做到了」的紀念。
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.title}
                  className="rounded-[1.5rem] bg-white/68 p-5 shadow-[0_16px_42px_rgba(120,77,28,0.10)] ring-1 ring-amber-100/80"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-800 ring-1 ring-amber-200">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-stone-600">
                        {milestone.note}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[1.5rem] bg-[#fff6e6]/80 px-6 py-5 text-base leading-8 text-stone-700 shadow-sm ring-1 ring-amber-100">
              以及更多正在長大的 AI 作品，還在路上，也正在發光。
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
