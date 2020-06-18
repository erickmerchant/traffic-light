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

export const createComponent = (classes) => (state) => html`
  <body>
    <svg class=${classes.lights} viewBox=${`0 0 10 ${colors.length * 10}`}>
      ${colors.map(
        (color, index) => html`
          <circle
            r="4"
            cx="5"
            cy=${index * 10 + 5}
            class=${classes[
              sequence[state % sequence.length] === color ? color : 'gray'
            ]}
          />
        `
      )}
    </svg>
  </body>
`

export const setupApp = (app) => {
  const increment = () => {
    app.commit((state = -1) => state + 1)

    setTimeout(increment, 1000)
  }

  increment()
}
