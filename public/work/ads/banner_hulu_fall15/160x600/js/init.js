var BLTinit = {};
    //BLTinit.FT = "https://cdn.flashtalking.com/frameworks/js/api/2/8/html5API.js";
    BLTinit.GS_TL = "https://cdn.flashtalking.com/frameworks/js/gsap/1.17.0/TweenLite.min.js";
    BLTinit.GS_EP = "https://cdn.flashtalking.com/frameworks/js/gsap/1.17.0/easing/EasePack.min.js";
    BLTinit.GS_CSS = "https://cdn.flashtalking.com/frameworks/js/gsap/1.17.0/plugins/CSSPlugin.min.js";
    BLTinit.GS_TLL = "https://cdn.flashtalking.com/frameworks/js/gsap/1.17.0/TimelineLite.min.js";
    BLTinit.jsFiles = [BLTinit.GS_TL,BLTinit.GS_EP,BLTinit.GS_CSS,BLTinit.GS_TLL,"js/main.js"];

BLTinit.loadUnitAssets = function()
{
  var totalFiles = BLTinit.jsFiles.length - 1;
  var currentLoaded = 0;

  function loadNextJS()
  {

    if(totalFiles > currentLoaded)
    {
      currentLoaded++;
      //console.log('currentLoaded = '+currentLoaded);
      BLTinit.loadExtJS(BLTinit.jsFiles[currentLoaded],loadNextJS);
    }else
    {
      console.log('All JS files loaded');
    }
  }
  //console.log('currentLoaded = '+currentLoaded);
  BLTinit.loadExtJS(BLTinit.jsFiles[currentLoaded],loadNextJS);
};

BLTinit.loadExtJS = function (url, callback)
{
  var script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState){  //IE
    script.onreadystatechange = function(){
      if (script.readyState === "loaded" ||   script.readyState === "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  //Others
    script.onload = function(){
      callback();
    };
  }

  script.src = url;
  //console.log('currentLoaded URL = '+url);
  document.getElementsByTagName("head")[0].appendChild(script);
};

//// DOM Helpers
// Get Element
  function _getElement(id) {
    return document.getElementById(id);
  }
  function _getElementByClass(className) {
    return document.getElementsByClassName(className);
  }

  function _addClass(element, classes) {
    var Element = (typeof element === 'string') ? _getElement(element) : element,
        classNames = Element.className;

    if (classNames.indexOf(classes) === -1) {
      classNames = classNames + " " + classes;
      classNames = classNames.replace(/\s{2,}/g, ' ').replace(/^ +/gm, '').replace(/\s+$/, '');
      Element.className = classNames;
    }
  }

  function _removeClass(element, className) {
    // Declare Vars
    var Element = (typeof element === 'string') ? _getElement(element) : element,
        classNames = Element.className;

    // Clean up Class Names
    classNames = classNames.replace(className, '');
    classNames = classNames.replace(/\s{2,}/g, ' ').replace(/^ +/gm, '').replace(/\s+$/, '');

    // Update Class Names
    Element.className = classNames;
  }

// Site Ready
window.onload = BLTinit.loadUnitAssets();