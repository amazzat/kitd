import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { Dictionary } from "types";

type Props = {
  dictionary: Dictionary | null;
};

const Home: NextPage<Props> = ({ dictionary }) => {
  const screen_debugger =
    process.env.NODE_ENV === "development" ? "debug-screens" : "";

  return (
    <main className={`${screen_debugger}`}>
      <header className="flex justify-around items-center py-4 bg-[#2B2F35] text-white font-mono mb-16 sm:mb-[200px] ">
        <Link href="/" passHref>
          <a>aiti[sozdik]</a>
        </Link>
        <Link href="https://github.com/amazzat" passHref>
          <a>
            <span className="hidden sm:inline">
              created by Azamat Zulpykhar
            </span>
            <span className="inline sm:hidden">
              <svg
                className="w-6 h-6"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49936 0.850006C3.82767 0.850006 0.849976 3.8273 0.849976 7.50023C0.849976 10.4379 2.75523 12.9306 5.39775 13.8104C5.73047 13.8712 5.85171 13.6658 5.85171 13.4895C5.85171 13.3315 5.846 12.9135 5.84273 12.3587C3.99301 12.7604 3.60273 11.4671 3.60273 11.4671C3.30022 10.6988 2.86423 10.4942 2.86423 10.4942C2.26044 10.0819 2.90995 10.0901 2.90995 10.0901C3.57742 10.137 3.9285 10.7755 3.9285 10.7755C4.52167 11.7916 5.48512 11.4981 5.86396 11.3279C5.92438 10.8984 6.09625 10.6053 6.28608 10.4391C4.80948 10.2709 3.25695 9.70063 3.25695 7.15241C3.25695 6.42615 3.51618 5.83298 3.94157 5.368C3.87299 5.1998 3.64478 4.52375 4.00689 3.60807C4.00689 3.60807 4.56494 3.42926 5.83538 4.28941C6.36568 4.14204 6.93477 4.06856 7.50018 4.0657C8.06518 4.06856 8.63386 4.14204 9.16498 4.28941C10.4346 3.42926 10.9918 3.60807 10.9918 3.60807C11.3548 4.52375 11.1266 5.1998 11.0584 5.368C11.4846 5.83298 11.7418 6.42615 11.7418 7.15241C11.7418 9.70716 10.1868 10.2693 8.70571 10.4338C8.94412 10.6392 9.15681 11.045 9.15681 11.6655C9.15681 12.5542 9.14865 13.2715 9.14865 13.4895C9.14865 13.6675 9.26867 13.8745 9.60588 13.8095C12.2464 12.9282 14.15 10.4375 14.15 7.50023C14.15 3.8273 11.1723 0.850006 7.49936 0.850006Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
        </Link>
      </header>
      <div className="flex flex-col max-w-5xl px-4 mx-auto ">
        <h1 className="mb-3 text-xl font-bold sm:text-4xl">
          Definitions of Information Technology terms
        </h1>
        <p className="text-md sm:text-2xl text-[#3B4149] mb-8 sm:mb-14">
          in English, Russian and Kazakh languages
        </p>
        <div className="flex mb-6">
          <input
            type="search"
            name=""
            id=""
            className="flex-auto px-3 sm:px-6  placeholder:text-[#C9CDD3] text-sm rounded-l sm:text-base"
            placeholder="Enter or paste the word"
          />
          <button
            type="submit"
            className="sm:px-[52px]  px-6 sm:py-3 py-2 bg-[#2B2F35] rounded-r text-white"
          >
            <span className="hidden sm:inline">Search</span>
            <span className="sm:hidden ">
              <svg
                className="w-6 h-6"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <small className="text-xs sm:text-sm mb-16 sm:mb-[120px]">
          <span className="text-[#C9CDD3] mr-2">Try: </span>
          <Link href="/" passHref>
            <a className="underline">API</a>
          </Link>
          {" , "}
          <Link href="/" passHref>
            <a href="" className="underline">
              Kubernetes
            </a>
          </Link>
          {" , "}
          <Link href="/" passHref>
            <a href="" className="underline">
              Import
            </a>
          </Link>
        </small>
      </div>
      <div className="max-w-5xl px-4 mx-auto ">
        <ol className="text-[#2B2F35] space-y-9 mb-16 sm:mb-[120px]">
          {dictionary?.map((word, index, array) => (
            <li key={word.id}>
              <div className="mb-5 text-lg font-medium lowercase sm:text-2xl sm:mb-9">
                {word.title_eng}/{word.title_rus}/{word.title_kaz}
              </div>
              <ol className="mb-5 space-y-3 text-xs sm:space-y-6 sm:text-base sm:mb-9">
                <li>
                  <span className="mr-1 font-semibold sm:mr-2">
                    🇺🇸 English:
                  </span>
                  {word.def_eng}
                </li>
                <li>
                  <span className="mr-1 font-semibold sm:mr-2">
                    🇷🇺 Русский:
                  </span>
                  {word.def_rus}
                </li>
                <li>
                  <span className="mr-1 font-semibold sm:mr-2">
                    🇰🇿 Қазақша:
                  </span>
                  {word.def_kaz}
                </li>
              </ol>
              {index < array.length - 1 ? (
                <hr className="border-[#E9EDF2] rounded-sm" />
              ) : (
                ""
              )}
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data: Response = await fetch("http://localhost:3000/api/dictionary");
    const dictionary = await data.json();
    return {
      props: { dictionary },
      revalidate: 60,
    };
  } catch (error) {}
  return {
    props: {},
  };
};

export default Home;
