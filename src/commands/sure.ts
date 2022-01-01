
import { GluegunCommand } from 'gluegun'


const command: GluegunCommand = {
  name: 'sure',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to Enssure Framework CLI')
  },
}

module.exports = command
