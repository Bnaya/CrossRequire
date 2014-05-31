if (appAPI.platform === 'FF') {
    var navigator = {
        platform: 'NOT PS3 !!!'
    },
    importScripts;
}

eval(appAPI.resources.get('vendor/requirejs/require.js'));

var execJsFile = function (resource) {
    var code = appAPI.resources.get(resource);
    eval(code);
};

function crossriderMain() {
    appAPI.resources.includeJS = function (resource) {
        execJsFile(resource);
    };

    appAPI.isPopup = true;

    appAPI.resources.includeJS('js/init.js');
}
