var util = require('hexo-util');
var stripHTML = util.stripHTML;

var counter = function (content) {
  content = stripHTML(content);
  const cn = (content.match(/[\u4E00-\u9FA5]/g) || []).length;
  const en = (content.replace(/[\u4E00-\u9FA5]/g, '').match(/[a-zA-Z0-9_\u0392-\u03c9\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|[\u00E4\u00C4\u00E5\u00C5\u00F6\u00D6]+|\w+/g) || []).length;
  return [cn, en];
};

hexo.extend.helper.register('min2read', function (content, {
  cn = 300,
  en = 160
} = {}) {
  var len = counter(content);
  var readingTime = len[0] / cn + len[1] / en;
  return readingTime < 1 ? '1' : parseInt(readingTime, 10);
});

hexo.extend.helper.register('wordcount', function (content) {
  var len = counter(content);
  var count = len[0] + len[1];
  if (count < 1000) {
    return count;
  }
  return Math.round(count / 100) / 10 + 'k';
});

hexo.extend.helper.register('totalcount', function (site) {
  var count = 0;
  site.posts.forEach(function (post) {
    var len = counter(post.content);
    count += len[0] + len[1];
  });
  if (count < 1000) {
    return count;
  }
  return Math.round(count / 100) / 10 + 'k';
});
