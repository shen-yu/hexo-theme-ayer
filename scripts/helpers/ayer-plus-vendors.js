/* global hexo */

'use strict';

/** 自定义链接生成 */
hexo.extend.helper.register('ayer_plus_vendors', function (url) {
  if (url.startsWith('//')) return url;
  return this.url_for(`${url}`);
});
