/**
 * @description This is a slight modification of the SW Precache Webpack Plugin. It was written
 * to compensate for WebPack issue #337, which does not appear to have been resolved. If this 
 * issue gets resolved, then this plugin should be replaced with the npm version, so that it has
 * some hope of being maintained, &c. The key difference between this version of the plugin
 * and the npm version is that the path value is stored globally in the module. Issue #337 
 * occurs when webpack dev server overwrites the value of `path` to "/". This only happens in this
 * module following the `after-emit` event (at least as far as I've cared to test). The solution, 
 * so I can focus on my work :), is to introduce the `_outputPath` variable, which is assigned the
 * value of the `output.path` on `apply`, which always fires before `after-emit`, and has a valid
 * output path value. All subsequent calls to `options.config.output.path` are replaced by `_outputPath`.
 */

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

var _swPrecache = require('sw-precache');

var _swPrecache2 = _interopRequireDefault(_swPrecache);

var _uglifyJs = require('uglify-js');

var _uglifyJs2 = _interopRequireDefault(_uglifyJs);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FILEPATH_WARNING = 'sw-prechache-webpack-plugin filepath: You are using a custom path for your service worker, this may prevent the service worker from working correctly if it is not available in the same path as your application.';

var DEFAULT_CACHE_ID = 'sw-precache-webpack-plugin',
	DEFAULT_WORKER_FILENAME = 'service-worker.js',
	DEFAULT_OUTPUT_PATH = '',
	DEFAULT_PUBLIC_PATH = '',
	DEFAULT_IMPORT_SCRIPTS = [],
	DEFAULT_IGNORE_PATTERNS = [];

var DEFAULT_OPTIONS = {
	cacheId: DEFAULT_CACHE_ID,
	filename: DEFAULT_WORKER_FILENAME,
	importScripts: DEFAULT_IMPORT_SCRIPTS,
	staticFileGlobsIgnorePatterns: DEFAULT_IGNORE_PATTERNS,
	forceDelete: false,
	mergeStaticsConfig: false,
	minify: false
};

var _outputPath;

var SWPrecacheWebpackPlugin = function () {

	/**
	 * SWPrecacheWebpackPlugin - A wrapper for sw-precache to use with webpack
	 * @constructor
	 * @param {object} options - All parameters should be passed as a single options object
	 *
	 * // sw-precache options:
	 * @param {string} [options.cacheId]
	 * @param {string} [options.directoryIndex]
	 * @param {object|array} [options.dynamicUrlToDependencies]
	 * @param {boolean} [options.handleFetch]
	 * @param {array} [options.ignoreUrlParametersMatching]
	 * @param {array} [options.importScripts]
	 * @param {function} [options.logger]
	 * @param {number} [options.maximumFileSizeToCacheInBytes]
	 * @param {array} [options.navigateFallbackWhitelist]
	 * @param {string} [options.replacePrefix]
	 * @param {array} [options.runtimeCaching]
	 * @param {array} [options.staticFileGlobs]
	 * @param {string} [options.stripPrefix]
	 * @param {string} [options.stripPrefixMulti]
	 * @param {string} [options.templateFilePath]
	 * @param {boolean} [options.verbose]
	 *
	 * // plugin options:
	 * @param {string} [options.filename] - Service worker filename, default is 'service-worker.js'
	 * @param {string} [options.filepath] - Service worker path and name, default is to use webpack.output.path + options.filename
	 * @param {RegExp} [options.staticFileGlobsIgnorePatterns[]] - Define an optional array of regex patterns to filter out of staticFileGlobs
	 * @param {boolean} [options.forceDelete=false] - Pass force option to del
	 * @param {boolean} [options.mergeStaticsConfig=false] - Merge provided staticFileGlobs and stripPrefix(Multi) with webpack's config, rather than having those take precedence
	 * @param {boolean} [options.minify=false] - Minify the generated Service worker file using UglifyJS
	 */
	function SWPrecacheWebpackPlugin(options) {
		_classCallCheck(this, SWPrecacheWebpackPlugin);

		// generated configuration options
		this.config = {};
		// configuration options passed by user
		this.options = _extends({}, DEFAULT_OPTIONS, options);
		// generated configuration that will override user options
		this.overrides = {};
	}

	/**
	 * @returns {object} - plugin configuration
	 */


	_createClass(SWPrecacheWebpackPlugin, [{
		key: 'apply',
		value: function apply(compiler) {
			var _this = this;

			_outputPath = compiler.options.output.path;

			compiler.plugin('after-emit', function (compilation, callback) {

				// get the defaults from options
				var _options = _this.options,
					importScripts = _options.importScripts,
					staticFileGlobsIgnorePatterns = _options.staticFileGlobsIgnorePatterns,
					mergeStaticsConfig = _options.mergeStaticsConfig;

				// get the output path specified in webpack config
				var outputPath = _outputPath || DEFAULT_OUTPUT_PATH;

				// get the public path specified in webpack config
				var _compiler$options$out = compiler.options.output.publicPath,
					publicPath = _compiler$options$out === undefined ? DEFAULT_PUBLIC_PATH : _compiler$options$out;


				if (_this.options.filepath) {
					// warn about changing filepath
					compilation.warnings.push(new Error(FILEPATH_WARNING));
				}

				// get all assets outputted by webpack
				var assetGlobs = Object.keys(compilation.assets).map(function (f) {
					return _path2.default.join(outputPath, f);
				});

				// merge assetGlobs with provided staticFileGlobs and filter using staticFileGlobsIgnorePatterns
				var staticFileGlobs = assetGlobs.concat(_this.options.staticFileGlobs || []).filter(function (text) {
					return !staticFileGlobsIgnorePatterns.some(function (regex) {
						return regex.test(text);
					});
				});

				var stripPrefixMulti = _extends({}, _this.options.stripPrefixMulti);

				if (outputPath) {
					// strip the webpack config's output.path
					stripPrefixMulti['' + outputPath + _path2.default.sep] = publicPath;
				}

				_this.config = _extends({}, _this.config, {
					staticFileGlobs: staticFileGlobs,
					stripPrefixMulti: stripPrefixMulti
				});

				if (importScripts) {
					_this.overrides.importScripts = importScripts.map(function (f) {
						return f.replace(/\[hash\]/g, compilation.hash);
					}) // need to override importScripts with stats.hash
						.map(function (f) {
							return _url2.default.resolve(publicPath, f);
						}); // add publicPath to importScripts
				}

				if (mergeStaticsConfig) {
					// merge generated and user provided options
					_this.overrides = _extends({}, _this.overrides, {
						staticFileGlobs: staticFileGlobs,
						stripPrefixMulti: stripPrefixMulti
					});
				}

				var done = function done() {
					return callback();
				};
				var error = function error(err) {
					return callback(err);
				};

				_this.writeServiceWorker(compiler).then(done, error);
			});
		}
	}, {
		key: 'writeServiceWorker',
		value: function writeServiceWorker(compiler) {
			var _this2 = this;

			var fileDir = _outputPath.path || DEFAULT_OUTPUT_PATH,
				_options$filepath = this.options.filepath,
				filepath = _options$filepath === undefined ? _path2.default.join(fileDir, this.options.filename) : _options$filepath;


			return (0, _del2.default)(filepath, { force: this.options.forceDelete }).then(function () {
				return _swPrecache2.default.generate(_this2.workerOptions);
			}).then(function (serviceWorkerFileContents) {
				if (_this2.options.minify) {
					var uglifyFiles = {};
					uglifyFiles[_this2.options.filename] = serviceWorkerFileContents;
					var minifedCodeObj = _uglifyJs2.default.minify(uglifyFiles, { fromString: true });
					return minifedCodeObj.code;
				}
				return serviceWorkerFileContents;
			}).then(function (possiblyMinifiedServiceWorkerFileContents) {
				return _fs2.default.writeFileSync(filepath, possiblyMinifiedServiceWorkerFileContents);
			});
		}
	}, {
		key: 'workerOptions',
		get: function get() {
			return _extends({}, this.config, this.options, this.overrides);
		}
	}]);

	return SWPrecacheWebpackPlugin;
}();

module.exports = SWPrecacheWebpackPlugin;