
import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'generate service',
  alias: ['gs'],
  description: 'Generate proton service, use like that: proton gs computer',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: { info },
    } = toolbox

    if (parameters.argv[parameters.argv.length - 1] == "--help" || parameters.argv[parameters.argv.length - 1] == "-h") {
      info(`Create service: [proton generate service computer] will expect in Computer.service.ts`)
      info('\n')
      info(`If you need create service for existing model use:`)
      info(`proton [gerate service command] [service name] [model name (optional)] example: proton gh computer network`)
      info(`this will expect in Computer.service.ts with NetworkModel base crud`)
    } else {
      const name = parameters.first.replace(/\w/, c => c.toUpperCase());
      const model = parameters.second.replace(/\w/, c => c.toUpperCase());
  
      await generate({
        template: 'service.ts.ejs',
        target: `src/Application/Services/${name}.service.ts`,
        props: { name, model },
      })
  
      info(`Generated file at src/Application/Services/${name}.service.ts`)
    }

  },
}