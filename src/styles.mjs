export const _start = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    max-width: 100%;
    border-radius: 1em;
  }
`

export const styles = {
  lights: `
    display: block;
    margin: 5vh auto;
    height: 90vh;
    background-size: 2px 2px;
    background-color: hsl(0, 0%, 90%);
    background-image:
      linear-gradient(to right, hsl(0, 0%, 80%) 1px, transparent 1px),
      linear-gradient(to bottom, hsl(0, 0%, 80%) 1px, transparent 1px);
    border: 2px solid hsl(0, 0%, 50%);
  `,
  light: `
    transition: 1s ease-in fill;
    stroke: hsl(0, 0%, 50%);
    stroke-width: 0.125;
  `,
  red: (styles) => `
    ${styles.light}

    fill: hsl(350, 70%, 70%);
  `,
  yellow: (styles) => `
    ${styles.light}

    fill: hsl(50, 70%, 70%);
  `,
  green: (styles) => `
    ${styles.light}

    fill: hsl(110, 70%, 70%);
  `,
  gray: (styles) => `
    ${styles.light}

    fill: hsl(0, 0%, 70%);
  `
}
