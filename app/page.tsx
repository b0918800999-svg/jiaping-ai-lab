export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-8">
      <main className="max-w-xl">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-900">
          佳萍 AI 創作實驗室
        </h1>

        <p className="mt-8 text-lg leading-8 text-zinc-600">
          把傳統產業的經驗，轉化成 AI 的無限可能。
        </p>

        <div className="mt-10 flex gap-4">
         
         <a
  href="/growth"
  className="rounded-full border border-zinc-300 px-6 py-3"
>
  AI成長日記
</a>
<a
href="#"
className="rounded-full border border-zinc-300 px-6 py-3"
>
作品集
</a>

<a
href="#"
className="rounded-full border border-zinc-300 px-6 py-3"
>
音樂專區
</a>
        </div>
      </main>
    </div>
  );
}