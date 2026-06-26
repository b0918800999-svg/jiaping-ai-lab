import Image from "next/image";

const tracks = [
  "最後一通電話",
  "綠瓶聖人",
  "藍色房間的午夜",
  "深夜藍調",
  "袖上的飛蛾",
  "破碎的E調",
  "空房間",
  "鞋上的灰塵",
  "牆上的倒影",
  "我頭髮上的銀絲",
  "今晚最後一首歌",
  "最後一道聚光燈",
  "半生藍調",
];

export default function WallStreet17Page() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#3a2718_0%,#12100f_42%,#050505_100%)] px-6 py-8 text-amber-50 sm:px-10 sm:py-10">
      <section className="mx-auto max-w-6xl">
        <header className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold tracking-[0.28em] text-amber-200/80 sm:text-sm">
            JIAPING AI LAB
          </p>
          <a
            href="/"
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-amber-50 shadow-sm ring-1 ring-white/15 transition hover:-translate-y-0.5 hover:bg-white/15"
          >
            回首頁
          </a>
        </header>

        <section className="grid min-h-[calc(100vh-84px)] items-center gap-10 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div>
            <p className="mb-5 w-fit rounded-full bg-amber-300/15 px-5 py-3 text-base font-semibold text-amber-100 ring-1 ring-amber-200/20">
              17 JAZZ STREET
            </p>
            <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.8rem]">
              華爾街17號
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-10 text-amber-50/78 sm:text-2xl sm:leading-[3rem]">
              故事，從午夜開始。這是一張帶著爵士、城市夜色和人生回望的 AI
              音樂專輯。
            </p>

            <div className="mt-9 rounded-[2rem] bg-white/8 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] ring-1 ring-white/10 backdrop-blur">
              <p className="text-sm font-semibold tracking-[0.2em] text-amber-200/80">
                TRACK LIST
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {tracks.map((track, index) => (
                  <div
                    key={track}
                    className="rounded-2xl bg-black/20 px-4 py-3 text-sm text-amber-50/82 ring-1 ring-white/8"
                  >
                    {String(index + 1).padStart(2, "0")}｜{track}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-black/25 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.38)] ring-1 ring-amber-200/15">
            <Image
              src="/wall-street-17.jpg"
              alt="華爾街17號專輯封面"
              width={1600}
              height={900}
              priority
              className="aspect-[16/9] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </section>
      </section>
    </main>
  );
}
