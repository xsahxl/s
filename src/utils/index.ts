const pkg = require('../../package.json');

export const getVersion = () =>
  `${pkg.name}: ${pkg.version}, ${process.platform}-${process.arch}, node-${process.version}`;
