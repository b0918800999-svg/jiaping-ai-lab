import WallStreetAlbum from "./WallStreetAlbum";

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

        <WallStreetAlbum />
      </section>
    </main>
  );
}
