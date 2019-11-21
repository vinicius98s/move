import React from 'react';
import PropTypes from 'prop-types';
import {withTheme} from 'styled-components';
import Svg, {G, Circle, Path} from 'react-native-svg';

function Logo({theme, width, height}) {
  return (
    <Svg height={height} width={width} viewBox="0 0 1411.41 1409">
      <G>
        <G>
          <Circle
            cx={170.22}
            cy={697.27}
            r={169.74}
            fill={theme.colors.green}
          />
          <Circle
            cx={170.22}
            cy={1239.26}
            r={169.74}
            fill={theme.colors.green}
          />
          <Circle
            cx={711.25}
            cy={1239.26}
            r={169.74}
            fill={theme.colors.lightGrey}
          />
          <Circle
            cx={711.25}
            cy={169.74}
            r={169.74}
            fill={theme.colors.lightGrey}
          />
          <Circle
            cx={1240.71}
            cy={1239.26}
            r={169.74}
            fill={theme.colors.green}
          />
          <Circle
            cx={1237.82}
            cy={697.27}
            r={169.74}
            fill={theme.colors.green}
          />
          <Path
            fill={theme.colors.green}
            d="M1069.05 171.66c-108.19 259.1-341 351.08-367 360.78-25.84-9.69-254.21-101.44-362.59-359.66v-.63a169.74 169.74 0 10-169.72 169.73h.62c20.46 8.87 322.41 143.23 362.48 363.12v.48a172.15 172.15 0 10344.29 0 175.5 175.5 0 00-1.26-20.88c53.57-205.45 331.85-331.29 357.19-342.38 2.38.1 4.77.16 7.17.16a171.18 171.18 0 10-171.18-171.18z"
          />
        </G>
      </G>
    </Svg>
  );
}

Logo.defaultProps = {
  width: 50,
  height: 50,
};

Logo.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default withTheme(Logo);
