export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-zinc-100 text-zinc-900">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-8 py-16">
        <p className="mb-5 text-sm font-semibold tracking-[0.35em] text-amber-700">
          JIAPING AI LAB
        </p>

        <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">
          佳萍 AI 創作實驗室
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-600">
          55 歲開始學 AI。從完全不會寫程式，到打造自己的網站、遊戲、音樂與 AI 作品。
          這裡記錄的不是完美，而是每一次跌倒後，還願意繼續往前走的自己。
        </p>

        <a
          href="/growth"
          className="mt-12 inline-flex w-fit rounded-full bg-zinc-900 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
        >
          開始 AI 成長日記
        </a>

        <div className="mt-16 rounded-3xl border border-amber-200 bg-white/70 p-6 shadow-sm">
          <p className="text-sm font-semibold text-amber-700">目前收錄</p>
          <p className="mt-3 text-lg leading-8 text-zinc-700">
            第一個網站、百鬼地鼠祭、55 不晚黑膠專輯，以及每一次 AI 創作路上的練習與突破。
          </p>
        </div>
      </main>
    </div>
  );
}