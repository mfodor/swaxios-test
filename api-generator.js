const { codegen } = require('swagger-axios-codegen')

codegen({
	methodNameMode: 'operationId',
	source: require('./api.json'),
	outputDir: './src/api-codegen'
})
