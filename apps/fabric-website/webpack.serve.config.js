let path = require('path');
let resources = require('../../scripts/webpack/webpack-resources');

const devServerConfig = {
  inline: true,
  port: 4321
};

const outputConfig = {
  filename: 'fabric-sitev5.js'
};

module.exports = resources.createServeConfig({
  entry: './src/root.tsx',

  output: outputConfig,

  devServer: devServerConfig,

  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },

  resolve: {
    alias: {
      '@uifabric/legacy$': path.join(__dirname, '../../packages/legacy/src'),
      '@uifabric/legacy/lib': path.join(__dirname, '../../packages/legacy/src'),
      '@uifabric/legacy/src': path.join(__dirname, '../../packages/legacy/src'),
      'office-ui-fabric-react$': path.resolve(__dirname, '../../packages/office-ui-fabric-react/src'),
      'office-ui-fabric-react/lib': path.resolve(__dirname, '../../packages/office-ui-fabric-react/src'),
      'office-ui-fabric-react/src': path.resolve(__dirname, '../../packages/office-ui-fabric-react/src'),
      '@uifabric/fabric-website/src': path.join(__dirname, 'src'),
      '@uifabric/fabric-website/lib': path.join(__dirname, 'lib'),
      '@uifabric/example-app-base$': path.join(__dirname, '../../packages/example-app-base/src'),
      'Props.ts.js': 'Props',
      'Example.tsx.js': 'Example'
    }
  }
});
