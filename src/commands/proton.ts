
import { GluegunCommand } from 'gluegun'


const command: GluegunCommand = {
  name: 'proton',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to Proton Framework CLI')
  },
}

module.exports = command
