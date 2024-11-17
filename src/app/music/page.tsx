import { AppleMusicPlaylist } from "@/components/AppleMusicPlaylist";

import { Youtube } from "@/components/Youtube";
import Link from "next/link";
export default function Component() {
  return (
    <>
      <section className="py-12 md:py-24 lg:py-32 ml-12 flex flex-col gap-10">
        <h1 className="text-5xl font-bold">音楽</h1>
        <div>
          <h3 className="text-2xl font-bold mb-0 underline underline-offset-4">
            10選
          </h3>
          <p>
            ガチで好きだったり自分に影響を与えた曲を10曲選んでみました。他にも色々好きな曲があるので↓のプレイリストもご覧あれ。
          </p>
          <div className="flex flex-col gap-4 pt-4">
            <Youtube src="https://www.youtube.com/embed/u7gRr5MAp1c?si=o9UFyCcP8G6lkSRr" />
            <Youtube src="https://www.youtube.com/embed/3r2kB4RQqVk?si=RxYYWO35iMzc0aCO" />
            <Youtube src="https://www.youtube.com/embed/cUtOgwdJNUE?si=ZYey1nCXu30C__JG" />
            <Youtube src="https://www.youtube.com/embed/5mTLvjYGgM4?si=Dq8cBxEiAnwFLdss" />
            <Youtube src="https://www.youtube.com/embed/ASid-gfUyyM?si=1xd3qR0IK30I_mNU" />
            <Youtube src="https://www.youtube.com/embed/tpc9wH_JPfk?si=ciZ4Jv3wacokAQ2C" />
            <iframe
              width="100%"
              height="300"
              style={{ maxWidth: "660px" }}
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/327253921&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <Youtube src="https://www.youtube.com/embed/mPpI6UwAseo?si=sG3gIieb7awNvMe4" />
            <Youtube src="https://www.youtube.com/embed/4RiT4xPgRZo?si=q4joufbD_98xP8rk" />
            <Youtube src="https://www.youtube.com/embed/4a6oeXjh8-E?si=40LHu0zHvmR_aMDo" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-0 underline underline-offset-4">
            Playlists (Apple Music)
          </h3>
          <div className="flex flex-col gap-4 pt-4">
            <AppleMusicPlaylist src="https://embed.music.apple.com/jp/playlist/%E5%8E%B3%E9%81%B8/pl.u-Zmblx9WcVeaEZBX" />
            <AppleMusicPlaylist src="https://embed.music.apple.com/jp/playlist/%E3%81%8A%E6%B0%97%E3%81%AB%E5%85%A5%E3%82%8A/pl.u-PDb40YBseDz7Jq3" />
          </div>
        </div>
      </section>
    </>
  );
}
