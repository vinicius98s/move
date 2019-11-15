import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {withTheme} from 'styled-components';
import Svg, {Path, Ellipse} from 'react-native-svg';

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

const Background = ({theme, color, logoDetail = true}) => {
  const {height, width} = Dimensions.get('window');

  return (
    <Svg width={width} height={height} fill="none" style={style.container}>
      <Path d="M0 0h520v350H0V0z" fill={color || theme.colors.darkBlue} />
      <Path d="M0 344h360v296H0V344z" fill={theme.colors.white} />
      {logoDetail && (
        <Path
          d="M108.272 707.887C121.754 723.014 140.315 732.677 160.458 735.053C180.602 737.429 200.935 732.355 217.626 720.787C234.318 709.219 246.214 691.956 251.072 672.252C255.931 652.549 253.416 631.765 244.003 613.818L244.855 613.893C184.93 487.49 236.357 375.077 248.548 351.618C273.5 341.019 384.095 301.517 501.599 374.677C513.308 384.22 527.406 390.381 542.375 392.498C557.345 394.615 572.617 392.608 586.548 386.691C600.478 380.775 612.538 371.175 621.429 358.925C630.32 346.674 635.704 332.238 637.002 317.172C638.3 302.106 635.462 286.981 628.794 273.425C622.126 259.87 611.881 248.399 599.162 240.248C586.444 232.097 571.734 227.575 556.617 227.169C541.5 226.763 526.55 230.489 513.377 237.944C513.377 237.944 381.651 309.914 255.027 233.26C240.749 216.496 220.383 206.103 198.407 204.369C176.431 202.635 154.647 209.701 137.846 224.013C121.046 238.325 110.605 258.71 108.821 280.684C107.037 302.657 114.056 324.42 128.333 341.184L128.2 341.177C184.096 463.033 119.542 578.255 106.873 598.905C93.9293 614.219 86.943 633.679 87.2001 653.703C87.4572 673.728 94.9403 692.97 108.272 707.887Z"
          fill="black"
          fillOpacity="0.04"
          transform="translate(-200, 120)"
        />
      )}
      <Ellipse cx={200} cy={340} rx={226} ry={42.5} fill={theme.colors.white} />
    </Svg>
  );
};

Background.defaultProps = {
  logoDetail: true,
};

Background.propTypes = {
  theme: PropTypes.object,
  color: PropTypes.string,
  logoDetail: PropTypes.bool,
};

export default withTheme(Background);
