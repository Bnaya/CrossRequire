define([
    'CrossRequire/appAPI'
    ], function (appAPI) {
    'use strict';

    console.log('background code loaded for: ' + appAPI.appInfo.id);

    appAPI.browserAction.setResourceIcon('images/icon.png');
    appAPI.browserAction.setPopup({
        resourcePath:'popup.html',
        height: 300,
        width: 300
    });

    return '';
});
