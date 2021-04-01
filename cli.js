#!/usr/bin/env node
import {spawn} from 'sergeant'

const command = process.argv[2]

try {
  if (command === 'start') {
    spawn`css src/styles.js dist/css -dw src`

    spawn`dev serve src dist -de dev.html`
  }
} catch (error) {
  console.error(error)

  process.exit(1)
}
