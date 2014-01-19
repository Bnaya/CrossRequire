// This is where the magic happens
requirejs.load = function (context, moduleName, url) {

    if (url.indexOf('..') > -1) {
        throw new URIError("Using '..' in modules paths won't work on production (none debug) mode.");
    }

    appAPI.resources.includeJS(url);
    context.completeLoad(moduleName);
};
