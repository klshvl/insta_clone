import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {
  focused: boolean;
}

function SvgComponent({ focused, ...props }: Props) {
  return (
    <>
      {focused ? (
        <Svg
          aria-label="Search"
          className="_ab6-"
          color="#262626"
          fill="#262626"
          height={28}
          viewBox="0 0 24 24"
          width={28}
          {...props}>
          <Path
            d="M18.5 10.5a8 8 0 11-8-8 8 8 0 018 8z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
          />
          <Path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M16.511 16.511L21.643 21.643"
          />
        </Svg>
      ) : (
        <Svg
          aria-label="Search"
          className="_ab6-"
          color="#262626"
          fill="#262626"
          height={28}
          viewBox="0 0 24 24"
          width={28}
          {...props}>
          <Path
            d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
          <Path
            fill="black"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16.511 16.511L22 22"
          />
        </Svg>
      )}
    </>
  );
}

export default SvgComponent;
