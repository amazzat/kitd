import { useCallback, useEffect, useRef, useState } from "react";
import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Fuse from "fuse.js";
import { api } from "utils/api";
import { Search, SearchableWordList } from "components";
import { SearchResults, Word, WordList } from "types";

type Props = {
  wordList: WordList | null;
  message: string | null;
};

const Home: NextPage<Props> = ({ wordList }) => {
  const fuseRef = useRef<Fuse<Word> | null>(null);
  const [searchList, setSearchList] = useState<SearchResults>("NOQUERY");

  const onQueryChange = useCallback(
    (query: string) => {
      if (query.length > 0) {
        if (fuseRef.current) {
          const results = fuseRef.current.search(query);
          setSearchList(results.map((result) => result.item));
        }
      } else {
        setSearchList("NOQUERY");
      }
    },
    [fuseRef]
  );

  useEffect(() => {
    if (wordList) {
      fuseRef.current = new Fuse(wordList, {
        keys: [
          { name: "title_eng", weight: 2 },
          { name: "title_ru", weight: 2 },
          { name: "title_kz", weight: 2 },
          { name: "def_kz", weight: 2 },
        ],
      });
    }
  }, [wordList]);

  return (
    <div>
      <Head>
        <title>Kazakh IT Dictionary</title>
      </Head>
      <main className="max-w-5xl p-6 mx-auto my-18 sm:my-36">
        <h1 className="mb-1 text-xl font-bold sm:mb-2 sm:text-4xl">
          Ақпараттық технологиялар саласындағы терминдердің анықтамалары
        </h1>
        <p className="text-md sm:text-2xl text-[#3B4149] mb-8 sm:mb-10">
          Ағылшын, орыс және қазақ тілдерінде
        </p>
        <div className="mb-2 sm:mb-4">
          <Search onQueryChange={onQueryChange} />
        </div>
        <small className="text-sm sm:text-md">
          <span className="mr-2">Try:</span>
          <Link href="#search" passHref>
            <a href="replaced" aria-label="Try word API" className="underline">
              API
            </a>
          </Link>
          {" , "}
          <Link href="#search" passHref>
            <a
              href="replaced"
              aria-label="Try word virus"
              className="underline"
            >
              Virus
            </a>
          </Link>
          {" , "}
          <Link href="#search" passHref>
            <a href="replaced" aria-label="Try word IP" className="underline">
              IP
            </a>
          </Link>
        </small>
        <div className="mt-10 sm:mt-16">
          <SearchableWordList wordList={wordList} searchList={searchList} />
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  let wordList: WordList | null = null;
  let message: string | null = null;
  try {
    wordList = await api<WordList>("dictionary");
  } catch (error) {
    message = "Something went wrong";
  } finally {
    return {
      props: { wordList, message },
    };
  }
};

export default Home;
