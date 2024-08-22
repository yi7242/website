export default function Component() {
  return (
    <>
      <section className="py-12 md:py-24 lg:py-32 ml-12 flex flex-col gap-10">
        <h1 className="text-5xl font-bold">音楽</h1>
        <div>
          <h3 className="text-2xl font-bold mb-0 underline underline-offset-4">
            Playlists
          </h3>
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            height="450"
            style={{
              width: "100%",
              maxWidth: "660px",
              overflow: "hidden",
              border: "0"
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/jp/playlist/%E3%81%8A%E6%B0%97%E3%81%AB%E5%85%A5%E3%82%8A/pl.u-PDb40YBseDz7Jq3"
          ></iframe>
          {/* <div className="flex flex-col gap-4 pt-2">
            <div>
              <h4 className="font-semibold text-lg">やってること</h4>
              <ul className="list-inside list-disc">
                <li>三味線</li>
                <li>作曲</li>
                <li>競プロ</li>
                <li>その他開発色々...</li>
              </ul>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
