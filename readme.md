# Unpacking Webpack

For JavaScript Zagreb Meetup.

```sh
$ npm run build # create a build
$ npm run build:watch # create a build and watch for changes
$ npm run build:prod # create a production build
```

`npm run:watch` uses some weird nodemon command because I wanted webpack to refresh automatically even when you edit the config file. It’s basically `webpack --watch`.

## Sources

* [webpack documentation][0]
* [petehunt/webpack-howto][1]
* [React Webpack Cookbook][2]

[0]: http://webpack.github.io/docs/
[1]: https://github.com/petehunt/webpack-howto
[2]: https://christianalfoni.github.io/react-webpack-cookbook/
