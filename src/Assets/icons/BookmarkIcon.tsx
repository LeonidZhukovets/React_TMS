import React from "react";

export const BookmarkIcon = ({
  width = "24",
  height = "24",
  fill = "#313037",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 15C12.704 15 12.907 15.062 13.081 15.187L18.5 19.057V5C18.5 4.449 18.052 4 17.5 4H7.5C6.949 4 6.5 4.449 6.5 5V19.057L11.919 15.187C12.093 15.062 12.296 15 12.5 15ZM19.5 22C19.295 22 19.092 21.937 18.919 21.813L12.5 17.229L6.081 21.813C5.777 22.032 5.375 22.062 5.042 21.89C4.709 21.718 4.5 21.375 4.5 21V5C4.5 3.346 5.846 2 7.5 2H17.5C19.154 2 20.5 3.346 20.5 5V21C20.5 21.375 20.291 21.718 19.958 21.89C19.813 21.963 19.656 22 19.5 22Z"
        fill={fill}
      />
    </svg>
  );
};
