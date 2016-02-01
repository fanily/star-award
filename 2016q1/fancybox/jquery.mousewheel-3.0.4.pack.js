/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
* Licensed under the MIT License (LICENSE.txt).
*
* Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
* Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
* Thanks to: Seamus Leahy for adding deltaX and deltaY
*
* Version: 3.0.4
*
* Requires: 1.2.2+
*/
(function(e){function t(t){var n=t||window.event,l=[].slice.call(arguments,1),i=0,s=0,h=0;return t=e.event.fix(n),t.type="mousewheel",t.wheelDelta&&(i=t.wheelDelta/120),t.detail&&(i=-t.detail/3),h=i,void 0!==n.axis&&n.axis===n.HORIZONTAL_AXIS&&(h=0,s=-1*i),void 0!==n.wheelDeltaY&&(h=n.wheelDeltaY/120),void 0!==n.wheelDeltaX&&(s=-1*n.wheelDeltaX/120),l.unshift(t,i,s,h),e.event.handle.apply(this,l)}var n=["DOMMouseScroll","mousewheel"];e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=n.length;e;)this.addEventListener(n[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=n.length;e;)this.removeEventListener(n[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})})(jQuery);