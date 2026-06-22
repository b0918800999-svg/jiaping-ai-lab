export default function GrowthPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-zinc-100 px-6 py-12 text-zinc-900">
      <section className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold tracking-[0.3em] text-amber-600">
          JIAPING AI LAB
        </p>

        <h1 className="mt-4 text-5xl font-black leading-tight">
          佳萍的 AI 成長日記
        </h1>

        <p className="mt-6 text-xl leading-loose text-zinc-600">
          從不會寫程式開始，一步一步學會使用 AI、網站、遊戲、音樂與部署工具。
          這裡記錄的不是完美，而是每一次跌倒後，還願意繼續往前走的自己。
        </p>

        <div className="mt-10 space-y-6">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Day 1｜我的第一個網站</h2>
            <p className="mt-4 leading-loose text-zinc-600">
              第一次建立 Next.js 專案，完成首頁、創作筆記與 AI 成長日記。
              從看不懂程式碼，到學會自己修改錯誤，這是我真正開始的第一步。
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Day 2｜我的第一個作品集</h2>
            <p className="mt-4 leading-loose text-zinc-600">
              學會建立作品卡片，讓網站不只是練習，而是真正記錄自己的 AI 成長歷程。
              從標題、文字、間距到卡片版面，開始理解作品集要怎麼被整理、被看見。
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold text-zinc-500">🎮 遊戲作品</p>
            <h2 className="mt-3 text-2xl font-bold">Day 3｜百鬼地鼠祭</h2>
            <p className="mt-4 leading-loose text-zinc-600">
              打造原創手機遊戲《百鬼地鼠祭》，結合地鼠玩法、音效設計、排行榜與挑戰模式，
              從遊戲企劃、介面設計到網站部署，全程獨立完成。
            </p>
            <a
              href="https://hyakki-survival-game.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-zinc-900 px-6 py-3 text-white"
            >
              查看作品
            </a>
          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-sm">
            <p className="text-sm font-semibold text-amber-700">🎵 音樂作品</p>
            <h2 className="mt-3 text-2xl font-bold">Day 4｜55，不晚 黑膠專輯</h2>
            <p className="mt-4 leading-loose text-zinc-700">
              結合 AI 作曲、歌曲創作、黑膠唱片播放器與人生故事，
              打造屬於自己的音樂專輯網站。55 歲不是結束，而是重新學著飛的開始。
            </p>
            <a
              href="https://55-not-late.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-zinc-900 px-6 py-3 text-white"
            >
              查看作品
            </a>
          </div>

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Day 5｜作品集優化</h2>
            <p className="mt-4 leading-loose text-zinc-700">
              學習整理作品架構，將百鬼地鼠祭、55 不晚黑膠專輯與 AI 成長筆記，
              整合成個人作品集，開始建立屬於自己的 AI 品牌與創作歷程。
            </p>
          </div>

          <div className="rounded-3xl border border-sky-200 bg-sky-50 p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Day 6｜AI 創作實驗室正式完成</h2>
            <p className="mt-4 leading-loose text-zinc-700">
              從完全不懂程式與 AI 工具，到完成網站、遊戲、音樂專輯與作品集。
              每一次卡關、每一次修改，都成為成長路上的養分。
              佳萍 AI 創作實驗室，正式啟動。
            </p>
          </div>
        </div>

        <a
          href="/"
          className="mt-10 inline-block rounded-full bg-zinc-900 px-6 py-3 text-white"
        >
          回首頁
        </a>
      </section>
    </main>
  );
}