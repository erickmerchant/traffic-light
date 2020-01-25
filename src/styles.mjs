export const _start = `
  * {
    box-sizing: border-box;
    font: inherit;
    margin: 0;
    padding: 0;
    max-width: 100%;
    border-radius: 1em;
  }
`

const light = `
  transition-property: fill;
  transition-duration: 1s;
  stroke: hsl(0, 0%, 50%);
  stroke-width: 0.125;
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
    border-width: 2px;
    border-style: solid;
    border-color: hsl(0, 0%, 50%);
  `,
  red: `
    ${light}
    fill: hsla(350, 70%, 60%, 70%);
  `,
  yellow: `
    ${light}
    fill: hsla(50, 70%, 60%, 70%);
  `,
  green: `
    ${light}
    fill: hsla(110, 70%, 60%, 70%);
  `,
  gray: `
    ${light}
    fill: hsla(0, 0%, 60%, 70%);
  `
}
