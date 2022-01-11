import { WordList } from "types";

type Props = {
  wordList: WordList | null;
};

const Dictionary: React.FC<Props> = ({ wordList }) => {
  return (
    <ol className="text-[#2B2F35] sm:space-y-9 space-y-5">
      {wordList?.map((word, index, array) => (
        <li key={word.id} className="space-y-5 sm:space-y-9">
          <div className="text-lg font-medium lowercase sm:text-2xl">
            {word.title_eng}/{word.title_rus}/{word.title_kaz}
          </div>
          <ol className="space-y-3 text-xs sm:space-y-6 sm:text-base ">
            <li>
              <span className="mr-1 font-semibold sm:mr-2">🇺🇸 English:</span>
              {word.def_eng}
            </li>
            <li>
              <span className="mr-1 font-semibold sm:mr-2">🇷🇺 Русский:</span>
              {word.def_rus}
            </li>
            <li>
              <span className="mr-1 font-semibold sm:mr-2">🇰🇿 Қазақша:</span>
              {word.def_kaz}
            </li>
          </ol>
          {index < array.length - 1 && (
            <hr className="border-[#E9EDF2] rounded-sm" />
          )}
        </li>
      ))}
    </ol>
  );
};

export { Dictionary };