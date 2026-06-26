export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f1e7] text-zinc-950">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-10 lg:px-14">
        <header className="flex items-center justify-between border-b border-black/10 pb-5">
          <p className="text-xs font-semibold tracking-[0.32em] text-zinc-700 sm:text-sm">
            JIAPING AI LAB
          </p>
          <div className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_24px_rgba(245,158,11,0.75)]" />
        </header>

        <section className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="mb-5 w-fit border border-amber-300/70 bg-white/45 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-amber-800">
              AI PERSONAL BRAND
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.08] tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
              佳萍 AI 創作實驗室
            </h1>

            <p className="mt-8 max-w-2xl whitespace-pre-line text-xl leading-10 text-zinc-700 sm:text-2xl sm:leading-[3rem]">
              {`55歲開始學 AI。
從完全不會寫程式，
到打造自己的網站、遊戲、音樂與 AI 作品。
這裡記錄的不是完美，
而是每一次跌倒後，還願意繼續往前走的自己。`}
            </p>

            <a
              href="/growth"
              className="mt-11 inline-flex min-h-14 items-center justify-center bg-zinc-950 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(24,24,27,0.22)] transition hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_22px_55px_rgba(24,24,27,0.28)] focus:outline-none focus:ring-4 focus:ring-amber-300 sm:px-9 sm:text-lg"
            >
              開始 AI 成長日記 →
            </a>
          </div>

          <aside className="relative border border-black/10 bg-[#fbf8f1]/80 p-6 shadow-[0_28px_80px_rgba(24,24,27,0.10)] sm:p-8 lg:p-10">
            <div className="absolute right-6 top-6 h-14 w-14 border border-amber-300 bg-amber-100/70" />
            <p className="text-sm font-semibold tracking-[0.28em] text-amber-700">
              目前收錄
            </p>
            <p className="mt-20 text-2xl font-semibold leading-relaxed text-zinc-900 sm:text-3xl">
              第一個網站、百鬼地鼠祭、55 不晚黑膠專輯，以及每一次 AI
              創作路上的練習與突破。
            </p>
            <div className="mt-10 h-px bg-gradient-to-r from-amber-400 via-zinc-900 to-transparent" />
            <p className="mt-6 text-sm leading-7 text-zinc-600">
              A living archive of courage, practice, and creative independence.
            </p>
          </aside>
        </section>
      </main>
    </div>
  );
}
