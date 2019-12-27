const { override, addDecoratorsLegacy, fixBabelImports, addLessLoader } = require('customize-cra')
module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true //使用less
  }),
  addLessLoader({
    javascriptEnabled: true, // css in js 配置 
    modifyVars: { '@primary-color': '#1DA57A' } //配置主题
  })
)