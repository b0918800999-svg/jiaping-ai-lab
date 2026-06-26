export default function AiTruckPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#fffaf0_0%,#f7e8d3_42%,#fffdf8_100%)] px-6 py-8 text-zinc-950 sm:px-10 sm:py-10">
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-4xl flex-col">
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

        <div className="flex flex-1 items-center py-20">
          <div className="w-full rounded-[2rem] bg-white/68 p-8 text-center shadow-[0_24px_70px_rgba(120,77,28,0.13)] ring-1 ring-white/85 sm:p-12">
            <p className="mx-auto mb-6 w-fit rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white">
              AI 運送車
            </p>
            <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
              整理中
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-10 text-stone-600">
              這個作品正在重新整理。等內容準備好後，這裡會變成 AI
              運送車自己的獨立頁面。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
