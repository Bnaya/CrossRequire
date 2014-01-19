/**
 * FF background page is whining about some "Desc: Illegal operation on WrappedNative prototype object"
 * when evaling require.js code Its because its implemented as web worker and FF made some limitations
 * So we need to overwrite some objects to make him happy.
 * I'm currently preferring to do it that way then modifying require.js code and keep it as external dependency
 */

if (appAPI.platform === 'FF') {
    var navigator = {
        platform: 'NOT PS3 !!!'
    },
    importScripts;
}

// We need to eval the require.js code on the topmost scope we've got.
// If it will start making problems we can try indirect eval call
// see: http://perfectionkills.com/global-eval-what-are-the-options/
eval(appAPI.resources.get('vendor/requirejs/require.js'));

var execJsFile = function (resource) {
    var code = appAPI.resources.get(resource);
    eval(code);
}

appAPI.ready(function() {
    appAPI.resources.includeJS = function (resource) {
        execJsFile(resource);
    };

    appAPI.resources.includeJS('js/init.js');
});
