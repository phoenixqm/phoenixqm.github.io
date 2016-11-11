'use strict';

module.exports = function (config) {
  // 可以定义多条规则，后面的规则会覆盖前面的
  config.name = 'app';
  config.rules = [
    {
      url: /^\/api\/(.*)$/, // 要代理的url，正则表达式
      rewrite: '/api/$1',   // 这里保留/api，默认删掉/api
      proxy: 'http://localhost:5005/', // 反向代理设置
      cookie: {
        path: '/api',
        domain: 'localhost'
      },
      delay: 500  // 延迟毫秒数，可选
    },
    {
      url: '^/api/books',
      delay: 3000
    }
  ];
  // 用户自定义的middleware将优先于默认的
  config.middlewares = [
    function (req, res, next) {
      next();
    }
  ];
};
