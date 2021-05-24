"use strict";

const objUtil = require("../../utils/object");
const { isNotEmptyObject } = require("../../utils/object");

module.exports = (hexo) => {
  const isZh = hexo.theme.i18n.languages[0].search(/zh-CN/i) !== -1;

  if (isNotEmptyObject(hexo.config.theme_config)) {
    hexo.theme.config = objUtil.merge(
      {},
      hexo.theme.config,
      hexo.config.theme_config
    );
    if (isZh) {
      hexo.log.info("[Ayer] 读取 _config.yml 中 theme_config 配置项覆盖配置");
    } else {
      hexo.log.info(
        "[Ayer] Merge theme config from theme_config in _config.yml"
      );
    }
  }

  hexo.log.debug(
    "[Ayer] Output theme config:\n",
    JSON.stringify(hexo.theme.config, undefined, 2)
  );
};
