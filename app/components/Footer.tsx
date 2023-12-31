import Link from "next/link";
import { AiOutlineGithub, AiOutlineMail, AiOutlineHome } from "react-icons/ai";
import { MdRssFeed } from "react-icons/md";

export default function Footer() {
  const style = { color: "#4b5563" };
  return (
    <footer className="mt-10 max-w-[650px] max-sm:max-w-[90%] mx-auto  bottom-0 bg-gray-200 rounded-lg shadow m-4">
      <div className="max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center">
          © 2023 JeongJeSon . Developed with NextJS
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li className="md:ml-5">
            <Link href="/">
              <AiOutlineHome size={20} style={style} />
            </Link>
          </li>
          <li className="ml-5">
            <a href="https://jeongje.vercel.app/feed.xml" target="_blank">
              <MdRssFeed size={20} style={style} />
            </a>
          </li>
          <li className="ml-5">
            <a href="mailto:jeongjeson656@gmail.com">
              <AiOutlineMail size={20} style={style} />
            </a>
          </li>
          <li className="ml-5">
            <a href="https://github.com/Jeong-Je" target="_blank">
              <AiOutlineGithub size={20} style={style} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
