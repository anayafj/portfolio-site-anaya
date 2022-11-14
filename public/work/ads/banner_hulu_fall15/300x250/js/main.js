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
  this.offset             = 20;
  this.negativeOffset     = "-=" + this.offset;
  this.positiveOffset     = "+=" + this.offset;
  this.negativeOffsetHalf = "-=" + (this.offset / 2);
  this.positiveOffsetHalf = "+=" + (this.offset / 2);

  // Card 2 - FALL PREMIERES
  TweenLite.set('#card2', {autoAlpha:0});
  TweenLite.set('#card2 .storyboard-text', {autoAlpha:0, y:this.negativeOffset});

  // Card 3 - Show 2
  TweenLite.set('#card3', {autoAlpha:0});
  TweenLite.set('#card3 .show-card', {scale:1.2});
  TweenLite.set('#card3 .logo', {y:this.negativeOffsetHalf});
  TweenLite.set('#card3 .studio', {y:this.negativeOffsetHalf});

  // Card 4 - ALL-NEW SEASONS ALL-NEW SERIES
  TweenLite.set('#card4', {autoAlpha:0});
  TweenLite.set('#card4 .textblock-one', {autoAlpha:0, x:this.negativeOffset});
  TweenLite.set('#card4 .textblock-two', {autoAlpha:0, x:this.positiveOffset});

  // Card 5 - ALL IN ONE PLACE
  TweenLite.set('#card5', {autoAlpha:0});
  TweenLite.set('#card5 .textblock-one', {autoAlpha:0, y:this.negativeOffset});

  // Card 6 - Show 3
  TweenLite.set('#card6', {autoAlpha:0});
  TweenLite.set('#card6 .show-card', {scale:1.2});
  TweenLite.set('#card6 .logo', {y:this.negativeOffsetHalf});
  TweenLite.set('#card6 .studio', {y:this.negativeOffsetHalf});

  // END CARD
  TweenLite.set('#card7', {autoAlpha:0});
  TweenLite.set('#card7 .textblock-one', {autoAlpha:0, y:this.negativeOffset});
  TweenLite.set('#card7 .textblock-two', {autoAlpha:0, y:this.negativeOffsetHalf});
  TweenLite.set('#card7 .storyboard-image .image-one', {autoAlpha:0, x:this.negativeOffset});
  TweenLite.set('#card7 .storyboard-image .image-two', {autoAlpha:0, x:this.negativeOffset});
  TweenLite.set('#card7 .storyboard-image .image-three', {autoAlpha:0, x:this.negativeOffset});
  TweenLite.set('.cta-button', {autoAlpha:0, x:this.positiveOffset});
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


  // Key Frames
  timeline.addLabel('start', 1);
  timeline.addLabel('card-1-out', 1);
  timeline.addLabel('card-2-in', 1.5);
  timeline.addLabel('card-3-in', 3.3);
  timeline.addLabel('card-3-out', 5.3);
  timeline.addLabel('card-4-in', 6);
  timeline.addLabel('card-5-in', 7.3);
  timeline.addLabel('card-6-in', 9.8);
  timeline.addLabel('card-6-out', 11.8);
  timeline.addLabel('card-7-in', 12);


  // Card 2 - Show 1
  timeline.add(TweenLite.to('#card1', 0.75, {autoAlpha:0, ease:Quad.easeOut}), "card-1-out");

  // Card 2 - FALL PREMIERES
  timeline.add(TweenLite.to('#card2', 1, {autoAlpha:1, ease:Quad.easeOut}), "card-2-in");
  timeline.add(TweenLite.to('#card2 .storyboard-text', 1, {y:"0", ease:Quad.easeOut}), "card-2-in");
  timeline.add(TweenLite.to('#card2 .storyboard-text.textblock-one', 0.5, {autoAlpha:1, ease:Quad.easeOut}), "card-2-in");
  timeline.add(TweenLite.to('#card2 .storyboard-text.textblock-two', 0.5, {autoAlpha:1, ease:Quad.easeOut}), "card-2-in+=.5");
  timeline.add(TweenLite.to('#card2', 0.01, {autoAlpha:0, ease:Quad.easeOut}), "card-3-out"); // Hidding CARD 2

  // Card 3 - Show 2
  timeline.add(TweenLite.to('#card3', 1, {autoAlpha:1, ease:Quad.easeOut}), "card-3-in");
  timeline.add(TweenLite.to('#card3 .show-card', 1, {scale:1, ease:Quad.easeOut}), "card-3-in");
  timeline.add(TweenLite.to('#card3 .logo', 1, {y:"0", ease:Quad.easeOut}), "card-3-in");
  timeline.add(TweenLite.to('#card3 .studio', 1, {y:"0", ease:Quad.easeOut}), "card-3-in");
  timeline.add(TweenLite.to('#card3', 0.75, {autoAlpha:0, ease:Quad.easeOut}), "card-3-out");

  // Card 4 - ALL-NEW SEASONS ALL-NEW SERIES
  timeline.add(TweenLite.to('#card4', 0.01, {autoAlpha:1, ease:Quad.easeOut}), 'card-4-in');
  timeline.add(TweenLite.to('#card4 .textblock-one', 0.75, {autoAlpha:1, x:"0", ease:Quad.easeOut}), 'card-4-in'); // This fades in with main card)
  timeline.add(TweenLite.to('#card4 .textblock-two', 0.75, {autoAlpha:1, x:"0", ease:Quad.easeOut}), 'card-4-in+=0.2');
  timeline.add(TweenLite.to('#card4', 0.01, {autoAlpha:0, ease:Quad.easeOut}), "card-6-out"); // Hidding CARD 2

  // Card 5 - ALL IN ONE PLACE
  timeline.add(TweenLite.to('#card5', 0.5, {autoAlpha:1, ease:Quad.easeOut}), 'card-5-in');
  timeline.add(TweenLite.to('#card5 .textblock-one', 0.75, {autoAlpha:1, y:"0", ease:Quad.easeOut}), 'card-5-in+=0.5');
  timeline.add(TweenLite.to('#card5', 0.01, {autoAlpha:0, ease:Quad.easeOut}), "card-6-out"); // Hidding CARD 2

  // Card 6 - Show 3
  timeline.add(TweenLite.to('#card6', 1, {autoAlpha:1, ease:Quad.easeOut}), 'card-6-in');
  timeline.add(TweenLite.to('#card6 .show-card', 1, {scale:1, ease:Quad.easeOut}), "card-6-in");
  timeline.add(TweenLite.to('#card6 .logo', 1, {y:"0", ease:Quad.easeOut}), 'card-6-in');
  timeline.add(TweenLite.to('#card6 .studio', 1, {y:"0", ease:Quad.easeOut}), 'card-6-in');
  timeline.add(TweenLite.to('#card6', 0.5, {autoAlpha:0, ease:Quad.easeOut}), "card-6-out");
  timeline.add(TweenLite.to('#hulu-logo', 0.5, {autoAlpha:0, ease:Quad.easeOut, onComplete:function(){_addClass('hulu-logo', 'end-card');TweenLite.set('#hulu-logo', {x:window.BLT.Animation.negativeOffset});}}), "card-6-out");

  // END CARD
  timeline.add(TweenLite.to('#card7', 0.05, {autoAlpha:1, ease:Quad.easeOut}), 'card-7-in');
  timeline.add(TweenLite.to('#card7 .textblock-one', 0.5, {autoAlpha:1, y:"0", ease:Quad.easeOut}), 'card-7-in');
  timeline.add(TweenLite.to('#card7 .textblock-two', 0.5, {autoAlpha:1, y:"0", ease:Quad.easeOut}), 'card-7-in+=0.35');
  timeline.add(TweenLite.to('#card7 .storyboard-image .image-one', 0.75, {autoAlpha:1, x:"0", ease:Quad.easeOut}), 'card-7-in+=0.75');
  timeline.add(TweenLite.to('#card7 .storyboard-image .image-two', 0.75, {autoAlpha:1, x:"0", ease:Quad.easeOut}), 'card-7-in+=1.2');
  timeline.add(TweenLite.to('#card7 .storyboard-image .image-three', 0.75, {autoAlpha:1, x:"0", ease:Quad.easeOut}), 'card-7-in+=1.6');
  timeline.add(TweenLite.to('.cta-button', 0.75, {autoAlpha:1, x:'0', ease:Quad.easeOut}), 'card-7-in+=2.25');
  timeline.add(TweenLite.to('#hulu-logo', 0.75, {autoAlpha:1, x:'0', ease:Quad.easeOut}), 'card-7-in+=2.25');

  // Store TL on Namespace
  this.tl = timeline;

  // STart Timeline
  timeline.play();
};

BLT.Animation.showEndCardComplete = function () {
    console.log('>>>> DONE >>>>> TOTAL TIME IS ' + BLT.Animation.tl.time());
};


/////////
// Start Ad
BLT.adReady();



