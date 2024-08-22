import { AppleMusicPlaylist } from "@/components/AppleMusicPlaylist";
export default function Component() {
  return (
    <>
      <section className="py-12 md:py-24 lg:py-32 ml-12 flex flex-col gap-10">
        <h1 className="text-5xl font-bold">音楽</h1>
        <div>
          <h3 className="text-2xl font-bold mb-0 underline underline-offset-4">
            Playlists (Apple Music)
          </h3>
          <div className="flex flex-col gap-4 pt-4">
            <AppleMusicPlaylist src="https://embed.music.apple.com/jp/playlist/%E5%8E%B3%E9%81%B8/pl.u-Zmblx9WcVeaEZBX"/>
            <AppleMusicPlaylist src="https://embed.music.apple.com/jp/playlist/%E3%81%8A%E6%B0%97%E3%81%AB%E5%85%A5%E3%82%8A/pl.u-PDb40YBseDz7Jq3"/>
          </div>
        </div>
      </section>
    </>
  );
}
