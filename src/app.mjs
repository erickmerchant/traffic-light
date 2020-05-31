import {html} from '@erickmerchant/framework'

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
          <use
            y=${index * 10}
            href="#light"
            class=${classes[
              sequence[state % sequence.length] === color ? color : 'gray'
            ]}
          />
        `
      )}
      <defs>
        <circle id="light" cx="5" cy="5" r="4" />
      </defs>
    </svg>
  </body>
`
