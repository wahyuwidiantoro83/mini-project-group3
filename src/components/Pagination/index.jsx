import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const Pagination = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currPage, setCurrPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    const total = Math.ceil(props.totalData / 8);
    if (total < 1) {
      setTotalPage(1);
    } else {
      setTotalPage(total);
    }
    if (searchParams.get("page")) {
      setCurrPage(parseInt(searchParams.get("page")));
    }
  }, [props.totalData]);

  const nextPage = () => {
    setSearchParams((params) => {
      params.set("page", currPage + 1);
      return params;
    });
    setCurrPage(currPage + 1);
  };
  const prevPage = () => {
    setSearchParams((params) => {
      params.set("page", currPage - 1);
      return params;
    });
    setCurrPage(currPage - 1);
  };

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-600">
        Page <span className="font-semibold text-gray-900">{currPage}</span> of{" "}
        <span className="font-semibold text-gray-900">{totalPage}</span>
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-800 border-2 border-gray-700 rounded-l hover:bg-gray-200 disabled:border-gray-300 disabled:text-gray-300"
          onClick={() => {
            prevPage();
          }}
          disabled={currPage <= 1 ? true : false}
        >
          <svg
            className="w-3.5 h-3.5 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Prev
        </button>
        <button
          className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-800 border-2 border-gray-700 rounded-r hover:bg-gray-200  disabled:border-gray-300 disabled:text-gray-300"
          onClick={() => {
            nextPage();
          }}
          disabled={currPage >= totalPage ? true : false}
        >
          Next
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
