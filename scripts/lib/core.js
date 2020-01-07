/* global hexo */

'use strict';

// Hexo事件:https://hexo.io/zh-cn/api/events

/** 在静态文件生成前发布 */
hexo.on('generateBefore', () => {
  // Merge config.
  //require('./../filters/index')(hexo);
});

/** 在文章文件建立后发布。该事件返回文章参数。 */
hexo.on('new', function (post) {
  //console.log(post)
});

/** 在文章开始渲染前执行 */
hexo.extend.filter.register('before_post_render', function (data) {
  //var config = hexo.config;
  //console.log(3);
  //console.log(config);
  //console.log(hexo.theme.config);

});
