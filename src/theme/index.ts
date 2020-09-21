import { css, DefaultTheme } from 'styled-components';

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

const { breakpoints: { sm , md, lg } }  = flexboxgrid;

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

export const fonts: DefaultTheme['fonts'] = {
  regular: 'font-family: "CircularStdBook"; font-weight: normal;',
  medium: 'font-family: "CircularStdMedium"; font-weight: normal;',
  bold: 'font-family: "CircularStdBold"; font-weight: normal;',
  black: 'font-family: "CircularStdBlack"; font-weight: normal;',
};

export const fontSizes: DefaultTheme['fontSizes'] = {
  font12: 'font-size: 12px;',
  font14: 'font-size: 14px;',
  font16: 'font-size: 16px;',
  font24: 'font-size: 24px;',
};


export const colors: DefaultTheme['colors'] = {
  primary: '#0052cc',
  white: '#ffffff',
  bgWhite: '#F9FAFC',
  gray: '#5E6C84',
};

export const mixin = {
  // darken: (colorValue, amount) =>
  //   Color(colorValue)
  //     .darken(amount)
  //     .string(),
  // lighten: (colorValue, amount) =>
  //   Color(colorValue)
  //     .lighten(amount)
  //     .string(),
  // rgba: (colorValue, opacity) =>
  //   Color(colorValue)
  //     .alpha(opacity)
  //     .string(),
  boxShadowMedium: css`
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  `,
  boxShadowDropdown: css`
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.31) 0px 0px 1px;
  `,
  truncateText: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  hardwareAccelerate: css`
    transform: translateZ(0);
  `,
  cover: css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `,
  placeholderColor: colorValue => css`
    ::-webkit-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    ::-moz-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
    :-ms-input-placeholder {
      color: ${colorValue} !important;
      opacity: 1 !important;
    }
  `,
  scrollableY: css`
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  `,
  // backgroundImage: imageURL => css`
  //   background-image: url("${imageURL}");
  //   background-position: 50% 50%;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   background-color: ${colors.backgroundLight};
  // `,
  link: (colorValue = colors.primary) => css`
    cursor: pointer;
    color: ${colorValue};
    &:hover, &:visited, &:active {
      color: ${colorValue};
    }
    &:hover {
      text-decoration: underline;
    }
  `,
};

export default {
    fontSizes,
    fonts,
    colors,
    flexboxgrid,
    breakpoints: [sm, md, lg],
}