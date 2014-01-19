// We need to eval the require.js code on the topmost scope we've got.
// If it will start making problems we can try indirect eval call
// see: http://perfectionkills.com/global-eval-what-are-the-options/
eval(appAPI.resources.get('vendor/requirejs/require.js'));

appAPI.ready(function () {
	appAPI.resources.includeJS('js/init.js');
});
