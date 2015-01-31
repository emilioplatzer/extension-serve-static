/*!
 * extrension-serve-static
 * 2015 Emilio Platzer
 * GNU Licensed
 */

/**
 * Module dependencies.
 */

var parseurl = require('parseurl');
var path = require('path');
var serveStatic = require('serve-static');

/**
 * @param {String} root
 * @param {Object} options
 * @return {Function}
 * @api public
 */

exports = module.exports = function extensionServeStatic(root, options) {
  if (!options) {
    throw new TypeError('options required')
  }
  if (!options.staticExtensions) {
    throw new TypeError('options.staticExtensions required')
  }
  var staticExtensions=options.staticExtensions;
  delete options.staticExtensions;
  
  var wichServeStatic = options.serveStatic || serveStatic(root,options); // Can change how to ServeStatic
  
  root = path.resolve(root);
  return function extensionServeStatic(req, res, next){
    var pathname = parseurl(req).pathname
    var ext = path.extname(pathname).replace(/^\.?/,'');
    if(staticExtensions.indexOf(ext)==-1) return next();
    if(ext && !exports.mime.types[ext]) return next();
    return wichServeStatic(req, res, next);
  }
}

exports.mime = serveStatic.mime
