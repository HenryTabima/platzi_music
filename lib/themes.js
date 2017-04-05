export const indexTheme = {
  font: 'Quicksand',
  hero: {
    padding: '100px 0 186px',
    subtitle: {
      display: "block"
    }
  },
  color: {
    primary: 'rgba(81, 121, 255, 0.5)',
    secondary: 'rgba(233, 131, 238, 0.5)',
    tertiary: '#bfafd9',
    button: '#ea83ee',
    grayA: '#e1e5f0',
    grayB: '#4b4e5a'
  },
  flexboxgrid: {
    container: {
      xs: 30,
      sm: 48,
      md: 48,
      lg: 48
    }
  }
}

export const searchTheme = {
  ...indexTheme,
  hero: {
    padding: '2em 0',
    subtitle: {
      display: 'none'
    }
  }
}
