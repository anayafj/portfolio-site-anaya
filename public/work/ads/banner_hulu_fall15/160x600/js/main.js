/* global _getElement */
/* global _addClass */
/* global TweenLite */
/* global TimelineLite */
/* global FT */
/* jshint undef: false, debug: true, devel: true */

var clickTag;

// Name Space ******
var BLT       = {};
BLT.myFT      = new FT();
BLT.Animation = {};

// Ad Ready
BLT.adReady = function () {
  console.log('<<< AD READY >>>');
  if (clickTag === null) {
    clickTag = 'http://www.hulu.com/';
  }
  this.initEvents(); // Init Event
  this.Animation.setup();  // Setup
  _addClass(_getElement('ad'), 'ready'); // Ad is Ready
};

// Init Events
BLT.initEvents = function () {
  // Declare Events
  var bgExits = _getElementByClass('bg-exit');
  //     $ctaButton = _getElement('ctaButton');

  // Exit Events
  for (var bgExitIndex = 0; bgExitIndex < bgExits.length; bgExitIndex++) {
    bgExits[bgExitIndex].addEventListener('click', this.eventHandler_exit);
  }
  // CTA Button
  //  $ctaButton.addEventListener('click', this.eventHandler_exit);
};

// Exit Event Listener
BLT.eventHandler_exit = function () {
  BLT.myFT.clickTag(clickTag);
};

//// Animation ////////////////////////////////////////////////////////////
BLT.Animation.setup = function () {
  // Auto Reset End Card
  this.resetEndCard();
  this.startAnim();
};

// sets the endcard elements in position to animate ------------------
BLT.Animation.resetEndCard = function () {
  console.log('<<<<<// BLT -------// RESET ELEMENTS FOR ANIMATION');
  // Declare Vars
  //var $txt1a = _getElement('txt1a');


  //_addClass($card2,'hidden');


  // Hide End Card
  //TweenLite.set($show3, {x : 200});
};


BLT.Animation.startAnim = function () {
  console.log('<<<<<// BLT -------// STARTING ANIMATION');

  // Timeline
  var timeline = new TimelineLite(
    {
      paused     : true,
      onComplete : this.showEndCardComplete.bind(this),
      delay      : 1
    }
  );

  // Store TL on Namespace
  this.tl = timeline;

  // Key Frames
  // tl.add('start', 0);

  // tl.add(new TweenLite.to($show1,.5, {opacity:1, ease :  Expo.easeOut}),"start");
  // tl.add(new TweenLite.to($txt1b, 2, {transform:$txt1aMove, opacity:1, ease:Expo.easeOut}),"fallPremiers+=0.5");

  // tl.play();
};

BLT.Animation.showEndCardComplete = function () {
//  console.log('>>>> DONE >>>>> TOTAL TIME IS ' + BLT.Animation.tl.time());
};


/////////
// Start Ad
BLT.adReady();

