import {createApp, createDomView, html} from '@erickmerchant/framework'
import {classes} from './css/styles.mjs'

const app = createApp()

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

const cycle = (color) => {
  if (color == null) {
    color = states[0]
  }

  app.commit(color)

  setTimeout(() => {
    const index = states.indexOf(color)

    cycle(index + 1 === states.length ? states[0] : states[index + 1])
  }, color.duration)
}

const target = document.querySelector('body')

const view = createDomView(target, (state) => html`<body>
      <svg
        class=${classes.lights}
        viewBox="0 0 10 30"
      >
        ${['red', 'yellow', 'green'].map((color, index) => html`<use
          y=${index * 10}
          href="#light"
          class=${classes[state && state.color === color ? color : 'gray']}
        />`)}
        <defs>
          <circle id="light" cx="5" cy="5" r="4"/>
        </defs>
      </svg>
    </body>`)

app.render(view)

cycle()
