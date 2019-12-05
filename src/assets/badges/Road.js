import React from 'react';
import Svg, {Circle, Rect, Path} from 'react-native-svg';

const SvgComponent = ({disabled}) =>
  disabled ? (
    <Svg width={50} height={50} fill="none" opacity="0.3">
      <Circle cx={25} cy={25} r={25} fill="#B7B7B7" />
      <Circle cx={25} cy={25} r={23} fill="#2E2E2E" />
      <Rect
        x={18.333}
        y={10.333}
        width={13.4}
        height={29.271}
        rx={6.7}
        fill="#5C5C5C"
      />
      <Path
        fill="#D9D9D9"
        d="M24.285 12.733h1.497v4.319h-1.497zM24.285 19.4h1.497v4.319h-1.497zM24.285 26.067h1.497v4.319h-1.497zM24.285 32.886h1.497v4.319h-1.497z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.267 49.071c2.134.593 4.384.91 6.707.91 13.807 0 25-11.193 25-25 0-6.99-2.87-13.31-7.494-17.848L18.267 49.071z"
        fill="#fff"
        fillOpacity={0.1}
      />
    </Svg>
  ) : (
    <Svg width={50} height={50} fill="none">
      <Circle cx={25} cy={25} r={25} fill="#CD7F32" />
      <Circle
        cx={25}
        cy={25}
        r={18}
        fill="#33333F"
        stroke="#33333F"
        strokeWidth={10}
      />
      <Rect
        x={18.333}
        y={10.333}
        width={13.4}
        height={29.271}
        rx={6.7}
        fill="#5C5C5C"
      />
      <Path
        fill="#D9D9D9"
        d="M24.285 12.733h1.497v4.319h-1.497zM24.285 19.4h1.497v4.319h-1.497zM24.285 26.067h1.497v4.319h-1.497zM24.285 32.886h1.497v4.319h-1.497z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.267 49.071c2.134.593 4.384.91 6.707.91 13.807 0 25-11.193 25-25 0-6.99-2.87-13.31-7.494-17.848L18.267 49.071z"
        fill="#fff"
        fillOpacity={0.1}
      />
    </Svg>
  );

export default SvgComponent;
