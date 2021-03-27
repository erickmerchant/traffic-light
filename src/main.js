import {html} from '@erickmerchant/framework'

const red = `--hue: 350; --saturation: 70%;`
const yellow = `--hue: 50; --saturation: 70%;`
const green = `--hue: 110; --saturation: 70%;`

const sequence = [
  green,
  green,
  green,
  green,
  green,
  yellow,
  red,
  red,
  red,
  red,
  red
]

export const createView = ({classes}) => (state) => {
  const lights = Array.from({
    *[Symbol.iterator]() {
      let color

      for (let i = sequence.length - 1; i > 0; i--) {
        if (color !== sequence[i]) {
          yield html`
            <svg
              viewBox="0 0 10 10"
              class=${classes.light}
              style=${sequence[state % sequence.length] === sequence[i]
                ? sequence[i]
                : ''}
            >
              <circle r="4" cx="5" cy="5" />
            </svg>
          `
        }

        color = sequence[i]
      }
    }
  })

  return html`
    <body style=${`--transition-duration: ${state ? '1s' : '0s'}`}>
      <div class=${classes.lights} style=${`--count: ${lights.length};`}>
        ${lights}
      </div>
    </body>
  `
}

export const setupApp = (app) => {
  app.state = 0

  const increment = () => {
    app.state++

    setTimeout(increment, 1000)
  }

  increment()
}
