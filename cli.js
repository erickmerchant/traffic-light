#!/usr/bin/env node
import sergeant from 'sergeant'
import execa from 'execa'

const {command, start} = sergeant('cli.js')
const execaOptions = {shell: true, stdio: 'inherit', cwd: process.cwd()}

command({
  name: 'start',
  async action() {
    execa('css src/styles.js src/css/styles -wd', execaOptions)

    execa('dev serve src -d -e dev.html', execaOptions)
  }
})

command({
  name: 'build',
  async action() {
    await Promise.all([
      execa('css src/styles.js src/css/styles', execaOptions),
      execa('dev cache src dist', execaOptions)
    ])
  }
})

start(process.argv.slice(2))
