// Copyright 2003-2007 Michael Foster (Cross-Browser.com)
// Distributed under the terms of the GNU LGPL
var slideTime = 700, topMargin;
xAddEventListener(window, 'load',
  function () {
    topMargin = 115;
    winOnResize(); // set initial position
    xAddEventListener(window, 'resize', winOnResize, false);
    xAddEventListener(window, 'scroll', winOnScroll, false);
  }, false
);
function winOnResize() {
  xMoveTo('floater', xPageX('leftColumn')+xWidth('leftColumn')+20, topMargin);
  xGetElementById('floater').style.visibility = 'visible';
  winOnScroll(); // initial slide
}
function winOnScroll() {
  xSlideTo('floater', xLeft('floater'), xScrollTop() + topMargin, slideTime);
}
function setSlideTime(st) {
  st = parseInt(st);
  if (!isNaN(st)) slideTime = st;
  var e = xGetElementById('st');
  e.value = st;
  return false;
}
function closeFloat() {
  xVisibility('floater', false);
}

// minFloat and maxFloat functions written by Josh Abbott
// http://fivehits.com
// July 31, 2010
function minFloat() {
  maxhtml = document.getElementById('floater').innerHTML;
  document.getElementById('floater').innerHTML = minhtml;
}
function maxFloat() {
  document.getElementById('floater').innerHTML = maxhtml;
}