import { Dictionary } from "components/Dictionary";
import { Header } from "components/Header";
import { Search } from "components/Search";
import Link from "next/link";
import { WordList } from "types";
import type { GetStaticProps, NextPage } from "next";

type Props = {
  wordList: WordList | null;
  message: string;
};

const Home: NextPage<Props> = ({ wordList, message }) => {
  return (
    <div className="min-h-screen debug-screens">
      <Header />
      <main className="max-w-5xl p-6 mx-auto mt-18 sm:mt-36">
        <h1 className="mb-1 text-xl font-bold sm:mb-2 sm:text-4xl">
          Definitions of Information Technology terms
        </h1>
        <p className="text-md sm:text-2xl text-[#3B4149] mb-8 sm:mb-10">
          in English, Russian and Kazakh languages
        </p>
        <div className="mb-2 sm:mb-4">
          <Search />
        </div>
        <small className="text-sm sm:text-md">
          <span className="text-[#C9CDD3] mr-2">Try:</span>
          <Link href="/search?word=api" passHref>
            <a aria-label="Try word API" className="underline">
              API
            </a>
          </Link>
          {" , "}
          <Link href="/search?word=kubernetes" passHref>
            <a aria-label="Try word Kubernetes" className="underline">
              Kubernetes
            </a>
          </Link>
          {" , "}
          <Link href="/search?word=import" passHref>
            <a aria-label="Try word Import" className="underline">
              Import
            </a>
          </Link>
        </small>
        {wordList && (
          <div className="mt-10 sm:mt-16 ">
            <Dictionary wordList={wordList} />
          </div>
        )}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data: Response = await fetch("http://localhost:3000/api/dictionary");
    const dictionary = await data.json();
    return {
      props: { dictionary },
      revalidate: 60 * 10, // 10 min revalidation
    };
  } catch (error) {
    console.warn(error);
    const message = "Internal server error";
    return {
      props: { message },
    };
  }
};

export default Home;
