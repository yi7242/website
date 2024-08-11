import { PiSoundcloudLogo } from "react-icons/pi";
import { ProjectCard } from "@/components/ProjectCard";
export default function Component() {
  return (
    <>
      <section className="w-full min-h-svh grid grid-cols-1 md:grid-cols-3 gap-4 py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center justify-center space-y-4">
          <img
            alt="Profile Picture"
            className="object-cover rounded-full"
            height="200"
            src="/Yiicon.jpg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <h2 className="text-2xl font-bold text-white">Yunative</h2>
          <p className="text-sm text-zinc-500">Compose/Code</p>
          <div className="flex items-center space-x-4">
            <a
              aria-label="Twitter Link"
              href="https://x.com/yi7242"
              target="_blank"
            >
              <svg
                className=" text-zinc-500"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a
              aria-label="Github Link"
              href="https://github.com/yi7242"
              target="_blank"
            >
              <svg
                className=" text-zinc-500"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              aria-label="SoundCloud Link"
              href="https://soundcloud.com/yunative"
              target="_blank"
            >
              <PiSoundcloudLogo />
            </a>
            <a
              aria-label="AtCoder Link"
              href="https://atcoder.jp/users/yi7242"
              target="_blank"
            >
              <img
                src="https://img.atcoder.jp/assets/top/img/logo_bk.svg"
                alt="AtCoder"
                width="24"
                height="24"
              />
            </a>
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-start mt-4 md:mt-0 ml-8">
          <h3 className="text-xl font-bold text-white mb-0">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-4 pr-8">
            <ProjectCard
              title="Beyond"
              date="2023/10"
              description="2023年秋M3にてComputer Societyより頒布したアルバム「NEO NEON」収録曲"
              imgpath="./neoneon_s.png"
              url="https://soundcloud.com/yunative/beyond"
              to="SoundCloud >>>"
            />
            <ProjectCard
              title="ノックする宇宙"
              date="2023/10"
              description="2023年秋M3にて楽曲制作会KMMより頒布したアルバム「Mixture Vol.2」収録　ひロせとの合作曲"
              url="https://soundcloud.com/user-220270988-135906403/yunative"
              to="SoundCloud >>>"
            />
            <ProjectCard
              title="Leap"
              date="2023/4"
              description="2023年春M3にてComputer Societyより頒布したアルバム「BLUE BLUR」収録曲"
              imgpath="./blueblur_s.png"
              url="https://soundcloud.com/yunative/leap"
              to="SoundCloud >>>"
            />
            <ProjectCard
              title="9 Keys"
              date="2020~"
              description="テンキーで遊べる音楽ゲーム"
              imgpath="./9keys_s.png"
              url="https://unityroom.com/games/9keys"
              to="Unityroomで遊ぶ >>>"
            />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 ml-8 flex flex-col gap-4">
        <div>
          <h3 className="text-2xl font-bold mb-0 underline underline-offset-4">
            Awards
          </h3>
          <div className="flex flex-col gap-4 pt-2">
            <div>
              <h4 className="font-semibold text-lg">2024/6</h4>
              <p>Googleパスキーハッカソン優勝</p>
              <p>(パスキーを使用したスマートロックの制作)</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">2024/5</h4>
              <p className="">インテル Future Tech アイデアソン最優秀賞受賞</p>
              <p>(教育支援向け課題解決支援AIの提案)</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-0 underline underline-offset-4">
            Qualification
          </h3>
          <div className="flex flex-col gap-4 pt-2">
            <div>
              <h4 className="font-semibold text-lg">2024/6</h4>
              <p>Googleパスキーハッカソン優勝</p>
              <p>(パスキーを使用したスマートロックの制作)</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">2024/5</h4>
              <p className="">インテル Future Tech アイデアソン最優秀賞受賞</p>
              <p>(教育支援向け課題解決支援AIの提案)</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
