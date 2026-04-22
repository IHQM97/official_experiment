// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"9Wrd0":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d79a46134241f360";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"53CDu":[function(require,module,exports,__globalThis) {
// =====================================================
// IMPORTS
// =====================================================
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jspsych = require("jspsych");
var _pluginPreload = require("@jspsych/plugin-preload");
var _pluginPreloadDefault = parcelHelpers.interopDefault(_pluginPreload);
var _pluginHtmlKeyboardResponse = require("@jspsych/plugin-html-keyboard-response");
var _pluginHtmlKeyboardResponseDefault = parcelHelpers.interopDefault(_pluginHtmlKeyboardResponse);
var _pluginImageKeyboardResponse = require("@jspsych/plugin-image-keyboard-response");
var _pluginImageKeyboardResponseDefault = parcelHelpers.interopDefault(_pluginImageKeyboardResponse);
var _pluginHtmlButtonResponse = require("@jspsych/plugin-html-button-response");
var _pluginHtmlButtonResponseDefault = parcelHelpers.interopDefault(_pluginHtmlButtonResponse);
// =====================================================
// MOTIF IMPORTS
// =====================================================
var _mo1EhPng = require("url:./motifs/MO1_EH.png");
var _mo1EhPngDefault = parcelHelpers.interopDefault(_mo1EhPng);
var _mo2GcPng = require("url:./motifs/MO2_GC.png");
var _mo2GcPngDefault = parcelHelpers.interopDefault(_mo2GcPng);
var _mo3LpPng = require("url:./motifs/MO3_LP.png");
var _mo3LpPngDefault = parcelHelpers.interopDefault(_mo3LpPng);
var _mo4NrPng = require("url:./motifs/MO4_NR.png");
var _mo4NrPngDefault = parcelHelpers.interopDefault(_mo4NrPng);
var _mo5PstPng = require("url:./motifs/MO5_PST.png");
var _mo5PstPngDefault = parcelHelpers.interopDefault(_mo5PstPng);
var _mo6ZskPng = require("url:./motifs/MO6_ZSK.png");
var _mo6ZskPngDefault = parcelHelpers.interopDefault(_mo6ZskPng);
// =====================================================
// WORD IMAGE IMPORTS
// =====================================================
var _pos01Png = require("url:./words/positive/Pos_01.png");
var _pos01PngDefault = parcelHelpers.interopDefault(_pos01Png);
var _pos02Png = require("url:./words/positive/Pos_02.png");
var _pos02PngDefault = parcelHelpers.interopDefault(_pos02Png);
var _pos03Png = require("url:./words/positive/Pos_03.png");
var _pos03PngDefault = parcelHelpers.interopDefault(_pos03Png);
var _pos04Png = require("url:./words/positive/Pos_04.png");
var _pos04PngDefault = parcelHelpers.interopDefault(_pos04Png);
var _pos05Png = require("url:./words/positive/Pos_05.png");
var _pos05PngDefault = parcelHelpers.interopDefault(_pos05Png);
var _pos06Png = require("url:./words/positive/Pos_06.png");
var _pos06PngDefault = parcelHelpers.interopDefault(_pos06Png);
var _pos07Png = require("url:./words/positive/Pos_07.png");
var _pos07PngDefault = parcelHelpers.interopDefault(_pos07Png);
var _pos08Png = require("url:./words/positive/Pos_08.png");
var _pos08PngDefault = parcelHelpers.interopDefault(_pos08Png);
var _pos09Png = require("url:./words/positive/Pos_09.png");
var _pos09PngDefault = parcelHelpers.interopDefault(_pos09Png);
var _pos10Png = require("url:./words/positive/Pos_10.png");
var _pos10PngDefault = parcelHelpers.interopDefault(_pos10Png);
var _neg01Png = require("url:./words/negative/Neg_01.png");
var _neg01PngDefault = parcelHelpers.interopDefault(_neg01Png);
var _neg02Png = require("url:./words/negative/Neg_02.png");
var _neg02PngDefault = parcelHelpers.interopDefault(_neg02Png);
var _neg03Png = require("url:./words/negative/Neg_03.png");
var _neg03PngDefault = parcelHelpers.interopDefault(_neg03Png);
var _neg04Png = require("url:./words/negative/Neg_04.png");
var _neg04PngDefault = parcelHelpers.interopDefault(_neg04Png);
var _neg05Png = require("url:./words/negative/Neg_05.png");
var _neg05PngDefault = parcelHelpers.interopDefault(_neg05Png);
var _neg06Png = require("url:./words/negative/Neg_06.png");
var _neg06PngDefault = parcelHelpers.interopDefault(_neg06Png);
var _neg07Png = require("url:./words/negative/Neg_07.png");
var _neg07PngDefault = parcelHelpers.interopDefault(_neg07Png);
var _neg08Png = require("url:./words/negative/Neg_08.png");
var _neg08PngDefault = parcelHelpers.interopDefault(_neg08Png);
var _neg09Png = require("url:./words/negative/Neg_09.png");
var _neg09PngDefault = parcelHelpers.interopDefault(_neg09Png);
var _neg10Png = require("url:./words/negative/Neg_10.png");
var _neg10PngDefault = parcelHelpers.interopDefault(_neg10Png);
var _pseudo01Png = require("url:./words/pseudoword/Pseudo_01.png");
var _pseudo01PngDefault = parcelHelpers.interopDefault(_pseudo01Png);
var _pseudo02Png = require("url:./words/pseudoword/Pseudo_02.png");
var _pseudo02PngDefault = parcelHelpers.interopDefault(_pseudo02Png);
var _pseudo03Png = require("url:./words/pseudoword/Pseudo_03.png");
var _pseudo03PngDefault = parcelHelpers.interopDefault(_pseudo03Png);
var _pseudo04Png = require("url:./words/pseudoword/Pseudo_04.png");
var _pseudo04PngDefault = parcelHelpers.interopDefault(_pseudo04Png);
var _pseudo05Png = require("url:./words/pseudoword/Pseudo_05.png");
var _pseudo05PngDefault = parcelHelpers.interopDefault(_pseudo05Png);
var _pseudo06Png = require("url:./words/pseudoword/Pseudo_06.png");
var _pseudo06PngDefault = parcelHelpers.interopDefault(_pseudo06Png);
var _pseudo07Png = require("url:./words/pseudoword/Pseudo_07.png");
var _pseudo07PngDefault = parcelHelpers.interopDefault(_pseudo07Png);
var _pseudo08Png = require("url:./words/pseudoword/Pseudo_08.png");
var _pseudo08PngDefault = parcelHelpers.interopDefault(_pseudo08Png);
var _pseudo09Png = require("url:./words/pseudoword/Pseudo_09.png");
var _pseudo09PngDefault = parcelHelpers.interopDefault(_pseudo09Png);
var _pseudo10Png = require("url:./words/pseudoword/Pseudo_10.png");
var _pseudo10PngDefault = parcelHelpers.interopDefault(_pseudo10Png);
// =====================================================
// AMP CHARACTER IMPORTS
// =====================================================
var _char01Png = require("url:./characters/char01.png");
var _char01PngDefault = parcelHelpers.interopDefault(_char01Png);
var _char02Png = require("url:./characters/char02.png");
var _char02PngDefault = parcelHelpers.interopDefault(_char02Png);
var _char03Png = require("url:./characters/char03.png");
var _char03PngDefault = parcelHelpers.interopDefault(_char03Png);
var _char04Png = require("url:./characters/char04.png");
var _char04PngDefault = parcelHelpers.interopDefault(_char04Png);
var _char05Png = require("url:./characters/char05.png");
var _char05PngDefault = parcelHelpers.interopDefault(_char05Png);
var _char06Png = require("url:./characters/char06.png");
var _char06PngDefault = parcelHelpers.interopDefault(_char06Png);
var _char07Png = require("url:./characters/char07.png");
var _char07PngDefault = parcelHelpers.interopDefault(_char07Png);
var _char08Png = require("url:./characters/char08.png");
var _char08PngDefault = parcelHelpers.interopDefault(_char08Png);
var _char09Png = require("url:./characters/char09.png");
var _char09PngDefault = parcelHelpers.interopDefault(_char09Png);
var _char10Png = require("url:./characters/char10.png");
var _char10PngDefault = parcelHelpers.interopDefault(_char10Png);
// =====================================================
// WORD LISTS
// =====================================================
const positiveWords = [
    "joy",
    "love",
    "happy",
    "delight",
    "pleasure",
    "smile",
    "peace",
    "comfort",
    "hope",
    "warmth"
];
const negativeWords = [
    "anger",
    "hate",
    "pain",
    "death",
    "disgust",
    "failure",
    "fear",
    "grief",
    "violence",
    "ugly"
];
const pseudoWords = [
    "mavik",
    "tulver",
    "sarnet",
    "plimor",
    "grastin",
    "veltor",
    "nibrek",
    "dorsiv",
    "frintal",
    "zavik"
];
const wordImages = {
    joy: (0, _pos01PngDefault.default),
    love: (0, _pos02PngDefault.default),
    happy: (0, _pos03PngDefault.default),
    delight: (0, _pos04PngDefault.default),
    pleasure: (0, _pos05PngDefault.default),
    smile: (0, _pos06PngDefault.default),
    peace: (0, _pos07PngDefault.default),
    comfort: (0, _pos08PngDefault.default),
    hope: (0, _pos09PngDefault.default),
    warmth: (0, _pos10PngDefault.default),
    anger: (0, _neg01PngDefault.default),
    hate: (0, _neg02PngDefault.default),
    pain: (0, _neg03PngDefault.default),
    death: (0, _neg04PngDefault.default),
    disgust: (0, _neg05PngDefault.default),
    failure: (0, _neg06PngDefault.default),
    fear: (0, _neg07PngDefault.default),
    grief: (0, _neg08PngDefault.default),
    violence: (0, _neg09PngDefault.default),
    ugly: (0, _neg10PngDefault.default),
    mavik: (0, _pseudo01PngDefault.default),
    tulver: (0, _pseudo02PngDefault.default),
    sarnet: (0, _pseudo03PngDefault.default),
    plimor: (0, _pseudo04PngDefault.default),
    grastin: (0, _pseudo05PngDefault.default),
    veltor: (0, _pseudo06PngDefault.default),
    nibrek: (0, _pseudo07PngDefault.default),
    dorsiv: (0, _pseudo08PngDefault.default),
    frintal: (0, _pseudo09PngDefault.default),
    zavik: (0, _pseudo10PngDefault.default)
};
const ampCharacters = [
    (0, _char01PngDefault.default),
    (0, _char02PngDefault.default),
    (0, _char03PngDefault.default),
    (0, _char04PngDefault.default),
    (0, _char05PngDefault.default),
    (0, _char06PngDefault.default),
    (0, _char07PngDefault.default),
    (0, _char08PngDefault.default),
    (0, _char09PngDefault.default),
    (0, _char10PngDefault.default)
];
// =====================================================
// START EXPERIMENT
// =====================================================
window.addEventListener("DOMContentLoaded", ()=>{
    const jsPsych = (0, _jspsych.initJsPsych)();
    const participantID = jsPsych.randomization.randomID(8);
    jsPsych.data.addProperties({
        participant_id: participantID
    });
    const listAssignment = Math.random() < 0.5 ? "A" : "B";
    jsPsych.data.addProperties({
        list_assignment: listAssignment
    });
    const motifRegistry = [
        {
            id: "MO1",
            stimulus: (0, _mo1EhPngDefault.default)
        },
        {
            id: "MO2",
            stimulus: (0, _mo2GcPngDefault.default)
        },
        {
            id: "MO3",
            stimulus: (0, _mo3LpPngDefault.default)
        },
        {
            id: "MO4",
            stimulus: (0, _mo4NrPngDefault.default)
        },
        {
            id: "MO5",
            stimulus: (0, _mo5PstPngDefault.default)
        },
        {
            id: "MO6",
            stimulus: (0, _mo6ZskPngDefault.default)
        }
    ];
    // ---------------------------------------------------
    // PRELOAD
    // ---------------------------------------------------
    const preload = {
        type: (0, _pluginPreloadDefault.default),
        images: [
            ...motifRegistry.map((m)=>m.stimulus),
            ...Object.values(wordImages),
            ...ampCharacters
        ]
    };
    // ---------------------------------------------------
    // WELCOME
    // ---------------------------------------------------
    const welcome = {
        type: (0, _pluginHtmlKeyboardResponseDefault.default),
        stimulus: `
    <div style="max-width:800px; font-size:20px;">
      <p>Welcome to the experiment.</p>
      <p>Please read the instructions carefully and follow the on-screen prompts.</p>
      <p>Press any key to begin.</p>
    </div>
  `
    };
    let demoData = {};
    const demographics = {
        type: (0, _pluginHtmlButtonResponseDefault.default),
        stimulus: `
    <h2>Consent & Eligibility</h2>

    <p>
      <label><input id="consent" type="checkbox"> I consent to take part in this study.</label>
    </p>

    <p>
      <label><input id="withdraw" type="checkbox"> I understand that I may withdraw at any time without penalty.</label>
    </p>

    <p>
      <label><input id="epilepsy" type="checkbox"> I confirm that I do not have photosensitive epilepsy.</label>
    </p>

    <p>
      <label><input id="chinese" type="checkbox"> I confirm that I do not read or understand Chinese characters.</label>
    </p>

    <hr>

    <p>
      <label>
        Participant code (if provided by the researcher):<br>
        <input id="participant_code" type="text" placeholder="e.g. B001" style="width:200px;">
      </label>
    </p>

    <hr>

    <p>
      <label>Age:
        <select id="age">
          <option value="">Select</option>
          ${Array.from({
            length: 83
        }, (_, i)=>i + 18).map((a)=>`<option value="${a}">${a}</option>`).join("")}
        </select>
      </label>
    </p>

    <p>
      <label>Gender:
        <select id="gender">
          <option value="">Select</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="nonbinary">Non\u{2011}binary</option>
          <option value="prefer_not_to_say">Prefer not to say</option>
        </select>
      </label>
    </p>
  `,
        choices: [
            "Continue"
        ],
        // Intercept the button click BEFORE jsPsych finishes the trial
        on_load: ()=>{
            const btn = document.querySelector(".jspsych-html-button-response-button");
            btn.addEventListener("click", (e)=>{
                const epilepsy = document.getElementById("epilepsy").checked;
                const chinese = document.getElementById("chinese").checked;
                // If either box is NOT ticked → block progress and end experiment
                if (!epilepsy || !chinese) {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                    jsPsych.endExperiment(`
            <p>Thank you for your interest.</p>
            <p>You do not meet the eligibility criteria for this study.</p>
          `);
                }
            }, true // capture phase so we intercept before jsPsych's own handler
            );
        },
        // Only runs if the trial is actually allowed to finish (i.e. eligible)
        on_finish: ()=>{
            demoData.consent = document.getElementById("consent").checked;
            demoData.withdraw = document.getElementById("withdraw").checked;
            demoData.epilepsy = document.getElementById("epilepsy").checked;
            demoData.chinese = document.getElementById("chinese").checked;
            demoData.participant_code = document.getElementById("participant_code").value || null;
            demoData.age = document.getElementById("age").value || null;
            demoData.gender = document.getElementById("gender").value || null;
            jsPsych.data.write(demoData);
            if (demoData.participant_code) jsPsych.data.addProperties({
                participant_id: demoData.participant_code,
                sample: "B"
            });
            else jsPsych.data.addProperties({
                sample: "A"
            });
        }
    };
    // ---------------------------------------------------
    // TIMING CONSTANTS (CONDITIONING PHASE)
    // ---------------------------------------------------
    const FIXATION_DURATION = 500; // fixation cross
    const MOTIF_DURATION = 900; // CS (motif)
    const WORD_RESPONSE_DEADLINE = 2000;
    const US_DURATION = 500; // affective stimulus
    const ISI_DURATION = 300; // blank/fixation between CS and US
    const ITI_DURATION = 1000; // inter-trial interval
    const MOTIF_HEIGHT = 250;
    const WORD_HEIGHT = 120;
    const AMP_PRIME_DURATION = 75; // prime (motif)
    const AMP_ISI_DURATION = 125; // blank after prime
    const AMP_TARGET_DURATION = 100; // neutral target
    const AMP_MASK_DURATION = 100; // mask
    const AMP_RESPONSE_DEADLINE = 2000; // optional
    const AMP_ITI_DURATION = 750;
    // ---------------------------------------------------
    // CONDITIONING INSTRUCTIONS
    // ---------------------------------------------------
    const conditioningInstructions = {
        type: (0, _pluginHtmlKeyboardResponseDefault.default),
        stimulus: `
      <div style="max-width:800px; font-size:20px;">
        <p>You will see a brief image followed by a letter string.</p>
        <p>Press <strong>F</strong> if the string is a real English word.<br>
        Press <strong>J</strong> if it is a non-word.</p>
        <p>Respond as quickly and accurately as possible.</p>
        <p>Press any key to begin.</p>
      </div>
    `
    };
    // ---------------------------------------------------
    // CONDITIONING TRIAL GENERATION
    // ---------------------------------------------------
    const motifValenceMap = listAssignment === "A" ? {
        MO1: "positive",
        MO2: "negative",
        MO3: "positive",
        MO4: "negative",
        MO5: "positive",
        MO6: "negative"
    } : {
        MO1: "negative",
        MO2: "positive",
        MO3: "negative",
        MO4: "positive",
        MO5: "negative",
        MO6: "positive"
    };
    const shuffledMotifs = jsPsych.randomization.shuffle([
        ...motifRegistry
    ]);
    const highEvalMotifs = new Set(shuffledMotifs.slice(0, 4).map((m)=>m.id));
    let conditioningTrials = [];
    motifRegistry.forEach((motif)=>{
        const isHigh = highEvalMotifs.has(motif.id);
        const evalN = isHigh ? 11 : 10;
        const nonN = isHigh ? 5 : 6;
        const valence = motifValenceMap[motif.id];
        for(let i = 0; i < evalN; i++){
            const pool = valence === "positive" ? positiveWords : negativeWords;
            conditioningTrials.push({
                motif: motif.stimulus,
                motif_id: motif.id,
                word: jsPsych.randomization.sampleWithReplacement(pool, 1)[0],
                word_type: "real",
                valence
            });
        }
        for(let i = 0; i < nonN; i++)conditioningTrials.push({
            motif: motif.stimulus,
            motif_id: motif.id,
            word: jsPsych.randomization.sampleWithReplacement(pseudoWords, 1)[0],
            word_type: "nonword",
            valence: "nonword"
        });
    });
    // ---------------------------------------------------
    // CONDITIONING TRIALS
    // ---------------------------------------------------
    const fixation = {
        type: (0, _pluginHtmlKeyboardResponseDefault.default),
        stimulus: "+",
        choices: "NO_KEYS",
        trial_duration: FIXATION_DURATION
    };
    const motifTrial = {
        type: (0, _pluginImageKeyboardResponseDefault.default),
        stimulus: jsPsych.timelineVariable("motif"),
        stimulus_height: MOTIF_HEIGHT,
        maintain_aspect_ratio: true,
        choices: "NO_KEYS",
        trial_duration: MOTIF_DURATION
    };
    const wordTrial = {
        type: (0, _pluginImageKeyboardResponseDefault.default),
        stimulus: jsPsych.timelineVariable("word"),
        stimulus_height: WORD_HEIGHT,
        maintain_aspect_ratio: true,
        choices: [
            "f",
            "j"
        ],
        trial_duration: WORD_RESPONSE_DEADLINE,
        data: {
            phase: "conditioning",
            motif_id: jsPsych.timelineVariable("motif_id"),
            valence: jsPsych.timelineVariable("valence"),
            word: jsPsych.timelineVariable("word"),
            word_type: jsPsych.timelineVariable("word_type")
        },
        on_start: (trial)=>{
            trial.stimulus = wordImages[trial.stimulus];
        },
        on_finish: (data)=>{
            data.correct = data.word_type === "real" && data.response === "f" || data.word_type === "nonword" && data.response === "j";
        }
    };
    const iti = {
        type: (0, _pluginHtmlKeyboardResponseDefault.default),
        stimulus: "",
        choices: "NO_KEYS",
        trial_duration: ITI_DURATION
    };
    const conditioningTimeline = {
        timeline: [
            fixation,
            motifTrial,
            wordTrial,
            iti
        ],
        timeline_variables: jsPsych.randomization.shuffle(conditioningTrials)
    };
    // ---------------------------------------------------
    // BREAK
    // ---------------------------------------------------
    const ampBreak = {
        type: (0, _pluginHtmlKeyboardResponseDefault.default),
        stimulus: `
      <div style="max-width:800px; font-size:20px;">
        <p>You have completed the first part of the experiment.</p>
        <p>Please take a short break.</p>
        <p>Press any key to continue.</p>
      </div>
    `
    };
    // ---------------------------------------------------
    // AMP INSTRUCTIONS
    // ---------------------------------------------------
    const ampInstructions = {
        type: (0, _pluginHtmlKeyboardResponseDefault.default),
        stimulus: `
      <div style="max-width:800px; font-size:20px;">
        <p>You will see a brief image followed by a Chinese character.</p>
        <p>Please <strong>ignore the image</strong> and focus only on the character.</p>
        <p>Decide whether the character feels <strong>pleasant</strong> or <strong>unpleasant</strong>.</p>
        <p>Press <strong>F</strong> for pleasant.<br>
        Press <strong>J</strong> for unpleasant.</p>
        <p>Press any key to begin.</p>
      </div>
    `
    };
    // ---------------------------------------------------
    // AMP TRIALS
    // ---------------------------------------------------
    let ampTrials = [];
    motifRegistry.forEach((motif)=>{
        const valence = motifValenceMap[motif.id];
        for(let i = 0; i < 15; i++)ampTrials.push({
            motif: motif.stimulus,
            motif_id: motif.id,
            valence,
            character: jsPsych.randomization.sampleWithReplacement(ampCharacters, 1)[0]
        });
    });
    const ampFixation = {
        type: (0, _pluginHtmlKeyboardResponseDefault.default),
        stimulus: "+",
        choices: "NO_KEYS",
        trial_duration: FIXATION_DURATION
    };
    const ampPrime = {
        type: (0, _pluginImageKeyboardResponseDefault.default),
        stimulus: jsPsych.timelineVariable("motif"),
        stimulus_height: MOTIF_HEIGHT,
        maintain_aspect_ratio: true,
        choices: "NO_KEYS",
        trial_duration: AMP_PRIME_DURATION
    };
    const ampMask = {
        type: (0, _pluginHtmlKeyboardResponseDefault.default),
        stimulus: "####",
        choices: "NO_KEYS",
        trial_duration: AMP_MASK_DURATION
    };
    const ampTarget = {
        type: (0, _pluginImageKeyboardResponseDefault.default),
        stimulus: jsPsych.timelineVariable("character"),
        stimulus_height: WORD_HEIGHT,
        maintain_aspect_ratio: true,
        choices: [
            "f",
            "j"
        ],
        data: {
            phase: "AMP",
            motif_id: jsPsych.timelineVariable("motif_id"),
            conditioned_valence: jsPsych.timelineVariable("valence"),
            character: jsPsych.timelineVariable("character")
        }
    };
    const ampTimeline = {
        timeline: [
            ampFixation,
            ampPrime,
            ampMask,
            ampTarget,
            iti
        ],
        timeline_variables: jsPsych.randomization.shuffle(ampTrials)
    };
    // ---------------------------------------------------
    // MOTIF RATINGS (4 PAGES)
    // ---------------------------------------------------
    let ratingData = {};
    // ---------- PAGE 1: SYMMETRY ----------
    const motifRatings_symmetry = {
        type: (0, _pluginHtmlButtonResponseDefault.default),
        stimulus: `
    <div id="ratings">
      <p>
        <strong>Symmetry</strong><br><br>
        Please rate each motif based on how symmetrical it appears.
        Symmetry refers to how balanced or evenly arranged the image looks,
        for example whether its parts mirror each other or feel evenly distributed. 
        There are no right or wrong answers.
        <br><br>
        (1 = not at all symmetrical, 5 = very symmetrical)
      </p>

      ${motifRegistry.map((m)=>`
        <div style="margin-bottom:20px;">
          <img src="${m.stimulus}" height="150"><br>
          ${[
                1,
                2,
                3,
                4,
                5
            ].map((v)=>`<label>
              <input type="radio" name="${m.id}_symmetry" value="${v}">
              ${v}
            </label>`).join(" ")}
        </div>
      `).join("")}
    </div>
  `,
        choices: [
            "Continue"
        ],
        on_button_click: ()=>{
            motifRegistry.forEach((m)=>{
                const sel = document.querySelector(`input[name="${m.id}_symmetry"]:checked`);
                ratingData[`${m.id}_symmetry`] = sel ? sel.value : null;
            });
        }
    };
    // ---------- PAGE 2: COMPLEXITY ----------
    const motifRatings_complexity = {
        type: (0, _pluginHtmlButtonResponseDefault.default),
        stimulus: `
    <div id="ratings">
      <p>
        <strong>Visual Complexity</strong><br><br>
        Please rate each motif based on how visually complex it appears.
        Complexity refers to how many visual elements the image contains
        and how detailed or intricate it looks overall.
        There are no right or wrong answers.
        <br><br>
        (1 = very simple, 5 = very complex)
      </p>

      ${motifRegistry.map((m)=>`
        <div style="margin-bottom:20px;">
          <img src="${m.stimulus}" height="150"><br>
          ${[
                1,
                2,
                3,
                4,
                5
            ].map((v)=>`<label>
              <input type="radio" name="${m.id}_complexity" value="${v}">
              ${v}
            </label>`).join(" ")}
        </div>
      `).join("")}
    </div>
  `,
        choices: [
            "Continue"
        ],
        on_button_click: ()=>{
            motifRegistry.forEach((m)=>{
                const sel = document.querySelector(`input[name="${m.id}_complexity"]:checked`);
                ratingData[`${m.id}_complexity`] = sel ? sel.value : null;
            });
        }
    };
    // ---------- PAGE 3: MEMORABILITY ----------
    const motifRatings_memorability = {
        type: (0, _pluginHtmlButtonResponseDefault.default),
        stimulus: `
    <div id="ratings">
      <p>
        <strong>Memorability</strong><br><br>
        Please rate each motif based on how easy you think it would be to remember.
        This refers to how likely the image is to stay in your mind based on its visual features,
        not on meaning or emotional response.
        There are no right or wrong answers.
        <br><br>
        (1 = very difficult to remember, 5 = very easy to remember)
      </p>

      ${motifRegistry.map((m)=>`
        <div style="margin-bottom:20px;">
          <img src="${m.stimulus}" height="150"><br>
          ${[
                1,
                2,
                3,
                4,
                5
            ].map((v)=>`<label>
              <input type="radio" name="${m.id}_memorability" value="${v}">
              ${v}
            </label>`).join(" ")}
        </div>
      `).join("")}
    </div>
  `,
        choices: [
            "Continue"
        ],
        on_button_click: ()=>{
            motifRegistry.forEach((m)=>{
                const sel = document.querySelector(`input[name="${m.id}_memorability"]:checked`);
                ratingData[`${m.id}_memorability`] = sel ? sel.value : null;
            });
        }
    };
    // ---------- PAGE 4: DISTINCTIVENESS ----------
    const motifRatings_distinctiveness = {
        type: (0, _pluginHtmlButtonResponseDefault.default),
        stimulus: `
    <div id="ratings">
      <p>
        <strong>Distinctiveness</strong><br><br>
        Please rate each motif based on how much it stands out visually compared to the others.
        Distinctiveness refers to how noticeable or visually striking the image is relative to the rest.
        There are no right or wrong answers.
        <br><br>
        (1 = does not stand out, 5 = stands out very strongly)
      </p>

      ${motifRegistry.map((m)=>`
        <div style="margin-bottom:20px;">
          <img src="${m.stimulus}" height="150"><br>
          ${[
                1,
                2,
                3,
                4,
                5
            ].map((v)=>`<label>
              <input type="radio" name="${m.id}_distinctiveness" value="${v}">
              ${v}
            </label>`).join(" ")}
        </div>
      `).join("")}
    </div>
  `,
        choices: [
            "Continue"
        ],
        on_button_click: ()=>{
            motifRegistry.forEach((m)=>{
                const sel = document.querySelector(`input[name="${m.id}_distinctiveness"]:checked`);
                ratingData[`${m.id}_distinctiveness`] = sel ? sel.value : null;
            });
            jsPsych.data.write(ratingData);
        }
    };
    /// ---------------------------------------------------
    // MOTIF RANKING
    // ---------------------------------------------------
    let rankingData = {};
    const motifRanking = {
        type: (0, _pluginHtmlButtonResponseDefault.default),
        stimulus: `
    <div id="ranking">
      <p>
        <strong>Image Ranking</strong><br><br>
        Please rank the motifs according to how much they stood out to you overall during the task.
        This ranking should be based on visual noticeability or memorability,
        not on emotional response, pleasantness, or meaning. 
        There are no right or wrong answers.
        <br><br>
        (1 = stood out the most, 6 = stood out the least)
      </p>

      ${motifRegistry.map((m)=>`
        <div style="margin-bottom:15px;">
          <img src="${m.stimulus}" height="100"><br>
          <select id="${m.id}_rank">
            <option value="">Select</option>
            ${[
                1,
                2,
                3,
                4,
                5,
                6
            ].map((v)=>`<option value="${v}">${v}</option>`).join("")}
          </select>
        </div>
      `).join("")}
    </div>
  `,
        choices: [
            "Finish"
        ],
        on_button_click: ()=>{
            rankingData = {};
            motifRegistry.forEach((m)=>{
                rankingData[`${m.id}_rank`] = document.getElementById(`${m.id}_rank`).value || null;
            });
            jsPsych.data.write(rankingData);
        }
    };
    // ---------------------------------------------------
    // DEBRIEF
    // ---------------------------------------------------
    const debrief = {
        type: (0, _pluginHtmlKeyboardResponseDefault.default),
        stimulus: `
      <div style="max-width:800px; font-size:20px;">
        <p><strong>Debrief</strong></p>
        <p>Thank you for taking part in this study. Your participation is greatly appreciated.</p>
        <p>Your responses will be kept anonymous and used for research purposes only.</p>
        <p>If you have any questions or concerns about the study, please contact the researcher using the details provided in the information sheet.</p>
        <p>Press any key to finish.</p>
      </div>
    `
    };
    // ---------------------------------------------------
    // RUN
    // ---------------------------------------------------
    console.log({
        conditioningInstructions,
        conditioningTimeline,
        ampBreak,
        ampInstructions,
        ampTimeline,
        motifRatings_symmetry,
        motifRatings_complexity,
        motifRatings_memorability,
        motifRatings_distinctiveness,
        motifRanking,
        debrief
    });
    jsPsych.run([
        preload,
        welcome,
        demographics,
        conditioningInstructions,
        conditioningTimeline,
        ampBreak,
        ampInstructions,
        ampTimeline,
        motifRatings_symmetry,
        motifRatings_complexity,
        motifRatings_memorability,
        motifRatings_distinctiveness,
        motifRanking,
        debrief
    ], {
        on_finish: async ()=>{
            const data = jsPsych.data.get().json();
            await fetch("https://script.google.com/macros/s/AKfycbwFDUlhEelWdewt8Nb3-4JKDQ4wnTmKvxs8gj4zYOzf5ytaVOczNiE32RHX-drBTcebvw/exec", {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: data
            });
        }
    });
// ⭐ FINAL REQUIRED CLOSURE — closes DOMContentLoaded
});

},{"jspsych":"eQ9wp","@jspsych/plugin-preload":"YPkPB","@jspsych/plugin-html-keyboard-response":"kWlyD","@jspsych/plugin-image-keyboard-response":"5mu2p","@jspsych/plugin-html-button-response":"iYSCu","url:./motifs/MO1_EH.png":"iRflE","url:./motifs/MO2_GC.png":"inscD","url:./motifs/MO3_LP.png":"3yfS6","url:./motifs/MO4_NR.png":"jvzKD","url:./motifs/MO5_PST.png":"czasi","url:./motifs/MO6_ZSK.png":"2EdqQ","url:./words/positive/Pos_01.png":"fMP0e","url:./words/positive/Pos_02.png":"hpWZc","url:./words/positive/Pos_03.png":"gE3kW","url:./words/positive/Pos_04.png":"ifmER","url:./words/positive/Pos_05.png":"kRGzb","url:./words/positive/Pos_06.png":"3Y6Jz","url:./words/positive/Pos_07.png":"k0Q8x","url:./words/positive/Pos_08.png":"fOoWu","url:./words/positive/Pos_09.png":"5nA6W","url:./words/positive/Pos_10.png":"fHfDi","url:./words/negative/Neg_01.png":"PXnS7","url:./words/negative/Neg_02.png":"bVTy6","url:./words/negative/Neg_03.png":"fpbos","url:./words/negative/Neg_04.png":"kQZpj","url:./words/negative/Neg_05.png":"74Aaz","url:./words/negative/Neg_06.png":"2DUHR","url:./words/negative/Neg_07.png":"3xjxM","url:./words/negative/Neg_08.png":"kmhPv","url:./words/negative/Neg_09.png":"fPV6t","url:./words/negative/Neg_10.png":"9QUVc","url:./words/pseudoword/Pseudo_01.png":"kcC2R","url:./words/pseudoword/Pseudo_02.png":"KlcYi","url:./words/pseudoword/Pseudo_03.png":"fTRnZ","url:./words/pseudoword/Pseudo_04.png":"cY7Ij","url:./words/pseudoword/Pseudo_05.png":"6an5F","url:./words/pseudoword/Pseudo_06.png":"dzCZz","url:./words/pseudoword/Pseudo_07.png":"6SQID","url:./words/pseudoword/Pseudo_08.png":"1FI7Z","url:./words/pseudoword/Pseudo_09.png":"ko7Gl","url:./words/pseudoword/Pseudo_10.png":"ll5TC","url:./characters/char01.png":"dsA6M","url:./characters/char02.png":"inLtd","url:./characters/char03.png":"frQ45","url:./characters/char04.png":"bBPaG","url:./characters/char05.png":"6f4Er","url:./characters/char06.png":"lMK0Z","url:./characters/char07.png":"lV497","url:./characters/char08.png":"dWcY5","url:./characters/char09.png":"6IrT8","url:./characters/char10.png":"bboZM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eQ9wp":[function(require,module,exports,__globalThis) {
'use strict';
var autoBind = require("4806f8e4dafcd64b");
var rw = require("fc29b1affc07e266");
var seedrandom = require("9b5241ecb34c3058");
var version = "8.2.3";
class ExtensionManager {
    constructor(dependencies, extensionsConfiguration){
        this.dependencies = dependencies;
        this.extensionsConfiguration = extensionsConfiguration;
        this.extensions = Object.fromEntries(extensionsConfiguration.map((extension)=>[
                ExtensionManager.getExtensionNameByClass(extension.type),
                this.dependencies.instantiateExtension(extension.type)
            ]));
    }
    static getExtensionNameByClass(extensionClass) {
        return extensionClass["info"].name;
    }
    getExtensionInstanceByClass(extensionClass) {
        return this.extensions[ExtensionManager.getExtensionNameByClass(extensionClass)];
    }
    async initializeExtensions() {
        await Promise.all(this.extensionsConfiguration.map(({ type, params = {} })=>{
            this.getExtensionInstanceByClass(type).initialize(params);
            const extensionInfo = type["info"];
            if (!("version" in extensionInfo) && !("data" in extensionInfo)) console.warn(extensionInfo["name"], "is missing the 'version' and 'data' fields. Please update extension as 'version' and 'data' will be required in v9. See https://www.jspsych.org/latest/developers/extension-development/ for more details.");
            else if (!("version" in extensionInfo)) console.warn(extensionInfo["name"], "is missing the 'version' field. Please update extension as 'version' will be required in v9. See https://www.jspsych.org/latest/developers/extension-development/ for more details.");
            else if (!("data" in extensionInfo)) console.warn(extensionInfo["name"], "is missing the 'data' field. Please update extension as 'data' will be required in v9. See https://www.jspsych.org/latest/developers/extension-development/ for more details.");
        }));
    }
    onStart(trialExtensionsConfiguration = []) {
        for (const { type, params } of trialExtensionsConfiguration)this.getExtensionInstanceByClass(type)?.on_start(params);
    }
    onLoad(trialExtensionsConfiguration = []) {
        for (const { type, params } of trialExtensionsConfiguration)this.getExtensionInstanceByClass(type)?.on_load(params);
    }
    async onFinish(trialExtensionsConfiguration = []) {
        const results = await Promise.all(trialExtensionsConfiguration.map(({ type, params })=>Promise.resolve(this.getExtensionInstanceByClass(type)?.on_finish(params))));
        const extensionInfos = trialExtensionsConfiguration.length ? {
            extension_type: trialExtensionsConfiguration.map(({ type })=>type["info"].name),
            extension_version: trialExtensionsConfiguration.map(({ type })=>type["info"].version)
        } : {};
        results.unshift(extensionInfos);
        return Object.assign({}, ...results);
    }
}
function unique(arr) {
    return [
        ...new Set(arr)
    ];
}
function deepCopy(obj) {
    if (!obj) return obj;
    let out;
    if (Array.isArray(obj)) {
        out = [];
        for (const x of obj)out.push(deepCopy(x));
        return out;
    } else if (typeof obj === "object" && obj !== null) {
        out = {};
        for(const key in obj)if (obj.hasOwnProperty(key)) out[key] = deepCopy(obj[key]);
        return out;
    } else return obj;
}
function deepMerge(obj1, obj2) {
    let merged = {};
    for(const key in obj1)if (obj1.hasOwnProperty(key)) {
        if (typeof obj1[key] === "object" && obj2.hasOwnProperty(key)) merged[key] = deepMerge(obj1[key], obj2[key]);
        else merged[key] = obj1[key];
    }
    for(const key in obj2)if (obj2.hasOwnProperty(key)) {
        if (!merged.hasOwnProperty(key)) merged[key] = obj2[key];
        else if (typeof obj2[key] === "object") merged[key] = deepMerge(merged[key], obj2[key]);
        else merged[key] = obj2[key];
    }
    return merged;
}
var utils = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    deepCopy: deepCopy,
    deepMerge: deepMerge,
    unique: unique
});
class DataColumn {
    constructor(values = []){
        this.values = values;
    }
    sum() {
        let s = 0;
        for (const v of this.values)s += v;
        return s;
    }
    mean() {
        let sum = 0;
        let count = 0;
        for (const value of this.values)if (typeof value !== "undefined" && value !== null) {
            sum += value;
            count++;
        }
        if (count === 0) return void 0;
        return sum / count;
    }
    median() {
        if (this.values.length === 0) return void 0;
        const numbers = this.values.slice(0).sort(function(a, b) {
            return a - b;
        });
        const middle = Math.floor(numbers.length / 2);
        const isEven = numbers.length % 2 === 0;
        return isEven ? (numbers[middle] + numbers[middle - 1]) / 2 : numbers[middle];
    }
    min() {
        return Math.min.apply(null, this.values);
    }
    max() {
        return Math.max.apply(null, this.values);
    }
    count() {
        return this.values.length;
    }
    variance() {
        const mean = this.mean();
        let sum_square_error = 0;
        for (const x of this.values)sum_square_error += Math.pow(x - mean, 2);
        const mse = sum_square_error / (this.values.length - 1);
        return mse;
    }
    sd() {
        const mse = this.variance();
        const rmse = Math.sqrt(mse);
        return rmse;
    }
    frequencies() {
        const unique = {};
        for (const x of this.values)if (typeof unique[x] === "undefined") unique[x] = 1;
        else unique[x]++;
        return unique;
    }
    all(eval_fn) {
        for (const x of this.values){
            if (!eval_fn(x)) return false;
        }
        return true;
    }
    subset(eval_fn) {
        const out = [];
        for (const x of this.values)if (eval_fn(x)) out.push(x);
        return new DataColumn(out);
    }
}
function saveTextToFile(textstr, filename) {
    const blobToSave = new Blob([
        textstr
    ], {
        type: "text/plain"
    });
    let blobURL = "";
    if (typeof window.webkitURL !== "undefined") blobURL = window.webkitURL.createObjectURL(blobToSave);
    else blobURL = window.URL.createObjectURL(blobToSave);
    const link = document.createElement("a");
    link.id = "jspsych-download-as-text-link";
    link.style.display = "none";
    link.download = filename;
    link.href = blobURL;
    link.click();
}
function JSON2CSV(objArray) {
    const array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    let line = "";
    let result = "";
    const columns = [];
    for (const row of array)for(const key in row){
        let keyString = key + "";
        keyString = '"' + keyString.replace(/"/g, '""') + '",';
        if (!columns.includes(key)) {
            columns.push(key);
            line += keyString;
        }
    }
    line = line.slice(0, -1);
    result += line + "\r\n";
    for (const row of array){
        line = "";
        for (const col of columns){
            let value = typeof row[col] === "undefined" ? "" : row[col];
            if (typeof value == "object") value = JSON.stringify(value);
            const valueString = value + "";
            line += '"' + valueString.replace(/"/g, '""') + '",';
        }
        line = line.slice(0, -1);
        result += line + "\r\n";
    }
    return result;
}
function getQueryString() {
    const a = window.location.search.substr(1).split("&");
    const b = {};
    for(let i = 0; i < a.length; ++i){
        const p = a[i].split("=", 2);
        if (p.length == 1) b[p[0]] = "";
        else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}
class DataCollection {
    constructor(data = []){
        this.trials = data;
    }
    push(new_data) {
        this.trials.push(new_data);
        return this;
    }
    join(other_data_collection) {
        this.trials = this.trials.concat(other_data_collection.values());
        return this;
    }
    top() {
        if (this.trials.length <= 1) return this;
        else return new DataCollection([
            this.trials[this.trials.length - 1]
        ]);
    }
    /**
   * Queries the first n elements in a collection of trials.
   *
   * @param n A positive integer of elements to return. A value of
   *          n that is less than 1 will throw an error.
   *
   * @return First n objects of a collection of trials. If fewer than
   *         n trials are available, the trials.length elements will
   *         be returned.
   *
   */ first(n = 1) {
        if (n < 1) throw `You must query with a positive nonzero integer. Please use a
               different value for n.`;
        if (this.trials.length === 0) return new DataCollection();
        if (n > this.trials.length) n = this.trials.length;
        return new DataCollection(this.trials.slice(0, n));
    }
    /**
   * Queries the last n elements in a collection of trials.
   *
   * @param n A positive integer of elements to return. A value of
   *          n that is less than 1 will throw an error.
   *
   * @return Last n objects of a collection of trials. If fewer than
   *         n trials are available, the trials.length elements will
   *         be returned.
   *
   */ last(n = 1) {
        if (n < 1) throw `You must query with a positive nonzero integer. Please use a
               different value for n.`;
        if (this.trials.length === 0) return new DataCollection();
        if (n > this.trials.length) n = this.trials.length;
        return new DataCollection(this.trials.slice(this.trials.length - n, this.trials.length));
    }
    values() {
        return this.trials;
    }
    count() {
        return this.trials.length;
    }
    readOnly() {
        return new DataCollection(deepCopy(this.trials));
    }
    addToAll(properties) {
        for (const trial of this.trials)Object.assign(trial, properties);
        return this;
    }
    addToLast(properties) {
        if (this.trials.length > 0) Object.assign(this.trials[this.trials.length - 1], properties);
        return this;
    }
    filter(filters) {
        let f;
        if (!Array.isArray(filters)) f = deepCopy([
            filters
        ]);
        else f = deepCopy(filters);
        const filtered_data = [];
        for (const trial of this.trials){
            let keep = false;
            for (const filter of f){
                let match = true;
                for (const key of Object.keys(filter)){
                    if (typeof trial[key] !== "undefined" && trial[key] === filter[key]) ;
                    else match = false;
                }
                if (match) {
                    keep = true;
                    break;
                }
            }
            if (keep) filtered_data.push(trial);
        }
        return new DataCollection(filtered_data);
    }
    filterCustom(fn) {
        return new DataCollection(this.trials.filter(fn));
    }
    filterColumns(columns) {
        return new DataCollection(this.trials.map((trial)=>Object.fromEntries(columns.filter((key)=>key in trial).map((key)=>[
                    key,
                    trial[key]
                ]))));
    }
    select(column) {
        const values = [];
        for (const trial of this.trials)if (typeof trial[column] !== "undefined") values.push(trial[column]);
        return new DataColumn(values);
    }
    ignore(columns) {
        if (!Array.isArray(columns)) columns = [
            columns
        ];
        const o = deepCopy(this.trials);
        for (const trial of o)for (const delete_key of columns)delete trial[delete_key];
        return new DataCollection(o);
    }
    uniqueNames() {
        const names = [];
        for (const trial of this.trials){
            for (const key of Object.keys(trial))if (!names.includes(key)) names.push(key);
        }
        return names;
    }
    csv() {
        return JSON2CSV(this.trials);
    }
    json(pretty = false) {
        if (pretty) return JSON.stringify(this.trials, null, "	");
        return JSON.stringify(this.trials);
    }
    localSave(format, filename) {
        format = format.toLowerCase();
        let data_string;
        if (format === "json") data_string = this.json();
        else if (format === "csv") data_string = this.csv();
        else throw new Error('Invalid format specified for localSave. Must be "json" or "csv".');
        saveTextToFile(data_string, filename);
    }
}
class JsPsychData {
    constructor(dependencies){
        this.dependencies = dependencies;
        /** Data properties for all trials */ this.dataProperties = {};
        this.interactionListeners = {
            blur: ()=>{
                this.addInteractionRecord("blur");
            },
            focus: ()=>{
                this.addInteractionRecord("focus");
            },
            fullscreenchange: ()=>{
                this.addInteractionRecord(// @ts-expect-error
                document.isFullScreen || // @ts-expect-error
                document.webkitIsFullScreen || // @ts-expect-error
                document.mozIsFullScreen || document.fullscreenElement ? "fullscreenenter" : "fullscreenexit");
            }
        };
        this.reset();
    }
    reset() {
        this.results = new DataCollection();
        this.resultToTrialMap = /* @__PURE__ */ new WeakMap();
        this.interactionRecords = new DataCollection();
    }
    get() {
        return this.results;
    }
    getInteractionData() {
        return this.interactionRecords;
    }
    write(trial) {
        const result = trial.getResult();
        Object.assign(result, this.dataProperties);
        this.results.push(result);
        this.resultToTrialMap.set(result, trial);
    }
    addProperties(properties) {
        this.results.addToAll(properties);
        this.dataProperties = Object.assign({}, this.dataProperties, properties);
    }
    addDataToLastTrial(data) {
        this.results.addToLast(data);
    }
    getLastTrialData() {
        return this.results.top();
    }
    getLastTimelineData() {
        const lastResult = this.getLastTrialData().values()[0];
        return new DataCollection(lastResult ? this.resultToTrialMap.get(lastResult).parent.getResults() : []);
    }
    displayData(format = "json") {
        format = format.toLowerCase();
        if (format !== "json" && format !== "csv") {
            console.log("Invalid format declared for displayData function. Using json as default.");
            format = "json";
        }
        const dataContainer = document.createElement("pre");
        dataContainer.id = "jspsych-data-display";
        dataContainer.textContent = format === "json" ? this.results.json(true) : this.results.csv();
        this.dependencies.getDisplayElement().replaceChildren(dataContainer);
    }
    urlVariables() {
        if (typeof this.query_string == "undefined") this.query_string = getQueryString();
        return this.query_string;
    }
    getURLVariable(whichvar) {
        return this.urlVariables()[whichvar];
    }
    addInteractionRecord(event) {
        const record = {
            event,
            ...this.dependencies.getProgress()
        };
        this.interactionRecords.push(record);
        this.dependencies.onInteractionRecordAdded(record);
    }
    createInteractionListeners() {
        window.addEventListener("blur", this.interactionListeners.blur);
        window.addEventListener("focus", this.interactionListeners.focus);
        document.addEventListener("fullscreenchange", this.interactionListeners.fullscreenchange);
        document.addEventListener("mozfullscreenchange", this.interactionListeners.fullscreenchange);
        document.addEventListener("webkitfullscreenchange", this.interactionListeners.fullscreenchange);
    }
    removeInteractionListeners() {
        window.removeEventListener("blur", this.interactionListeners.blur);
        window.removeEventListener("focus", this.interactionListeners.focus);
        document.removeEventListener("fullscreenchange", this.interactionListeners.fullscreenchange);
        document.removeEventListener("mozfullscreenchange", this.interactionListeners.fullscreenchange);
        document.removeEventListener("webkitfullscreenchange", this.interactionListeners.fullscreenchange);
    }
}
class KeyboardListenerAPI {
    constructor(getRootElement, areResponsesCaseSensitive = false, minimumValidRt = 0){
        this.getRootElement = getRootElement;
        this.areResponsesCaseSensitive = areResponsesCaseSensitive;
        this.minimumValidRt = minimumValidRt;
        this.listeners = /* @__PURE__ */ new Set();
        this.heldKeys = /* @__PURE__ */ new Set();
        this.areRootListenersRegistered = false;
        autoBind(this);
        this.registerRootListeners();
    }
    /**
   * If not previously done and `this.getRootElement()` returns an element, adds the root key
   * listeners to that element.
   */ registerRootListeners() {
        if (!this.areRootListenersRegistered) {
            const rootElement = this.getRootElement();
            if (rootElement) {
                rootElement.addEventListener("keydown", this.rootKeydownListener);
                rootElement.addEventListener("keyup", this.rootKeyupListener);
                this.areRootListenersRegistered = true;
            }
        }
    }
    rootKeydownListener(e) {
        for (const listener of [
            ...this.listeners
        ])listener(e);
        this.heldKeys.add(this.toLowerCaseIfInsensitive(e.key));
    }
    toLowerCaseIfInsensitive(string) {
        return this.areResponsesCaseSensitive ? string : string.toLowerCase();
    }
    rootKeyupListener(e) {
        this.heldKeys.delete(this.toLowerCaseIfInsensitive(e.key));
    }
    isResponseValid(validResponses, allowHeldKey, key) {
        if (!allowHeldKey && this.heldKeys.has(key)) return false;
        if (validResponses === "ALL_KEYS") return true;
        if (validResponses === "NO_KEYS") return false;
        return validResponses.includes(key);
    }
    getKeyboardResponse({ callback_function, valid_responses = "ALL_KEYS", rt_method = "performance", persist, audio_context, audio_context_start_time, allow_held_key = false, minimum_valid_rt = this.minimumValidRt }) {
        if (rt_method !== "performance" && rt_method !== "audio") {
            console.log('Invalid RT method specified in getKeyboardResponse. Defaulting to "performance" method.');
            rt_method = "performance";
        }
        const usePerformanceRt = rt_method === "performance";
        const startTime = usePerformanceRt ? performance.now() : audio_context_start_time * 1e3;
        this.registerRootListeners();
        if (!this.areResponsesCaseSensitive && typeof valid_responses !== "string") valid_responses = valid_responses.map((r)=>r.toLowerCase());
        const listener = (e)=>{
            const rt = Math.round((rt_method == "performance" ? performance.now() : audio_context.currentTime * 1e3) - startTime);
            if (rt < minimum_valid_rt) return;
            const key = this.toLowerCaseIfInsensitive(e.key);
            if (this.isResponseValid(valid_responses, allow_held_key, key)) {
                e.preventDefault();
                if (!persist) this.cancelKeyboardResponse(listener);
                callback_function({
                    key: e.key,
                    rt
                });
            }
        };
        this.listeners.add(listener);
        return listener;
    }
    cancelKeyboardResponse(listener) {
        this.listeners.delete(listener);
    }
    cancelAllKeyboardResponses() {
        this.listeners.clear();
    }
    compareKeys(key1, key2) {
        if (typeof key1 !== "string" && key1 !== null || typeof key2 !== "string" && key2 !== null) {
            console.error("Error in jsPsych.pluginAPI.compareKeys: arguments must be key strings or null.");
            return void 0;
        }
        if (typeof key1 === "string" && typeof key2 === "string") return this.areResponsesCaseSensitive ? key1 === key2 : key1.toLowerCase() === key2.toLowerCase();
        return key1 === null && key2 === null;
    }
}
var ParameterType = /* @__PURE__ */ ((ParameterType2)=>{
    ParameterType2[ParameterType2["BOOL"] = 0] = "BOOL";
    ParameterType2[ParameterType2["STRING"] = 1] = "STRING";
    ParameterType2[ParameterType2["INT"] = 2] = "INT";
    ParameterType2[ParameterType2["FLOAT"] = 3] = "FLOAT";
    ParameterType2[ParameterType2["FUNCTION"] = 4] = "FUNCTION";
    ParameterType2[ParameterType2["KEY"] = 5] = "KEY";
    ParameterType2[ParameterType2["KEYS"] = 6] = "KEYS";
    ParameterType2[ParameterType2["SELECT"] = 7] = "SELECT";
    ParameterType2[ParameterType2["HTML_STRING"] = 8] = "HTML_STRING";
    ParameterType2[ParameterType2["IMAGE"] = 9] = "IMAGE";
    ParameterType2[ParameterType2["AUDIO"] = 10] = "AUDIO";
    ParameterType2[ParameterType2["VIDEO"] = 11] = "VIDEO";
    ParameterType2[ParameterType2["OBJECT"] = 12] = "OBJECT";
    ParameterType2[ParameterType2["COMPLEX"] = 13] = "COMPLEX";
    ParameterType2[ParameterType2["TIMELINE"] = 14] = "TIMELINE";
    return ParameterType2;
})(ParameterType || {});
class AudioPlayer {
    constructor(src, options = {
        useWebAudio: false
    }){
        this.src = src;
        this.useWebAudio = options.useWebAudio;
        this.audioContext = options.audioContext || null;
    }
    async load() {
        if (this.useWebAudio) this.webAudioBuffer = await this.preloadWebAudio(this.src);
        else this.audio = await this.preloadHTMLAudio(this.src);
    }
    play() {
        if (this.audio instanceof HTMLAudioElement) this.audio.play();
        else {
            if (!this.audio) this.audio = this.getAudioSourceNode(this.webAudioBuffer);
            this.audio.start();
        }
    }
    stop() {
        if (this.audio instanceof HTMLAudioElement) {
            this.audio.pause();
            this.audio.currentTime = 0;
        } else {
            this.audio.stop();
            this.audio = this.getAudioSourceNode(this.webAudioBuffer);
        }
    }
    addEventListener(eventName, callback) {
        if (!this.audio && this.webAudioBuffer) this.audio = this.getAudioSourceNode(this.webAudioBuffer);
        this.audio.addEventListener(eventName, callback);
    }
    removeEventListener(eventName, callback) {
        if (!this.audio && this.webAudioBuffer) this.audio = this.getAudioSourceNode(this.webAudioBuffer);
        this.audio.removeEventListener(eventName, callback);
    }
    getAudioSourceNode(audioBuffer) {
        const source = this.audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(this.audioContext.destination);
        return source;
    }
    async preloadWebAudio(src) {
        const buffer = await fetch(src);
        const arrayBuffer = await buffer.arrayBuffer();
        const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
        const source = this.audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(this.audioContext.destination);
        return audioBuffer;
    }
    async preloadHTMLAudio(src) {
        return new Promise((resolve, reject)=>{
            const audio = new Audio(src);
            audio.addEventListener("canplaythrough", ()=>{
                resolve(audio);
            });
            audio.addEventListener("error", (err)=>{
                reject(err);
            });
            audio.addEventListener("abort", (err)=>{
                reject(err);
            });
        });
    }
}
const preloadParameterTypes = [
    ParameterType.AUDIO,
    ParameterType.IMAGE,
    ParameterType.VIDEO
];
class MediaAPI {
    constructor(useWebaudio){
        this.useWebaudio = useWebaudio;
        // video //
        this.video_buffers = {};
        // audio //
        this.context = null;
        this.audio_buffers = [];
        // preloading stimuli //
        this.preload_requests = [];
        this.img_cache = {};
        this.preloadMap = /* @__PURE__ */ new Map();
        this.microphone_recorder = null;
        this.camera_stream = null;
        this.camera_recorder = null;
        if (this.useWebaudio && typeof window !== "undefined" && typeof window.AudioContext !== "undefined") this.context = new AudioContext();
    }
    getVideoBuffer(videoID) {
        if (videoID.startsWith("blob:")) this.video_buffers[videoID] = videoID;
        return this.video_buffers[videoID];
    }
    audioContext() {
        if (this.context && this.context.state !== "running") this.context.resume();
        return this.context;
    }
    async getAudioPlayer(audioID) {
        if (this.audio_buffers[audioID] instanceof AudioPlayer) return this.audio_buffers[audioID];
        else {
            this.audio_buffers[audioID] = new AudioPlayer(audioID, {
                useWebAudio: this.useWebaudio,
                audioContext: this.context
            });
            await this.audio_buffers[audioID].load();
            return this.audio_buffers[audioID];
        }
    }
    preloadAudio(files, callback_complete = ()=>{}, callback_load = (filepath)=>{}, callback_error = (error)=>{}) {
        files = unique(files.flat());
        let n_loaded = 0;
        if (files.length == 0) {
            callback_complete();
            return;
        }
        for (const file of files)if (this.audio_buffers[file] instanceof AudioPlayer) {
            n_loaded++;
            callback_load(file);
            if (n_loaded == files.length) callback_complete();
        } else {
            this.audio_buffers[file] = new AudioPlayer(file, {
                useWebAudio: this.useWebaudio,
                audioContext: this.context
            });
            this.audio_buffers[file].load().then(()=>{
                n_loaded++;
                callback_load(file);
                if (n_loaded == files.length) callback_complete();
            }).catch((e)=>{
                callback_error(e);
            });
        }
    }
    preloadImages(images, callback_complete = ()=>{}, callback_load = (filepath)=>{}, callback_error = (error_msg)=>{}) {
        images = unique(images.flat());
        var n_loaded = 0;
        if (images.length === 0) {
            callback_complete();
            return;
        }
        for(let i = 0; i < images.length; i++){
            const img = new Image();
            const src = images[i];
            img.onload = ()=>{
                n_loaded++;
                callback_load(src);
                if (n_loaded === images.length) callback_complete();
            };
            img.onerror = (e)=>{
                callback_error({
                    source: src,
                    error: e
                });
            };
            img.src = src;
            this.img_cache[src] = img;
            this.preload_requests.push(img);
        }
    }
    preloadVideo(videos, callback_complete = ()=>{}, callback_load = (filepath)=>{}, callback_error = (error_msg)=>{}) {
        videos = unique(videos.flat());
        let n_loaded = 0;
        if (videos.length === 0) {
            callback_complete();
            return;
        }
        for (const video of videos){
            const video_buffers = this.video_buffers;
            const request = new XMLHttpRequest();
            request.open("GET", video, true);
            request.responseType = "blob";
            request.onload = ()=>{
                if (request.status === 200 || request.status === 0) {
                    const videoBlob = request.response;
                    video_buffers[video] = URL.createObjectURL(videoBlob);
                    n_loaded++;
                    callback_load(video);
                    if (n_loaded === videos.length) callback_complete();
                }
            };
            request.onerror = (e)=>{
                let err = e;
                if (request.status == 404) err = "404";
                callback_error({
                    source: video,
                    error: err
                });
            };
            request.onloadend = (e)=>{
                if (request.status == 404) callback_error({
                    source: video,
                    error: "404"
                });
            };
            request.send();
            this.preload_requests.push(request);
        }
    }
    getAutoPreloadList(timeline_description) {
        const preloadPaths = Object.fromEntries(preloadParameterTypes.map((type)=>[
                type,
                /* @__PURE__ */ new Set()
            ]));
        const traverseTimeline = (node, inheritedTrialType)=>{
            const isTimeline = typeof node.timeline !== "undefined";
            if (isTimeline) for (const childNode of node.timeline)traverseTimeline(childNode, node.type ?? inheritedTrialType);
            else if ((node.type ?? inheritedTrialType)?.info) {
                const { name: pluginName, parameters } = (node.type ?? inheritedTrialType).info;
                if (!this.preloadMap.has(pluginName)) this.preloadMap.set(pluginName, Object.fromEntries(Object.entries(parameters).filter(([_name, { type, preload }])=>preloadParameterTypes.includes(type) && (preload ?? true)).map(([name, { type }])=>[
                        name,
                        type
                    ])));
                for (const [parameterName, parameterType] of Object.entries(this.preloadMap.get(pluginName))){
                    const parameterValue = node[parameterName];
                    const elements = preloadPaths[parameterType];
                    if (typeof parameterValue === "string") elements.add(parameterValue);
                    else if (Array.isArray(parameterValue)) {
                        for (const element of parameterValue.flat())if (typeof element === "string") elements.add(element);
                    }
                }
            }
        };
        traverseTimeline({
            timeline: timeline_description
        });
        return {
            images: [
                ...preloadPaths[ParameterType.IMAGE]
            ],
            audio: [
                ...preloadPaths[ParameterType.AUDIO]
            ],
            video: [
                ...preloadPaths[ParameterType.VIDEO]
            ]
        };
    }
    cancelPreloads() {
        for (const request of this.preload_requests){
            request.onload = ()=>{};
            request.onerror = ()=>{};
            request.oncanplaythrough = ()=>{};
            request.onabort = ()=>{};
        }
        this.preload_requests = [];
    }
    initializeMicrophoneRecorder(stream) {
        const recorder = new MediaRecorder(stream);
        this.microphone_recorder = recorder;
    }
    getMicrophoneRecorder() {
        return this.microphone_recorder;
    }
    initializeCameraRecorder(stream, opts) {
        let mimeType = this.getCompatibleMimeType() || "video/webm";
        const recorderOptions = {
            ...opts,
            mimeType
        };
        this.camera_stream = stream;
        const recorder = new MediaRecorder(stream, recorderOptions);
        this.camera_recorder = recorder;
    }
    // mimetype checking code adapted from https://github.com/lookit/lookit-jspsych/blob/develop/packages/record/src/videoConfig.ts#L673-L699
    /** returns a compatible mimetype string, or null if none from the array are supported. */ getCompatibleMimeType() {
        const types = [
            // chrome firefox edge
            "video/webm;codecs=vp9,opus",
            "video/webm;codecs=vp8,opus",
            // general
            "video/mp4;codecs=avc1.42E01E,mp4a.40.2",
            // safari
            "video/mp4;codecs=h264,aac",
            "video/mp4;codecs=hevc,aac"
        ];
        for (const mimeType of types){
            if (MediaRecorder.isTypeSupported(mimeType)) return mimeType;
        }
        return null;
    }
    getCameraStream() {
        return this.camera_stream;
    }
    getCameraRecorder() {
        return this.camera_recorder;
    }
}
class SimulationAPI {
    constructor(getDisplayContainerElement, setJsPsychTimeout){
        this.getDisplayContainerElement = getDisplayContainerElement;
        this.setJsPsychTimeout = setJsPsychTimeout;
    }
    dispatchEvent(event) {
        this.getDisplayContainerElement().dispatchEvent(event);
    }
    /**
   * Dispatches a `keydown` event for the specified key
   * @param key Character code (`.key` property) for the key to press.
   */ keyDown(key) {
        this.dispatchEvent(new KeyboardEvent("keydown", {
            key
        }));
    }
    /**
   * Dispatches a `keyup` event for the specified key
   * @param key Character code (`.key` property) for the key to press.
   */ keyUp(key) {
        this.dispatchEvent(new KeyboardEvent("keyup", {
            key
        }));
    }
    /**
   * Dispatches a `keydown` and `keyup` event in sequence to simulate pressing a key.
   * @param key Character code (`.key` property) for the key to press.
   * @param delay Length of time to wait (ms) before executing action
   */ pressKey(key, delay = 0) {
        if (delay > 0) this.setJsPsychTimeout(()=>{
            this.keyDown(key);
            this.keyUp(key);
        }, delay);
        else {
            this.keyDown(key);
            this.keyUp(key);
        }
    }
    /**
   * Dispatches `mousedown`, `mouseup`, and `click` events on the target element
   * @param target The element to click
   * @param delay Length of time to wait (ms) before executing action
   */ clickTarget(target, delay = 0) {
        if (delay > 0) this.setJsPsychTimeout(()=>{
            target.dispatchEvent(new MouseEvent("mousedown", {
                bubbles: true
            }));
            target.dispatchEvent(new MouseEvent("mouseup", {
                bubbles: true
            }));
            target.dispatchEvent(new MouseEvent("click", {
                bubbles: true
            }));
        }, delay);
        else {
            target.dispatchEvent(new MouseEvent("mousedown", {
                bubbles: true
            }));
            target.dispatchEvent(new MouseEvent("mouseup", {
                bubbles: true
            }));
            target.dispatchEvent(new MouseEvent("click", {
                bubbles: true
            }));
        }
    }
    /**
   * Sets the value of a target text input
   * @param target A text input element to fill in
   * @param text Text to input
   * @param delay Length of time to wait (ms) before executing action
   */ fillTextInput(target, text, delay = 0) {
        if (delay > 0) this.setJsPsychTimeout(()=>{
            target.value = text;
        }, delay);
        else target.value = text;
    }
    /**
   * Picks a valid key from `choices`, taking into account jsPsych-specific
   * identifiers like "NO_KEYS" and "ALL_KEYS".
   * @param choices Which keys are valid.
   * @returns A key selected at random from the valid keys.
   */ getValidKey(choices) {
        const possible_keys = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            " "
        ];
        let key;
        if (choices == "NO_KEYS") key = null;
        else if (choices == "ALL_KEYS") key = possible_keys[Math.floor(Math.random() * possible_keys.length)];
        else {
            const flat_choices = choices.flat();
            key = flat_choices[Math.floor(Math.random() * flat_choices.length)];
        }
        return key;
    }
    mergeSimulationData(default_data, simulation_options) {
        return {
            ...default_data,
            ...simulation_options?.data
        };
    }
    ensureSimulationDataConsistency(trial, data) {
        if (data.rt) data.rt = Math.round(data.rt);
        if (trial.trial_duration && data.rt && data.rt > trial.trial_duration) {
            data.rt = null;
            if (data.response) data.response = null;
            if (data.correct) data.correct = false;
        }
        if (trial.choices && trial.choices == "NO_KEYS") {
            if (data.rt) data.rt = null;
            if (data.response) data.response = null;
        }
        if (trial.allow_response_before_complete) {
            if (trial.sequence_reps && trial.frame_time) {
                const min_time = trial.sequence_reps * trial.frame_time * trial.stimuli.length;
                if (data.rt < min_time) {
                    data.rt = null;
                    data.response = null;
                }
            }
        }
    }
}
class TimeoutAPI {
    constructor(){
        this.timeout_handlers = [];
    }
    /**
   * Calls a function after a specified delay, in milliseconds.
   * @param callback The function to call after the delay.
   * @param delay The number of milliseconds to wait before calling the function.
   * @returns A handle that can be used to clear the timeout with clearTimeout.
   */ setTimeout(callback, delay) {
        const handle = window.setTimeout(callback, delay);
        this.timeout_handlers.push(handle);
        return handle;
    }
    /**
   * Clears all timeouts that have been created with setTimeout.
   */ clearAllTimeouts() {
        for (const handler of this.timeout_handlers)clearTimeout(handler);
        this.timeout_handlers = [];
    }
}
function createJointPluginAPIObject(jsPsych) {
    const settings = jsPsych.getInitSettings();
    const keyboardListenerAPI = new KeyboardListenerAPI(jsPsych.getDisplayContainerElement, settings.case_sensitive_responses, settings.minimum_valid_rt);
    const timeoutAPI = new TimeoutAPI();
    const mediaAPI = new MediaAPI(settings.use_webaudio);
    const simulationAPI = new SimulationAPI(jsPsych.getDisplayContainerElement, timeoutAPI.setTimeout.bind(timeoutAPI));
    return Object.assign({}, ...[
        keyboardListenerAPI,
        timeoutAPI,
        mediaAPI,
        simulationAPI
    ].map((object)=>autoBind(object)));
}
function setSeed(seed = Math.random().toString()) {
    Math.random = seedrandom(seed);
    return seed;
}
function repeat(array, repetitions, unpack = false) {
    const arr_isArray = Array.isArray(array);
    const rep_isArray = Array.isArray(repetitions);
    if (!arr_isArray) {
        if (!rep_isArray) {
            array = [
                array
            ];
            repetitions = [
                repetitions
            ];
        } else {
            repetitions = [
                repetitions[0]
            ];
            console.log("Unclear parameters given to randomization.repeat. Multiple set sizes specified, but only one item exists to sample. Proceeding using the first set size.");
        }
    } else {
        if (!rep_isArray) {
            let reps = [];
            for(let i = 0; i < array.length; i++)reps.push(repetitions);
            repetitions = reps;
        } else if (array.length != repetitions.length) {
            console.warn("Unclear parameters given to randomization.repeat. Items and repetitions are unequal lengths. Behavior may not be as expected.");
            if (repetitions.length < array.length) {
                let reps = [];
                for(let i = 0; i < array.length; i++)reps.push(repetitions);
                repetitions = reps;
            } else repetitions = repetitions.slice(0, array.length);
        }
    }
    let allsamples = [];
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < repetitions[i]; j++)if (array[i] == null || typeof array[i] != "object") allsamples.push(array[i]);
        else allsamples.push(Object.assign({}, array[i]));
    }
    let out = shuffle(allsamples);
    if (unpack) out = unpackArray(out);
    return out;
}
function shuffle(array) {
    if (!Array.isArray(array)) console.error("Argument to shuffle() must be an array.");
    const copy_array = array.slice(0);
    let m = copy_array.length, t, i;
    while(m){
        i = Math.floor(Math.random() * m--);
        t = copy_array[m];
        copy_array[m] = copy_array[i];
        copy_array[i] = t;
    }
    return copy_array;
}
function shuffleNoRepeats(arr, equalityTest) {
    if (!Array.isArray(arr)) console.error("First argument to shuffleNoRepeats() must be an array.");
    if (typeof equalityTest !== "undefined" && typeof equalityTest !== "function") console.error("Second argument to shuffleNoRepeats() must be a function.");
    if (typeof equalityTest == "undefined") equalityTest = function(a, b) {
        if (a === b) return true;
        else return false;
    };
    const random_shuffle = shuffle(arr);
    for(let i = 0; i < random_shuffle.length - 1; i++)if (equalityTest(random_shuffle[i], random_shuffle[i + 1])) {
        let random_pick = Math.floor(Math.random() * (random_shuffle.length - 2)) + 1;
        while(equalityTest(random_shuffle[i + 1], random_shuffle[random_pick]) || equalityTest(random_shuffle[i + 1], random_shuffle[random_pick + 1]) || equalityTest(random_shuffle[i + 1], random_shuffle[random_pick - 1]) || equalityTest(random_shuffle[i], random_shuffle[random_pick]))random_pick = Math.floor(Math.random() * (random_shuffle.length - 2)) + 1;
        const new_neighbor = random_shuffle[random_pick];
        random_shuffle[random_pick] = random_shuffle[i + 1];
        random_shuffle[i + 1] = new_neighbor;
    }
    return random_shuffle;
}
function shuffleAlternateGroups(arr_groups, random_group_order = false) {
    const n_groups = arr_groups.length;
    if (n_groups == 1) {
        console.warn("shuffleAlternateGroups() was called with only one group. Defaulting to simple shuffle.");
        return shuffle(arr_groups[0]);
    }
    let group_order = [];
    for(let i = 0; i < n_groups; i++)group_order.push(i);
    if (random_group_order) group_order = shuffle(group_order);
    const randomized_groups = [];
    let min_length = null;
    for(let i = 0; i < n_groups; i++){
        min_length = min_length === null ? arr_groups[i].length : Math.min(min_length, arr_groups[i].length);
        randomized_groups.push(shuffle(arr_groups[i]));
    }
    const out = [];
    for(let i = 0; i < min_length; i++)for(let j = 0; j < group_order.length; j++)out.push(randomized_groups[group_order[j]][i]);
    return out;
}
function sampleWithoutReplacement(arr, size) {
    if (!Array.isArray(arr)) console.error("First argument to sampleWithoutReplacement() must be an array");
    if (size > arr.length) console.error("Cannot take a sample larger than the size of the set of items to sample.");
    return shuffle(arr).slice(0, size);
}
function sampleWithReplacement(arr, size, weights) {
    if (!Array.isArray(arr)) console.error("First argument to sampleWithReplacement() must be an array");
    const normalized_weights = [];
    if (typeof weights !== "undefined") {
        if (weights.length !== arr.length) console.error("The length of the weights array must equal the length of the array to be sampled from.");
        let weight_sum = 0;
        for (const weight of weights)weight_sum += weight;
        for (const weight of weights)normalized_weights.push(weight / weight_sum);
    } else for(let i = 0; i < arr.length; i++)normalized_weights.push(1 / arr.length);
    const cumulative_weights = [
        normalized_weights[0]
    ];
    for(let i = 1; i < normalized_weights.length; i++)cumulative_weights.push(normalized_weights[i] + cumulative_weights[i - 1]);
    const samp = [];
    for(let i = 0; i < size; i++){
        const rnd = Math.random();
        let index = 0;
        while(rnd > cumulative_weights[index])index++;
        samp.push(arr[index]);
    }
    return samp;
}
function factorial(factors, repetitions = 1, unpack = false) {
    let design = [
        {}
    ];
    for (const [factorName, factor] of Object.entries(factors)){
        const new_design = [];
        for (const level of factor)for (const cell of design)new_design.push({
            ...cell,
            [factorName]: level
        });
        design = new_design;
    }
    return repeat(design, repetitions, unpack);
}
function randomID(length = 32) {
    let result = "";
    const chars = "0123456789abcdefghjklmnopqrstuvwxyz";
    for(let i = 0; i < length; i++)result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
function randomInt(lower, upper) {
    if (upper < lower) throw new Error("Upper boundary must be greater than or equal to lower boundary");
    return lower + Math.floor(Math.random() * (upper - lower + 1));
}
function sampleBernoulli(p) {
    return Math.random() <= p ? 1 : 0;
}
function sampleNormal(mean, standard_deviation) {
    return randn_bm() * standard_deviation + mean;
}
function sampleExponential(rate) {
    return -Math.log(Math.random()) / rate;
}
function sampleExGaussian(mean, standard_deviation, rate, positive = false) {
    let s = sampleNormal(mean, standard_deviation) + sampleExponential(rate);
    if (positive) while(s <= 0)s = sampleNormal(mean, standard_deviation) + sampleExponential(rate);
    return s;
}
function randomWords(opts) {
    return rw(opts);
}
function randn_bm() {
    var u = 0, v = 0;
    while(u === 0)u = Math.random();
    while(v === 0)v = Math.random();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
function unpackArray(array) {
    const out = {};
    for (const x of array)for (const key of Object.keys(x)){
        if (typeof out[key] === "undefined") out[key] = [];
        out[key].push(x[key]);
    }
    return out;
}
var randomization = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    factorial: factorial,
    randomID: randomID,
    randomInt: randomInt,
    randomWords: randomWords,
    repeat: repeat,
    sampleBernoulli: sampleBernoulli,
    sampleExGaussian: sampleExGaussian,
    sampleExponential: sampleExponential,
    sampleNormal: sampleNormal,
    sampleWithReplacement: sampleWithReplacement,
    sampleWithoutReplacement: sampleWithoutReplacement,
    setSeed: setSeed,
    shuffle: shuffle,
    shuffleAlternateGroups: shuffleAlternateGroups,
    shuffleNoRepeats: shuffleNoRepeats
});
function turkInfo() {
    const turk = {
        previewMode: false,
        outsideTurk: false,
        hitId: "INVALID_URL_PARAMETER",
        assignmentId: "INVALID_URL_PARAMETER",
        workerId: "INVALID_URL_PARAMETER",
        turkSubmitTo: "INVALID_URL_PARAMETER"
    };
    const param = function(url, name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        const regexS = "[\\?&]" + name + "=([^&#]*)";
        const regex = new RegExp(regexS);
        const results = regex.exec(url);
        return results == null ? "" : results[1];
    };
    const src = param(window.location.href, "assignmentId") ? window.location.href : document.referrer;
    const keys = [
        "assignmentId",
        "hitId",
        "workerId",
        "turkSubmitTo"
    ];
    keys.map(function(key) {
        turk[key] = unescape(param(src, key));
    });
    turk.previewMode = turk.assignmentId == "ASSIGNMENT_ID_NOT_AVAILABLE";
    turk.outsideTurk = !turk.previewMode && turk.hitId === "" && turk.assignmentId == "" && turk.workerId == "";
    return turk;
}
function submitToTurk(data) {
    const turk = turkInfo();
    const assignmentId = turk.assignmentId;
    const turkSubmitTo = turk.turkSubmitTo;
    if (!assignmentId || !turkSubmitTo) return;
    const form = document.createElement("form");
    form.method = "POST";
    form.action = turkSubmitTo + "/mturk/externalSubmit?assignmentId=" + assignmentId;
    for(const key in data)if (data.hasOwnProperty(key)) {
        const hiddenField = document.createElement("input");
        hiddenField.type = "hidden";
        hiddenField.name = key;
        hiddenField.id = key;
        hiddenField.value = data[key];
        form.appendChild(hiddenField);
    }
    document.body.appendChild(form);
    form.submit();
}
var turk = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    submitToTurk: submitToTurk,
    turkInfo: turkInfo
});
class ProgressBar {
    constructor(containerElement, message){
        this.containerElement = containerElement;
        this.message = message;
        this._progress = 0;
        this.setupElements();
    }
    /** Adds the progress bar HTML code into `this.containerElement` */ setupElements() {
        this.messageSpan = document.createElement("span");
        this.innerDiv = document.createElement("div");
        this.innerDiv.id = "jspsych-progressbar-inner";
        this.update();
        const outerDiv = document.createElement("div");
        outerDiv.id = "jspsych-progressbar-outer";
        outerDiv.appendChild(this.innerDiv);
        this.containerElement.appendChild(this.messageSpan);
        this.containerElement.appendChild(outerDiv);
    }
    /** Updates the progress bar according to `this.progress` */ update() {
        this.innerDiv.style.width = this._progress * 100 + "%";
        if (typeof this.message === "function") this.messageSpan.innerHTML = this.message(this._progress);
        else this.messageSpan.innerHTML = this.message;
    }
    /**
   * The bar's current position as a number in the closed interval [0, 1]. Set this to update the
   * progress bar accordingly.
   */ set progress(progress) {
        if (typeof progress !== "number" || progress < 0 || progress > 1) throw new Error("jsPsych.progressBar.progress must be a number between 0 and 1");
        this._progress = progress;
        this.update();
    }
    get progress() {
        return this._progress;
    }
}
class TimelineVariable {
    constructor(name){
        this.name = name;
    }
}
const timelineDescriptionKeys = [
    "timeline",
    "timeline_variables",
    "name",
    "repetitions",
    "loop_function",
    "conditional_function",
    "randomize_order",
    "sample",
    "on_timeline_start",
    "on_timeline_finish"
];
function isTrialDescription(description) {
    return !isTimelineDescription(description);
}
function isTimelineDescription(description) {
    return Boolean(description.timeline) || Array.isArray(description);
}
var TimelineNodeStatus = /* @__PURE__ */ ((TimelineNodeStatus2)=>{
    TimelineNodeStatus2[TimelineNodeStatus2["PENDING"] = 0] = "PENDING";
    TimelineNodeStatus2[TimelineNodeStatus2["RUNNING"] = 1] = "RUNNING";
    TimelineNodeStatus2[TimelineNodeStatus2["PAUSED"] = 2] = "PAUSED";
    TimelineNodeStatus2[TimelineNodeStatus2["COMPLETED"] = 3] = "COMPLETED";
    TimelineNodeStatus2[TimelineNodeStatus2["ABORTED"] = 4] = "ABORTED";
    return TimelineNodeStatus2;
})(TimelineNodeStatus || {});
class PromiseWrapper {
    constructor(){
        this.reset();
    }
    reset() {
        this.promise = new Promise((resolve)=>{
            this.resolvePromise = resolve;
        });
    }
    get() {
        return this.promise;
    }
    resolve(value) {
        this.resolvePromise(value);
        this.reset();
    }
}
function isPromise(value) {
    return value && typeof value["then"] === "function";
}
function delay(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
function parameterPathArrayToString([firstPathElement, ...remainingPathElements]) {
    let pathString = firstPathElement ?? "";
    for (const pathElement of remainingPathElements)pathString += Number.isNaN(Number.parseInt(pathElement)) ? `.${pathElement}` : `[${pathElement}]`;
    return pathString;
}
function isObjectOrArray(value) {
    return typeof value === "object" && value !== null;
}
class ParameterObjectPathCache {
    constructor(){
        this.cache = /* @__PURE__ */ new Map();
    }
    static lookupChild(objectOrArray, childName) {
        let doesPathExist = false;
        let childValue;
        if (Number.isNaN(Number.parseInt(childName))) {
            if (Object.hasOwn(objectOrArray, childName)) {
                doesPathExist = true;
                childValue = objectOrArray[childName];
            }
        } else if (Number.parseInt(childName) < objectOrArray.length) {
            doesPathExist = true;
            childValue = objectOrArray[childName];
        }
        return {
            doesPathExist,
            value: childValue
        };
    }
    get(path) {
        return this.cache.get(path.join("."));
    }
    has(path) {
        return this.cache.has(path.join("."));
    }
    initialize(rootObject) {
        this.rootObject = rootObject;
        this.cache.set("", rootObject);
    }
    reset() {
        this.cache.clear();
        this.cache.set("", this.rootObject);
    }
    set(path, value) {
        this.cache.set(path.join("."), value);
    }
    lookup(path) {
        if (this.has(path)) return {
            doesPathExist: true,
            value: this.get(path)
        };
        const lookupPath = (path2)=>{
            const parentPath = path2.slice(0, -1);
            const childName = path2[path2.length - 1];
            if (!this.has(parentPath) && parentPath.length > 0) {
                if (!lookupPath(parentPath).doesPathExist) return {
                    doesPathExist: false
                };
            }
            const parentValue = this.get(parentPath);
            if (!isObjectOrArray(parentValue)) return {
                doesPathExist: false
            };
            const lookupResult = ParameterObjectPathCache.lookupChild(parentValue, childName);
            if (lookupResult.doesPathExist) this.set(path2, lookupResult.value);
            return lookupResult;
        };
        return lookupPath(path);
    }
}
class TimelineNode {
    constructor(dependencies){
        this.dependencies = dependencies;
        this.status = TimelineNodeStatus.PENDING;
        this.parameterValueCache = new ParameterObjectPathCache();
    }
    getStatus() {
        return this.status;
    }
    /**
   * Initializes the parameter value cache with `this.description`. To be called by subclass
   * constructors after setting `this.description`.
   */ initializeParameterValueCache() {
        this.parameterValueCache.initialize(this.description);
    }
    /**
   * Resets all cached parameter values in this timeline node and all of its parents. This is
   * necessary to re-evaluate function parameters and timeline variables at each new trial.
   */ resetParameterValueCache() {
        this.parameterValueCache.reset();
        this.parent?.resetParameterValueCache();
    }
    /**
   * Retrieves a parameter value from the description of this timeline node, recursively falling
   * back to the description of each parent timeline node unless `recursive` is set to `false`. If
   * the parameter...
   *
   * * is a timeline variable, evaluates the variable and returns the result.
   * * is not specified, returns `undefined`.
   * * is a function and `evaluateFunctions` is not set to `false`, invokes the function and returns
   *   its return value
   * * has previously been looked up, return the cached result of the previous lookup
   *
   * @param parameterPath The path of the respective parameter in the timeline node description. If
   * the path is an array, nested object properties or array items will be looked up.
   * @param options See {@link GetParameterValueOptions}
   */ getParameterValue(parameterPath, options = {}) {
        const { evaluateFunctions = true, recursive = true, cacheResult = true, replaceResult } = options;
        if (typeof parameterPath === "string") parameterPath = [
            parameterPath
        ];
        let { doesPathExist, value: result } = this.parameterValueCache.lookup(parameterPath);
        if (!doesPathExist && recursive && this.parent) result = this.parent.getParameterValue(parameterPath, options);
        if (typeof result === "function" && evaluateFunctions) result = result();
        if (result instanceof TimelineVariable) result = this.evaluateTimelineVariable(result);
        if (typeof replaceResult === "function") result = replaceResult(result);
        if (cacheResult) this.parameterValueCache.set(parameterPath, result);
        return result;
    }
    /**
   * Retrieves and evaluates the `data` parameter. It is different from other parameters in that
   * it's properties may be functions that have to be evaluated, and parent nodes' data parameter
   * properties are merged into the result.
   */ getDataParameter() {
        const data = this.getParameterValue("data", {
            recursive: false
        });
        return {
            ...Object.fromEntries(typeof data === "object" ? Object.keys(data).map((key)=>[
                    key,
                    this.getParameterValue([
                        "data",
                        key
                    ])
                ]) : []),
            ...this.parent?.getDataParameter()
        };
    }
}
class Trial extends TimelineNode {
    constructor(dependencies, description, parent){
        super(dependencies);
        this.description = description;
        this.parent = parent;
        this.onLoad = ()=>{
            this.runParameterCallback("on_load");
            this.dependencies.runOnLoadExtensionCallbacks(this.getParameterValue("extensions"));
        };
        this.initializeParameterValueCache();
        this.trialObject = deepCopy(description);
        this.pluginClass = this.getParameterValue("type", {
            evaluateFunctions: false
        });
        this.pluginInfo = this.pluginClass?.["info"];
        if (!this.pluginInfo) throw new Error("Plugin not recognized. Please provide a valid plugin using the 'type' parameter.");
        if (!("version" in this.pluginInfo) && !("data" in this.pluginInfo)) console.warn(this.pluginInfo["name"], "is missing the 'version' and 'data' fields. Please update plugin as 'version' and 'data' will be required in v9. See https://www.jspsych.org/latest/developers/plugin-development/ for more details.");
        else if (!("version" in this.pluginInfo)) console.warn(this.pluginInfo["name"], "is missing the 'version' field. Please update plugin as 'version' will be required in v9. See https://www.jspsych.org/latest/developers/plugin-development/ for more details.");
        else if (!("data" in this.pluginInfo)) console.warn(this.pluginInfo["name"], "is missing the 'data' field. Please update plugin as 'data' will be required in v9. See https://www.jspsych.org/latest/developers/plugin-development/ for more details.");
    }
    async run() {
        this.status = TimelineNodeStatus.RUNNING;
        this.processParameters();
        this.onStart();
        this.addCssClasses();
        this.pluginInstance = this.dependencies.instantiatePlugin(this.pluginClass);
        this.result = this.processResult(await this.executeTrial());
        this.dependencies.onTrialResultAvailable(this);
        this.status = TimelineNodeStatus.COMPLETED;
        await this.onFinish();
        this.removeCssClasses();
        const gap = this.getParameterValue("post_trial_gap") ?? this.dependencies.getDefaultIti();
        if (gap !== 0 && this.dependencies.getSimulationMode() !== "data-only") await delay(gap);
        this.resetParameterValueCache();
    }
    async executeTrial() {
        const trialPromise = this.dependencies.finishTrialPromise.get();
        let hasTrialPromiseBeenResolved = false;
        trialPromise.then(()=>{
            hasTrialPromiseBeenResolved = true;
        });
        const { trialReturnValue, hasTrialBeenSimulated } = this.invokeTrialMethod();
        let result;
        if (isPromise(trialReturnValue)) {
            result = await Promise.race([
                trialReturnValue,
                trialPromise
            ]);
            if (hasTrialPromiseBeenResolved) result = await trialPromise;
        } else {
            if (!hasTrialBeenSimulated) this.onLoad();
            result = await trialPromise;
        }
        this.cleanupTrial();
        return result;
    }
    invokeTrialMethod() {
        const globalSimulationMode = this.dependencies.getSimulationMode();
        if (globalSimulationMode && typeof this.pluginInstance.simulate === "function") {
            const simulationOptions = this.getSimulationOptions();
            if (simulationOptions.simulate !== false) return {
                hasTrialBeenSimulated: true,
                trialReturnValue: this.pluginInstance.simulate(this.trialObject, simulationOptions.mode ?? globalSimulationMode, simulationOptions, this.onLoad)
            };
        }
        return {
            hasTrialBeenSimulated: false,
            trialReturnValue: this.pluginInstance.trial(this.dependencies.getDisplayElement(), this.trialObject, this.onLoad)
        };
    }
    /**
   * Cleanup the trial by removing the display element and removing event listeners
   */ cleanupTrial() {
        this.dependencies.clearAllTimeouts();
        this.dependencies.getDisplayElement().innerHTML = "";
    }
    /**
   * Add the CSS classes from the `css_classes` parameter to the display element
   */ addCssClasses() {
        const classes = this.getParameterValue("css_classes");
        const classList = this.dependencies.getDisplayElement().classList;
        if (typeof classes === "string") classList.add(classes);
        else if (Array.isArray(classes)) classList.add(...classes);
    }
    /**
   * Removes the provided css classes from the display element
   */ removeCssClasses() {
        const classes = this.getParameterValue("css_classes");
        if (classes) this.dependencies.getDisplayElement().classList.remove(...typeof classes === "string" ? [
            classes
        ] : classes);
    }
    processResult(result) {
        if (!result) result = {};
        for (const [parameterName, shouldParameterBeIncluded] of Object.entries(this.getParameterValue("save_trial_parameters") ?? {}))if (this.pluginInfo.parameters[parameterName]) {
            if (shouldParameterBeIncluded && !Object.hasOwn(result, parameterName)) {
                let parameterValue = this.trialObject[parameterName];
                if (typeof parameterValue === "function") parameterValue = parameterValue.toString();
                result[parameterName] = parameterValue;
            } else if (!shouldParameterBeIncluded && Object.hasOwn(result, parameterName)) delete result[parameterName];
        } else console.warn(`Non-existent parameter "${parameterName}" specified in save_trial_parameters.`);
        result = {
            ...this.getDataParameter(),
            ...result,
            trial_type: this.pluginInfo.name,
            trial_index: this.index,
            plugin_version: this.pluginInfo["version"] ? this.pluginInfo["version"] : null
        };
        const saveTimelineVariables = this.getParameterValue("save_timeline_variables");
        if (saveTimelineVariables === true) result.timeline_variables = {
            ...this.parent.getAllTimelineVariables()
        };
        else if (Array.isArray(saveTimelineVariables)) result.timeline_variables = Object.fromEntries(Object.entries(this.parent.getAllTimelineVariables()).filter(([key, _])=>saveTimelineVariables.includes(key)));
        return result;
    }
    /**
   * Runs a callback function retrieved from a parameter value and returns its result.
   *
   * @param parameterName The name of the parameter to retrieve the callback function from.
   * @param callbackParameters The parameters (if any) to be passed to the callback function
   */ runParameterCallback(parameterName, ...callbackParameters) {
        const callback = this.getParameterValue(parameterName, {
            evaluateFunctions: false
        });
        if (callback) return callback(...callbackParameters);
    }
    onStart() {
        this.dependencies.onTrialStart(this);
        this.runParameterCallback("on_start", this.trialObject);
        this.dependencies.runOnStartExtensionCallbacks(this.getParameterValue("extensions"));
    }
    async onFinish() {
        const extensionResults = await this.dependencies.runOnFinishExtensionCallbacks(this.getParameterValue("extensions"));
        Object.assign(this.result, extensionResults);
        await Promise.resolve(this.runParameterCallback("on_finish", this.getResult()));
        this.dependencies.onTrialFinished(this);
    }
    evaluateTimelineVariable(variable) {
        return this.parent?.evaluateTimelineVariable(variable);
    }
    getParameterValue(parameterPath, options = {}) {
        if (timelineDescriptionKeys.includes(typeof parameterPath === "string" ? parameterPath : parameterPath[0])) options.recursive = false;
        return super.getParameterValue(parameterPath, options);
    }
    /**
   * Retrieves and evaluates the `simulation_options` parameter, considering nested properties and
   * global simulation options.
   */ getSimulationOptions() {
        const simulationOptions = this.getParameterValue("simulation_options", {
            replaceResult: (result = {})=>{
                if (typeof result === "string") {
                    const globalSimulationOptions = this.dependencies.getGlobalSimulationOptions();
                    result = globalSimulationOptions[result] ?? globalSimulationOptions["default"] ?? {};
                }
                return deepMerge(deepCopy(this.dependencies.getGlobalSimulationOptions().default), deepCopy(result));
            }
        });
        if (typeof simulationOptions === "undefined") return {};
        simulationOptions.mode = this.getParameterValue([
            "simulation_options",
            "mode"
        ]);
        simulationOptions.simulate = this.getParameterValue([
            "simulation_options",
            "simulate"
        ]);
        simulationOptions.data = this.getParameterValue([
            "simulation_options",
            "data"
        ]);
        if (typeof simulationOptions.data === "object") simulationOptions.data = Object.fromEntries(Object.keys(simulationOptions.data).map((key)=>[
                key,
                this.getParameterValue([
                    "simulation_options",
                    "data",
                    key
                ])
            ]));
        return simulationOptions;
    }
    /**
   * Returns the result object of this trial or `undefined` if the result is not yet known or the
   * `record_data` trial parameter is `false`.
   */ getResult() {
        return this.getParameterValue("record_data") === false ? void 0 : this.result;
    }
    getResults() {
        const result = this.getResult();
        return result ? [
            result
        ] : [];
    }
    /**
   * Checks that the parameters provided in the trial description align with the plugin's info
   * object, resolves missing parameter values from the parent timeline, resolves timeline variable
   * parameters, evaluates parameter functions if the expected parameter type is not `FUNCTION`, and
   * sets default values for optional parameters.
   */ processParameters() {
        const assignParameterValues = (parameterObject, parameterInfos, parentParameterPath = [])=>{
            for (const [parameterName, parameterConfig] of Object.entries(parameterInfos)){
                const parameterPath = [
                    ...parentParameterPath,
                    parameterName
                ];
                let parameterValue = this.getParameterValue(parameterPath, {
                    evaluateFunctions: parameterConfig.type !== ParameterType.FUNCTION,
                    replaceResult: (originalResult)=>{
                        if (typeof originalResult === "undefined") {
                            if (typeof parameterConfig.default === "undefined") throw new Error(`You must specify a value for the "${parameterPathArrayToString(parameterPath)}" parameter in the "${this.pluginInfo.name}" plugin.`);
                            else return parameterConfig.default;
                        } else return originalResult;
                    }
                });
                if (!parameterConfig.array && parameterValue !== null) {
                    switch(parameterConfig.type){
                        case ParameterType.BOOL:
                            if (typeof parameterValue !== "boolean") {
                                const parameterPathString = parameterPathArrayToString(parameterPath);
                                console.warn(`A non-boolean value (\`${parameterValue}\`) was provided for the boolean parameter "${parameterPathString}" in the "${this.pluginInfo.name}" plugin.`);
                            }
                            break;
                        // @ts-ignore falls through
                        case ParameterType.KEYS:
                            if (Array.isArray(parameterValue)) break;
                        case ParameterType.STRING:
                        case ParameterType.HTML_STRING:
                        case ParameterType.KEY:
                        case ParameterType.AUDIO:
                        case ParameterType.VIDEO:
                        case ParameterType.IMAGE:
                            if (typeof parameterValue !== "string") {
                                const parameterPathString = parameterPathArrayToString(parameterPath);
                                console.warn(`A non-string value (\`${parameterValue}\`) was provided for the parameter "${parameterPathString}" in the "${this.pluginInfo.name}" plugin.`);
                            }
                            break;
                        case ParameterType.FLOAT:
                        case ParameterType.INT:
                            if (typeof parameterValue !== "number") {
                                const parameterPathString = parameterPathArrayToString(parameterPath);
                                console.warn(`A non-numeric value (\`${parameterValue}\`) was provided for the numeric parameter "${parameterPathString}" in the "${this.pluginInfo.name}" plugin.`);
                            }
                            break;
                        case ParameterType.FUNCTION:
                            if (typeof parameterValue !== "function") {
                                const parameterPathString = parameterPathArrayToString(parameterPath);
                                console.warn(`A non-function value (\`${parameterValue}\`) was provided for the function parameter "${parameterPathString}" in the "${this.pluginInfo.name}" plugin.`);
                            }
                            break;
                        case ParameterType.SELECT:
                            if (!parameterConfig.options) {
                                const parameterPathString = parameterPathArrayToString(parameterPath);
                                console.warn(`The "options" array is required for the "select" parameter "${parameterPathString}" in the "${this.pluginInfo.name}" plugin.`);
                            }
                    }
                    if (parameterConfig.type === ParameterType.INT && parameterValue % 1 !== 0) {
                        const parameterPathString = parameterPathArrayToString(parameterPath);
                        console.warn(`A float value (\`${parameterValue}\`) was provided for the integer parameter "${parameterPathString}" in the "${this.pluginInfo.name}" plugin. The value will be truncated to an integer.`);
                        parameterValue = Math.trunc(parameterValue);
                    }
                }
                if (parameterConfig.type === ParameterType.SELECT) {
                    if (!parameterConfig.options.includes(parameterValue)) {
                        const parameterPathString = parameterPathArrayToString(parameterPath);
                        console.warn(`The value "${parameterValue}" is not a valid option for the parameter "${parameterPathString}" in the "${this.pluginInfo.name}" plugin. Valid options are: ${parameterConfig.options.join(", ")}.`);
                    }
                }
                if (parameterConfig.array && !Array.isArray(parameterValue)) {
                    const parameterPathString = parameterPathArrayToString(parameterPath);
                    throw new Error(`A non-array value (\`${parameterValue}\`) was provided for the array parameter "${parameterPathString}" in the "${this.pluginInfo.name}" plugin. Please make sure that "${parameterPathString}" is an array.`);
                }
                if (parameterConfig.type === ParameterType.COMPLEX && parameterConfig.nested) {
                    if (parameterConfig.array) parameterValue = parameterValue.map((_, arrayIndex)=>{
                        const arrayElementPath = [
                            ...parameterPath,
                            arrayIndex.toString()
                        ];
                        const arrayElementValue = this.getParameterValue(arrayElementPath);
                        assignParameterValues(arrayElementValue, parameterConfig.nested, arrayElementPath);
                        return arrayElementValue;
                    });
                    else assignParameterValues(parameterValue, parameterConfig.nested, parameterPath);
                }
                parameterObject[parameterName] = parameterValue;
            }
        };
        const trialObject = deepCopy(this.description);
        assignParameterValues(trialObject, this.pluginInfo.parameters);
        this.trialObject = trialObject;
    }
    getLatestNode() {
        return this;
    }
    getActiveTimelineByName(name) {
        return void 0;
    }
}
class Timeline extends TimelineNode {
    constructor(dependencies, description, parent){
        super(dependencies);
        this.parent = parent;
        this.children = [];
        this.shouldAbort = false;
        this.resumePromise = new PromiseWrapper();
        this.description = Array.isArray(description) ? {
            timeline: description
        } : description;
        this.initializeParameterValueCache();
    }
    async run() {
        if (typeof this.index === "undefined") this.index = 0;
        this.status = TimelineNodeStatus.RUNNING;
        const { conditional_function, loop_function, repetitions = 1 } = this.description;
        let timelineVariableOrder = this.generateTimelineVariableOrder();
        this.setCurrentTimelineVariablesByIndex(timelineVariableOrder[0]);
        let isInitialTimelineVariableOrder = true;
        let currentLoopIterationResults;
        if (!conditional_function || conditional_function()) {
            this.onStart();
            for(let repetition = 0; repetition < repetitions; repetition++)do {
                currentLoopIterationResults = [];
                if (isInitialTimelineVariableOrder) isInitialTimelineVariableOrder = false;
                else timelineVariableOrder = this.generateTimelineVariableOrder();
                for (const timelineVariableIndex of timelineVariableOrder){
                    this.setCurrentTimelineVariablesByIndex(timelineVariableIndex);
                    for (const childNodeDescription of this.description.timeline){
                        const childNode = this.instantiateChildNode(childNodeDescription);
                        const previousChild = this.currentChild;
                        this.currentChild = childNode;
                        childNode.index = previousChild ? previousChild.getLatestNode().index + 1 : this.index;
                        await childNode.run();
                        if (this.status === TimelineNodeStatus.PAUSED) await this.resumePromise.get();
                        if (this.shouldAbort) {
                            this.status = TimelineNodeStatus.ABORTED;
                            return;
                        }
                        currentLoopIterationResults.push(...this.currentChild.getResults());
                    }
                }
            }while (loop_function && loop_function(new DataCollection(currentLoopIterationResults)));
            this.onFinish();
        }
        this.status = TimelineNodeStatus.COMPLETED;
    }
    onStart() {
        if (this.description.on_timeline_start) this.description.on_timeline_start();
    }
    onFinish() {
        if (this.description.on_timeline_finish) this.description.on_timeline_finish();
    }
    pause() {
        if (this.currentChild instanceof Timeline) this.currentChild.pause();
        this.status = TimelineNodeStatus.PAUSED;
    }
    resume() {
        if (this.status == TimelineNodeStatus.PAUSED) {
            if (this.currentChild instanceof Timeline) this.currentChild.resume();
            this.status = TimelineNodeStatus.RUNNING;
            this.resumePromise.resolve();
        }
    }
    /**
   * If the timeline is running or paused, aborts the timeline after the current trial has completed
   */ abort() {
        if (this.status === TimelineNodeStatus.RUNNING || this.status === TimelineNodeStatus.PAUSED) {
            if (this.currentChild instanceof Timeline) this.currentChild.abort();
            this.shouldAbort = true;
            if (this.status === TimelineNodeStatus.PAUSED) this.resume();
        }
    }
    instantiateChildNode(childDescription) {
        const newChildNode = isTimelineDescription(childDescription) ? new Timeline(this.dependencies, childDescription, this) : new Trial(this.dependencies, childDescription, this);
        this.children.push(newChildNode);
        return newChildNode;
    }
    setCurrentTimelineVariablesByIndex(index) {
        this.currentTimelineVariables = {
            ...this.parent?.getAllTimelineVariables(),
            ...index === null ? void 0 : this.description.timeline_variables[index]
        };
    }
    /**
   * If the timeline has timeline variables, returns the order of `timeline_variables` array indices
   * to be used, according to the timeline's `sample` setting. If the timeline has no timeline
   * variables, returns `[null]`.
   */ generateTimelineVariableOrder() {
        const timelineVariableLength = this.description.timeline_variables?.length;
        if (!timelineVariableLength) return [
            null
        ];
        let order = [
            ...Array(timelineVariableLength).keys()
        ];
        const sample = this.description.sample;
        if (sample) switch(sample.type){
            case "custom":
                order = sample.fn(order);
                break;
            case "with-replacement":
                order = sampleWithReplacement(order, sample.size, sample.weights);
                break;
            case "without-replacement":
                order = sampleWithoutReplacement(order, sample.size);
                break;
            case "fixed-repetitions":
                order = repeat(order, sample.size);
                break;
            case "alternate-groups":
                order = shuffleAlternateGroups(sample.groups, sample.randomize_group_order);
                break;
            default:
                throw new Error(`Invalid type "${sample.type}" in timeline sample parameters. Valid options for type are "custom", "with-replacement", "without-replacement", "fixed-repetitions", and "alternate-groups"`);
        }
        if (this.description.randomize_order) order = shuffle(order);
        return order;
    }
    /**
   * Returns the current values of all timeline variables, including those from parent timelines
   */ getAllTimelineVariables() {
        return this.currentTimelineVariables;
    }
    evaluateTimelineVariable(variable) {
        if (this.currentTimelineVariables?.hasOwnProperty(variable.name)) return this.currentTimelineVariables[variable.name];
        throw new Error(`Timeline variable ${variable.name} not found.`);
    }
    getResults() {
        const results = [];
        for (const child of this.children){
            if (child instanceof Trial) {
                const childResult = child.getResult();
                if (childResult) results.push(childResult);
            } else if (child instanceof Timeline) results.push(...child.getResults());
        }
        return results;
    }
    /**
   * Returns the naive progress of the timeline (as a fraction), without considering conditional or
   * loop functions.
   */ getNaiveProgress() {
        if (this.status === TimelineNodeStatus.PENDING) return 0;
        const activeNode = this.getLatestNode();
        if (!activeNode) return 1;
        let completedTrials = activeNode.index;
        if (activeNode.getStatus() === TimelineNodeStatus.COMPLETED) completedTrials++;
        return Math.min(completedTrials / this.getNaiveTrialCount(), 1);
    }
    /**
   * Recursively computes the naive number of trials in the timeline, without considering
   * conditional or loop functions.
   */ getNaiveTrialCount() {
        const getTrialCount = (description)=>{
            const getTimelineArrayTrialCount = (description2)=>description2.map((childDescription)=>getTrialCount(childDescription)).reduce((a, b)=>a + b);
            if (Array.isArray(description)) return getTimelineArrayTrialCount(description);
            if (isTrialDescription(description)) return 1;
            if (isTimelineDescription(description)) {
                let conditionCount = description.timeline_variables?.length || 1;
                switch(description.sample?.type){
                    case "with-replacement":
                    case "without-replacement":
                        conditionCount = description.sample.size;
                        break;
                    case "fixed-repetitions":
                        conditionCount *= description.sample.size;
                        break;
                    case "alternate-groups":
                        conditionCount = description.sample.groups.map((group)=>group.length).reduce((a, b)=>a + b, 0);
                        break;
                }
                return getTimelineArrayTrialCount(description.timeline) * (description.repetitions ?? 1) * conditionCount;
            }
            return 0;
        };
        return getTrialCount(this.description);
    }
    getLatestNode() {
        return this.currentChild?.getLatestNode() ?? this;
    }
    getActiveTimelineByName(name) {
        if (this.description.name === name) return this;
        return this.currentChild?.getActiveTimelineByName(name);
    }
}
class JsPsych {
    constructor(options){
        this.turk = turk;
        this.randomization = randomization;
        this.utils = utils;
        // prettier-ignore
        this.citation = {
            "apa": "de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",
            "bibtex": '@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '
        };
        /** Options */ this.options = {};
        /**
     * Whether the page is retrieved directly via the `file://` protocol (true) or hosted on a web
     * server (false)
     */ this.isFileProtocolUsed = false;
        this.finishTrialPromise = new PromiseWrapper();
        this.timelineDependencies = {
            onTrialStart: (trial)=>{
                this.options.on_trial_start(trial.trialObject);
                this.getDisplayContainerElement().focus();
                this.getDisplayElement().scrollTop = 0;
            },
            onTrialResultAvailable: (trial)=>{
                const result = trial.getResult();
                if (result) {
                    result.time_elapsed = this.getTotalTime();
                    this.data.write(trial);
                }
            },
            onTrialFinished: (trial)=>{
                const result = trial.getResult();
                this.options.on_trial_finish(result);
                if (result) this.options.on_data_update(result);
                if (this.progressBar && this.options.auto_update_progress_bar) this.progressBar.progress = this.timeline.getNaiveProgress();
            },
            runOnStartExtensionCallbacks: (extensionsConfiguration)=>this.extensionManager.onStart(extensionsConfiguration),
            runOnLoadExtensionCallbacks: (extensionsConfiguration)=>this.extensionManager.onLoad(extensionsConfiguration),
            runOnFinishExtensionCallbacks: (extensionsConfiguration)=>this.extensionManager.onFinish(extensionsConfiguration),
            getSimulationMode: ()=>this.simulationMode,
            getGlobalSimulationOptions: ()=>this.simulationOptions,
            instantiatePlugin: (pluginClass)=>new pluginClass(this),
            getDisplayElement: ()=>this.getDisplayElement(),
            getDefaultIti: ()=>this.getInitSettings().default_iti,
            finishTrialPromise: this.finishTrialPromise,
            clearAllTimeouts: ()=>this.pluginAPI.clearAllTimeouts()
        };
        this.extensionManagerDependencies = {
            instantiateExtension: (extensionClass)=>new extensionClass(this)
        };
        this.dataDependencies = {
            getProgress: ()=>({
                    time: this.getTotalTime(),
                    trial: this.timeline?.getLatestNode().index ?? 0
                }),
            onInteractionRecordAdded: (record)=>{
                this.options.on_interaction_data_update(record);
            },
            getDisplayElement: ()=>this.getDisplayElement()
        };
        options = {
            display_element: void 0,
            on_finish: ()=>{},
            on_trial_start: ()=>{},
            on_trial_finish: ()=>{},
            on_data_update: ()=>{},
            on_interaction_data_update: ()=>{},
            on_close: ()=>{},
            use_webaudio: true,
            show_progress_bar: false,
            message_progress_bar: "Completion Progress",
            auto_update_progress_bar: true,
            default_iti: 0,
            minimum_valid_rt: 0,
            experiment_width: null,
            override_safe_mode: false,
            case_sensitive_responses: false,
            extensions: [],
            ...options
        };
        this.options = options;
        autoBind(this);
        if (window.location.protocol == "file:" && (options.override_safe_mode === false || typeof options.override_safe_mode === "undefined")) {
            options.use_webaudio = false;
            this.isFileProtocolUsed = true;
            console.warn("jsPsych detected that it is running via the file:// protocol and not on a web server. To prevent issues with cross-origin requests, Web Audio and video preloading have been disabled. If you would like to override this setting, you can set 'override_safe_mode' to 'true' in initJsPsych. For more information, see: https://www.jspsych.org/overview/running-experiments");
        }
        this.data = new JsPsychData(this.dataDependencies);
        this.pluginAPI = createJointPluginAPIObject(this);
        this.extensionManager = new ExtensionManager(this.extensionManagerDependencies, options.extensions);
    }
    version() {
        return version;
    }
    /**
   * Starts an experiment using the provided timeline and returns a promise that is resolved when
   * the experiment is finished.
   *
   * @param timeline The timeline to be run
   */ async run(timeline) {
        if (typeof timeline === "undefined") console.error("No timeline declared in jsPsych.run(). Cannot start experiment.");
        if (timeline.length === 0) console.error("No trials have been added to the timeline (the timeline is an empty array). Cannot start experiment.");
        this.timeline = new Timeline(this.timelineDependencies, timeline);
        await this.prepareDom();
        await this.extensionManager.initializeExtensions();
        document.documentElement.setAttribute("jspsych", "present");
        this.experimentStartTime = /* @__PURE__ */ new Date();
        await this.timeline.run();
        await Promise.resolve(this.options.on_finish(this.data.get()));
        if (this.endMessage) this.getDisplayElement().innerHTML = this.endMessage;
        this.data.removeInteractionListeners();
    }
    async simulate(timeline, simulation_mode = "data-only", simulation_options = {}) {
        this.simulationMode = simulation_mode;
        this.simulationOptions = simulation_options;
        await this.run(timeline);
    }
    getProgress() {
        return {
            total_trials: this.timeline?.getNaiveTrialCount(),
            current_trial_global: this.timeline?.getLatestNode().index ?? 0,
            percent_complete: this.timeline?.getNaiveProgress() * 100
        };
    }
    getStartTime() {
        return this.experimentStartTime;
    }
    getTotalTime() {
        if (!this.experimentStartTime) return 0;
        return /* @__PURE__ */ new Date().getTime() - this.experimentStartTime.getTime();
    }
    getDisplayElement() {
        return this.displayElement;
    }
    getDisplayContainerElement() {
        return this.displayContainerElement;
    }
    abortExperiment(endMessage, data = {}) {
        this.endMessage = endMessage;
        this.timeline.abort();
        this.pluginAPI.cancelAllKeyboardResponses();
        this.pluginAPI.clearAllTimeouts();
        this.finishTrial(data);
    }
    abortCurrentTimeline() {
        let currentTimeline = this.timeline?.getLatestNode();
        if (currentTimeline instanceof Trial) currentTimeline = currentTimeline.parent;
        if (currentTimeline instanceof Timeline) currentTimeline.abort();
    }
    /**
   * Aborts a named timeline. The timeline must be currently running in order to abort it.
   *
   * @param name The name of the timeline to abort. Timelines can be given names by setting the `name` parameter in the description of the timeline.
   */ abortTimelineByName(name) {
        const timeline = this.timeline?.getActiveTimelineByName(name);
        if (timeline) timeline.abort();
    }
    getCurrentTrial() {
        const activeNode = this.timeline?.getLatestNode();
        if (activeNode instanceof Trial) return activeNode.description;
        return void 0;
    }
    getInitSettings() {
        return this.options;
    }
    timelineVariable(variableName) {
        return new TimelineVariable(variableName);
    }
    evaluateTimelineVariable(variableName) {
        return this.timeline?.getLatestNode()?.evaluateTimelineVariable(new TimelineVariable(variableName));
    }
    pauseExperiment() {
        this.timeline?.pause();
    }
    resumeExperiment() {
        this.timeline?.resume();
    }
    getSafeModeStatus() {
        return this.isFileProtocolUsed;
    }
    getTimeline() {
        return this.timeline?.description.timeline;
    }
    /**
   * Prints out a string containing citations for the jsPsych library and all input plugins/extensions in the specified format.
   * If called without input, prints citation for jsPsych library.
   *
   * @param plugins The plugins/extensions to generate citations for. Always prints the citation for the jsPsych library at the top.
   * @param format The desired output citation format. Currently supports "apa" and "bibtex".
   * @returns String containing citations separated with newline character.
   */ getCitations(plugins = [], format = "apa") {
        const formatOptions = [
            "apa",
            "bibtex"
        ];
        format = format.toLowerCase();
        if (!Array.isArray(plugins)) throw new Error("Expected array of plugins/extensions");
        else if (!formatOptions.includes(format)) throw new Error("Unsupported citation format");
        else {
            const jsPsychCitation = this.citation[format];
            const citationSet = /* @__PURE__ */ new Set([
                jsPsychCitation
            ]);
            for (const plugin of plugins)try {
                const pluginCitation = plugin["info"].citations[format];
                citationSet.add(pluginCitation);
            } catch  {
                console.error(`${plugin} does not have citation in ${format} format.`);
            }
            const citationList = Array.from(citationSet).join("\n");
            return citationList;
        }
    }
    get extensions() {
        return this.extensionManager?.extensions ?? {};
    }
    async prepareDom() {
        if (document.readyState !== "complete") await new Promise((resolve)=>{
            window.addEventListener("load", resolve);
        });
        const options = this.options;
        if (typeof options.display_element === "undefined") {
            let body = document.body;
            if (!body) {
                body = document.createElement("body");
                document.documentElement.appendChild(body);
            }
            document.querySelector("html").style.height = "100%";
            body.style.margin = "0px";
            body.style.height = "100%";
            body.style.width = "100%";
            options.display_element = body;
        } else {
            const display = options.display_element instanceof Element ? options.display_element : document.querySelector("#" + options.display_element);
            if (display === null) console.error("The display_element specified in initJsPsych() does not exist in the DOM.");
            else options.display_element = display;
        }
        const contentElement = document.createElement("div");
        contentElement.id = "jspsych-content";
        const contentWrapperElement = document.createElement("div");
        contentWrapperElement.className = "jspsych-content-wrapper";
        contentWrapperElement.appendChild(contentElement);
        this.displayContainerElement = options.display_element;
        this.displayContainerElement.appendChild(contentWrapperElement);
        this.displayElement = contentElement;
        if (options.experiment_width !== null) this.displayElement.style.width = options.experiment_width + "px";
        options.display_element.tabIndex = 0;
        this.displayContainerElement.classList.add("jspsych-display-element");
        this.displayElement.classList.add("jspsych-content");
        this.data.createInteractionListeners();
        window.addEventListener("beforeunload", options.on_close);
        if (this.options.show_progress_bar) {
            const progressBarContainer = document.createElement("div");
            progressBarContainer.id = "jspsych-progressbar-container";
            this.progressBar = new ProgressBar(progressBarContainer, this.options.message_progress_bar);
            this.getDisplayContainerElement().insertAdjacentElement("afterbegin", progressBarContainer);
        }
    }
    finishTrial(data) {
        this.finishTrialPromise.resolve(data);
    }
}
class MigrationError extends Error {
    constructor(message = "The global `jsPsych` variable is no longer available in jsPsych v7."){
        super(`${message} Please follow the migration guide at https://www.jspsych.org/7.0/support/migration-v7/ to update your experiment.`);
        this.name = "MigrationError";
    }
}
window.jsPsych = {
    get init () {
        throw new MigrationError("`jsPsych.init()` was replaced by `initJsPsych()` in jsPsych v7.");
    },
    get data () {
        throw new MigrationError();
    },
    get randomization () {
        throw new MigrationError();
    },
    get turk () {
        throw new MigrationError();
    },
    get pluginAPI () {
        throw new MigrationError();
    },
    get ALL_KEYS () {
        throw new MigrationError('jsPsych.ALL_KEYS was replaced by the "ALL_KEYS" string in jsPsych v7.');
    },
    get NO_KEYS () {
        throw new MigrationError('jsPsych.NO_KEYS was replaced by the "NO_KEYS" string in jsPsych v7.');
    }
};
if (typeof window !== "undefined" && window.hasOwnProperty("webkitAudioContext") && !window.hasOwnProperty("AudioContext")) window.AudioContext = webkitAudioContext;
function initJsPsych(options) {
    const jsPsych = new JsPsych(options);
    const migrationMessages = {
        init: "`jsPsych.init()` was replaced by `initJsPsych()` in jsPsych v7.",
        ALL_KEYS: 'jsPsych.ALL_KEYS was replaced by the "ALL_KEYS" string in jsPsych v7.',
        NO_KEYS: 'jsPsych.NO_KEYS was replaced by the "NO_KEYS" string in jsPsych v7.',
        // Getter functions that were renamed
        currentTimelineNodeID: "`currentTimelineNodeID()` was renamed to `getCurrentTimelineNodeID()` in jsPsych v7.",
        progress: "`progress()` was renamed to `getProgress()` in jsPsych v7.",
        startTime: "`startTime()` was renamed to `getStartTime()` in jsPsych v7.",
        totalTime: "`totalTime()` was renamed to `getTotalTime()` in jsPsych v7.",
        currentTrial: "`currentTrial()` was renamed to `getCurrentTrial()` in jsPsych v7.",
        initSettings: "`initSettings()` was renamed to `getInitSettings()` in jsPsych v7.",
        allTimelineVariables: "`allTimelineVariables()` was renamed to `getAllTimelineVariables()` in jsPsych v7."
    };
    Object.defineProperties(jsPsych, Object.fromEntries(Object.entries(migrationMessages).map(([key, message])=>[
            key,
            {
                get () {
                    throw new MigrationError(message);
                }
            }
        ])));
    return jsPsych;
}
exports.DataCollection = DataCollection;
exports.JsPsych = JsPsych;
exports.ParameterType = ParameterType;
exports.initJsPsych = initJsPsych; //# sourceMappingURL=index.cjs.map

},{"4806f8e4dafcd64b":"cHr9a","fc29b1affc07e266":"1qqCU","9b5241ecb34c3058":"lDRcu"}],"cHr9a":[function(require,module,exports,__globalThis) {
'use strict';
// Gets all non-builtin properties up the prototype chain
const getAllProperties = (object)=>{
    const properties = new Set();
    do for (const key of Reflect.ownKeys(object))properties.add([
        object,
        key
    ]);
    while ((object = Reflect.getPrototypeOf(object)) && object !== Object.prototype);
    return properties;
};
module.exports = (self, { include, exclude } = {})=>{
    const filter = (key)=>{
        const match = (pattern)=>typeof pattern === 'string' ? key === pattern : pattern.test(key);
        if (include) return include.some(match);
        if (exclude) return !exclude.some(match);
        return true;
    };
    for (const [object, key] of getAllProperties(self.constructor.prototype)){
        if (key === 'constructor' || !filter(key)) continue;
        const descriptor = Reflect.getOwnPropertyDescriptor(object, key);
        if (descriptor && typeof descriptor.value === 'function') self[key] = self[key].bind(self);
    }
    return self;
};

},{}],"1qqCU":[function(require,module,exports,__globalThis) {
var seedrandom = require("c40fd52046b1e673");
var wordList = [
    // Borrowed from xkcd password generator which borrowed it from wherever
    "ability",
    "able",
    "aboard",
    "about",
    "above",
    "accept",
    "accident",
    "according",
    "account",
    "accurate",
    "acres",
    "across",
    "act",
    "action",
    "active",
    "activity",
    "actual",
    "actually",
    "add",
    "addition",
    "additional",
    "adjective",
    "adult",
    "adventure",
    "advice",
    "affect",
    "afraid",
    "after",
    "afternoon",
    "again",
    "against",
    "age",
    "ago",
    "agree",
    "ahead",
    "aid",
    "air",
    "airplane",
    "alike",
    "alive",
    "all",
    "allow",
    "almost",
    "alone",
    "along",
    "aloud",
    "alphabet",
    "already",
    "also",
    "although",
    "am",
    "among",
    "amount",
    "ancient",
    "angle",
    "angry",
    "animal",
    "announced",
    "another",
    "answer",
    "ants",
    "any",
    "anybody",
    "anyone",
    "anything",
    "anyway",
    "anywhere",
    "apart",
    "apartment",
    "appearance",
    "apple",
    "applied",
    "appropriate",
    "are",
    "area",
    "arm",
    "army",
    "around",
    "arrange",
    "arrangement",
    "arrive",
    "arrow",
    "art",
    "article",
    "as",
    "aside",
    "ask",
    "asleep",
    "at",
    "ate",
    "atmosphere",
    "atom",
    "atomic",
    "attached",
    "attack",
    "attempt",
    "attention",
    "audience",
    "author",
    "automobile",
    "available",
    "average",
    "avoid",
    "aware",
    "away",
    "baby",
    "back",
    "bad",
    "badly",
    "bag",
    "balance",
    "ball",
    "balloon",
    "band",
    "bank",
    "bar",
    "bare",
    "bark",
    "barn",
    "base",
    "baseball",
    "basic",
    "basis",
    "basket",
    "bat",
    "battle",
    "be",
    "bean",
    "bear",
    "beat",
    "beautiful",
    "beauty",
    "became",
    "because",
    "become",
    "becoming",
    "bee",
    "been",
    "before",
    "began",
    "beginning",
    "begun",
    "behavior",
    "behind",
    "being",
    "believed",
    "bell",
    "belong",
    "below",
    "belt",
    "bend",
    "beneath",
    "bent",
    "beside",
    "best",
    "bet",
    "better",
    "between",
    "beyond",
    "bicycle",
    "bigger",
    "biggest",
    "bill",
    "birds",
    "birth",
    "birthday",
    "bit",
    "bite",
    "black",
    "blank",
    "blanket",
    "blew",
    "blind",
    "block",
    "blood",
    "blow",
    "blue",
    "board",
    "boat",
    "body",
    "bone",
    "book",
    "border",
    "born",
    "both",
    "bottle",
    "bottom",
    "bound",
    "bow",
    "bowl",
    "box",
    "boy",
    "brain",
    "branch",
    "brass",
    "brave",
    "bread",
    "break",
    "breakfast",
    "breath",
    "breathe",
    "breathing",
    "breeze",
    "brick",
    "bridge",
    "brief",
    "bright",
    "bring",
    "broad",
    "broke",
    "broken",
    "brother",
    "brought",
    "brown",
    "brush",
    "buffalo",
    "build",
    "building",
    "built",
    "buried",
    "burn",
    "burst",
    "bus",
    "bush",
    "business",
    "busy",
    "but",
    "butter",
    "buy",
    "by",
    "cabin",
    "cage",
    "cake",
    "call",
    "calm",
    "came",
    "camera",
    "camp",
    "can",
    "canal",
    "cannot",
    "cap",
    "capital",
    "captain",
    "captured",
    "car",
    "carbon",
    "card",
    "care",
    "careful",
    "carefully",
    "carried",
    "carry",
    "case",
    "cast",
    "castle",
    "cat",
    "catch",
    "cattle",
    "caught",
    "cause",
    "cave",
    "cell",
    "cent",
    "center",
    "central",
    "century",
    "certain",
    "certainly",
    "chain",
    "chair",
    "chamber",
    "chance",
    "change",
    "changing",
    "chapter",
    "character",
    "characteristic",
    "charge",
    "chart",
    "check",
    "cheese",
    "chemical",
    "chest",
    "chicken",
    "chief",
    "child",
    "children",
    "choice",
    "choose",
    "chose",
    "chosen",
    "church",
    "circle",
    "circus",
    "citizen",
    "city",
    "class",
    "classroom",
    "claws",
    "clay",
    "clean",
    "clear",
    "clearly",
    "climate",
    "climb",
    "clock",
    "close",
    "closely",
    "closer",
    "cloth",
    "clothes",
    "clothing",
    "cloud",
    "club",
    "coach",
    "coal",
    "coast",
    "coat",
    "coffee",
    "cold",
    "collect",
    "college",
    "colony",
    "color",
    "column",
    "combination",
    "combine",
    "come",
    "comfortable",
    "coming",
    "command",
    "common",
    "community",
    "company",
    "compare",
    "compass",
    "complete",
    "completely",
    "complex",
    "composed",
    "composition",
    "compound",
    "concerned",
    "condition",
    "congress",
    "connected",
    "consider",
    "consist",
    "consonant",
    "constantly",
    "construction",
    "contain",
    "continent",
    "continued",
    "contrast",
    "control",
    "conversation",
    "cook",
    "cookies",
    "cool",
    "copper",
    "copy",
    "corn",
    "corner",
    "correct",
    "correctly",
    "cost",
    "cotton",
    "could",
    "count",
    "country",
    "couple",
    "courage",
    "course",
    "court",
    "cover",
    "cow",
    "cowboy",
    "crack",
    "cream",
    "create",
    "creature",
    "crew",
    "crop",
    "cross",
    "crowd",
    "cry",
    "cup",
    "curious",
    "current",
    "curve",
    "customs",
    "cut",
    "cutting",
    "daily",
    "damage",
    "dance",
    "danger",
    "dangerous",
    "dark",
    "darkness",
    "date",
    "daughter",
    "dawn",
    "day",
    "dead",
    "deal",
    "dear",
    "death",
    "decide",
    "declared",
    "deep",
    "deeply",
    "deer",
    "definition",
    "degree",
    "depend",
    "depth",
    "describe",
    "desert",
    "design",
    "desk",
    "detail",
    "determine",
    "develop",
    "development",
    "diagram",
    "diameter",
    "did",
    "die",
    "differ",
    "difference",
    "different",
    "difficult",
    "difficulty",
    "dig",
    "dinner",
    "direct",
    "direction",
    "directly",
    "dirt",
    "dirty",
    "disappear",
    "discover",
    "discovery",
    "discuss",
    "discussion",
    "disease",
    "dish",
    "distance",
    "distant",
    "divide",
    "division",
    "do",
    "doctor",
    "does",
    "dog",
    "doing",
    "doll",
    "dollar",
    "done",
    "donkey",
    "door",
    "dot",
    "double",
    "doubt",
    "down",
    "dozen",
    "draw",
    "drawn",
    "dream",
    "dress",
    "drew",
    "dried",
    "drink",
    "drive",
    "driven",
    "driver",
    "driving",
    "drop",
    "dropped",
    "drove",
    "dry",
    "duck",
    "due",
    "dug",
    "dull",
    "during",
    "dust",
    "duty",
    "each",
    "eager",
    "ear",
    "earlier",
    "early",
    "earn",
    "earth",
    "easier",
    "easily",
    "east",
    "easy",
    "eat",
    "eaten",
    "edge",
    "education",
    "effect",
    "effort",
    "egg",
    "eight",
    "either",
    "electric",
    "electricity",
    "element",
    "elephant",
    "eleven",
    "else",
    "empty",
    "end",
    "enemy",
    "energy",
    "engine",
    "engineer",
    "enjoy",
    "enough",
    "enter",
    "entire",
    "entirely",
    "environment",
    "equal",
    "equally",
    "equator",
    "equipment",
    "escape",
    "especially",
    "essential",
    "establish",
    "even",
    "evening",
    "event",
    "eventually",
    "ever",
    "every",
    "everybody",
    "everyone",
    "everything",
    "everywhere",
    "evidence",
    "exact",
    "exactly",
    "examine",
    "example",
    "excellent",
    "except",
    "exchange",
    "excited",
    "excitement",
    "exciting",
    "exclaimed",
    "exercise",
    "exist",
    "expect",
    "experience",
    "experiment",
    "explain",
    "explanation",
    "explore",
    "express",
    "expression",
    "extra",
    "eye",
    "face",
    "facing",
    "fact",
    "factor",
    "factory",
    "failed",
    "fair",
    "fairly",
    "fall",
    "fallen",
    "familiar",
    "family",
    "famous",
    "far",
    "farm",
    "farmer",
    "farther",
    "fast",
    "fastened",
    "faster",
    "fat",
    "father",
    "favorite",
    "fear",
    "feathers",
    "feature",
    "fed",
    "feed",
    "feel",
    "feet",
    "fell",
    "fellow",
    "felt",
    "fence",
    "few",
    "fewer",
    "field",
    "fierce",
    "fifteen",
    "fifth",
    "fifty",
    "fight",
    "fighting",
    "figure",
    "fill",
    "film",
    "final",
    "finally",
    "find",
    "fine",
    "finest",
    "finger",
    "finish",
    "fire",
    "fireplace",
    "firm",
    "first",
    "fish",
    "five",
    "fix",
    "flag",
    "flame",
    "flat",
    "flew",
    "flies",
    "flight",
    "floating",
    "floor",
    "flow",
    "flower",
    "fly",
    "fog",
    "folks",
    "follow",
    "food",
    "foot",
    "football",
    "for",
    "force",
    "foreign",
    "forest",
    "forget",
    "forgot",
    "forgotten",
    "form",
    "former",
    "fort",
    "forth",
    "forty",
    "forward",
    "fought",
    "found",
    "four",
    "fourth",
    "fox",
    "frame",
    "free",
    "freedom",
    "frequently",
    "fresh",
    "friend",
    "friendly",
    "frighten",
    "frog",
    "from",
    "front",
    "frozen",
    "fruit",
    "fuel",
    "full",
    "fully",
    "fun",
    "function",
    "funny",
    "fur",
    "furniture",
    "further",
    "future",
    "gain",
    "game",
    "garage",
    "garden",
    "gas",
    "gasoline",
    "gate",
    "gather",
    "gave",
    "general",
    "generally",
    "gentle",
    "gently",
    "get",
    "getting",
    "giant",
    "gift",
    "girl",
    "give",
    "given",
    "giving",
    "glad",
    "glass",
    "globe",
    "go",
    "goes",
    "gold",
    "golden",
    "gone",
    "good",
    "goose",
    "got",
    "government",
    "grabbed",
    "grade",
    "gradually",
    "grain",
    "grandfather",
    "grandmother",
    "graph",
    "grass",
    "gravity",
    "gray",
    "great",
    "greater",
    "greatest",
    "greatly",
    "green",
    "grew",
    "ground",
    "group",
    "grow",
    "grown",
    "growth",
    "guard",
    "guess",
    "guide",
    "gulf",
    "gun",
    "habit",
    "had",
    "hair",
    "half",
    "halfway",
    "hall",
    "hand",
    "handle",
    "handsome",
    "hang",
    "happen",
    "happened",
    "happily",
    "happy",
    "harbor",
    "hard",
    "harder",
    "hardly",
    "has",
    "hat",
    "have",
    "having",
    "hay",
    "he",
    "headed",
    "heading",
    "health",
    "heard",
    "hearing",
    "heart",
    "heat",
    "heavy",
    "height",
    "held",
    "hello",
    "help",
    "helpful",
    "her",
    "herd",
    "here",
    "herself",
    "hidden",
    "hide",
    "high",
    "higher",
    "highest",
    "highway",
    "hill",
    "him",
    "himself",
    "his",
    "history",
    "hit",
    "hold",
    "hole",
    "hollow",
    "home",
    "honor",
    "hope",
    "horn",
    "horse",
    "hospital",
    "hot",
    "hour",
    "house",
    "how",
    "however",
    "huge",
    "human",
    "hundred",
    "hung",
    "hungry",
    "hunt",
    "hunter",
    "hurried",
    "hurry",
    "hurt",
    "husband",
    "ice",
    "idea",
    "identity",
    "if",
    "ill",
    "image",
    "imagine",
    "immediately",
    "importance",
    "important",
    "impossible",
    "improve",
    "in",
    "inch",
    "include",
    "including",
    "income",
    "increase",
    "indeed",
    "independent",
    "indicate",
    "individual",
    "industrial",
    "industry",
    "influence",
    "information",
    "inside",
    "instance",
    "instant",
    "instead",
    "instrument",
    "interest",
    "interior",
    "into",
    "introduced",
    "invented",
    "involved",
    "iron",
    "is",
    "island",
    "it",
    "its",
    "itself",
    "jack",
    "jar",
    "jet",
    "job",
    "join",
    "joined",
    "journey",
    "joy",
    "judge",
    "jump",
    "jungle",
    "just",
    "keep",
    "kept",
    "key",
    "kids",
    "kill",
    "kind",
    "kitchen",
    "knew",
    "knife",
    "know",
    "knowledge",
    "known",
    "label",
    "labor",
    "lack",
    "lady",
    "laid",
    "lake",
    "lamp",
    "land",
    "language",
    "large",
    "larger",
    "largest",
    "last",
    "late",
    "later",
    "laugh",
    "law",
    "lay",
    "layers",
    "lead",
    "leader",
    "leaf",
    "learn",
    "least",
    "leather",
    "leave",
    "leaving",
    "led",
    "left",
    "leg",
    "length",
    "lesson",
    "let",
    "letter",
    "level",
    "library",
    "lie",
    "life",
    "lift",
    "light",
    "like",
    "likely",
    "limited",
    "line",
    "lion",
    "lips",
    "liquid",
    "list",
    "listen",
    "little",
    "live",
    "living",
    "load",
    "local",
    "locate",
    "location",
    "log",
    "lonely",
    "long",
    "longer",
    "look",
    "loose",
    "lose",
    "loss",
    "lost",
    "lot",
    "loud",
    "love",
    "lovely",
    "low",
    "lower",
    "luck",
    "lucky",
    "lunch",
    "lungs",
    "lying",
    "machine",
    "machinery",
    "mad",
    "made",
    "magic",
    "magnet",
    "mail",
    "main",
    "mainly",
    "major",
    "make",
    "making",
    "man",
    "managed",
    "manner",
    "manufacturing",
    "many",
    "map",
    "mark",
    "market",
    "married",
    "mass",
    "massage",
    "master",
    "material",
    "mathematics",
    "matter",
    "may",
    "maybe",
    "me",
    "meal",
    "mean",
    "means",
    "meant",
    "measure",
    "meat",
    "medicine",
    "meet",
    "melted",
    "member",
    "memory",
    "men",
    "mental",
    "merely",
    "met",
    "metal",
    "method",
    "mice",
    "middle",
    "might",
    "mighty",
    "mile",
    "military",
    "milk",
    "mill",
    "mind",
    "mine",
    "minerals",
    "minute",
    "mirror",
    "missing",
    "mission",
    "mistake",
    "mix",
    "mixture",
    "model",
    "modern",
    "molecular",
    "moment",
    "money",
    "monkey",
    "month",
    "mood",
    "moon",
    "more",
    "morning",
    "most",
    "mostly",
    "mother",
    "motion",
    "motor",
    "mountain",
    "mouse",
    "mouth",
    "move",
    "movement",
    "movie",
    "moving",
    "mud",
    "muscle",
    "music",
    "musical",
    "must",
    "my",
    "myself",
    "mysterious",
    "nails",
    "name",
    "nation",
    "national",
    "native",
    "natural",
    "naturally",
    "nature",
    "near",
    "nearby",
    "nearer",
    "nearest",
    "nearly",
    "necessary",
    "neck",
    "needed",
    "needle",
    "needs",
    "negative",
    "neighbor",
    "neighborhood",
    "nervous",
    "nest",
    "never",
    "new",
    "news",
    "newspaper",
    "next",
    "nice",
    "night",
    "nine",
    "no",
    "nobody",
    "nodded",
    "noise",
    "none",
    "noon",
    "nor",
    "north",
    "nose",
    "not",
    "note",
    "noted",
    "nothing",
    "notice",
    "noun",
    "now",
    "number",
    "numeral",
    "nuts",
    "object",
    "observe",
    "obtain",
    "occasionally",
    "occur",
    "ocean",
    "of",
    "off",
    "offer",
    "office",
    "officer",
    "official",
    "oil",
    "old",
    "older",
    "oldest",
    "on",
    "once",
    "one",
    "only",
    "onto",
    "open",
    "operation",
    "opinion",
    "opportunity",
    "opposite",
    "or",
    "orange",
    "orbit",
    "order",
    "ordinary",
    "organization",
    "organized",
    "origin",
    "original",
    "other",
    "ought",
    "our",
    "ourselves",
    "out",
    "outer",
    "outline",
    "outside",
    "over",
    "own",
    "owner",
    "oxygen",
    "pack",
    "package",
    "page",
    "paid",
    "pain",
    "paint",
    "pair",
    "palace",
    "pale",
    "pan",
    "paper",
    "paragraph",
    "parallel",
    "parent",
    "park",
    "part",
    "particles",
    "particular",
    "particularly",
    "partly",
    "parts",
    "party",
    "pass",
    "passage",
    "past",
    "path",
    "pattern",
    "pay",
    "peace",
    "pen",
    "pencil",
    "people",
    "per",
    "percent",
    "perfect",
    "perfectly",
    "perhaps",
    "period",
    "person",
    "personal",
    "pet",
    "phrase",
    "physical",
    "piano",
    "pick",
    "picture",
    "pictured",
    "pie",
    "piece",
    "pig",
    "pile",
    "pilot",
    "pine",
    "pink",
    "pipe",
    "pitch",
    "place",
    "plain",
    "plan",
    "plane",
    "planet",
    "planned",
    "planning",
    "plant",
    "plastic",
    "plate",
    "plates",
    "play",
    "pleasant",
    "please",
    "pleasure",
    "plenty",
    "plural",
    "plus",
    "pocket",
    "poem",
    "poet",
    "poetry",
    "point",
    "pole",
    "police",
    "policeman",
    "political",
    "pond",
    "pony",
    "pool",
    "poor",
    "popular",
    "population",
    "porch",
    "port",
    "position",
    "positive",
    "possible",
    "possibly",
    "post",
    "pot",
    "potatoes",
    "pound",
    "pour",
    "powder",
    "power",
    "powerful",
    "practical",
    "practice",
    "prepare",
    "present",
    "president",
    "press",
    "pressure",
    "pretty",
    "prevent",
    "previous",
    "price",
    "pride",
    "primitive",
    "principal",
    "principle",
    "printed",
    "private",
    "prize",
    "probably",
    "problem",
    "process",
    "produce",
    "product",
    "production",
    "program",
    "progress",
    "promised",
    "proper",
    "properly",
    "property",
    "protection",
    "proud",
    "prove",
    "provide",
    "public",
    "pull",
    "pupil",
    "pure",
    "purple",
    "purpose",
    "push",
    "put",
    "putting",
    "quarter",
    "queen",
    "question",
    "quick",
    "quickly",
    "quiet",
    "quietly",
    "quite",
    "rabbit",
    "race",
    "radio",
    "railroad",
    "rain",
    "raise",
    "ran",
    "ranch",
    "range",
    "rapidly",
    "rate",
    "rather",
    "raw",
    "rays",
    "reach",
    "read",
    "reader",
    "ready",
    "real",
    "realize",
    "rear",
    "reason",
    "recall",
    "receive",
    "recent",
    "recently",
    "recognize",
    "record",
    "red",
    "refer",
    "refused",
    "region",
    "regular",
    "related",
    "relationship",
    "religious",
    "remain",
    "remarkable",
    "remember",
    "remove",
    "repeat",
    "replace",
    "replied",
    "report",
    "represent",
    "require",
    "research",
    "respect",
    "rest",
    "result",
    "return",
    "review",
    "rhyme",
    "rhythm",
    "rice",
    "rich",
    "ride",
    "riding",
    "right",
    "ring",
    "rise",
    "rising",
    "river",
    "road",
    "roar",
    "rock",
    "rocket",
    "rocky",
    "rod",
    "roll",
    "roof",
    "room",
    "root",
    "rope",
    "rose",
    "rough",
    "round",
    "route",
    "row",
    "rubbed",
    "rubber",
    "rule",
    "ruler",
    "run",
    "running",
    "rush",
    "sad",
    "saddle",
    "safe",
    "safety",
    "said",
    "sail",
    "sale",
    "salmon",
    "salt",
    "same",
    "sand",
    "sang",
    "sat",
    "satellites",
    "satisfied",
    "save",
    "saved",
    "saw",
    "say",
    "scale",
    "scared",
    "scene",
    "school",
    "science",
    "scientific",
    "scientist",
    "score",
    "screen",
    "sea",
    "search",
    "season",
    "seat",
    "second",
    "secret",
    "section",
    "see",
    "seed",
    "seeing",
    "seems",
    "seen",
    "seldom",
    "select",
    "selection",
    "sell",
    "send",
    "sense",
    "sent",
    "sentence",
    "separate",
    "series",
    "serious",
    "serve",
    "service",
    "sets",
    "setting",
    "settle",
    "settlers",
    "seven",
    "several",
    "shade",
    "shadow",
    "shake",
    "shaking",
    "shall",
    "shallow",
    "shape",
    "share",
    "sharp",
    "she",
    "sheep",
    "sheet",
    "shelf",
    "shells",
    "shelter",
    "shine",
    "shinning",
    "ship",
    "shirt",
    "shoe",
    "shoot",
    "shop",
    "shore",
    "short",
    "shorter",
    "shot",
    "should",
    "shoulder",
    "shout",
    "show",
    "shown",
    "shut",
    "sick",
    "sides",
    "sight",
    "sign",
    "signal",
    "silence",
    "silent",
    "silk",
    "silly",
    "silver",
    "similar",
    "simple",
    "simplest",
    "simply",
    "since",
    "sing",
    "single",
    "sink",
    "sister",
    "sit",
    "sitting",
    "situation",
    "six",
    "size",
    "skill",
    "skin",
    "sky",
    "slabs",
    "slave",
    "sleep",
    "slept",
    "slide",
    "slight",
    "slightly",
    "slip",
    "slipped",
    "slope",
    "slow",
    "slowly",
    "small",
    "smaller",
    "smallest",
    "smell",
    "smile",
    "smoke",
    "smooth",
    "snake",
    "snow",
    "so",
    "soap",
    "social",
    "society",
    "soft",
    "softly",
    "soil",
    "solar",
    "sold",
    "soldier",
    "solid",
    "solution",
    "solve",
    "some",
    "somebody",
    "somehow",
    "someone",
    "something",
    "sometime",
    "somewhere",
    "son",
    "song",
    "soon",
    "sort",
    "sound",
    "source",
    "south",
    "southern",
    "space",
    "speak",
    "special",
    "species",
    "specific",
    "speech",
    "speed",
    "spell",
    "spend",
    "spent",
    "spider",
    "spin",
    "spirit",
    "spite",
    "split",
    "spoken",
    "sport",
    "spread",
    "spring",
    "square",
    "stage",
    "stairs",
    "stand",
    "standard",
    "star",
    "stared",
    "start",
    "state",
    "statement",
    "station",
    "stay",
    "steady",
    "steam",
    "steel",
    "steep",
    "stems",
    "step",
    "stepped",
    "stick",
    "stiff",
    "still",
    "stock",
    "stomach",
    "stone",
    "stood",
    "stop",
    "stopped",
    "store",
    "storm",
    "story",
    "stove",
    "straight",
    "strange",
    "stranger",
    "straw",
    "stream",
    "street",
    "strength",
    "stretch",
    "strike",
    "string",
    "strip",
    "strong",
    "stronger",
    "struck",
    "structure",
    "struggle",
    "stuck",
    "student",
    "studied",
    "studying",
    "subject",
    "substance",
    "success",
    "successful",
    "such",
    "sudden",
    "suddenly",
    "sugar",
    "suggest",
    "suit",
    "sum",
    "summer",
    "sun",
    "sunlight",
    "supper",
    "supply",
    "support",
    "suppose",
    "sure",
    "surface",
    "surprise",
    "surrounded",
    "swam",
    "sweet",
    "swept",
    "swim",
    "swimming",
    "swing",
    "swung",
    "syllable",
    "symbol",
    "system",
    "table",
    "tail",
    "take",
    "taken",
    "tales",
    "talk",
    "tall",
    "tank",
    "tape",
    "task",
    "taste",
    "taught",
    "tax",
    "tea",
    "teach",
    "teacher",
    "team",
    "tears",
    "teeth",
    "telephone",
    "television",
    "tell",
    "temperature",
    "ten",
    "tent",
    "term",
    "terrible",
    "test",
    "than",
    "thank",
    "that",
    "thee",
    "them",
    "themselves",
    "then",
    "theory",
    "there",
    "therefore",
    "these",
    "they",
    "thick",
    "thin",
    "thing",
    "think",
    "third",
    "thirty",
    "this",
    "those",
    "thou",
    "though",
    "thought",
    "thousand",
    "thread",
    "three",
    "threw",
    "throat",
    "through",
    "throughout",
    "throw",
    "thrown",
    "thumb",
    "thus",
    "thy",
    "tide",
    "tie",
    "tight",
    "tightly",
    "till",
    "time",
    "tin",
    "tiny",
    "tip",
    "tired",
    "title",
    "to",
    "tobacco",
    "today",
    "together",
    "told",
    "tomorrow",
    "tone",
    "tongue",
    "tonight",
    "too",
    "took",
    "tool",
    "top",
    "topic",
    "torn",
    "total",
    "touch",
    "toward",
    "tower",
    "town",
    "toy",
    "trace",
    "track",
    "trade",
    "traffic",
    "trail",
    "train",
    "transportation",
    "trap",
    "travel",
    "treated",
    "tree",
    "triangle",
    "tribe",
    "trick",
    "tried",
    "trip",
    "troops",
    "tropical",
    "trouble",
    "truck",
    "trunk",
    "truth",
    "try",
    "tube",
    "tune",
    "turn",
    "twelve",
    "twenty",
    "twice",
    "two",
    "type",
    "typical",
    "uncle",
    "under",
    "underline",
    "understanding",
    "unhappy",
    "union",
    "unit",
    "universe",
    "unknown",
    "unless",
    "until",
    "unusual",
    "up",
    "upon",
    "upper",
    "upward",
    "us",
    "use",
    "useful",
    "using",
    "usual",
    "usually",
    "valley",
    "valuable",
    "value",
    "vapor",
    "variety",
    "various",
    "vast",
    "vegetable",
    "verb",
    "vertical",
    "very",
    "vessels",
    "victory",
    "view",
    "village",
    "visit",
    "visitor",
    "voice",
    "volume",
    "vote",
    "vowel",
    "voyage",
    "wagon",
    "wait",
    "walk",
    "wall",
    "want",
    "war",
    "warm",
    "warn",
    "was",
    "wash",
    "waste",
    "watch",
    "water",
    "wave",
    "way",
    "we",
    "weak",
    "wealth",
    "wear",
    "weather",
    "week",
    "weigh",
    "weight",
    "welcome",
    "well",
    "went",
    "were",
    "west",
    "western",
    "wet",
    "whale",
    "what",
    "whatever",
    "wheat",
    "wheel",
    "when",
    "whenever",
    "where",
    "wherever",
    "whether",
    "which",
    "while",
    "whispered",
    "whistle",
    "white",
    "who",
    "whole",
    "whom",
    "whose",
    "why",
    "wide",
    "widely",
    "wife",
    "wild",
    "will",
    "willing",
    "win",
    "wind",
    "window",
    "wing",
    "winter",
    "wire",
    "wise",
    "wish",
    "with",
    "within",
    "without",
    "wolf",
    "women",
    "won",
    "wonder",
    "wonderful",
    "wood",
    "wooden",
    "wool",
    "word",
    "wore",
    "work",
    "worker",
    "world",
    "worried",
    "worry",
    "worse",
    "worth",
    "would",
    "wrapped",
    "write",
    "writer",
    "writing",
    "written",
    "wrong",
    "wrote",
    "yard",
    "year",
    "yellow",
    "yes",
    "yesterday",
    "yet",
    "you",
    "young",
    "younger",
    "your",
    "yourself",
    "youth",
    "zero",
    "zebra",
    "zipper",
    "zoo",
    "zulu"
];
function words(options) {
    // initalize random number generator for words if options.seed is provided
    const random = options?.seed ? new seedrandom(options.seed) : null;
    function word() {
        if (options && options.maxLength > 1) return generateWordWithMaxLength();
        else return generateRandomWord();
    }
    function generateWordWithMaxLength() {
        var rightSize = false;
        var wordUsed;
        while(!rightSize){
            wordUsed = generateRandomWord();
            if (wordUsed.length <= options.maxLength) rightSize = true;
        }
        return wordUsed;
    }
    function generateRandomWord() {
        return wordList[randInt(wordList.length)];
    }
    // random int as seeded by options.seed if applicable, or Math.random() otherwise
    function randInt(lessThan) {
        const r = random ? random() : Math.random();
        return Math.floor(r * lessThan);
    }
    // No arguments = generate one word
    if (typeof options === 'undefined') return word();
    // Just a number = return that many words
    if (typeof options === 'number') options = {
        exactly: options
    };
    // options supported: exactly, min, max, join
    if (options.exactly) {
        options.min = options.exactly;
        options.max = options.exactly;
    }
    // not a number = one word par string
    if (typeof options.wordsPerString !== 'number') options.wordsPerString = 1;
    //not a function = returns the raw word
    if (typeof options.formatter !== 'function') options.formatter = (word)=>word;
    //not a string = separator is a space
    if (typeof options.separator !== 'string') options.separator = ' ';
    var total = options.min + randInt(options.max + 1 - options.min);
    var results = [];
    var token = '';
    var relativeIndex = 0;
    for(var i = 0; i < total * options.wordsPerString; i++){
        if (relativeIndex === options.wordsPerString - 1) token += options.formatter(word(), relativeIndex);
        else token += options.formatter(word(), relativeIndex) + options.separator;
        relativeIndex++;
        if ((i + 1) % options.wordsPerString === 0) {
            results.push(token);
            token = '';
            relativeIndex = 0;
        }
    }
    if (typeof options.join === 'string') results = results.join(options.join);
    return results;
}
module.exports = words;
// Export the word list as it is often useful
words.wordList = wordList;

},{"c40fd52046b1e673":"adOwT"}],"adOwT":[function(require,module,exports,__globalThis) {
// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.
// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = require("12650d0e2f5e5e92");
// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = require("2e9ff46cdee4aab4");
// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = require("a04af32374227880");
// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = require("65d05f6db8da652c");
// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = require("1e972c6b140abbe7");
// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = require("286eb9753e804cda");
// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = require("a0d0bb1ebcf7d3f9");
sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;
module.exports = sr;

},{"12650d0e2f5e5e92":"lDRcu","2e9ff46cdee4aab4":"bZ3p5","a04af32374227880":"EFVEC","65d05f6db8da652c":"cH3Jh","1e972c6b140abbe7":"53y0I","286eb9753e804cda":"9tJ0P","a0d0bb1ebcf7d3f9":"kDck0"}],"lDRcu":[function(require,module,exports,__globalThis) {
// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -
// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
(function(global, module1, define1) {
    function Alea(seed) {
        var me = this, mash = Mash();
        me.next = function() {
            var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
            me.s0 = me.s1;
            me.s1 = me.s2;
            return me.s2 = t - (me.c = t | 0);
        };
        // Apply the seeding algorithm from Baagoe.
        me.c = 1;
        me.s0 = mash(' ');
        me.s1 = mash(' ');
        me.s2 = mash(' ');
        me.s0 -= mash(seed);
        if (me.s0 < 0) me.s0 += 1;
        me.s1 -= mash(seed);
        if (me.s1 < 0) me.s1 += 1;
        me.s2 -= mash(seed);
        if (me.s2 < 0) me.s2 += 1;
        mash = null;
    }
    function copy(f, t) {
        t.c = f.c;
        t.s0 = f.s0;
        t.s1 = f.s1;
        t.s2 = f.s2;
        return t;
    }
    function impl(seed, opts) {
        var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
        prng.int32 = function() {
            return xg.next() * 0x100000000 | 0;
        };
        prng.double = function() {
            return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
        };
        prng.quick = prng;
        if (state) {
            if (typeof state == 'object') copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    function Mash() {
        var n = 0xefc8249d;
        var mash = function(data) {
            data = String(data);
            for(var i = 0; i < data.length; i++){
                n += data.charCodeAt(i);
                var h = 0.02519603282416938 * n;
                n = h >>> 0;
                h -= n;
                h *= n;
                n = h >>> 0;
                h -= n;
                n += h * 0x100000000; // 2^32
            }
            return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
        };
        return mash;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.alea = impl;
})(this, module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"bZ3p5":[function(require,module,exports,__globalThis) {
// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper
(function(global, module1, define1) {
    function XorGen(seed) {
        var me = this, strseed = '';
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        // Set up generator function.
        me.next = function() {
            var t = me.x ^ me.x << 11;
            me.x = me.y;
            me.y = me.z;
            me.z = me.w;
            return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
        };
        if (seed === (seed | 0)) // Integer seed.
        me.x = seed;
        else // String seed.
        strseed += seed;
        // Mix in string seed, then discard an initial batch of 64 values.
        for(var k = 0; k < strseed.length + 64; k++){
            me.x ^= strseed.charCodeAt(k) | 0;
            me.next();
        }
    }
    function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        return t;
    }
    function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 0x100000000;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 0x100000000, result = (top + bot) / 2097152;
            while (result === 0);
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (typeof state == 'object') copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.xor128 = impl;
})(this, module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"EFVEC":[function(require,module,exports,__globalThis) {
// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper
(function(global, module1, define1) {
    function XorGen(seed) {
        var me = this, strseed = '';
        // Set up generator function.
        me.next = function() {
            var t = me.x ^ me.x >>> 2;
            me.x = me.y;
            me.y = me.z;
            me.z = me.w;
            me.w = me.v;
            return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
        };
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.v = 0;
        if (seed === (seed | 0)) // Integer seed.
        me.x = seed;
        else // String seed.
        strseed += seed;
        // Mix in string seed, then discard an initial batch of 64 values.
        for(var k = 0; k < strseed.length + 64; k++){
            me.x ^= strseed.charCodeAt(k) | 0;
            if (k == strseed.length) me.d = me.x << 10 ^ me.x >>> 4;
            me.next();
        }
    }
    function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        t.v = f.v;
        t.d = f.d;
        return t;
    }
    function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 0x100000000;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 0x100000000, result = (top + bot) / 2097152;
            while (result === 0);
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (typeof state == 'object') copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.xorwow = impl;
})(this, module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"cH3Jh":[function(require,module,exports,__globalThis) {
// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf
(function(global, module1, define1) {
    function XorGen(seed) {
        var me = this;
        // Set up generator function.
        me.next = function() {
            // Update xor generator.
            var X = me.x, i = me.i, t, v, w;
            t = X[i];
            t ^= t >>> 7;
            v = t ^ t << 24;
            t = X[i + 1 & 7];
            v ^= t ^ t >>> 10;
            t = X[i + 3 & 7];
            v ^= t ^ t >>> 3;
            t = X[i + 4 & 7];
            v ^= t ^ t << 7;
            t = X[i + 7 & 7];
            t = t ^ t << 13;
            v ^= t ^ t << 9;
            X[i] = v;
            me.i = i + 1 & 7;
            return v;
        };
        function init(me, seed) {
            var j, w, X = [];
            if (seed === (seed | 0)) // Seed state array using a 32-bit integer.
            w = X[0] = seed;
            else {
                // Seed state using a string.
                seed = '' + seed;
                for(j = 0; j < seed.length; ++j)X[j & 7] = X[j & 7] << 15 ^ seed.charCodeAt(j) + X[j + 1 & 7] << 13;
            }
            // Enforce an array length of 8, not all zeroes.
            while(X.length < 8)X.push(0);
            for(j = 0; j < 8 && X[j] === 0; ++j);
            if (j == 8) w = X[7] = -1;
            else w = X[j];
            me.x = X;
            me.i = 0;
            // Discard an initial 256 values.
            for(j = 256; j > 0; --j)me.next();
        }
        init(me, seed);
    }
    function copy(f, t) {
        t.x = f.x.slice();
        t.i = f.i;
        return t;
    }
    function impl(seed, opts) {
        if (seed == null) seed = +new Date;
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 0x100000000;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 0x100000000, result = (top + bot) / 2097152;
            while (result === 0);
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (state.x) copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.xorshift7 = impl;
})(this, module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"53y0I":[function(require,module,exports,__globalThis) {
// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().
(function(global, module1, define1) {
    function XorGen(seed) {
        var me = this;
        // Set up generator function.
        me.next = function() {
            var w = me.w, X = me.X, i = me.i, t, v;
            // Update Weyl generator.
            me.w = w = w + 0x61c88647 | 0;
            // Update xor generator.
            v = X[i + 34 & 127];
            t = X[i = i + 1 & 127];
            v ^= v << 13;
            t ^= t << 17;
            v ^= v >>> 15;
            t ^= t >>> 12;
            // Update Xor generator array state.
            v = X[i] = v ^ t;
            me.i = i;
            // Result is the combination.
            return v + (w ^ w >>> 16) | 0;
        };
        function init(me, seed) {
            var t, v, i, j, w, X = [], limit = 128;
            if (seed === (seed | 0)) {
                // Numeric seeds initialize v, which is used to generates X.
                v = seed;
                seed = null;
            } else {
                // String seeds are mixed into v and X one character at a time.
                seed = seed + '\0';
                v = 0;
                limit = Math.max(limit, seed.length);
            }
            // Initialize circular array and weyl value.
            for(i = 0, j = -32; j < limit; ++j){
                // Put the unicode characters into the array, and shuffle them.
                if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
                // After 32 shuffles, take v as the starting w value.
                if (j === 0) w = v;
                v ^= v << 10;
                v ^= v >>> 15;
                v ^= v << 4;
                v ^= v >>> 13;
                if (j >= 0) {
                    w = w + 0x61c88647 | 0; // Weyl.
                    t = X[j & 127] ^= v + w; // Combine xor and weyl to init array.
                    i = 0 == t ? i + 1 : 0; // Count zeroes.
                }
            }
            // We have detected all zeroes; make the key nonzero.
            if (i >= 128) X[(seed && seed.length || 0) & 127] = -1;
            // Run the generator 512 times to further mix the state before using it.
            // Factoring this as a function slows the main generator, so it is just
            // unrolled here.  The weyl generator is not advanced while warming up.
            i = 127;
            for(j = 512; j > 0; --j){
                v = X[i + 34 & 127];
                t = X[i = i + 1 & 127];
                v ^= v << 13;
                t ^= t << 17;
                v ^= v >>> 15;
                t ^= t >>> 12;
                X[i] = v ^ t;
            }
            // Storing state as object members is faster than using closure variables.
            me.w = w;
            me.X = X;
            me.i = i;
        }
        init(me, seed);
    }
    function copy(f, t) {
        t.i = f.i;
        t.w = f.w;
        t.X = f.X.slice();
        return t;
    }
    function impl(seed, opts) {
        if (seed == null) seed = +new Date;
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 0x100000000;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 0x100000000, result = (top + bot) / 2097152;
            while (result === 0);
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (state.X) copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.xor4096 = impl;
})(this, module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"9tJ0P":[function(require,module,exports,__globalThis) {
// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
(function(global, module1, define1) {
    function XorGen(seed) {
        var me = this, strseed = '';
        // Set up generator function.
        me.next = function() {
            var b = me.b, c = me.c, d = me.d, a = me.a;
            b = b << 25 ^ b >>> 7 ^ c;
            c = c - d | 0;
            d = d << 24 ^ d >>> 8 ^ a;
            a = a - b | 0;
            me.b = b = b << 20 ^ b >>> 12 ^ c;
            me.c = c = c - d | 0;
            me.d = d << 16 ^ c >>> 16 ^ a;
            return me.a = a - b | 0;
        };
        /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */ me.a = 0;
        me.b = 0;
        me.c = -1640531527;
        me.d = 1367130551;
        if (seed === Math.floor(seed)) {
            // Integer seed.
            me.a = seed / 0x100000000 | 0;
            me.b = seed | 0;
        } else // String seed.
        strseed += seed;
        // Mix in string seed, then discard an initial batch of 64 values.
        for(var k = 0; k < strseed.length + 20; k++){
            me.b ^= strseed.charCodeAt(k) | 0;
            me.next();
        }
    }
    function copy(f, t) {
        t.a = f.a;
        t.b = f.b;
        t.c = f.c;
        t.d = f.d;
        return t;
    }
    function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 0x100000000;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 0x100000000, result = (top + bot) / 2097152;
            while (result === 0);
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (typeof state == 'object') copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.tychei = impl;
})(this, module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"kDck0":[function(require,module,exports,__globalThis) {
/*
Copyright 2019 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/ (function(global, pool, math) {
    //
    // The following constants are related to IEEE 754 limits.
    //
    var width = 256, chunks = 6, digits = 52, rngname = 'random', startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto; // node.js crypto module, initialized at the bottom.
    //
    // seedrandom()
    // This is the seedrandom function described above.
    //
    function seedrandom(seed, options, callback) {
        var key = [];
        options = options == true ? {
            entropy: true
        } : options || {};
        // Flatten the seed string or build one from local entropy if needed.
        var shortseed = mixkey(flatten(options.entropy ? [
            seed,
            tostring(pool)
        ] : seed == null ? autoseed() : seed, 3), key);
        // Use the seed to initialize an ARC4 generator.
        var arc4 = new ARC4(key);
        // This function returns a random double in [0, 1) that contains
        // randomness in every bit of the mantissa of the IEEE 754 value.
        var prng = function() {
            var n = arc4.g(chunks), d = startdenom, x = 0; //   and no 'extra last byte'.
            while(n < significance){
                n = (n + x) * width; //   shifting numerator and
                d *= width; //   denominator and generating a
                x = arc4.g(1); //   new least-significant-byte.
            }
            while(n >= overflow){
                n /= 2; //   last byte, shift everything
                d /= 2; //   right using integer math until
                x >>>= 1; //   we have exactly the desired bits.
            }
            return (n + x) / d; // Form the number within [0, 1).
        };
        prng.int32 = function() {
            return arc4.g(4) | 0;
        };
        prng.quick = function() {
            return arc4.g(4) / 0x100000000;
        };
        prng.double = prng;
        // Mix the randomness into accumulated entropy.
        mixkey(tostring(arc4.S), pool);
        // Calling convention: what to return as a function of prng, seed, is_math.
        return (options.pass || callback || function(prng, seed, is_math_call, state) {
            if (state) {
                // Load the arc4 state from the given state if it has an S array.
                if (state.S) copy(state, arc4);
                // Only provide the .state method if requested via options.state.
                prng.state = function() {
                    return copy(arc4, {});
                };
            }
            // If called as a method of Math (Math.seedrandom()), mutate
            // Math.random because that is how seedrandom.js has worked since v1.0.
            if (is_math_call) {
                math[rngname] = prng;
                return seed;
            } else return prng;
        })(prng, shortseed, 'global' in options ? options.global : this == math, options.state);
    }
    //
    // ARC4
    //
    // An ARC4 implementation.  The constructor takes a key in the form of
    // an array of at most (width) integers that should be 0 <= x < (width).
    //
    // The g(count) method returns a pseudorandom integer that concatenates
    // the next (count) outputs from ARC4.  Its return value is a number x
    // that is in the range 0 <= x < (width ^ count).
    //
    function ARC4(key) {
        var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
        // The empty key [] is treated as [0].
        if (!keylen) key = [
            keylen++
        ];
        // Set up S using the standard key scheduling algorithm.
        while(i < width)s[i] = i++;
        for(i = 0; i < width; i++){
            s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
            s[j] = t;
        }
        // The "g" method returns the next (count) outputs as one number.
        (me.g = function(count) {
            // Using instance members instead of closure state nearly doubles speed.
            var t, r = 0, i = me.i, j = me.j, s = me.S;
            while(count--){
                t = s[i = mask & i + 1];
                r = r * width + s[mask & (s[i] = s[j = mask & j + t]) + (s[j] = t)];
            }
            me.i = i;
            me.j = j;
            return r;
        // For robust unpredictability, the function call below automatically
        // discards an initial batch of values.  This is called RC4-drop[256].
        // See http://google.com/search?q=rsa+fluhrer+response&btnI
        })(width);
    }
    //
    // copy()
    // Copies internal state of ARC4 to or from a plain object.
    //
    function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
    }
    //
    // flatten()
    // Converts an object tree to nested arrays of strings.
    //
    function flatten(obj, depth) {
        var result = [], typ = typeof obj, prop;
        if (depth && typ == 'object') {
            for(prop in obj)try {
                result.push(flatten(obj[prop], depth - 1));
            } catch (e) {}
        }
        return result.length ? result : typ == 'string' ? obj : obj + '\0';
    }
    //
    // mixkey()
    // Mixes a string seed into a key that is an array of integers, and
    // returns a shortened string seed that is equivalent to the result key.
    //
    function mixkey(seed, key) {
        var stringseed = seed + '', smear, j = 0;
        while(j < stringseed.length)key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
        return tostring(key);
    }
    //
    // autoseed()
    // Returns an object for autoseeding, using window.crypto and Node crypto
    // module if available.
    //
    function autoseed() {
        try {
            var out;
            if (nodecrypto && (out = nodecrypto.randomBytes)) // The use of 'out' to remember randomBytes makes tight minified code.
            out = out(width);
            else {
                out = new Uint8Array(width);
                (global.crypto || global.msCrypto).getRandomValues(out);
            }
            return tostring(out);
        } catch (e) {
            var browser = global.navigator, plugins = browser && browser.plugins;
            return [
                +new Date,
                global,
                plugins,
                global.screen,
                tostring(pool)
            ];
        }
    }
    //
    // tostring()
    // Converts an array of charcodes to a string
    //
    function tostring(a) {
        return String.fromCharCode.apply(0, a);
    }
    //
    // When seedrandom.js is loaded, we immediately mix a few bits
    // from the built-in RNG into the entropy pool.  Because we do
    // not want to interfere with deterministic PRNG state later,
    // seedrandom will not call math.random on its own again after
    // initialization.
    //
    mixkey(math.random(), pool);
    //
    // Nodejs and AMD support: export the implementation as a module using
    // either convention.
    //
    if (module.exports) {
        module.exports = seedrandom;
        // When in node.js, try using crypto package for autoseeding.
        try {
            nodecrypto = require("55ffaba5e09143c0");
        } catch (ex) {}
    } else if (typeof define == 'function' && define.amd) define(function() {
        return seedrandom;
    });
    else // When included as a plain script, set up Math.seedrandom global.
    math['seed' + rngname] = seedrandom;
// End anonymous scope, and pass initial values.
})(// global: `self` in browsers (including strict mode and web workers),
// otherwise `this` in Node and other environments
typeof self !== 'undefined' ? self : this, [], Math // math: package containing random, pow, and seedrandom
);

},{"55ffaba5e09143c0":"eoH60"}],"eoH60":[function(require,module,exports,__globalThis) {
"use strict";

},{}],"YPkPB":[function(require,module,exports,__globalThis) {
'use strict';
var jspsych = require("b3748124c3d7f99c");
var version = "2.1.0";
const info = {
    name: "preload",
    version,
    parameters: {
        /** If `true`, the plugin will preload any files that can be automatically preloaded based on the main experiment
     * timeline that is passed to `jsPsych.run`. If `false`, any file(s) to be preloaded should be specified by passing
     * a timeline array to the `trials` parameter and/or an array of file paths to the `images`, `audio`, and/or `video`
     * parameters. Setting this parameter to `false` is useful when you plan to preload your files in smaller batches
     * throughout the experiment. */ auto_preload: {
            type: jspsych.ParameterType.BOOL,
            default: false
        },
        /** An array containing one or more jsPsych trial or timeline objects. This parameter is useful when you want to
     * automatically preload stimuli files from a specific subset of the experiment. See [Creating an Experiment:
     * The Timeline](../overview/timeline.md) for information on constructing timelines. */ trials: {
            type: jspsych.ParameterType.TIMELINE,
            default: []
        },
        /**
     * Array with one or more image files to load. This parameter is often used in cases where media files cannot
     * be automatically preloaded based on the timeline, e.g. because the media files are passed into an image plugin/parameter with
     * timeline variables or dynamic parameters, or because the image is embedded in an HTML string.
     */ images: {
            type: jspsych.ParameterType.STRING,
            default: [],
            array: true
        },
        /**
     * Array with one or more audio files to load. This parameter is often used in cases where media files cannot
     * be automatically preloaded based on the timeline, e.g. because the media files are passed into an audio plugin/parameter with
     * timeline variables or dynamic parameters, or because the audio is embedded in an HTML string.
     */ audio: {
            type: jspsych.ParameterType.STRING,
            default: [],
            array: true
        },
        /**
     * Array with one or more video files to load. This parameter is often used in cases where media files cannot
     * be automatically preloaded based on the timeline, e.g. because the media files are passed into a video plugin/parameter with
     * timeline variables or dynamic parameters, or because the video is embedded in an HTML string.
     */ video: {
            type: jspsych.ParameterType.STRING,
            default: [],
            array: true
        },
        /** HTML-formatted message to show above the progress bar while the files are loading. If `null`, then no message is shown. */ message: {
            type: jspsych.ParameterType.HTML_STRING,
            default: null
        },
        /** If `true`, a progress bar will be shown while the files are loading. If `false`, no progress bar is shown. */ show_progress_bar: {
            type: jspsych.ParameterType.BOOL,
            default: true
        },
        /**
     * Whether or not to continue with the experiment if a loading error occurs. If false, then if a loading error occurs,
     * the error_message will be shown on the page and the trial will not end. If true, then if if a loading error occurs, the trial will end
     * and preloading failure will be logged in the trial data.
     */ continue_after_error: {
            type: jspsych.ParameterType.BOOL,
            default: false
        },
        /** HTML-formatted message to be shown on the page after loading fails or times out. Only applies when `continue_after_error` is `false`.*/ error_message: {
            type: jspsych.ParameterType.HTML_STRING,
            default: "The experiment failed to load."
        },
        /**
     * Whether or not to show a detailed error message on the page. If true, then detailed error messages will be shown on the
     * page for all files that failed to load, along with the general error_message. This parameter is only relevant when continue_after_error is false.
     */ show_detailed_errors: {
            type: jspsych.ParameterType.BOOL,
            default: false
        },
        /**
     * The maximum amount of time that the plugin should wait before stopping the preload and either ending the trial
     * (if continue_after_error is true) or stopping the experiment with an error message (if continue_after_error is false).
     * If null, the plugin will wait indefintely for the files to load.
     */ max_load_time: {
            type: jspsych.ParameterType.INT,
            default: null
        },
        /** Function to be called after a file fails to load. The function takes the file name as its only argument. */ on_error: {
            type: jspsych.ParameterType.FUNCTION,
            default: null
        },
        /** Function to be called after a file loads successfully. The function takes the file name as its only argument. */ on_success: {
            type: jspsych.ParameterType.FUNCTION,
            default: null
        }
    },
    data: {
        /**  If `true`, then all files loaded successfully within the `max_load_time`. If `false`, then one or
     * more file requests returned a failure and/or the file loading did not complete within the `max_load_time` duration.*/ success: {
            type: jspsych.ParameterType.BOOL
        },
        /** If `true`, then the files did not finish loading within the `max_load_time` duration.
     * If `false`, then the file loading did not timeout. Note that when the preload trial does not timeout
     * (`timeout: false`), it is still possible for loading to fail (`success: false`). This happens if
     * one or more files fails to load and all file requests trigger either a success or failure event before
     * the `max_load_time` duration. */ timeout: {
            type: jspsych.ParameterType.BOOL
        },
        /** One or more image file paths that produced a loading failure before the trial ended. */ failed_images: {
            type: jspsych.ParameterType.STRING,
            array: true
        },
        /** One or more audio file paths that produced a loading failure before the trial ended. */ failed_audio: {
            type: jspsych.ParameterType.STRING,
            array: true
        },
        /** One or more video file paths that produced a loading failure before the trial ended. */ failed_video: {
            type: jspsych.ParameterType.STRING,
            array: true
        }
    },
    // prettier-ignore
    citations: {
        "apa": "de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",
        "bibtex": '@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '
    }
};
class PreloadPlugin {
    constructor(jsPsych){
        this.jsPsych = jsPsych;
    }
    static{
        this.info = info;
    }
    trial(display_element, trial) {
        var success = null;
        var timeout = false;
        var failed_images = [];
        var failed_audio = [];
        var failed_video = [];
        var detailed_errors = [];
        var in_safe_mode = this.jsPsych.getSafeModeStatus();
        var images = [];
        var audio = [];
        var video = [];
        if (trial.auto_preload) {
            var experiment_timeline = this.jsPsych.getTimeline();
            var auto_preload = this.jsPsych.pluginAPI.getAutoPreloadList(experiment_timeline);
            images = images.concat(auto_preload.images);
            audio = audio.concat(auto_preload.audio);
            video = video.concat(auto_preload.video);
        }
        if (trial.trials.length > 0) {
            var trial_preloads = this.jsPsych.pluginAPI.getAutoPreloadList(trial.trials);
            images = images.concat(trial_preloads.images);
            audio = audio.concat(trial_preloads.audio);
            video = video.concat(trial_preloads.video);
        }
        images = images.concat(trial.images);
        audio = audio.concat(trial.audio);
        video = video.concat(trial.video);
        images = this.jsPsych.utils.unique(images.flat());
        audio = this.jsPsych.utils.unique(audio.flat());
        video = this.jsPsych.utils.unique(video.flat());
        if (in_safe_mode) video = [];
        var html = "";
        if (trial.message !== null) html += trial.message;
        if (trial.show_progress_bar) html += `
            <div id='jspsych-loading-progress-bar-container' style='height: 10px; width: 300px; background-color: #ddd; margin: auto;'>
              <div id='jspsych-loading-progress-bar' style='height: 10px; width: 0%; background-color: #777;'></div>
            </div>`;
        display_element.innerHTML = html;
        const update_loading_progress_bar = ()=>{
            loaded++;
            if (trial.show_progress_bar) {
                var percent_loaded = loaded / total_n * 100;
                var preload_progress_bar = display_element.querySelector("#jspsych-loading-progress-bar");
                if (preload_progress_bar !== null) preload_progress_bar.style.width = percent_loaded + "%";
            }
        };
        const on_success = ()=>{
            if (typeof timeout !== "undefined" && timeout === false) {
                this.jsPsych.pluginAPI.clearAllTimeouts();
                this.jsPsych.pluginAPI.cancelPreloads();
                success = true;
                end_trial();
            }
        };
        const on_timeout = ()=>{
            this.jsPsych.pluginAPI.cancelPreloads();
            if (typeof success !== "undefined" && (success === false || success === null)) {
                timeout = true;
                if (loaded_success < total_n) success = false;
                after_error("timeout");
                detailed_errors.push("<p><strong>Loading timed out.</strong><br>Consider compressing your stimuli files, loading your files in smaller batches,<br>and/or increasing the <i>max_load_time</i> parameter.</p>");
                if (trial.continue_after_error) end_trial();
                else stop_with_error_message();
            }
        };
        const stop_with_error_message = ()=>{
            this.jsPsych.pluginAPI.clearAllTimeouts();
            this.jsPsych.pluginAPI.cancelPreloads();
            display_element.innerHTML = trial.error_message;
            if (trial.show_detailed_errors) {
                display_element.innerHTML += "<p><strong>Error details:</strong></p>";
                detailed_errors.forEach((e)=>{
                    display_element.innerHTML += e;
                });
            }
        };
        const end_trial = ()=>{
            var trial_data = {
                success,
                timeout,
                failed_images,
                failed_audio,
                failed_video
            };
            this.jsPsych.finishTrial(trial_data);
        };
        if (trial.max_load_time !== null) this.jsPsych.pluginAPI.setTimeout(on_timeout, trial.max_load_time);
        var total_n = images.length + audio.length + video.length;
        var loaded = 0;
        var loaded_success = 0;
        if (total_n == 0) on_success();
        else {
            const load_video = (cb)=>{
                this.jsPsych.pluginAPI.preloadVideo(video, cb, file_loading_success, file_loading_error);
            };
            const load_audio = (cb)=>{
                this.jsPsych.pluginAPI.preloadAudio(audio, cb, file_loading_success, file_loading_error);
            };
            const load_images = (cb)=>{
                this.jsPsych.pluginAPI.preloadImages(images, cb, file_loading_success, file_loading_error);
            };
            if (video.length > 0) load_video(()=>{});
            if (audio.length > 0) load_audio(()=>{});
            if (images.length > 0) load_images(()=>{});
        }
        function file_loading_error(e) {
            update_loading_progress_bar();
            if (success == null) success = false;
            var source = "unknown file";
            if (e.source) source = e.source;
            if (e.error && e.error.path && e.error.path.length > 0) {
                if (e.error.path[0].localName == "img") failed_images.push(source);
                else if (e.error.path[0].localName == "audio") failed_audio.push(source);
                else if (e.error.path[0].localName == "video") failed_video.push(source);
            }
            var err_msg = "<p><strong>Error loading file: " + source + "</strong><br>";
            if (e.error.statusText) err_msg += "File request response status: " + e.error.statusText + "<br>";
            if (e.error == "404") err_msg += "404 - file not found.<br>";
            if (typeof e.error.loaded !== "undefined" && e.error.loaded !== null && e.error.loaded !== 0) err_msg += e.error.loaded + " bytes transferred.";
            else err_msg += "File did not begin loading. Check that file path is correct and reachable by the browser,<br>and that loading is not blocked by cross-origin resource sharing (CORS) errors.";
            err_msg += "</p>";
            detailed_errors.push(err_msg);
            after_error(source);
            if (loaded == total_n) {
                if (trial.continue_after_error) end_trial();
                else stop_with_error_message();
            }
        }
        function file_loading_success(source) {
            update_loading_progress_bar();
            after_success(source);
            loaded_success++;
            if (loaded_success == total_n) on_success();
            else if (loaded == total_n) {
                if (trial.continue_after_error) end_trial();
                else stop_with_error_message();
            }
        }
        function after_error(source) {
            if (trial.on_error !== null) trial.on_error(source);
        }
        function after_success(source) {
            if (trial.on_success !== null) trial.on_success(source);
        }
    }
    simulate(trial, simulation_mode, simulation_options, load_callback) {
        if (simulation_mode == "data-only") {
            load_callback();
            this.simulate_data_only(trial, simulation_options);
        }
        if (simulation_mode == "visual") this.simulate_visual(trial, simulation_options, load_callback);
    }
    create_simulation_data(trial, simulation_options) {
        const default_data = {
            success: true,
            timeout: false,
            failed_images: [],
            failed_audio: [],
            failed_video: []
        };
        const data = this.jsPsych.pluginAPI.mergeSimulationData(default_data, simulation_options);
        return data;
    }
    simulate_data_only(trial, simulation_options) {
        const data = this.create_simulation_data(trial, simulation_options);
        this.jsPsych.finishTrial(data);
    }
    simulate_visual(trial, simulation_options, load_callback) {
        const display_element = this.jsPsych.getDisplayElement();
        this.trial(display_element, trial);
        load_callback();
    }
}
module.exports = PreloadPlugin; //# sourceMappingURL=index.cjs.map

},{"b3748124c3d7f99c":"eQ9wp"}],"kWlyD":[function(require,module,exports,__globalThis) {
'use strict';
var jspsych = require("fec38b631c3beeb7");
var version = "2.1.0";
const info = {
    name: "html-keyboard-response",
    version,
    parameters: {
        /**
     * The string to be displayed.
     */ stimulus: {
            type: jspsych.ParameterType.HTML_STRING,
            default: void 0
        },
        /**
     * This array contains the key(s) that the participant is allowed to press in order to respond
     * to the stimulus. Keys should be specified as characters (e.g., `'a'`, `'q'`, `' '`, `'Enter'`, `'ArrowDown'`) - see
     * {@link https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values this page}
     * and
     * {@link https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/ this page (event.key column)}
     * for more examples. Any key presses that are not listed in the
     * array will be ignored. The default value of `"ALL_KEYS"` means that all keys will be accepted as valid responses.
     * Specifying `"NO_KEYS"` will mean that no responses are allowed.
     */ choices: {
            type: jspsych.ParameterType.KEYS,
            default: "ALL_KEYS"
        },
        /**
     * This string can contain HTML markup. Any content here will be displayed below the stimulus.
     * The intention is that it can be used to provide a reminder about the action the participant
     * is supposed to take (e.g., which key to press).
     */ prompt: {
            type: jspsych.ParameterType.HTML_STRING,
            default: null
        },
        /**
     * How long to display the stimulus in milliseconds. The visibility CSS property of the stimulus
     * will be set to `hidden` after this time has elapsed. If this is null, then the stimulus will
     * remain visible until the trial ends.
     */ stimulus_duration: {
            type: jspsych.ParameterType.INT,
            default: null
        },
        /**
     * How long to wait for the participant to make a response before ending the trial in milliseconds.
     * If the participant fails to make a response before this timer is reached, the participant's response
     * will be recorded as null for the trial and the trial will end. If the value of this parameter is null,
     * then the trial will wait for a response indefinitely.
     */ trial_duration: {
            type: jspsych.ParameterType.INT,
            default: null
        },
        /**
     * If true, then the trial will end whenever the participant makes a response (assuming they make their
     * response before the cutoff specified by the trial_duration parameter). If false, then the trial will
     * continue until the value for trial_duration is reached. You can set this parameter to false to force
     * the participant to view a stimulus for a fixed amount of time, even if they respond before the time is complete.
     */ response_ends_trial: {
            type: jspsych.ParameterType.BOOL,
            default: true
        }
    },
    data: {
        /** Indicates which key the participant pressed. */ response: {
            type: jspsych.ParameterType.STRING
        },
        /** The response time in milliseconds for the participant to make a response. The time is measured from when the stimulus first appears on the screen until the participant's response. */ rt: {
            type: jspsych.ParameterType.INT
        },
        /** The HTML content that was displayed on the screen. */ stimulus: {
            type: jspsych.ParameterType.STRING
        }
    },
    // prettier-ignore
    citations: {
        "apa": "de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",
        "bibtex": '@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '
    }
};
class HtmlKeyboardResponsePlugin {
    constructor(jsPsych){
        this.jsPsych = jsPsych;
    }
    static{
        this.info = info;
    }
    trial(display_element, trial) {
        var new_html = '<div id="jspsych-html-keyboard-response-stimulus">' + trial.stimulus + "</div>";
        if (trial.prompt !== null) new_html += trial.prompt;
        display_element.innerHTML = new_html;
        var response = {
            rt: null,
            key: null
        };
        const end_trial = ()=>{
            if (typeof keyboardListener !== "undefined") this.jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
            var trial_data = {
                rt: response.rt,
                stimulus: trial.stimulus,
                response: response.key
            };
            this.jsPsych.finishTrial(trial_data);
        };
        var after_response = (info2)=>{
            display_element.querySelector("#jspsych-html-keyboard-response-stimulus").className += " responded";
            if (response.key == null) response = info2;
            if (trial.response_ends_trial) end_trial();
        };
        if (trial.choices != "NO_KEYS") var keyboardListener = this.jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: after_response,
            valid_responses: trial.choices,
            rt_method: "performance",
            persist: false,
            allow_held_key: false
        });
        if (trial.stimulus_duration !== null) this.jsPsych.pluginAPI.setTimeout(()=>{
            display_element.querySelector("#jspsych-html-keyboard-response-stimulus").style.visibility = "hidden";
        }, trial.stimulus_duration);
        if (trial.trial_duration !== null) this.jsPsych.pluginAPI.setTimeout(end_trial, trial.trial_duration);
    }
    simulate(trial, simulation_mode, simulation_options, load_callback) {
        if (simulation_mode == "data-only") {
            load_callback();
            this.simulate_data_only(trial, simulation_options);
        }
        if (simulation_mode == "visual") this.simulate_visual(trial, simulation_options, load_callback);
    }
    create_simulation_data(trial, simulation_options) {
        const default_data = {
            stimulus: trial.stimulus,
            rt: this.jsPsych.randomization.sampleExGaussian(500, 50, 1 / 150, true),
            response: this.jsPsych.pluginAPI.getValidKey(trial.choices)
        };
        const data = this.jsPsych.pluginAPI.mergeSimulationData(default_data, simulation_options);
        this.jsPsych.pluginAPI.ensureSimulationDataConsistency(trial, data);
        return data;
    }
    simulate_data_only(trial, simulation_options) {
        const data = this.create_simulation_data(trial, simulation_options);
        this.jsPsych.finishTrial(data);
    }
    simulate_visual(trial, simulation_options, load_callback) {
        const data = this.create_simulation_data(trial, simulation_options);
        const display_element = this.jsPsych.getDisplayElement();
        this.trial(display_element, trial);
        load_callback();
        if (data.rt !== null) this.jsPsych.pluginAPI.pressKey(data.response, data.rt);
    }
}
module.exports = HtmlKeyboardResponsePlugin; //# sourceMappingURL=index.cjs.map

},{"fec38b631c3beeb7":"eQ9wp"}],"5mu2p":[function(require,module,exports,__globalThis) {
'use strict';
var jspsych = require("8942b02c303e5f7d");
var version = "2.1.0";
const info = {
    name: "image-keyboard-response",
    version,
    parameters: {
        /** The path of the image file to be displayed. */ stimulus: {
            type: jspsych.ParameterType.IMAGE,
            default: void 0
        },
        /** Set the height of the image in pixels. If left null (no value specified), then the image will display at its natural height. */ stimulus_height: {
            type: jspsych.ParameterType.INT,
            default: null
        },
        /** Set the width of the image in pixels. If left null (no value specified), then the image will display at its natural width. */ stimulus_width: {
            type: jspsych.ParameterType.INT,
            default: null
        },
        /** If setting *only* the width or *only* the height and this parameter is true, then the other dimension will be scaled
     * to maintain the image's aspect ratio. */ maintain_aspect_ratio: {
            type: jspsych.ParameterType.BOOL,
            default: true
        },
        /**his array contains the key(s) that the participant is allowed to press in order to respond to the stimulus. Keys should
     * be specified as characters (e.g., `'a'`, `'q'`, `' '`, `'Enter'`, `'ArrowDown'`) - see
     * [this page](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values) and
     * [this page (event.key column)](https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/)
     * for more examples. Any key presses that are not listed in the array will be ignored. The default value of `"ALL_KEYS"`
     * means that all keys will be accepted as valid responses. Specifying `"NO_KEYS"` will mean that no responses are allowed. */ choices: {
            type: jspsych.ParameterType.KEYS,
            default: "ALL_KEYS"
        },
        /**This string can contain HTML markup. Any content here will be displayed below the stimulus. The intention is that it can
     * be used to provide a reminder about the action the participant is supposed to take (e.g., which key to press). */ prompt: {
            type: jspsych.ParameterType.HTML_STRING,
            default: null
        },
        /** How long to show the stimulus for in milliseconds. If the value is `null`, then the stimulus will be shown until the
     * participant makes a response. */ stimulus_duration: {
            type: jspsych.ParameterType.INT,
            default: null
        },
        /** How long to wait for the participant to make a response before ending the trial in milliseconds. If the participant
     * fails to make a response before this timer is reached, the participant's response will be recorded as null for the
     * trial and the trial will end. If the value of this parameter is `null`, then the trial will wait for a response indefinitely. */ trial_duration: {
            type: jspsych.ParameterType.INT,
            default: null
        },
        /** If true, then the trial will end whenever the participant makes a response (assuming they make their response before
     * the cutoff specified by the `trial_duration` parameter). If false, then the trial will continue until the value for
     * `trial_duration` is reached. You can set this parameter to `false` to force the participant to view a stimulus for a
     * fixed amount of time, even if they respond before the time is complete.  */ response_ends_trial: {
            type: jspsych.ParameterType.BOOL,
            default: true
        },
        /**
     * If `true`, the image will be drawn onto a canvas element. This prevents a blank screen (white flash) between consecutive image trials in some browsers, like Firefox and Edge.
     * If `false`, the image will be shown via an img element, as in previous versions of jsPsych. If the stimulus is an **animated gif**, you must set this parameter to false, because the canvas rendering method will only present static images.
     */ render_on_canvas: {
            type: jspsych.ParameterType.BOOL,
            default: true
        }
    },
    data: {
        /** The path of the image that was displayed. */ stimulus: {
            type: jspsych.ParameterType.STRING
        },
        /**  Indicates which key the participant pressed. */ response: {
            type: jspsych.ParameterType.STRING
        },
        /** The response time in milliseconds for the participant to make a response. The time is measured from when the stimulus
     * first appears on the screen until the participant's response. */ rt: {
            type: jspsych.ParameterType.INT
        }
    },
    // prettier-ignore
    citations: {
        "apa": "de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",
        "bibtex": '@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '
    }
};
class ImageKeyboardResponsePlugin {
    constructor(jsPsych){
        this.jsPsych = jsPsych;
    }
    static{
        this.info = info;
    }
    trial(display_element, trial) {
        var height, width;
        if (trial.render_on_canvas) {
            var image_drawn = false;
            if (display_element.hasChildNodes()) while(display_element.firstChild)display_element.removeChild(display_element.firstChild);
            var canvas = document.createElement("canvas");
            canvas.id = "jspsych-image-keyboard-response-stimulus";
            canvas.style.margin = "0";
            canvas.style.padding = "0";
            var ctx = canvas.getContext("2d");
            var img = new Image();
            img.onload = ()=>{
                if (!image_drawn) {
                    getHeightWidth();
                    ctx.drawImage(img, 0, 0, width, height);
                }
            };
            img.src = trial.stimulus;
            const getHeightWidth = ()=>{
                if (trial.stimulus_height !== null) {
                    height = trial.stimulus_height;
                    if (trial.stimulus_width == null && trial.maintain_aspect_ratio) width = img.naturalWidth * (trial.stimulus_height / img.naturalHeight);
                } else height = img.naturalHeight;
                if (trial.stimulus_width !== null) {
                    width = trial.stimulus_width;
                    if (trial.stimulus_height == null && trial.maintain_aspect_ratio) height = img.naturalHeight * (trial.stimulus_width / img.naturalWidth);
                } else if (!(trial.stimulus_height !== null && trial.maintain_aspect_ratio)) width = img.naturalWidth;
                canvas.height = height;
                canvas.width = width;
            };
            getHeightWidth();
            display_element.insertBefore(canvas, null);
            if (img.complete && Number.isFinite(width) && Number.isFinite(height)) {
                ctx.drawImage(img, 0, 0, width, height);
                image_drawn = true;
            }
            if (trial.prompt !== null) display_element.insertAdjacentHTML("beforeend", trial.prompt);
        } else {
            var html = '<img src="' + trial.stimulus + '" id="jspsych-image-keyboard-response-stimulus">';
            if (trial.prompt !== null) html += trial.prompt;
            display_element.innerHTML = html;
            var img = display_element.querySelector("#jspsych-image-keyboard-response-stimulus");
            if (trial.stimulus_height !== null) {
                height = trial.stimulus_height;
                if (trial.stimulus_width == null && trial.maintain_aspect_ratio) width = img.naturalWidth * (trial.stimulus_height / img.naturalHeight);
            } else height = img.naturalHeight;
            if (trial.stimulus_width !== null) {
                width = trial.stimulus_width;
                if (trial.stimulus_height == null && trial.maintain_aspect_ratio) height = img.naturalHeight * (trial.stimulus_width / img.naturalWidth);
            } else if (!(trial.stimulus_height !== null && trial.maintain_aspect_ratio)) width = img.naturalWidth;
            img.style.height = height.toString() + "px";
            img.style.width = width.toString() + "px";
        }
        var response = {
            rt: null,
            key: null
        };
        const end_trial = ()=>{
            if (typeof keyboardListener !== "undefined") this.jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
            var trial_data = {
                rt: response.rt,
                stimulus: trial.stimulus,
                response: response.key
            };
            this.jsPsych.finishTrial(trial_data);
        };
        var after_response = (info2)=>{
            display_element.querySelector("#jspsych-image-keyboard-response-stimulus").className += " responded";
            if (response.key == null) response = info2;
            if (trial.response_ends_trial) end_trial();
        };
        if (trial.choices != "NO_KEYS") var keyboardListener = this.jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: after_response,
            valid_responses: trial.choices,
            rt_method: "performance",
            persist: false,
            allow_held_key: false
        });
        if (trial.stimulus_duration !== null) this.jsPsych.pluginAPI.setTimeout(()=>{
            display_element.querySelector("#jspsych-image-keyboard-response-stimulus").style.visibility = "hidden";
        }, trial.stimulus_duration);
        if (trial.trial_duration !== null) this.jsPsych.pluginAPI.setTimeout(()=>{
            end_trial();
        }, trial.trial_duration);
        else if (trial.response_ends_trial === false) console.warn("The experiment may be deadlocked. Try setting a trial duration or set response_ends_trial to true.");
    }
    simulate(trial, simulation_mode, simulation_options, load_callback) {
        if (simulation_mode == "data-only") {
            load_callback();
            this.simulate_data_only(trial, simulation_options);
        }
        if (simulation_mode == "visual") this.simulate_visual(trial, simulation_options, load_callback);
    }
    simulate_data_only(trial, simulation_options) {
        const data = this.create_simulation_data(trial, simulation_options);
        this.jsPsych.finishTrial(data);
    }
    simulate_visual(trial, simulation_options, load_callback) {
        const data = this.create_simulation_data(trial, simulation_options);
        const display_element = this.jsPsych.getDisplayElement();
        this.trial(display_element, trial);
        load_callback();
        if (data.rt !== null) this.jsPsych.pluginAPI.pressKey(data.response, data.rt);
    }
    create_simulation_data(trial, simulation_options) {
        const default_data = {
            stimulus: trial.stimulus,
            rt: this.jsPsych.randomization.sampleExGaussian(500, 50, 1 / 150, true),
            response: this.jsPsych.pluginAPI.getValidKey(trial.choices)
        };
        const data = this.jsPsych.pluginAPI.mergeSimulationData(default_data, simulation_options);
        this.jsPsych.pluginAPI.ensureSimulationDataConsistency(trial, data);
        return data;
    }
}
module.exports = ImageKeyboardResponsePlugin; //# sourceMappingURL=index.cjs.map

},{"8942b02c303e5f7d":"eQ9wp"}],"iYSCu":[function(require,module,exports,__globalThis) {
'use strict';
var jspsych = require("356afbc41350fb6d");
var version = "2.1.0";
const info = {
    name: "html-button-response",
    version,
    parameters: {
        /** The HTML content to be displayed. */ stimulus: {
            type: jspsych.ParameterType.HTML_STRING,
            default: void 0
        },
        /** Labels for the buttons. Each different string in the array will generate a different button. */ choices: {
            type: jspsych.ParameterType.STRING,
            default: void 0,
            array: true
        },
        /**
     * A function that generates the HTML for each button in the `choices` array. The function gets the string and index of the item in the `choices` array and should return valid HTML. If you want to use different markup for each button, you can do that by using a conditional on either parameter. The default parameter returns a button element with the text label of the choice.
     */ button_html: {
            type: jspsych.ParameterType.FUNCTION,
            default: function(choice, choice_index) {
                return `<button class="jspsych-btn">${choice}</button>`;
            }
        },
        /** This string can contain HTML markup. Any content here will be displayed below the stimulus. The intention is that it can be used to provide a reminder about the action the participant is supposed to take (e.g., which key to press). */ prompt: {
            type: jspsych.ParameterType.HTML_STRING,
            default: null
        },
        /** How long to display the stimulus in milliseconds. The visibility CSS property of the stimulus will be set to `hidden` after this time has elapsed. If this is null, then the stimulus will remain visible until the trial ends. */ stimulus_duration: {
            type: jspsych.ParameterType.INT,
            default: null
        },
        /** ow long to wait for the participant to make a response before ending the trial in milliseconds. If the participant fails to make a response before this timer is reached, the participant's response will be recorded as null for the trial and the trial will end. If the value of this parameter is null, the trial will wait for a response indefinitely.  */ trial_duration: {
            type: jspsych.ParameterType.INT,
            default: null
        },
        /** Setting to `'grid'` will make the container element have the CSS property `display: grid` and enable the use of `grid_rows` and `grid_columns`. Setting to `'flex'` will make the container element have the CSS property `display: flex`. You can customize how the buttons are laid out by adding inline CSS in the `button_html` parameter. */ button_layout: {
            type: jspsych.ParameterType.STRING,
            default: "grid"
        },
        /**
     * The number of rows in the button grid. Only applicable when `button_layout` is set to `'grid'`. If null, the number of rows will be determined automatically based on the number of buttons and the number of columns.
     */ grid_rows: {
            type: jspsych.ParameterType.INT,
            default: 1
        },
        /**
     * The number of columns in the button grid. Only applicable when `button_layout` is set to `'grid'`. If null, the number of columns will be determined automatically based on the number of buttons and the number of rows.
     */ grid_columns: {
            type: jspsych.ParameterType.INT,
            default: null
        },
        /** If true, then the trial will end whenever the participant makes a response (assuming they make their response before the cutoff specified by the `trial_duration` parameter). If false, then the trial will continue until the value for `trial_duration` is reached. You can set this parameter to `false` to force the participant to view a stimulus for a fixed amount of time, even if they respond before the time is complete. */ response_ends_trial: {
            type: jspsych.ParameterType.BOOL,
            default: true
        },
        /** How long the button will delay enabling in milliseconds. */ enable_button_after: {
            type: jspsych.ParameterType.INT,
            default: 0
        }
    },
    data: {
        /** The response time in milliseconds for the participant to make a response. The time is measured from when the stimulus first appears on the screen until the participant's response. */ rt: {
            type: jspsych.ParameterType.INT
        },
        /** Indicates which button the participant pressed. The first button in the `choices` array is 0, the second is 1, and so on. */ response: {
            type: jspsych.ParameterType.INT
        },
        /** The HTML content that was displayed on the screen. */ stimulus: {
            type: jspsych.ParameterType.HTML_STRING
        }
    },
    // prettier-ignore
    citations: {
        "apa": "de Leeuw, J. R., Gilbert, R. A., & Luchterhandt, B. (2023). jsPsych: Enabling an Open-Source Collaborative Ecosystem of Behavioral Experiments. Journal of Open Source Software, 8(85), 5351. https://doi.org/10.21105/joss.05351 ",
        "bibtex": '@article{Leeuw2023jsPsych, 	author = {de Leeuw, Joshua R. and Gilbert, Rebecca A. and Luchterhandt, Bj{\\" o}rn}, 	journal = {Journal of Open Source Software}, 	doi = {10.21105/joss.05351}, 	issn = {2475-9066}, 	number = {85}, 	year = {2023}, 	month = {may 11}, 	pages = {5351}, 	publisher = {Open Journals}, 	title = {jsPsych: Enabling an {Open}-{Source} {Collaborative} {Ecosystem} of {Behavioral} {Experiments}}, 	url = {https://joss.theoj.org/papers/10.21105/joss.05351}, 	volume = {8}, }  '
    }
};
class HtmlButtonResponsePlugin {
    constructor(jsPsych){
        this.jsPsych = jsPsych;
    }
    static{
        this.info = info;
    }
    trial(display_element, trial) {
        const stimulusElement = document.createElement("div");
        stimulusElement.id = "jspsych-html-button-response-stimulus";
        stimulusElement.innerHTML = trial.stimulus;
        display_element.appendChild(stimulusElement);
        const buttonGroupElement = document.createElement("div");
        buttonGroupElement.id = "jspsych-html-button-response-btngroup";
        if (trial.button_layout === "grid") {
            buttonGroupElement.classList.add("jspsych-btn-group-grid");
            if (trial.grid_rows === null && trial.grid_columns === null) throw new Error("You cannot set `grid_rows` to `null` without providing a value for `grid_columns`.");
            const n_cols = trial.grid_columns === null ? Math.ceil(trial.choices.length / trial.grid_rows) : trial.grid_columns;
            const n_rows = trial.grid_rows === null ? Math.ceil(trial.choices.length / trial.grid_columns) : trial.grid_rows;
            buttonGroupElement.style.gridTemplateColumns = `repeat(${n_cols}, 1fr)`;
            buttonGroupElement.style.gridTemplateRows = `repeat(${n_rows}, 1fr)`;
        } else if (trial.button_layout === "flex") buttonGroupElement.classList.add("jspsych-btn-group-flex");
        for (const [choiceIndex, choice] of trial.choices.entries()){
            buttonGroupElement.insertAdjacentHTML("beforeend", trial.button_html(choice, choiceIndex));
            const buttonElement = buttonGroupElement.lastChild;
            buttonElement.dataset.choice = choiceIndex.toString();
            buttonElement.addEventListener("click", ()=>{
                after_response(choiceIndex);
            });
        }
        display_element.appendChild(buttonGroupElement);
        if (trial.prompt !== null) display_element.insertAdjacentHTML("beforeend", trial.prompt);
        var start_time = performance.now();
        var response = {
            rt: null,
            button: null
        };
        const end_trial = ()=>{
            var trial_data = {
                rt: response.rt,
                stimulus: trial.stimulus,
                response: response.button
            };
            this.jsPsych.finishTrial(trial_data);
        };
        function after_response(choice) {
            var end_time = performance.now();
            var rt = Math.round(end_time - start_time);
            response.button = parseInt(choice);
            response.rt = rt;
            stimulusElement.classList.add("responded");
            for (const button of buttonGroupElement.children)button.setAttribute("disabled", "disabled");
            if (trial.response_ends_trial) end_trial();
        }
        if (trial.stimulus_duration !== null) this.jsPsych.pluginAPI.setTimeout(()=>{
            stimulusElement.style.visibility = "hidden";
        }, trial.stimulus_duration);
        if (trial.enable_button_after > 0) {
            var btns = document.querySelectorAll("#jspsych-html-button-response-btngroup button");
            for(var i = 0; i < btns.length; i++)btns[i].setAttribute("disabled", "disabled");
            this.jsPsych.pluginAPI.setTimeout(()=>{
                var btns2 = document.querySelectorAll("#jspsych-html-button-response-btngroup button");
                for(var i2 = 0; i2 < btns2.length; i2++)btns2[i2].removeAttribute("disabled");
            }, trial.enable_button_after);
        }
        if (trial.trial_duration !== null) this.jsPsych.pluginAPI.setTimeout(end_trial, trial.trial_duration);
    }
    simulate(trial, simulation_mode, simulation_options, load_callback) {
        if (simulation_mode == "data-only") {
            load_callback();
            this.simulate_data_only(trial, simulation_options);
        }
        if (simulation_mode == "visual") this.simulate_visual(trial, simulation_options, load_callback);
    }
    create_simulation_data(trial, simulation_options) {
        const default_data = {
            stimulus: trial.stimulus,
            rt: this.jsPsych.randomization.sampleExGaussian(500, 50, 1 / 150, true) + trial.enable_button_after,
            response: this.jsPsych.randomization.randomInt(0, trial.choices.length - 1)
        };
        const data = this.jsPsych.pluginAPI.mergeSimulationData(default_data, simulation_options);
        this.jsPsych.pluginAPI.ensureSimulationDataConsistency(trial, data);
        return data;
    }
    simulate_data_only(trial, simulation_options) {
        const data = this.create_simulation_data(trial, simulation_options);
        this.jsPsych.finishTrial(data);
    }
    simulate_visual(trial, simulation_options, load_callback) {
        const data = this.create_simulation_data(trial, simulation_options);
        const display_element = this.jsPsych.getDisplayElement();
        this.trial(display_element, trial);
        load_callback();
        if (data.rt !== null) this.jsPsych.pluginAPI.clickTarget(display_element.querySelector(`#jspsych-html-button-response-btngroup [data-choice="${data.response}"]`), data.rt);
    }
}
module.exports = HtmlButtonResponsePlugin; //# sourceMappingURL=index.cjs.map

},{"356afbc41350fb6d":"eQ9wp"}],"iRflE":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("MO1_EH.3e27a794.png") + "?" + Date.now();

},{}],"inscD":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("MO2_GC.b9499645.png") + "?" + Date.now();

},{}],"3yfS6":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("MO3_LP.6a9176f7.png") + "?" + Date.now();

},{}],"jvzKD":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("MO4_NR.f33f237c.png") + "?" + Date.now();

},{}],"czasi":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("MO5_PST.5abf4ef0.png") + "?" + Date.now();

},{}],"2EdqQ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("MO6_ZSK.912e77e6.png") + "?" + Date.now();

},{}],"fMP0e":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pos_01.d6beecde.png") + "?" + Date.now();

},{}],"hpWZc":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pos_02.72224a95.png") + "?" + Date.now();

},{}],"gE3kW":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pos_03.a007bc3e.png") + "?" + Date.now();

},{}],"ifmER":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pos_04.bd87674a.png") + "?" + Date.now();

},{}],"kRGzb":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pos_05.1e15e987.png") + "?" + Date.now();

},{}],"3Y6Jz":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pos_06.b2264e87.png") + "?" + Date.now();

},{}],"k0Q8x":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pos_07.dd2e7061.png") + "?" + Date.now();

},{}],"fOoWu":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pos_08.e23a6b09.png") + "?" + Date.now();

},{}],"5nA6W":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pos_09.7c4fa53f.png") + "?" + Date.now();

},{}],"fHfDi":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pos_10.00e50c08.png") + "?" + Date.now();

},{}],"PXnS7":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Neg_01.d5770653.png") + "?" + Date.now();

},{}],"bVTy6":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Neg_02.a2de416d.png") + "?" + Date.now();

},{}],"fpbos":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Neg_03.d81cc32e.png") + "?" + Date.now();

},{}],"kQZpj":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Neg_04.5570ccfa.png") + "?" + Date.now();

},{}],"74Aaz":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Neg_05.93474079.png") + "?" + Date.now();

},{}],"2DUHR":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Neg_06.b9830e59.png") + "?" + Date.now();

},{}],"3xjxM":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Neg_07.a644a4d3.png") + "?" + Date.now();

},{}],"kmhPv":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Neg_08.bc708d74.png") + "?" + Date.now();

},{}],"fPV6t":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Neg_09.63b2cb95.png") + "?" + Date.now();

},{}],"9QUVc":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Neg_10.d4bc7ca1.png") + "?" + Date.now();

},{}],"kcC2R":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pseudo_01.836205ad.png") + "?" + Date.now();

},{}],"KlcYi":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pseudo_02.6d92f8e8.png") + "?" + Date.now();

},{}],"fTRnZ":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pseudo_03.c75892f4.png") + "?" + Date.now();

},{}],"cY7Ij":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pseudo_04.9cd77182.png") + "?" + Date.now();

},{}],"6an5F":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pseudo_05.4a887cfd.png") + "?" + Date.now();

},{}],"dzCZz":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pseudo_06.f2d1495f.png") + "?" + Date.now();

},{}],"6SQID":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pseudo_07.7f4a8996.png") + "?" + Date.now();

},{}],"1FI7Z":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pseudo_08.565612d4.png") + "?" + Date.now();

},{}],"ko7Gl":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pseudo_09.3cd4924f.png") + "?" + Date.now();

},{}],"ll5TC":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Pseudo_10.f3d97d0e.png") + "?" + Date.now();

},{}],"dsA6M":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("char01.76d086ca.png") + "?" + Date.now();

},{}],"inLtd":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("char02.dac70839.png") + "?" + Date.now();

},{}],"frQ45":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("char03.9f655d55.png") + "?" + Date.now();

},{}],"bBPaG":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("char04.b8126bef.png") + "?" + Date.now();

},{}],"6f4Er":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("char05.eb7b3d13.png") + "?" + Date.now();

},{}],"lMK0Z":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("char06.5e77a12d.png") + "?" + Date.now();

},{}],"lV497":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("char07.5584c9d1.png") + "?" + Date.now();

},{}],"dWcY5":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("char08.bb1eb75e.png") + "?" + Date.now();

},{}],"6IrT8":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("char09.7b2cfc52.png") + "?" + Date.now();

},{}],"bboZM":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("char10.ed193611.png") + "?" + Date.now();

},{}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["9Wrd0","53CDu"], "53CDu", "parcelRequiree38d", {}, "./", "/")

//# sourceMappingURL=public.4241f360.js.map
