<h1 align="center">Ayer</h1>

 :desert_island: Ayer is a clean and elegant theme for Hexo, also responsive. If you have any queries or advice during the process of using, Please contact me! 


### [Preview](https://shen-yu.gitee.io)

### [中文说明](https://shen-yu.gitee.io/2019/ayer/)

![Screenshot](screenshots/hexo-theme-ayer.png)

### Install

``` bash
$ git clone https://github.com/Shen-Yu/hexo-theme-ayer.git themes/ayer
```

### Enable

Modify `theme` setting in `_config.yml` to `ayer`

``` yml
theme: ayer
```

### Update

``` bash
cd themes/ayer
git pull
```

### Configuration

let me know if you can’t find something.

``` yml
# Menu-侧边栏菜单
menu:
  Home: /
  Archives: /archives
  Gallery: http://shenyu-vip.lofter.com
  Travel: /tags/旅行/
  About: /2019/about

# 网站图标和侧边栏logo
favicon: /favicon.ico
logo: /images/ayer-side.svg

# 封面配置
# enable-是否启用封面；path-封面背景图；logo-封面logo
cover:
  enable: true
  path: /images/cover1.jpg  # images目录下附送多张美图，可更换
  logo: /images/ayer.svg

# 页面顶部进度条  
progressBar: ture

# 文章配置
# 文章太长，截断按钮文字(在需要截断的行增加此标记：<!--more-->)
excerpt_link: Read More...
# 文章分享文字
share_text: Share
# 搜索文字
search_text: Search
# 分页文字
nav_text:
  page_prev: Prev page
  page_next: Next page
  post_prev: Newer posts
  post_next: Older posts

# 文章页是否显示目录
toc: true

# 打赏
# 打赏type设定：0-关闭打赏； 1-文章对应的md文件里有reward:true属性，才有打赏； 2-所有文章均有打赏
reward_type: 2
# 打赏wording
reward_wording: '请我喝杯咖啡吧~'
# 支付宝二维码图片地址，跟你设置logo的方式一样。比如：/images/alipay.jpg
alipay: /images/alipay.jpg
# 微信二维码图片地址
weixin: /images/wechat.jpg

# 是否启用搜索
search: true

# RSS订阅(先安装hexo-generator-feed插件，再去博客根目录config进行配置)
rss: /atom.xml

# 评论：1、Valine(推荐)；2、Gitalk

# 1、Valine[一款快速、简洁且高效的无后端评论系统](https://github.com/xCss/Valine)
# 启用Valine必须先创建leancloud应用， 获取 id|key 填入即可
leancloud:  
  enable: true
  app_id: #
  app_key: #
# Valine配置
valine:
  enable: true # 是否启用
  avatar: mp # 头像样式(https://valine.js.org/avatar.html)
  placeholder: 给我的文章加点评论吧~ # placeholder

# 2、Gitalk(https://github.com/gitalk/gitalk)
gitalk:
  enable: false # true
  clientID: # GitHub Application Client ID
  clientSecret: # Client Secret
  repo: # Repository name
  owner: # GitHub ID
  admin: # GitHub ID

# fancybox(仅用于相册展示，若需要可配置albums)
fancybox: true

# 访问量统计(不蒜子)
busuanzi:
  enable: true

# 友盟cnzz统计(url填js代码src链接)
cnzz:
  enable: true
  url: #

# Google Analytics
google_analytics: ''
# 百度统计
baidu_analytics: ''

# 数学公式
mathjax: true

# 网站成立年份(默认为 2019，若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
since: 2019

#是否显示页脚信息(建议保留，有助于本主题的推广)
pageFooter: true
```

### Plugins

+ [hexo-generator-search](https://github.com/wzpan/hexo-generator-search) Local search
	
  ```yml
  $ npm install hexo-generator-searchdb --save
  ```
  Then add the plugin configuration for hexo's configuration file `_config.yml` (note: not the theme's configuration file):
  
  ```yml
  # Hexo-generator-search
  search:
    path: search.xml
    field: post
    format: html
  ```

+ [hexo-generate-feed](https://github.com/hexojs/hexo-generator-feed) RSS

  ```yml
  $ npm install hexo-generator-feed --save
  ```
  
  Then add the plugin configuration for hexo's configuration file `_config.yml` (note: not the theme's configuration file):
  
  ```yml
  feed:
      type: atom
      path: atom.xml
      limit: 20
      hub:
      content:
      content_limit: 140
      content_limit_delim: ' '
      order_by: -date	
  ```
  
+ [hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top)
	
	``` bash
  $ npm uninstall hexo-generator-index --save
  $ npm install hexo-generator-index-pin-top --save
  ```

### Post poster

``` md
---
title: Post name

photos: [
        ["img_url"],
        ["img_url"]
        ]
---
```

### Gallery
Need to write in the head of the markdown, this is not a good way to write, I hope to get a better way to write on github.

``` md
---
title: Gallery

albums: [
        ["img_url","img_caption"],
        ["img_url","img_caption"]
        ]
---
```

### Toc

Use Tocbot to parse the title tags (h1~h6) in the content and insert the directory. 

+ ayer/_config.yml

	``` bash
	# Toc
  toc: true
	```
+ If Toc is turned on in ayer/_config.yml, then Tocbot will generate a Toc article directory in the title tag of each blog parsing content, but not all blogs require Toc, so in the Front-matter section of markdown Can be closed:

	``` md
	---
  toc: false
  ---
	```

---

Inspired by [Ocean](https://github.com/zhwangart/hexo-theme-ocean)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Ayer</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/Shen-Yu/hexo-theme-ayer" property="cc:attributionName" rel="cc:attributionURL">Eric-Shen</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.