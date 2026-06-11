export default function NotesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold">佳萍的創作筆記</h1>

      <p className="mt-6 max-w-xl text-lg text-gray-600">
        這裡記錄每一次學習、每一次突破，未來回頭看，都會感謝今天努力的自己。
      </p>

      <div className="mt-10 max-w-xl rounded-2xl border border-zinc-200 p-8">
        <h2 className="text-2xl font-bold">Day 1｜我的第一個網站</h2>
        <p className="mt-3 text-gray-600">
          今天學會建立 Next.js 專案，完成首頁、創作筆記、AI成長日記三個頁面，還學會自己修正錯誤。
        </p>
      </div>

      <div className="mt-6 max-w-xl rounded-2xl border border-zinc-200 p-8">
        <h2 className="text-2xl font-bold">Day 2｜我的第一個作品集</h2>
        <p className="mt-3 text-gray-600">
          學會建立作品卡片，讓網站不只是練習，而是真正記錄自己的AI成長歷程。
        </p>
      </div>

      <div className="mt-6 max-w-xl rounded-2xl border border-zinc-200 p-8 shadow-sm">
        <p className="mb-3 text-sm font-semibold text-zinc-500">🎮 遊戲作品</p>

        <h2 className="text-2xl font-bold">Day 3｜百鬼地鼠祭</h2>

        <img
  src="/hyakki_festival.png"
  alt="百鬼地鼠祭"
  className="mt-5 w-80 rounded-2xl border mx-auto"
/>

        <p className="mt-3 text-gray-600">
         打造原創手機遊戲《百鬼地鼠祭》，
結合地鼠玩法、音效設計、排行榜與挑戰模式，
從遊戲企劃、介面設計到網站部署，全程獨立完成。
        </p>

        <div className="mt-6 flex gap-3">
          <a
  href="https://hyakki-survival-game.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-zinc-900 px-5 py-2 text-sm text-white"
>
  查看作品
</a>

          <a href="/notes" className="rounded-full border border-zinc-300 px-5 py-2 text-sm">
            開發筆記
          </a>
        </div>
      </div>

      <a href="/" className="mt-10 rounded-full bg-zinc-900 px-6 py-3 text-white">
        回首頁
      </a>
    </main>
  );
}