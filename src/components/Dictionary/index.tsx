import { FC } from "react";
import { WordList } from "types";

type Props = {
  wordList: WordList | null;
};

const Dictionary: FC<Props> = ({ wordList }) => {
  return (
    <ol className="text-[#2B2F35] sm:space-y-9 space-y-5">
      {wordList?.map((word, index, array) => (
        <li key={word.id} className="space-y-2 sm:space-y-4">
          <div className="text-lg font-medium lowercase sm:text-2xl">
            {word.title_eng && `${word.title_eng} / `}
            {word.title_ru && `${word.title_ru} / `}
            {word.title_kz && `${word.title_kz}`}
          </div>
          <div className="text-base sm:text-lg">
            <span className="mr-1 font-semibold sm:mr-2">🇰🇿 Қазақша:</span>
            {word.def_kz}
          </div>
          {index < array.length - 1 && (
            <hr className="border-[#E9EDF2] rounded-sm" />
          )}
        </li>
      ))}
    </ol>
  );
};

export { Dictionary };
