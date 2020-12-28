import {html} from '@erickmerchant/framework/main.js'

const sequence = [
  'green',
  'green',
  'green',
  'green',
  'green',
  'yellow',
  'red',
  'red',
  'red',
  'red',
  'red'
]

const colors = Array.from(new Set(sequence)).reverse()

export const firstState = 'green'

export const createComponent = ({classes}) => (state) => html`
  <body style=${`--transition-duration: ${state ? '1s' : '0s'}`}>
    <div class=${classes.lights}>
      ${colors.map(
        (color) => html`
          <svg
            viewBox="0 0 10 10"
            class=${classes[
              sequence[state % sequence.length] === color ? color : 'gray'
            ]}
          >
            <circle r="4" cx="5" cy="5" />
          </svg>
        `
      )}
    </div>
  </body>
`

export const setupApp = (app) => {
  const increment = () => {
    app.state = app.state != null ? app.state + 1 : 0

    setTimeout(increment, 1000)
  }

  increment()
}
