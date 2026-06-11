export default function GrowthPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">
        佳萍的 AI 成長日記
      </h1>

      <p className="mt-6 text-lg text-gray-600">
        記錄每一次學習、每一次挑戰，
        回頭看時，會發現自己比昨天更勇敢。
      </p>
<div className="mt-10 max-w-2xl rounded-2xl border border-zinc-200 p-6">
  <h2 className="text-2xl font-bold">
    Day 4｜百鬼地鼠祭開發筆記
  </h2>

  <p className="mt-4 text-gray-600 leading-8">
    從零開始發想《百鬼地鼠祭》，結合地鼠玩法、排行榜挑戰與多種模式設計，
    一步一步將腦中的創意化為真實作品。

    在開發過程中，我學會使用 Next.js 建立網站架構、
    整合圖片素材、調整版面設計、修正錯誤訊息，
    並透過 Vercel 完成專案部署。

    原本以為寫程式離自己很遙遠，
    但透過 AI 協助，我發現只要願意嘗試，
    每個人都能把想像變成真正可以被看見、被體驗的作品。
  </p>

  <div className="mt-6 rounded-2xl border border-zinc-200 p-6">
    <h3 className="text-lg font-bold">
      🎯 本次學習收穫
    </h3>

    <ul className="mt-4 space-y-2 text-gray-600">
      <li>✅ 學會 Next.js 基本架構</li>
      <li>✅ 完成原創遊戲企劃發想</li>
      <li>✅ 整合圖片與版面設計</li>
      <li>✅ 解決圖片路徑與錯誤問題</li>
      <li>✅ 使用 Vercel 完成部署</li>
      <li>✅ 建立自己的 AI 成長作品集</li>
    </ul>
  </div>
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