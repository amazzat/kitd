import { ChangeEvent, FC, FormEvent, useRef, useState } from "react";

type Props = {
  onQuerySubmit?: (query: string) => any;
  onQueryChange?: (query: string) => any;
  defaultQuery?: string;
};

const Search: FC<Props> = ({ onQueryChange, onQuerySubmit, defaultQuery }) => {
  const [query, setQuery] = useState<string>(defaultQuery || "");

  const disabled = query.length <= 0;

  const inputRef = useRef<HTMLInputElement>(null);
  const blurInput = () => inputRef.current?.blur();

  const handleQuerySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    blurInput();
    onQuerySubmit && onQuerySubmit(query);
  };

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onQueryChange && onQueryChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Іздеу
      </label>
      <form className="flex" onSubmit={handleQuerySubmit}>
        <input
          ref={inputRef}
          type="search"
          name="search"
          id="search"
          required
          value={query}
          onChange={handleQueryChange}
          className="flex-auto px-3 sm:px-6 placeholder:text-[#C9CDD3] text-sm rounded-l sm:text-base"
          placeholder="Enter the word"
        />
        <button
          disabled={disabled}
          aria-label="Search button"
          type="submit"
          className="sm:px-12 disabled:cursor-not-allowed disabled:opacity-80  px-6 sm:py-3 py-2 bg-[#2B2F35] rounded-r text-white hover:opacity-95 transition-opacity duration-75"
        >
          <span className="hidden sm:inline">Іздеу</span>
          <span className="sm:hidden">
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
      </form>
    </div>
  );
};

export { Search };
