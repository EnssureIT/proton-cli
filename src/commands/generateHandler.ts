import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'generate handler',
  alias: ['gh'],
  description: 'Generate http handler, if you need help use: sure gh --help (-h)',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: { info },
    } = toolbox

    if (parameters.argv[parameters.argv.length - 1] == "--help" || parameters.argv[parameters.argv.length - 1] == "-h" ) {
      info(`Create handler: [sure generate handler computer] will expect in Computer.handler.ts`)
      info('\n')
      info(`If you need create and inject first service use:`)
      info(`sure [gerate handler command] [handler name] [service name (optional)] example: sure gh computer network`)
      info(`this will expect in Computer.handler.ts with NetworkService injection`)
    } else {
      const name = parameters.first.replace(/\w/, c => c.toUpperCase());
      const defaultInject = parameters.second
  
      await generate({
        template: 'handler.ts.ejs',
        target: `src/Presentation/Handlers/${name}.handler.ts`,
        props: { name, defaultInject },
      })
  
      info(`Generated file at src/Presentation/Handlers/${name}.handler.ts`)
    }

  },
}
