'use strict';

const metaGeneratorPath = './meta_generator';

module.exports = hexo => {
  /* const {
    filter
  } = hexo.extend; */
  // filter.register('after_render:html', require('./meta_generator'));
};

// 保持过滤器最先执行
hexo.extend.filter.register('after_render:html', require(metaGeneratorPath), 1);
