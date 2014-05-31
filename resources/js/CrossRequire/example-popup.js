define([
    'CrossRequire/appAPI',
    'jquery'
    ], function (appAPI, $) {
    'use strict';

    console.log('popup code loaded for: ' + appAPI.appInfo.id);

    $('.mybtn').click(function () {
        $('.main').css({
            'background-color': '#000'
        });
    });

    return '';
});
