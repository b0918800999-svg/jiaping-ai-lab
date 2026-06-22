export default function NotesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10">

      <h1 className="text-4xl font-bold">佳萍的創作筆記</h1>

     <p className="mt-3 text-gray-600">
  學會建立作品卡片，讓網站不只是練習，
  而是真正記錄自己的 AI 成長歷程。
  從標題、文字、間距到卡片版面，
  開始理解作品集要怎麼被整理、被看見。
</p>
      {/* Day1 */}
      <div className="mt-10 max-w-2xl rounded-2xl border border-zinc-200 p-8 shadow-sm">
        <h2 className="text-2xl font-bold">
          Day 1｜我的第一個網站
        </h2>

        <p className="mt-3 text-gray-600">
          今天學會建立 Next.js 專案，完成首頁、創作筆記、AI 成長日記三個頁面，
          還學會自己修正錯誤。
        </p>
      </div>

      {/* Day2 */}
      <div className="mt-6 max-w-2xl rounded-2xl border border-zinc-200 p-8 shadow-sm">
        <h2 className="text-2xl font-bold">
          Day 2｜我的第一個作品集
        </h2>

        <p className="mt-3 text-gray-600">
          學會建立作品卡片，讓網站不只是練習，而是真正記錄自己的 AI 成長歷程。
        </p>
      </div>

      {/* Day3 */}
<div className="mt-6 max-w-2xl rounded-2xl border border-zinc-200 p-8 shadow-sm">
  <p className="mb-3 text-sm font-semibold text-zinc-500">
    🎮 遊戲作品
  </p>

  <h2 className="text-2xl font-bold">
    Day 3｜百鬼地鼠祭
  </h2>

  <p className="mt-3 text-gray-600">
    打造原創手機遊戲《百鬼地鼠祭》，
    結合地鼠玩法、音效設計、排行榜與挑戰模式，
    從遊戲企劃、介面設計到網站部署，全程獨立完成。
  </p>

  <div className="mt-6">
    <a
      href="https://hyakki-survival-game.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-zinc-900 px-5 py-2 text-white"
    >
      查看作品
    </a>
  </div>
</div>

{/* Day4 */}
<div className="mt-6 max-w-2xl rounded-2xl border border-zinc-200 p-8 shadow-sm">
  <p className="mb-3 text-sm font-semibold text-zinc-500">
    🎵 音樂作品
  </p>

  <h2 className="text-2xl font-bold">
    Day 4｜55，不晚 黑膠專輯
  </h2>

  <p className="mt-3 text-gray-600">
    結合 AI 作曲、歌曲創作、
    黑膠唱片播放器與人生故事，
    打造屬於自己的音樂專輯網站。
  </p>

  <div className="mt-6">
    <a
 href="https://55-not-late.vercel.app"
 target="_blank"
 className="rounded-full bg-zinc-900 px-5 py-2 text-white"
>
 查看作品
</a>
  </div>
</div>
      {/* Day6 */}
      <div className="mt-6 max-w-2xl rounded-2xl border border-zinc-200 p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Day 6｜AI 創作實驗室正式完成
        </h2>

        <p className="mt-3 text-gray-600">
          Day 6｜AI創作實驗室正式完成

從完全不懂程式與 AI 工具，
到完成網站、遊戲、音樂專輯與作品集。

每一次卡關、每一次修改，
都成為成長路上的養分。

佳萍 AI 創作實驗室，
正式啟動。
        </p>
      </div>

      <a
        href="/"
        className="mt-10 rounded-full bg-zinc-900 px-6 py-3 text-white"
      >
        回首頁
      </a>

    </main>
  );
}