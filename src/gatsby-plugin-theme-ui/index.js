import sketchy from "theme-ui-sketchy-preset"
// import baseTheme from 'gatsby-theme-ui-blog/src/gatsby-plugin-theme-ui'

export default {
  // ...baseTheme,
  ...sketchy,
  fonts: {
    ...sketchy.fonts,
    monospace: "'Fira Code', monospace",
    heading: "'Architects Daughter', system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", sans-serif",
    body: "'Libre Caslon Text', serif",
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  sizes: {
    ...sketchy.sizes,
    container: 768,
  },
  styles: {
    ...sketchy.styles,
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
  }
}
