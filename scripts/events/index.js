/* global hexo */

"use strict";

hexo.on("generateBefore", () => {
  require("./lib/merge-configs")(hexo);
});

hexo.on("generateAfter", () => {
  require("./lib/hello")(hexo);
});
