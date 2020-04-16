'use strict';

const defaultConfig = require('../default_config');

function hexoMetaGeneratorInject(data) {
  const config = defaultConfig;
  if (!config.meta_generator || !data ||
    data.match(/<meta\s+name=['|"]?generator['|"]?/i)) {
    return;
  }

  const hexoGeneratorTag = `\n  <meta name="generator" content="hexo-theme-ayer">`;

  return data.replace('</title>', '</title>' + hexoGeneratorTag);
}

module.exports = hexoMetaGeneratorInject;
