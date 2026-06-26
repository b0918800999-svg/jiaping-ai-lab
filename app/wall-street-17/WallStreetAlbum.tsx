"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const tracks = [
  {
    no: "01",
    title: "最後一通電話",
    audio: "/wall-street-17/tracks/01-last-call.mp3",
    cover: "/wall-street-17/covers/01-last-call.jpg",
  },
  {
    no: "02",
    title: "綠瓶聖人",
    audio: "/wall-street-17/tracks/02-green-bottle-saint.mp3",
    cover: "/wall-street-17/covers/02-green-bottle-saint.jpg",
  },
  {
    no: "03",
    title: "藍色房間的午夜",
    audio: "/wall-street-17/tracks/03-blue-room-midnight.mp3",
    cover: "/wall-street-17/covers/03-blue-room-midnight.jpg",
  },
  {
    no: "04",
    title: "深夜藍調",
    audio: "/wall-street-17/tracks/04-late-night-blues.mp3",
    cover: "/wall-street-17/covers/04-late-night-blues.jpg",
  },
  {
    no: "05",
    title: "袖上的飛蛾",
    audio: "/wall-street-17/tracks/05-moth-on-sleeve.mp3",
    cover: "/wall-street-17/covers/05-moth-on-sleeve.jpg",
  },
  {
    no: "06",
    title: "破碎的E調",
    audio: "/wall-street-17/tracks/06-broken-e.mp3",
    cover: "/wall-street-17/covers/06-broken-e.jpg",
  },
  {
    no: "07",
    title: "空房間",
    audio: "/wall-street-17/tracks/07-empty-room.mp3",
    cover: "/wall-street-17/covers/07-empty-room.jpg",
  },
  {
    no: "08",
    title: "鞋上的灰塵",
    audio: "/wall-street-17/tracks/08-dust-on-shoes.mp3",
    cover: "/wall-street-17/covers/08-dust-on-shoes.jpg",
  },
  {
    no: "09",
    title: "牆上的倒影",
    audio: "/wall-street-17/tracks/09-shadow-on-wall.mp3",
    cover: "/wall-street-17/covers/09-shadow-on-wall.jpg",
  },
  {
    no: "10",
    title: "我頭髮上的銀絲",
    audio: "/wall-street-17/tracks/10-silver-in-my-hair.mp3",
    cover: "/wall-street-17/covers/10-silver-in-my-hair.jpg",
  },
  {
    no: "11",
    title: "今晚最後一首歌",
    audio: "/wall-street-17/tracks/11-last-song-tonight.mp3",
    cover: "/wall-street-17/covers/11-last-song-tonight.jpg",
  },
  {
    no: "12",
    title: "最後一道聚光燈",
    audio: "/wall-street-17/tracks/12-last-spotlight.mp3",
    cover: "/wall-street-17/covers/12-last-spotlight.jpg",
  },
  {
    no: "13",
    title: "半生藍調",
    audio: "/wall-street-17/tracks/13-half-life-blues.mp3",
    cover: "/wall-street-17/covers/13-half-life-blues.jpg",
  },
];

export default function WallStreetAlbum() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTrack = tracks[activeIndex];
  const trackCount = useMemo(() => tracks.length, []);

  return (
    <section className="grid min-h-[calc(100vh-84px)] gap-10 py-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:gap-12">
      <div>
        <p className="mb-5 w-fit rounded-full bg-amber-300/15 px-5 py-3 text-base font-semibold text-amber-100 ring-1 ring-amber-200/20">
          17 JAZZ STREET
        </p>
        <h1 className="text-5xl font-black leading-[1.08] tracking-tight sm:text-6xl lg:text-[4.8rem]">
          華爾街17號
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-10 text-amber-50/78">
          故事，從午夜開始。點一首歌，讓爵士、城市夜色和人生回望慢慢播放。
        </p>

        <div className="mt-8 overflow-hidden rounded-[2rem] bg-black/30 shadow-[0_30px_90px_rgba(0,0,0,0.38)] ring-1 ring-amber-200/15">
          <Image
            src={activeTrack.cover}
            alt={`${activeTrack.title} 專輯封面`}
            width={1200}
            height={1200}
            priority
            className="aspect-square w-full object-cover"
          />
          <div className="bg-black/45 p-5 backdrop-blur">
            <p className="text-sm font-semibold tracking-[0.2em] text-amber-200/75">
              NOW PLAYING
            </p>
            <h2 className="mt-2 text-3xl font-black text-amber-50">
              {activeTrack.no}｜{activeTrack.title}
            </h2>
            <audio
              key={activeTrack.audio}
              controls
              className="mt-5 w-full"
              src={activeTrack.audio}
            >
              您的瀏覽器不支援音樂播放。
            </audio>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] bg-white/8 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] ring-1 ring-white/10 backdrop-blur sm:p-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-amber-200/80">
              TRACK LIST
            </p>
            <h2 className="mt-2 text-3xl font-black text-amber-50">
              點歌播放
            </h2>
          </div>
          <p className="text-sm text-amber-50/55">{trackCount} 首</p>
        </div>

        <div className="mt-6 grid gap-3">
          {tracks.map((track, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={track.audio}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex min-h-20 w-full items-center gap-4 rounded-2xl p-3 text-left transition ${
                  isActive
                    ? "bg-amber-200 text-zinc-950 shadow-[0_16px_35px_rgba(251,191,36,0.18)]"
                    : "bg-black/24 text-amber-50/82 ring-1 ring-white/8 hover:-translate-y-0.5 hover:bg-white/12"
                }`}
              >
                <Image
                  src={track.cover}
                  alt={`${track.title} 封面`}
                  width={96}
                  height={96}
                  className="h-14 w-14 shrink-0 rounded-xl object-cover"
                />
                <span className="text-sm font-bold opacity-70">{track.no}</span>
                <span className="text-lg font-black">{track.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
