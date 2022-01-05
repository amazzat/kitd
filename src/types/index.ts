type Word = {
  id: string;
  title_eng: string;
  title_rus: string;
  title_kaz: string;
  def_eng: string;
  def_rus: string;
  def_kaz: string;
};

type Dictionary = Word[];

export type { Dictionary };
