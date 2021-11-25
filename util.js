"use strict";

/*-----------------------------------------------
|   Emoji Picker
-----------------------------------------------*/

$( document ).ready(function() {
  var Event = {
    FOCUS: 'focus'
  };
  var KeyEvent = {
    KEYPRESS: 'keypress'
  };
  var Selector = {
    EMOJIAREA: '.emojiarea'
  };
  var DATA_KEY = {
    OPTIONS: 'options'
  };
  var emojioneareas = $(Selector.EMOJIAREA); // Place the Blinking Text Cursor at the end of the editor text

  var placeCaretAtEnd = function placeCaretAtEnd(el) {
    if (!!window.getSelection && !!document.createRange) {
      var range = document.createRange();
      range.selectNodeContents(el);
      range.collapse(false);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (document.body.createTextRange) {
      var textRange = document.body.createTextRange();
      textRange.moveToElementText(el);
      textRange.collapse(false);
      textRange.select();
    }
  }; // EmojioneArea plugin call

  if (emojioneareas.length) {
    emojioneareas.each(function (item, value) {
      var $this = $(value);
      var options = $.extend({}, $this.data(DATA_KEY.OPTIONS));
      $this.emojioneArea(options); // // Call the caret position function on focus

      emojioneareas[item].emojioneArea.on(Event.FOCUS, function ($editor) {
        placeCaretAtEnd($editor.get(0));
      });
      
      emojioneareas[item].emojioneArea.on(KeyEvent.KEYPRESS, function ($editor, event) {
      	if (event.which == 13) {
      	  // Submit message on return
      	  submit_chatmessage();
        }
      });
      
    });
  }
});