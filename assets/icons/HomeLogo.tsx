import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent({ focused, ...props }) {
  return (
    <Svg
      aria-label="Home"
      className="_ab6-"
      color="#262626"
      fill="#262626"
      height={28}
      viewBox="0 0 24 24"
      width={28}
      {...props}>
      <Path
        d="M9.005 16.545a2.997 2.997 0 012.997-2.997A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
        fill={focused ? "black" : "none"}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default SvgComponent;
