export const _start = `
  * {
    box-sizing: border-box;
    max-width: 100%;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  body {
    display: grid;
    height: 100%;
    justify-content: center;
    align-content: center;
  }
`

const light = `
  transition: var(--transition-duration) ease-in fill;
  stroke: hsl(0, 0%, 50%);
  stroke-width: 0.125;
  height: 33vmin;
  width: 33vmin;
`

export const classes = {
  lights: `
    display: inline-flex;
    flex-direction: column;
    border: 2px solid hsl(0, 0%, 50%);
    background-size: 2px 2px;
    background-color: hsl(0, 0%, 90%);
    background-image:
      linear-gradient(to right, hsl(0, 0%, 80%) 1px, transparent 1px),
      linear-gradient(to bottom, hsl(0, 0%, 80%) 1px, transparent 1px);

    @media (orientation: landscape) {
      flex-direction: row;
      border-radius: 10% / 20%;
    }

    @media (orientation: portrait) {
      flex-direction: column;
      border-radius: 20% / 10%;
    }
  `,
  red: `
    ${light}

    fill: hsl(350, 70%, 70%);
  `,
  yellow: `
    ${light}

    fill: hsl(50, 70%, 70%);
  `,
  green: `
    ${light}

    fill: hsl(110, 70%, 70%);
  `,
  gray: `
    ${light}

    fill: hsl(0, 0%, 70%);
  `
}
