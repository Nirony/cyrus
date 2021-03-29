export const palette = {
  black: "#1d1d1d",
  white: "#ffffff",
  offWhite: "#e6e6e6",
  orange: "#FBA928",
  orangeDarker: "#EB9918",
  lightGrey: "#939AA4",
  lighterGrey: "#CDD4DA",
  angry: "#dd3333",
}

export const darkTheme = {
  dark: true,
  colors: {
    primary: palette.orange,
    background: palette.black,
    card: palette.lighterGrey,
    text: palette.white,
    border: palette.white,
    notification: ''
  }
}

export const lightTheme = {
  dark: true,
  colors: {
    primary: palette.orange,
    background: palette.white,
    card: palette.lightGrey,
    text: palette.black,
    border: palette.black,
    notification: palette.black
  }
}
