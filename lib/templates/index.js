module.exports = data => `// Fastify plugin autogenerated by fastify-openapi-glue
const openapiGlue = require("${data.pluginPackageName}");

const options = {
  specification: \`\${__dirname}/${data.specFile}\`,
  service: \`\${__dirname}/${data.service}\`,
  securityHandlers: \`\${__dirname}${data.security}\`
};

module.exports = async function(fastify, opts) {
  fastify.register(openapiGlue, options);
};
`;
