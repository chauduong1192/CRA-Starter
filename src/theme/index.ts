import { css } from 'styled-components';

const flexboxgrid = {
  // Defaults
  gridSize: 12, // columns
  gutterWidth: 1, // rem
  outerMargin: 2, // rem
  mediaQuery: 'only screen',
  container: {
    sm: 46, // rem
    md: 61, // rem
    lg: 76  // rem
  },
  breakpoints: {
    sm: 48, // 768px
    md: 64, // 1024px
    lg: 75  // 1200px
  }
};

const { breakpoints: { sm , md, lg} } = flexboxgrid;

const devices = {
  tablet: sm,
  desktop: md,
  largeDesktop: lg,
};

export const mediaQueries = Object.keys(devices).reduce((acc, label) => {
  const lastCss: any = css;
  acc[label] = (...args) => lastCss`
      @media (min-width: ${devices[label]}) {
          ${lastCss(...args)};
      }
  `;
  return acc;
}, {});

const fonts = {
    hel: 'HelveticaNeue',
};

const colors = {
    black: '#333333',
    white: '#000000'
};

export default {
    fonts,
    colors,
    flexboxgrid,
    breakpoints: [sm, md, lg],
}