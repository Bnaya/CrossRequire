CrossRequire
=========
#### Use AMD with requirejs on your crossrider app

Manually Tested on chrome, firefox & internet explorer. (Safari is missing)

<br>
If you are yet if you are yet unfamiliar with Crossrider platform or JS AMD
- http://crossrider.com/ - cross browser extensions development platform
- http://requirejs.org/docs/whyamd.html - Read why using modules is a must if your project is more then few lines


 ### Q/A
 - Can i use the same modules from the background & paga scope code?
 <br> * Yes! You can use the same codebase for your page & background scope (even tho the built in `appAPI.resources.includeJS` is missing from the background scope). but ofc as long you are using apis that belongs to the current scope. it will make you code run but if you will  use unsupoorted appAPI methods you code will break
<br><br>
 - Will requirejs suger syntax will work?
 <br> * I think it will, try and tell me! (Imo its an ugly hack and i hate it!)
<br><br>
 - Will requirejs plugins will work ? (like hbs, text, etc)
 <br> * Currently most of the plugins will not work out of the box but it is possible to make them
<br><br>
 - Debug mode and production workflow and differences?
 <br> * Generally yes, but the crossrider platform itself have its own issues sometimes

