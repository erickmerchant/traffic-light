import {css} from '@erickmerchant/css'

export const _start = css`
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

export const classes = css`
  .lights {
    display: flex;
    flex-direction: column;
    border: 2px solid hsl(0, 0%, 50%);
    background-size: 2px 2px;
    background-color: hsl(0, 0%, 90%);
    background-image: linear-gradient(
        to right,
        hsl(0, 0%, 80%) 1px,
        transparent 1px
      ),
      linear-gradient(to bottom, hsl(0, 0%, 80%) 1px, transparent 1px);

    @media (orientation: landscape) {
      flex-direction: row;
      border-radius: 10% / 20%;
    }

    @media (orientation: portrait) {
      flex-direction: column;
      border-radius: 20% / 10%;
    }
  }

  .light {
    stroke: hsl(0, 0%, 50%);
    stroke-width: 0.125;
    height: calc(100vmin / var(--count));
    width: calc(100vmin / var(--count));
    transition: var(--transition-duration) ease-in fill;
    fill: hsl(var(--hue, 0), var(--saturation, 0%), var(--lightness, 70%));
  }
`
