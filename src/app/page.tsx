import { PiSoundcloudLogo } from "react-icons/pi";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5SoOTbnPGHP
 */
import Link from "next/link";

export default function Component() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 py-12 md:py-24 lg:py-32 bg-white dark:bg-black">
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
        <h2 className="text-2xl font-bold text-black dark:text-white">
          Yunative
        </h2>
        <p className="text-sm text-zinc-400 dark:text-zinc-500">Compose/Code</p>
        <div className="flex items-center space-x-4">
          <a
            aria-label="Twitter Link"
            href="https://x.com/yi7242"
            target="_blank"
          >
            <svg
              className=" text-zinc-400 dark:text-zinc-500"
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
              className=" text-zinc-400 dark:text-zinc-500"
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
        {/* <div className="flex items-center mt-4">
          <p className="text-sm text-zinc-400 dark:text-zinc-500 mr-2">
            Switch to:
          </p>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input className="hidden" type="checkbox" />
              <div className="toggle__line w-10 h-4 bg-zinc-200 rounded-full shadow-inner" />
              <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0" />
            </div>
            <div className="ml-3 text-sm font-medium text-zinc-400 dark:text-zinc-500">
              <p className="text-sm">Music</p>
            </div>
          </label>
        </div> */}
      </div>
      <div className="col-span-2 flex flex-col items-start space-y-4 mt-4 md:mt-0 ml-8">
        <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
          Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <p>Work In Progress...</p>
          {/* <div className="w-full rounded-lg shadow-md bg-zinc-800 dark:bg-white p-4">
            <Link
              className="text-sm text-zinc-400 dark:text-zinc-500 underline"
              href="#"
            >
              Project 1
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
