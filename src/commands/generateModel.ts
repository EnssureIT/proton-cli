
import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'generate model',
  alias: ['gm'],
  description: 'Generate mongoose model use like that: sure gm computer',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: { info },
    } = toolbox

    const name = parameters.first.replace(/\w/, c => c.toUpperCase());

    await generate({
      template: 'model.ts.ejs',
      target: `src/Infra/Models/${name}.model.ts`,
      props: { name },
    })

    info(`Generated file at src/Infra/Models/${name}.model.ts`)
  },
}