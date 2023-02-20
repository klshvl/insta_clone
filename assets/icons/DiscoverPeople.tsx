import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={16}
      viewBox="0 0 25 19"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5.25a4.75 4.75 0 110 9.5 4.75 4.75 0 010-9.5zM5.743 5.398A.75.75 0 005 4.75l-.102.007-.097.02a.75.75 0 00-.551.723v2.75H1.5l-.102.007A.75.75 0 00.75 9l.007.102a.75.75 0 00.743.648h2.75v2.75l.007.102A.75.75 0 005 13.25l.102-.007a.75.75 0 00.648-.743V9.75H8.5l.102-.007A.75.75 0 009.25 9l-.007-.102A.75.75 0 008.5 8.25H5.75V5.5l-.007-.102zM14 11.25l-.216.004A5.25 5.25 0 008.75 16.5v.75l.007.102a.75.75 0 001.493-.102v-.75l.005-.2A3.75 3.75 0 0114 12.75h5l.2.005a3.75 3.75 0 013.55 3.745v.75l.007.102a.75.75 0 001.493-.102v-.75l-.004-.216A5.25 5.25 0 0019 11.25h-5zM13.25 5a3.25 3.25 0 116.5 0 3.25 3.25 0 01-6.5 0z"
        fill="#262626"
      />
    </Svg>
  );
}

export default SvgComponent;
