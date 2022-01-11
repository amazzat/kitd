import { Dictionary } from "components/Dictionary";
import { Header } from "components/Header";
import { Search } from "components/Search";
import Link from "next/link";
import { WordList } from "types";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { server } from "utils/server";
import Head from "next/head";

type ServerProps = {
  wordList?: WordList;
  message?: string;
};

type PageProps = ServerProps & {
  wordList?: WordList;
  message?: string;
};

const Home: NextPage<PageProps> = ({ wordList, message }) => {
  const router = useRouter();

  const handleQuerySubmit = (query: string) => {
    router.push(`/?search=${query}`);
  };

  return (
    <div className="min-h-screen">
      <Head>
        <title>Kazakh IT Dictionary</title>
        <meta property="og:title" content="Kazakh IT Dictionary" key="title" />
      </Head>
      <Header />
      <main className="max-w-5xl p-6 mx-auto my-18 sm:my-36">
        <h1 className="mb-1 text-xl font-bold sm:mb-2 sm:text-4xl">
          Definitions of Information Technology terms
        </h1>
        <p className="text-md sm:text-2xl text-[#3B4149] mb-8 sm:mb-10">
          in English, Russian and Kazakh languages
        </p>
        <div className="mb-2 sm:mb-4">
          <Search handleQuerySubmit={handleQuerySubmit} />
        </div>
        <small className="text-sm sm:text-md">
          <span className="text-[#C9CDD3] mr-2">Try:</span>
          <Link href="/?search=api" passHref>
            <a href="replaced" aria-label="Try word API" className="underline">
              API
            </a>
          </Link>
          {" , "}
          <Link href="/?search=kubernetes" passHref>
            <a
              href="replaced"
              aria-label="Try word Kubernetes"
              className="underline"
            >
              Kubernetes
            </a>
          </Link>
          {" , "}
          <Link href="/?search=import" passHref>
            <a
              href="replaced"
              aria-label="Try word Import"
              className="underline"
            >
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

export const getServerSideProps: GetServerSideProps<ServerProps> = async ({
  res,
  query,
}) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const { search } = query;
  try {
    let data: Response;
    if (typeof search === "string") {
      data = await fetch(`${server}/api/search?query=${search}`);
    } else {
      data = await fetch(`${server}/api/dictionary`);
    }
    let wordList = await data.json();
    return {
      props: { wordList },
    };
  } catch (error) {
    const message = "Internal server error";
    return {
      props: { message },
    };
  }
};

export default Home;
