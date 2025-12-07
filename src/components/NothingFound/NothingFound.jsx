import React from 'react';

class NothingFound extends React.Component {
  render() {
    return (
      <div className="flex flex-col grow self-center max-w-[700px] w-full justify-center items-center m-3 opacity-40">
        <p className="text-white text-lg">Nothing found</p>
        <svg
          className="w-[45px]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 -0.5 25 25"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M5.5 11.493a6.5 6.5 0 1 1 13 .015 6.5 6.5 0 0 1-13-.015"
            clipRule="evenodd"
          />
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="m16.062 16.568 3.438 3.425"
          />
          <path
            fill="#ce1b1bff"
            d="M10.53 8.963a.75.75 0 1 0-1.06 1.06zm.94 3.06a.75.75 0 1 0 1.06-1.06zm1.06-1.06a.75.75 0 1 0-1.06 1.06zm.94 3.06a.75.75 0 1 0 1.06-1.06zm-.94-2a.75.75 0 0 0-1.06-1.06zm-3.06.94a.75.75 0 0 0 1.06 1.06zm2-2a.75.75 0 0 0 1.06 1.06zm3.06-.94a.75.75 0 0 0-1.06-1.06zm-5.06 0 2 2 1.06-1.06-2-2zm2 2 2 2 1.06-1.06-2-2zm0-1.06-2 2 1.06 1.06 2-2zm1.06 1.06 2-2-1.06-1.06-2 2z"
          />
        </svg>
      </div>
    );
  }
}

export { NothingFound };
