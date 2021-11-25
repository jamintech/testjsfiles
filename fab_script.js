///////////////////////////////////////////////////////////////////////////////
// Floating Action Button                                                    //
// COPYRIGHT 2008-2015 Josh Abbott and Robert Puddy                          //
// http://floatingactionbutton.com                                           //
//                                                                           //
// All Rights Reserved                                                       //
///////////////////////////////////////////////////////////////////////////////

// Position Constants
var LEFT = 1;
var MIDDLE = 2;
var RIGHT = 3;
var TOP = 1;
var BOTTOM =3;

// Selected Position of Button
var hAlign =  RIGHT;
var vAlign = BOTTOM;

// Padding/Margin   Left/Right Margin     Top/Bottom Margin
var fabHMargin = 5; 
var fabVMargin = 50;

var fabStartDelay = 1000;
var fabSlideTime = 700;
var fabOpacity = 1; 

xAddEventListener(window, 'load',
  function () {
    
    var e = xCreateElement('DIV');
    e.id = "divActionButton";
    e.style.backgroundColor = "";
    e.style.padding = "10";
    xInnerHtml(e, "<style type=\"text/css\">.fab_close {cursor: default;</style><p style=\"text-align: center;\"><strong><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"color:#B22222\"><span style=\"font-size:18px\">Uh-Oh, You&#39;re Out</span></span></span></strong></p><p style=\"text-align: center;\"><strong><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"color:#B22222\"><span style=\"font-size:18px\">Of Credits!</span></span></span></strong></p><p style=\"text-align: center;\"><span style=\"color:#000000\"><span style=\"font-size:16px\"><span style=\"font-family:arial,helvetica,sans-serif\">Don&#39;t worry, you </span></span></span></p><p style=\"text-align: center;\"><span style=\"color:#000000\"><span style=\"font-size:16px\"><span style=\"font-family:arial,helvetica,sans-serif\">can stock up </span></span></span></p><p style=\"text-align: center;\"><span style=\"color:#000000\"><span style=\"font-size:16px\"><span style=\"font-family:arial,helvetica,sans-serif\">with this special </span></span></span></p><p style=\"text-align: center;\"><span style=\"color:#000000\"><span style=\"font-size:16px\"><span style=\"font-family:arial,helvetica,sans-serif\">credit deal!</span></span></span></p><p style=\"text-align: center;\"><span style=\"font-size:36px\"><strong><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"color:#B22222\">1,000 Credits</span></span></strong></span></p><p style=\"text-align: center;\"><span style=\"color:#000000\"><span style=\"font-size:16px\"><span style=\"font-family:arial,helvetica,sans-serif\">BONUS&nbsp;2000 banners &amp; texts</span></span></span></p><p style=\"text-align: center;\"><span style=\"color:#000000\"><span style=\"font-size:16px\"><span style=\"font-family:arial,helvetica,sans-serif\">AND 5000 CTP XP</span></span></span></p><p style=\"text-align: center;\"><span style=\"font-size:36px\"><strong><span style=\"font-family:arial,helvetica,sans-serif\"><span style=\"color:#B22222\"><span style=\"background-color:#FFFF00\"><span style=\"color:#B22222\">$5.97</span></span></span></span></strong></span></p><p style=\"text-align: center;\">&nbsp;</p><p style=\"text-align: center;\">#IPN51#</p>");    
    document.body.appendChild(e);
       
    xOpacity("divActionButton",fabOpacity);
    setTimeout("winOnResize()",fabStartDelay);    
    xAddEventListener(window, 'resize', winOnResize, false);
    xAddEventListener(window, 'scroll', winOnScroll, false);
    
    
 
  }, false
);



function closeFab() {
   xInnerHtml('divActionButton', "");
   xVisibility('divActionButton', false);	 
}

function winOnResize() {
  xMoveTo('divActionButton', calculateXpos(), calculateYpos());
  xVisibility('divActionButton', true);	  
  winOnScroll(); // initial slide
}

function winOnScroll() {
  xSlideTo('divActionButton', calculateXpos(), calculateYpos(), fabSlideTime);
}

function calculateXpos() {
  
  switch(hAlign) {
      case LEFT: return fabHMargin;
      case MIDDLE: return (xClientWidth()/2) -  (xWidth('divActionButton')/2);
      case RIGHT: return xClientWidth()-xWidth('divActionButton') - fabHMargin;
  }
}

function calculateYpos() {
  
  switch(vAlign) {
      case TOP: return xScrollTop() + fabVMargin;
      case MIDDLE: return xScrollTop() + ((xClientHeight()/2) -  (xHeight('divActionButton')/2));
      case BOTTOM: return xScrollTop() + xClientHeight()-xHeight('divActionButton') - fabVMargin;
  }  
}


// XBrowser Functions below

/* Compiled from X 4.17 by XC 1.06 on 17Nov07 */
xLibrary={version:'4.17',license:'GNU LGPL',url:'http://cross-browser.com/'};
// xAddEventListener r8, Copyright 2001-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xAddEventListener(e,eT,eL,cap)
{
  if(!(e=xGetElementById(e)))return;
  eT=eT.toLowerCase();
  if(e.addEventListener)e.addEventListener(eT,eL,cap||false);
  else if(e.attachEvent)e.attachEvent('on'+eT,eL);
  else {
    var o=e['on'+eT];
    e['on'+eT]=typeof o=='function' ? function(v){o(v);eL(v);} : eL;
  }
}
// xCamelize r1, Copyright 2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xCamelize(cssPropStr)
{
  var i, c, a = cssPropStr.split('-');
  var s = a[0];
  for (i=1; i<a.length; ++i) {
    c = a[i].charAt(0);
    s += a[i].replace(c, c.toUpperCase());
  }
  return s;
}
// xClientHeight r5, Copyright 2001-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xClientHeight()
{
  var v=0,d=document,w=window;
  if((!d.compatMode || d.compatMode == 'CSS1Compat') && !w.opera && d.documentElement && d.documentElement.clientHeight)
    {v=d.documentElement.clientHeight;}
  else if(d.body && d.body.clientHeight)
    {v=d.body.clientHeight;}
  else if(xDef(w.innerWidth,w.innerHeight,d.width)) {
    v=w.innerHeight;
    if(d.width>w.innerWidth) v-=16;
  }
  return v;
}
// xClientWidth r5, Copyright 2001-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xClientWidth()
{
  var v=0,d=document,w=window;
  if((!d.compatMode || d.compatMode == 'CSS1Compat') && !w.opera && d.documentElement && d.documentElement.clientWidth)
    {v=d.documentElement.clientWidth;}
  else if(d.body && d.body.clientWidth)
    {v=d.body.clientWidth;}
  else if(xDef(w.innerWidth,w.innerHeight,d.height)) {
    v=w.innerWidth;
    if(d.height>w.innerHeight) v-=16;
  }
  return v;
}
// xDef r1, Copyright 2001-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xDef()
{
  for(var i=0; i<arguments.length; ++i){if(typeof(arguments[i])=='undefined') return false;}
  return true;
}
// xGetComputedStyle r7, Copyright 2002-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xGetComputedStyle(e, p, i)
{
  if(!(e=xGetElementById(e))) return null;
  var s, v = 'undefined', dv = document.defaultView;
  if(dv && dv.getComputedStyle){
    s = dv.getComputedStyle(e,'');
    if (s) v = s.getPropertyValue(p);
  }
  else if(e.currentStyle) {
    v = e.currentStyle[xCamelize(p)];
  }
  else return null;
  return i ? (parseInt(v) || 0) : v;
}

// xGetElementById r2, Copyright 2001-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xGetElementById(e)
{
  if(typeof(e)=='string') {
    if(document.getElementById) e=document.getElementById(e);
    else if(document.all) e=document.all[e];
    else e=null;
  }
  return e;
}
// xHeight r6, Copyright 2001-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xHeight(e,h)
{
  if(!(e=xGetElementById(e))) return 0;
  if (xNum(h)) {
    if (h<0) h = 0;
    else h=Math.round(h);
  }
  else h=-1;
  var css=xDef(e.style);
  if (e == document || e.tagName.toLowerCase() == 'html' || e.tagName.toLowerCase() == 'body') {
    h = xClientHeight();
  }
  else if(css && xDef(e.offsetHeight) && xStr(e.style.height)) {
    if(h>=0) {
      var pt=0,pb=0,bt=0,bb=0;
      if (document.compatMode=='CSS1Compat') {
        var gcs = xGetComputedStyle;
        pt=gcs(e,'padding-top',1);
        if (pt !== null) {
          pb=gcs(e,'padding-bottom',1);
          bt=gcs(e,'border-top-width',1);
          bb=gcs(e,'border-bottom-width',1);
        }
        // Should we try this as a last resort?
        // At this point getComputedStyle and currentStyle do not exist.
        else if(xDef(e.offsetHeight,e.style.height)){
          e.style.height=h+'px';
          pt=e.offsetHeight-h;
        }
      }
      h-=(pt+pb+bt+bb);
      if(isNaN(h)||h<0) return;
      else e.style.height=h+'px';
    }
    h=e.offsetHeight;
  }
  else if(css && xDef(e.style.pixelHeight)) {
    if(h>=0) e.style.pixelHeight=h;
    h=e.style.pixelHeight;
  }
  return h;
}
// xLeft r2, Copyright 2001-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xLeft(e, iX)
{
  if(!(e=xGetElementById(e))) return 0;
  var css=xDef(e.style);
  if (css && xStr(e.style.left)) {
    if(xNum(iX)) e.style.left=iX+'px';
    else {
      iX=parseInt(e.style.left);
      if(isNaN(iX)) iX=xGetComputedStyle(e,'left',1);
      if(isNaN(iX)) iX=0;
    }
  }
  else if(css && xDef(e.style.pixelLeft)) {
    if(xNum(iX)) e.style.pixelLeft=iX;
    else iX=e.style.pixelLeft;
  }
  return iX;
}
// xMoveTo r1, Copyright 2001-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xMoveTo(e,x,y)
{
  xLeft(e,x);
  xTop(e,y);
}
// xNum r2, Copyright 2001-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xNum()
{
  for(var i=0; i<arguments.length; ++i){if(isNaN(arguments[i]) || typeof(arguments[i])!='number') return false;}
  return true;
}
// xOpacity r1, Copyright 2006-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xOpacity(e, o)
{
  var set = xDef(o);
  //  if (set && o == 1) o = .9999; // FF1.0.2 but not needed in 1.5
  if(!(e=xGetElementById(e))) return 2; // error
  if (xStr(e.style.opacity)) { // CSS3
    if (set) e.style.opacity = o + '';
    else o = parseFloat(e.style.opacity);
  }
  else if (xStr(e.style.filter)) { // IE5.5+
    if (set) e.style.filter = 'alpha(opacity=' + (100 * o) + ')';
    else if (e.filters && e.filters.alpha) { o = e.filters.alpha.opacity / 100; }
  }
  else if (xStr(e.style.MozOpacity)) { // Gecko before CSS3 support
    if (set) e.style.MozOpacity = o + '';
    else o = parseFloat(e.style.MozOpacity);
  }
  else if (xStr(e.style.KhtmlOpacity)) { // Konquerer and Safari
    if (set) e.style.KhtmlOpacity = o + '';
    else o = parseFloat(e.style.KhtmlOpacity);
  }
  return isNaN(o) ? 1 : o; // if NaN, should this return an error instead of 1?
}
// xScrollTop r3, Copyright 2001-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xScrollTop(e, bWin)
{
  var offset=0;
  if (!xDef(e) || bWin || e == document || e.tagName.toLowerCase() == 'html' || e.tagName.toLowerCase() == 'body') {
    var w = window;
    if (bWin && e) w = e;
    if(w.document.documentElement && w.document.documentElement.scrollTop) offset=w.document.documentElement.scrollTop;
    else if(w.document.body && xDef(w.document.body.scrollTop)) offset=w.document.body.scrollTop;
  }
  else {
    e = xGetElementById(e);
    if (e && xNum(e.scrollTop)) offset = e.scrollTop;
  }
  return offset;
}
// xSlideTo r3, Copyright 2001-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xSlideTo(e, x, y, uTime)
{
  if (!(e=xGetElementById(e))) return;
  if (!e.timeout) e.timeout = 25;
  e.xTarget = x; e.yTarget = y; e.slideTime = uTime; e.stop = false;
  e.yA = e.yTarget - xTop(e); e.xA = e.xTarget - xLeft(e); // A = distance
  if (e.slideLinear) e.B = 1/e.slideTime;
  else e.B = Math.PI / (2 * e.slideTime); // B = period
  e.yD = xTop(e); e.xD = xLeft(e); // D = initial position
  var d = new Date(); e.C = d.getTime();
  if (!e.moving) _xSlideTo(e);
}
function _xSlideTo(e)
{
  if (!(e=xGetElementById(e))) return;
  var now, s, t, newY, newX;
  now = new Date();
  t = now.getTime() - e.C;
  if (e.stop) { e.moving = false; }
  else if (t < e.slideTime) {
    setTimeout("_xSlideTo('"+e.id+"')", e.timeout);

    s = e.B * t;
    if (!e.slideLinear) s = Math.sin(s);
//    if (e.slideLinear) s = e.B * t;
//    else s = Math.sin(e.B * t);

    newX = Math.round(e.xA * s + e.xD);
    newY = Math.round(e.yA * s + e.yD);
    xMoveTo(e, newX, newY);
    e.moving = true;
  }  
  else {
    xMoveTo(e, e.xTarget, e.yTarget);
    e.moving = false;
    if (e.onslideend) e.onslideend();
  }  
}

// xStr r1, Copyright 2001-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xStr(s)
{
  for(var i=0; i<arguments.length; ++i){if(typeof(arguments[i])!='string') return false;}
  return true;
}
// xTop r2, Copyright 2001-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xTop(e, iY)
{
  if(!(e=xGetElementById(e))) return 0;
  var css=xDef(e.style);
  if(css && xStr(e.style.top)) {
    if(xNum(iY)) e.style.top=iY+'px';
    else {
      iY=parseInt(e.style.top);
      if(isNaN(iY)) iY=xGetComputedStyle(e,'top',1);
      if(isNaN(iY)) iY=0;
    }
  }
  else if(css && xDef(e.style.pixelTop)) {
    if(xNum(iY)) e.style.pixelTop=iY;
    else iY=e.style.pixelTop;
  }
  return iY;
}
// xVisibility r1, Copyright 2003-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xVisibility(e, bShow)
{
  if(!(e=xGetElementById(e))) return null;
  if(e.style && xDef(e.style.visibility)) {
    if (xDef(bShow)) e.style.visibility = bShow ? 'visible' : 'hidden';
    return e.style.visibility;
  }
  return null;
}

//function xVisibility(e,s)
//{
//  if(!(e=xGetElementById(e))) return null;
//  var v = 'visible', h = 'hidden';
//  if(e.style && xDef(e.style.visibility)) {
//    if (xDef(s)) {
//      // try to maintain backwards compatibility (???)
//      if (xStr(s)) e.style.visibility = s;
//      else e.style.visibility = s ? v : h;
//    }
//    return e.style.visibility;
//    // or...
//    // if (e.style.visibility.length) return e.style.visibility;
//    // else return xGetComputedStyle(e, 'visibility');
//  }
//  else if (xDef(e.visibility)) { // NN4
//    if (xDef(s)) {
//      // try to maintain backwards compatibility
//      if (xStr(s)) e.visibility = (s == v) ? 'show' : 'hide';
//      else e.visibility = s ? v : h;
//    }
//    return (e.visibility == 'show') ? v : h;
//  }
//  return null;
//}
// xWidth r6, Copyright 2001-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xWidth(e,w)
{
  if(!(e=xGetElementById(e))) return 0;
  if (xNum(w)) {
    if (w<0) w = 0;
    else w=Math.round(w);
  }
  else w=-1;
  var css=xDef(e.style);
  if (e == document || e.tagName.toLowerCase() == 'html' || e.tagName.toLowerCase() == 'body') {
    w = xClientWidth();
  }
  else if(css && xDef(e.offsetWidth) && xStr(e.style.width)) {
    if(w>=0) {
      var pl=0,pr=0,bl=0,br=0;
      if (document.compatMode=='CSS1Compat') {
        var gcs = xGetComputedStyle;
        pl=gcs(e,'padding-left',1);
        if (pl !== null) {
          pr=gcs(e,'padding-right',1);
          bl=gcs(e,'border-left-width',1);
          br=gcs(e,'border-right-width',1);
        }
        // Should we try this as a last resort?
        // At this point getComputedStyle and currentStyle do not exist.
        else if(xDef(e.offsetWidth,e.style.width)){
          e.style.width=w+'px';
          pl=e.offsetWidth-w;
        }
      }
      w-=(pl+pr+bl+br);
      if(isNaN(w)||w<0) return;
      else e.style.width=w+'px';
    }
    w=e.offsetWidth;
  }
  else if(css && xDef(e.style.pixelWidth)) {
    if(w>=0) e.style.pixelWidth=w;
    w=e.style.pixelWidth;
  }
  return w;
}

// xCreateElement r1, Copyright 2001-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xCreateElement(sTag)
{
  if (document.createElement) return document.createElement(sTag);
  else return null;
}

// xInnerHtml r1, Copyright 2001-2007 Michael Foster (Cross-Browser.com)
// Part of X, a Cross-Browser Javascript Library, Distributed under the terms of the GNU LGPL

function xInnerHtml(e,h)
{
  if(!(e=xGetElementById(e)) || !xStr(e.innerHTML)) return null;
  var s = e.innerHTML;
  if (xStr(h)) {e.innerHTML = h;}
  return s;
}
