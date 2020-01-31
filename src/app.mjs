import {render, domUpdate, html} from '@erickmerchant/framework'
import {classes} from './out/styles.mjs'

const target = document.querySelector('body')

const update = domUpdate(target)

const states = [
  {
    color: 'green',
    duration: 5000
  },
  {
    color: 'yellow',
    duration: 1000
  },
  {
    color: 'red',
    duration: 5000
  }
]

const cycle = (commit, color) => {
  if (color == null) {
    color = states[0]
  }

  commit(() => color)

  setTimeout(() => {
    const index = states.indexOf(color)

    cycle(commit, index + 1 === states.length ? states[0] : states[index + 1])
  }, color.duration)
}

const commit = render({
  state: null,
  update,
  component({state, commit, next}) {
    return html`<body>
        <svg
          class=${classes.lights}
          viewBox="0 0 10 30"
        >
          <use
            y="0"
            xlink:href="#light"
            class=${classes[state && state.color === 'red' ? 'red' : 'gray']}
          />
          <use
            y="10"
            xlink:href="#light"
            class=${classes[state && state.color === 'yellow' ? 'yellow' : 'gray']}
          />
          <use
            y="20"
            xlink:href="#light"
            class=${classes[state && state.color === 'green' ? 'green' : 'gray']}
          />
          <defs>
            <circle id="light" cx="5" cy="5" r="4"/>
          </defs>
        </svg>
      </body>`
  }
})

cycle(commit)
