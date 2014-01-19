appAPI.resources.includeJS('js/CrossRequire/loader.js');
appAPI.resources.includeJS('js/requirejs-config.js');

if (appAPI.isBackground) {
    // change this to the path for your entry file for your background code
    // Also from that file you can start working full AMD as you can see
    require(['CrossRequire/example-background'], function () {
        return;
    });
} else {
    // change this to the path for your entry file for your extension/page scope code
    // Also from that file you can start working full AMD as you can see
    require(['CrossRequire/example-extension'], function () {
        return;
    });
}
