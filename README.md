CrossRequire
========

#### Use AMD with requirejs on your crossrider app

Manually Tested on chrome, Firefox & Internet explorer. (Safari is missing)

### How to use/integrate
Currently its best to use the repo code as the bootstrap for your crossrider project, but its possible to integrate it manually.
<br>
Don't overwrite the extension.js & background.js, edit js/init.js and change the require calls to load your extension / background code startup file.
<br>
When you want to push code to crossrider after working in debug mode, use build.sh (take a look at build.sh and modify for your vendor files).
It should copy all the relevant code to the build-out/ directory and zip it. (windows users you can run bash if you're using Msysgit/Cygwin cmd. about the zip command i'm not sure but i guess you can add it to your path and it will work)
<br>
I hope to make it as bower package with simpler integration &| yeoman generator.

<br>
If you are yet unfamiliar with Crossrider platform or JS AMD
- http://crossrider.com/ - cross browser extensions development platform
- http://requirejs.org/docs/whyamd.html - Read why using modules is a must if your project is more then few lines

### Q&A
 - Can i use the same modules from the background & page scope code?
 <br> * Yes! You can use the same codebase for your page & background scope (even tho the built in `appAPI.resources.includeJS` is missing from the background scope). but ofc as long you are using apis that belongs to the current scope. it will make you code run but if you will  use unsupported appAPI methods you code will break
<br><br>
 - Will requirejs sugar syntax will work?
 <br> * The suger syntax reported to be working
<br><br>
 - Will requirejs plugins will work ? (like hbs, text, etc)
 <br> * Currently most of the plugins will not work out of the box. It should be possible to make them though
<br><br>
 - Dose debug mode and production workflow have differences?
 <br> * Generally no, but the crossrider platform itself have its own issues sometimes
<br><br>
 - Why does jQuery & underscore is a dependency, isn't it build in as part of crossrider framework?
  <br> * jQuery & underscore aren't required, its mainly for demonstration. but most js projects needs underscore & the jQuery that comes with crossrider is outdated (last time i've checked $ as 1.7.1 and you could access also 1.4.1)
<br><br>
 - Why underscore and not lodash?
  <br> * something in lodash code (Apparently the access to Object.prototype) breaks on Firefox (Apparently because the code executed inside a web worker)<br>
  Its not something in CrossRequire but in the crossrider engine. It took me ALOT of time to figure that it was lodash that breaks the code

### Thoughts on r.js. should i build ?
When working with crossrider, concatenating all of JS files to one file won't help much for the traditional reasons:<br>
The code is not fetched over network (even when using appAPI.resources.get, or require that relays on it) but from some kind of internal DB.
But because crossrider have their recommendation to have less than 30 resources files "Using more than 30 resources in an extension can slow the performance of the extension."
http://docs.crossrider.com/#!/api/appAPI.resources. So building can help with that.
<br>
BUT the size of single resources is limited to 100KB ("each resource being limited to 100 KB", and images are also encoded to base64 internally).
and building all of the code base (libraries page scope & background scope) to a single main.js file will probably produce a file bigger than 100KB, even after minify.<br>
So its a trade-off how much do you care from exceeding the 30 resources recommendation (the 100KB is a hard limit. try to upload resource file bigger than 100KB even inside project zip and he will be abolished) and the complexity of your build configurations and the manual config pluming to make it work.
So before you try and optimize to save some files start with cleaning unused files in your resources directory, and see if you can use sprites and concatenate & minify CSS files.
When you add an external library don't just drop the whole git repo there, its full of garbage (see the build.js file)

I haven't tried extension.js & background.js files bigger then 100KB. if its possible, you can build background code & page code separately and use the output file directly as your extension.js & background.js  files (using almond)

#### building strategies
 build your background & page code separately. the entry point files should be the files you're require() in js/init.js & place the output files in the same path.<br>
 If the output is more then 100KB, build your code to a be several files. see (http://requirejs.org/docs/optimization.html#wholemultipage )<br>
 You can start with building the external libraries separately (to one libs file or each lib for its own)
 Building the common code of page & background code to a a separate file.

And don't forget to use https://github.com/jrburke/almond

### TODO
- Check if its possible to make js errors more friendly (use try catch over eval calls?)
- r.js build & optimization valuation
- use bower copy & more useful grunt tasks
- Make requirejs plugins work.
- Enable to use as bower package with simpler integration.
- As Yeoman generator.
