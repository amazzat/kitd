type Word = {
  id: string;
  title_eng: string;
  title_ru: string;
  title_kz: string;
  def_kz: string;
  link: string;
};

type WordList = Word[];

type SearchResults = WordList | "NOQUERY";

export type { WordList, Word, SearchResults };
