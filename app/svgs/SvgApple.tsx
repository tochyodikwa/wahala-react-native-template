import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.0318 0C33.3495 2.80956 32.1842 5.63152 30.4556 7.65927L30.4568 7.65802C28.7269 9.68701 25.89 11.263 23.1103 11.0546C22.7318 8.30085 24.1341 5.42924 25.7374 3.6348C27.5244 1.6083 30.5387 0.0967956 33.0318 0ZM43.322 35.1845C43.015 35.0639 36.7559 32.6043 36.6877 25.4846C36.6318 19.5408 41.5941 16.6198 42.0194 16.3694C42.0283 16.3642 42.0352 16.3601 42.04 16.3572C39.13 12.231 34.5979 11.6651 32.9847 11.5993C30.6245 11.3678 28.3349 12.2425 26.4656 12.9566C25.2792 13.4098 24.262 13.7983 23.5037 13.7983C22.6568 13.7983 21.6105 13.3965 20.4366 12.9456C18.8996 12.3553 17.1438 11.681 15.3306 11.7148C11.125 11.7731 7.25192 14.0813 5.08395 17.726C0.719455 25.0651 3.96955 35.936 8.22236 41.8927C10.3035 44.804 12.7842 48.0839 16.0405 47.9647C17.4976 47.9088 18.5336 47.4817 19.6048 47.04C20.8408 46.5304 22.1236 46.0015 24.1539 46.0015C26.0939 46.0015 27.3201 46.5152 28.499 47.0091C29.6247 47.4807 30.7073 47.9343 32.327 47.9052C35.7011 47.8443 37.8431 44.933 39.908 42.0118C42.228 38.7255 43.2226 35.5424 43.3264 35.2104C43.3294 35.2009 43.3316 35.1937 43.3331 35.1889C43.3317 35.1883 43.328 35.1869 43.322 35.1845Z"
        fill="black"
      />
    </Svg>
  );
}

const SvgApple = React.memo(SvgComponent);
export default SvgApple;