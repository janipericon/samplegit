// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.
//Clear Form Function by JVP 
$.fn.clearForm = function() {
  return this.each(function() {
    var type = this.type, tag = this.tagName.toLowerCase();
    if (tag == 'form')
      return $(':input',this).clearForm();
    if (type == 'text' || type == 'password' || tag == 'textarea')
      this.value = '';
    else if (type == 'checkbox' || type == 'radio')
      this.checked = false;
    else if (tag == 'select')
      $("select.items").html("");
      this.selectedIndex = 0;
  });
};
// Clear Form End

/*
 * Lazy Load - jQuery plugin for lazy loading images
 * Copyright (c) 2007-2012 Mika Tuupola
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 * Version:  1.8.0
 */
(function(a,b){var c=a(b);a.fn.lazyload=function(d){function h(){var b=0;e.each(function(){var c=a(this);if(g.skip_invisible&&!c.is(":visible"))return;if(!a.abovethetop(this,g)&&!a.leftofbegin(this,g))if(!a.belowthefold(this,g)&&!a.rightoffold(this,g))c.trigger("appear");else if(++b>g.failure_limit)return!1})}var e=this,f,g={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return d&&(undefined!==d.failurelimit&&(d.failure_limit=d.failurelimit,delete d.failurelimit),undefined!==d.effectspeed&&(d.effect_speed=d.effectspeed,delete d.effectspeed),a.extend(g,d)),f=g.container===undefined||g.container===b?c:a(g.container),0===g.event.indexOf("scroll")&&f.bind(g.event,function(a){return h()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,c.one("appear",function(){if(!this.loaded){if(g.appear){var d=e.length;g.appear.call(b,d,g)}a("<img />").bind("load",function(){c.hide().attr("src",c.data(g.data_attribute))[g.effect](g.effect_speed),b.loaded=!0;var d=a.grep(e,function(a){return!a.loaded});e=a(d);if(g.load){var f=e.length;g.load.call(b,f,g)}}).attr("src",c.data(g.data_attribute))}}),0!==g.event.indexOf("scroll")&&c.bind(g.event,function(a){b.loaded||c.trigger("appear")})}),c.bind("resize",function(a){h()}),h(),this},a.belowthefold=function(d,e){var f;return e.container===undefined||e.container===b?f=c.height()+c.scrollTop():f=a(e.container).offset().top+a(e.container).height(),f<=a(d).offset().top-e.threshold},a.rightoffold=function(d,e){var f;return e.container===undefined||e.container===b?f=c.width()+c.scrollLeft():f=a(e.container).offset().left+a(e.container).width(),f<=a(d).offset().left-e.threshold},a.abovethetop=function(d,e){var f;return e.container===undefined||e.container===b?f=c.scrollTop():f=a(e.container).offset().top,f>=a(d).offset().top+e.threshold+a(d).height()},a.leftofbegin=function(d,e){var f;return e.container===undefined||e.container===b?f=c.scrollLeft():f=a(e.container).offset().left,f>=a(d).offset().left+e.threshold+a(d).width()},a.inviewport=function(b,c){return!a.rightofscreen(b,c)&&!a.leftofscreen(b,c)&&!a.belowthefold(b,c)&&!a.abovethetop(b,c)},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return!a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})})(jQuery,window)


/*!
 AnythingSlider v1.8.6 minified using Google Closure Compiler
 Original by Chris Coyier: http://css-tricks.com
 Get the latest version: https://github.com/CSS-Tricks/AnythingSlider
*/
;(function(d){d.anythingSlider=function(i,k){var a=this,b,j;a.el=i;a.$el=d(i).addClass("anythingBase").wrap('<div class="anythingSlider"><div class="anythingWindow" /></div>');a.$el.data("AnythingSlider",a);a.init=function(){a.options=b=d.extend({},d.anythingSlider.defaults,k);a.initialized=!1;d.isFunction(b.onBeforeInitialize)&&a.$el.bind("before_initialize",b.onBeforeInitialize);a.$el.trigger("before_initialize",a);d('<\!--[if lte IE 8]><script>jQuery("body").addClass("as-oldie");<\/script><![endif]--\>').appendTo("body").remove(); a.$wrapper=a.$el.parent().closest("div.anythingSlider").addClass("anythingSlider-"+b.theme);a.$window=a.$el.closest("div.anythingWindow");a.win=window;a.$win=d(a.win);a.$controls=d('<div class="anythingControls"></div>');a.$nav=d('<ul class="thumbNav"><li><a><span></span></a></li></ul>');a.$startStop=d('<a href="#" class="start-stop"></a>');if(b.buildStartStop||b.buildNavigation)a.$controls.appendTo(b.appendControlsTo&&d(b.appendControlsTo).length?d(b.appendControlsTo):a.$wrapper);b.buildNavigation&& a.$nav.appendTo(b.appendNavigationTo&&d(b.appendNavigationTo).length?d(b.appendNavigationTo):a.$controls);b.buildStartStop&&a.$startStop.appendTo(b.appendStartStopTo&&d(b.appendStartStopTo).length?d(b.appendStartStopTo):a.$controls);a.runTimes=d(".anythingBase").length;a.regex=RegExp("panel"+a.runTimes+"-(\\d+)","i");1===a.runTimes&&a.makeActive();a.flag=!1;a.playing=b.autoPlay;a.slideshow=!1;a.hovered=!1;a.panelSize=[];a.currentPage=a.targetPage=b.startPanel=parseInt(b.startPanel,10)||1;b.changeBy= parseInt(b.changeBy,10)||1;j=(b.mode||"h").toLowerCase().match(/(h|v|f)/);j=b.vertical?"v":(j||["h"])[0];b.mode="v"===j?"vertical":"f"===j?"fade":"horizontal";"f"===j&&(b.showMultiple=1,b.infiniteSlides=!1);a.adj=b.infiniteSlides?0:1;a.adjustMultiple=0;a.width=a.$el.width();a.height=a.$el.height();a.outerPad=[a.$wrapper.innerWidth()-a.$wrapper.width(),a.$wrapper.innerHeight()-a.$wrapper.height()];b.playRtl&&a.$wrapper.addClass("rtl");b.expand&&(a.$outer=a.$wrapper.parent(),a.$window.css({width:"100%", height:"100%"}),a.checkResize());b.buildStartStop&&a.buildAutoPlay();b.buildArrows&&a.buildNextBackButtons();b.autoPlay||(b.autoPlayLocked=!1);a.$lastPage=a.$targetPage=a.$currentPage;a.updateSlider();d.isFunction(d.easing[b.easing])||(b.easing="swing");b.pauseOnHover&&a.$wrapper.hover(function(){if(a.playing){a.$el.trigger("slideshow_paused",a);a.clearTimer(true)}},function(){if(a.playing){a.$el.trigger("slideshow_unpaused",a);a.startStop(a.playing,true)}});a.slideControls(!1);a.$wrapper.bind("mouseenter mouseleave", function(b){d(this)[b.type==="mouseenter"?"addClass":"removeClass"]("anythingSlider-hovered");a.hovered=b.type==="mouseenter"?true:false;a.slideControls(a.hovered)});d(document).keyup(function(c){if(b.enableKeyboard&&(a.$wrapper.hasClass("activeSlider")&&!c.target.tagName.match("TEXTAREA|INPUT|SELECT"))&&!(b.mode!=="vertical"&&(c.which===38||c.which===40)))switch(c.which){case 39:case 40:a.goForward();break;case 37:case 38:a.goBack()}});a.currentPage=a.gotoHash()||b.startPanel||1;a.gotoPage(a.currentPage, !1,null,-1);var c="slideshow_paused slideshow_unpaused slide_init slide_begin slideshow_stop slideshow_start initialized swf_completed".split(" ");d.each("onShowPause onShowUnpause onSlideInit onSlideBegin onShowStop onShowStart onInitialized onSWFComplete".split(" "),function(f,e){d.isFunction(b[e])&&a.$el.bind(c[f],b[e])});d.isFunction(b.onSlideComplete)&&a.$el.bind("slide_complete",function(){setTimeout(function(){b.onSlideComplete(a)},0);return false});a.initialized=!0;a.$el.trigger("initialized", a);a.startStop(b.autoPlay)};a.updateSlider=function(){a.$el.children(".cloned").remove();a.navTextVisible="hidden"!==a.$nav.find("span:first").css("visibility");a.$nav.empty();a.currentPage=a.currentPage||1;a.$items=a.$el.children();a.pages=a.$items.length;a.dir="vertical"===b.mode?"top":"left";b.showMultiple="vertical"===b.mode?1:parseInt(b.showMultiple,10)||1;b.navigationSize=!1===b.navigationSize?0:parseInt(b.navigationSize,10)||0;a.$items.find("a").unbind("focus.AnythingSlider").bind("focus.AnythingSlider", function(c){var e=d(this).closest(".panel"),e=a.$items.index(e)+a.adj;a.$items.find(".focusedLink").removeClass("focusedLink");d(this).addClass("focusedLink");a.$window.scrollLeft(0).scrollTop(0);if(-1!==e&&(e>=a.currentPage+b.showMultiple||e<a.currentPage))a.gotoPage(e),c.preventDefault()});1<b.showMultiple&&(b.showMultiple>a.pages&&(b.showMultiple=a.pages),a.adjustMultiple=b.infiniteSlides&&1<a.pages?0:b.showMultiple-1);a.$controls.add(a.$nav).add(a.$startStop).add(a.$forward).add(a.$back)[1>=a.pages? "hide":"show"]();1<a.pages&&a.buildNavigation();"fade"!==b.mode&&(b.infiniteSlides&&1<a.pages)&&(a.$el.prepend(a.$items.filter(":last").clone().addClass("cloned")),1<b.showMultiple?a.$el.append(a.$items.filter(":lt("+b.showMultiple+")").clone().addClass("cloned multiple")):a.$el.append(a.$items.filter(":first").clone().addClass("cloned")),a.$el.find(".cloned").each(function(){d(this).find("a,input,textarea,select,button,area,form").attr({disabled:"disabled",name:""});d(this).find("[id]").andSelf().removeAttr("id")})); a.$items=a.$el.addClass(b.mode).children().addClass("panel");a.setDimensions();b.resizeContents?(a.$items.css("width",a.width),a.$wrapper.css("width",a.getDim(a.currentPage)[0]).add(a.$items).css("height",a.height)):a.$win.load(function(){a.setDimensions();c=a.getDim(a.currentPage);a.$wrapper.css({width:c[0],height:c[1]});a.setCurrentPage(a.currentPage,false)});a.currentPage>a.pages&&(a.currentPage=a.pages);a.setCurrentPage(a.currentPage,!1);a.$nav.find("a").eq(a.currentPage-1).addClass("cur");if("fade"=== b.mode){var c=a.$items.eq(a.currentPage-1);b.resumeOnVisible?c.css({opacity:1}).siblings().css({opacity:0}):(a.$items.css("opacity",1),c.fadeIn(0).siblings().fadeOut(0))}};a.buildNavigation=function(){if(b.buildNavigation&&1<a.pages){var c,f,e,g,h;a.$items.filter(":not(.cloned)").each(function(m){h=d("<li/>");e=m+1;f=(1===e?" first":"")+(e===a.pages?" last":"");c='<a class="panel'+e+(a.navTextVisible?'"':" "+b.tooltipClass+'" title="@"')+' href="#"><span>@</span></a>';d.isFunction(b.navigationFormatter)? (g=b.navigationFormatter(e,d(this)),"string"===typeof g?h.html(c.replace(/@/g,g)):h=d("<li/>",g)):h.html(c.replace(/@/g,e));h.appendTo(a.$nav).addClass(f).data("index",e)});a.$nav.children("li").bind(b.clickControls,function(c){!a.flag&&b.enableNavigation&&(a.flag=!0,setTimeout(function(){a.flag=!1},100),a.gotoPage(d(this).data("index")));c.preventDefault()});b.navigationSize&&b.navigationSize<a.pages&&(a.$controls.find(".anythingNavWindow").length||a.$nav.before('<ul><li class="prev"><a href="#"><span>'+ b.backText+"</span></a></li></ul>").after('<ul><li class="next"><a href="#"><span>'+b.forwardText+"</span></a></li></ul>").wrap('<div class="anythingNavWindow"></div>'),a.navWidths=a.$nav.find("li").map(function(){return d(this).outerWidth(!0)+Math.ceil(parseInt(d(this).find("span").css("left"),10)/2||0)}).get(),a.navLeft=a.currentPage,a.$nav.width(a.navWidth(1,a.pages+1)+25),a.$controls.find(".anythingNavWindow").width(a.navWidth(1,b.navigationSize+1)).end().find(".prev,.next").bind(b.clickControls, function(c){a.flag||(a.flag=!0,setTimeout(function(){a.flag=!1},200),a.navWindow(a.navLeft+b.navigationSize*(d(this).is(".prev")?-1:1)));c.preventDefault()}))}};a.navWidth=function(b,f){var e;e=Math.min(b,f);for(var d=Math.max(b,f),h=0;e<d;e++)h+=a.navWidths[e-1]||0;return h};a.navWindow=function(c){if(b.navigationSize&&b.navigationSize<a.pages&&a.navWidths){var f=a.pages-b.navigationSize+1,c=1>=c?1:1<c&&c<f?c:f;c!==a.navLeft&&(a.$controls.find(".anythingNavWindow").animate({scrollLeft:a.navWidth(1, c),width:a.navWidth(c,c+b.navigationSize)},{queue:!1,duration:b.animationTime}),a.navLeft=c)}};a.buildNextBackButtons=function(){a.$forward=d('<span class="arrow forward"><a href="#"><span>'+b.forwardText+"</span></a></span>");a.$back=d('<span class="arrow back"><a href="#"><span>'+b.backText+"</span></a></span>");a.$back.bind(b.clickBackArrow,function(c){b.enableArrows&&!a.flag&&(a.flag=!0,setTimeout(function(){a.flag=!1},100),a.goBack());c.preventDefault()});a.$forward.bind(b.clickForwardArrow, function(c){b.enableArrows&&!a.flag&&(a.flag=!0,setTimeout(function(){a.flag=!1},100),a.goForward());c.preventDefault()});a.$back.add(a.$forward).find("a").bind("focusin focusout",function(){d(this).toggleClass("hover")});a.$back.appendTo(b.appendBackTo&&d(b.appendBackTo).length?d(b.appendBackTo):a.$wrapper);a.$forward.appendTo(b.appendForwardTo&&d(b.appendForwardTo).length?d(b.appendForwardTo):a.$wrapper);a.arrowWidth=a.$forward.width();a.arrowRight=parseInt(a.$forward.css("right"),10);a.arrowLeft= parseInt(a.$back.css("left"),10)};a.buildAutoPlay=function(){a.$startStop.html("<span>"+(a.playing?b.stopText:b.startText)+"</span>").bind(b.clickSlideshow,function(c){b.enableStartStop&&(a.startStop(!a.playing),a.makeActive(),a.playing&&!b.autoPlayDelayed&&a.goForward(!0));c.preventDefault()}).bind("focusin focusout",function(){d(this).toggleClass("hover")})};a.checkResize=function(c){clearTimeout(a.resizeTimer);a.resizeTimer=setTimeout(function(){var f=a.$outer.width()-a.outerPad[0],e=("BODY"=== a.$outer[0].tagName?a.$win.height():a.$outer.height())-a.outerPad[1];if(a.width*b.showMultiple!==f||a.height!==e)a.setDimensions(),a.gotoPage(a.currentPage,a.playing,null,-1);"undefined"===typeof c&&a.checkResize()},500)};a.setDimensions=function(){var c,f,e,g,h=0,i={width:"100%",height:"100%"},l=1<b.showMultiple?a.width||a.$window.width()/b.showMultiple:a.$window.width(),j=a.$win.width();b.expand&&(c=a.$outer.width()-a.outerPad[0],a.height=f=a.$outer.height()-a.outerPad[1],a.$wrapper.add(a.$window).add(a.$items).css({width:c, height:f}),a.width=l=1<b.showMultiple?c/b.showMultiple:c);a.$items.each(function(k){g=d(this);e=g.children();if(b.resizeContents){c=a.width;f=a.height;g.css({width:c,height:f});if(e.length){e[0].tagName==="EMBED"&&e.attr(i);e[0].tagName==="OBJECT"&&e.find("embed").attr(i);e.length===1&&e.css(i)}}else{c=g.width()||a.width;if(e.length===1&&c>=j){c=e.width()>=j?l:e.width();e.css("max-width",c)}g.css("width",c);f=e.length===1?e.outerHeight(true):g.height();if(f<=a.outerPad[1])f=a.height;g.css("height", f)}a.panelSize[k]=[c,f,h];h=h+(b.mode==="vertical"?f:c)});a.$el.css("vertical"===b.mode?"height":"width","fade"===b.mode?a.width:h)};a.getDim=function(c){var f,e=a.width,d=a.height;if(1>a.pages||isNaN(c))return[e,d];c=b.infiniteSlides&&1<a.pages?c:c-1;if(f=a.panelSize[c])e=f[0]||e,d=f[1]||d;if(1<b.showMultiple)for(f=1;f<b.showMultiple;f++)e+=a.panelSize[c+f][0],d=Math.max(d,a.panelSize[c+f][1]);return[e,d]};a.goForward=function(c){a.gotoPage(a[b.allowRapidChange?"targetPage":"currentPage"]+b.changeBy* (b.playRtl?-1:1),c)};a.goBack=function(c){a.gotoPage(a[b.allowRapidChange?"targetPage":"currentPage"]+b.changeBy*(b.playRtl?1:-1),c)};a.gotoPage=function(c,f,e,g){!0!==f&&(f=!1,a.startStop(!1),a.makeActive());/^[#|.]/.test(c)&&d(c).length&&(c=d(c).closest(".panel").index()+a.adj);if(1!==b.changeBy){var h=a.pages-a.adjustMultiple;1>c&&(c=b.stopAtEnd?1:b.infiniteSlides?a.pages+c:b.showMultiple>1-c?1:h);c>a.pages?c=b.stopAtEnd?a.pages:b.showMultiple>1-c?1:c-=h:c>=h&&(c=h)}if(!(1>=a.pages)&&(a.$lastPage= a.$currentPage,"number"!==typeof c&&(c=parseInt(c,10)||b.startPanel,a.setCurrentPage(c)),!f||!b.isVideoPlaying(a)))a.exactPage=c,c>a.pages+1-a.adj&&(c=!b.infiniteSlides&&!b.stopAtEnd?1:a.pages),c<a.adj&&(c=!b.infiniteSlides&&!b.stopAtEnd?a.pages:1),b.infiniteSlides||(a.exactPage=c),a.currentPage=c>a.pages?a.pages:1>c?1:a.currentPage,a.$currentPage=a.$items.eq(a.currentPage-a.adj),a.targetPage=0===c?a.pages:c>a.pages?1:c,a.$targetPage=a.$items.eq(a.targetPage-a.adj),g="undefined"!==typeof g?g:b.animationTime, 0<=g&&a.$el.trigger("slide_init",a),0<g&&a.slideControls(!0),b.buildNavigation&&a.setNavigation(a.targetPage),!0!==f&&(f=!1),(!f||b.stopAtEnd&&c===a.pages)&&a.startStop(!1),0<=g&&a.$el.trigger("slide_begin",a),setTimeout(function(d){var f,h=true;b.allowRapidChange&&a.$wrapper.add(a.$el).add(a.$items).stop(true,true);if(!b.resizeContents){f=a.getDim(c);d={};if(a.$wrapper.width()!==f[0]){d.width=f[0]||a.width;h=false}if(a.$wrapper.height()!==f[1]){d.height=f[1]||a.height;h=false}h||a.$wrapper.filter(":not(:animated)").animate(d, {queue:false,duration:g<0?0:g,easing:b.easing})}if(b.mode==="fade")if(a.$lastPage[0]!==a.$targetPage[0]){a.fadeIt(a.$lastPage,0,g);a.fadeIt(a.$targetPage,1,g,function(){a.endAnimation(c,e,g)})}else a.endAnimation(c,e,g);else{d={};d[a.dir]=-a.panelSize[b.infiniteSlides&&a.pages>1?c:c-1][2];a.$el.filter(":not(:animated)").animate(d,{queue:false,duration:g<0?0:g,easing:b.easing,complete:function(){a.endAnimation(c,e,g)}})}},parseInt(b.delayBeforeAnimate,10)||0)};a.endAnimation=function(c,d,e){0===c? (a.$el.css(a.dir,"fade"===b.mode?0:-a.panelSize[a.pages][2]),c=a.pages):c>a.pages&&(a.$el.css(a.dir,"fade"===b.mode?0:-a.panelSize[1][2]),c=1);a.exactPage=c;a.setCurrentPage(c,!1);"fade"===b.mode&&a.fadeIt(a.$items.not(":eq("+(c-a.adj)+")"),0,0);a.hovered||a.slideControls(!1);b.hashTags&&a.setHash(c);0<=e&&a.$el.trigger("slide_complete",a);"function"===typeof d&&d(a);b.autoPlayLocked&&!a.playing&&setTimeout(function(){a.startStop(true)},b.resumeDelay-(b.autoPlayDelayed?b.delay:0))};a.fadeIt=function(a, d,e,g){e=0>e?0:e;if(b.resumeOnVisible)a.filter(":not(:animated)").fadeTo(e,d,g);else a.filter(":not(:animated)")[0===d?"fadeOut":"fadeIn"](e,g)};a.setCurrentPage=function(c,d){c=parseInt(c,10);if(!(1>a.pages||0===c||isNaN(c))){c>a.pages+1-a.adj&&(c=a.pages-a.adj);c<a.adj&&(c=1);b.buildArrows&&(!b.infiniteSlides&&b.stopAtEnd)&&(a.$forward[c===a.pages-a.adjustMultiple?"addClass":"removeClass"]("disabled"),a.$back[1===c?"addClass":"removeClass"]("disabled"),c===a.pages&&a.playing&&a.startStop());if(!d){var e= a.getDim(c);a.$wrapper.css({width:e[0],height:e[1]}).add(a.$window).scrollLeft(0).scrollTop(0);a.$el.css(a.dir,"fade"===b.mode?0:-a.panelSize[b.infiniteSlides&&1<a.pages?c:c-1][2])}a.currentPage=c;a.$currentPage=a.$items.removeClass("activePage").eq(c-a.adj).addClass("activePage");b.buildNavigation&&a.setNavigation(c)}};a.setNavigation=function(b){a.$nav.find(".cur").removeClass("cur").end().find("a").eq(b-1).addClass("cur")};a.makeActive=function(){a.$wrapper.hasClass("activeSlider")||(d(".activeSlider").removeClass("activeSlider"), a.$wrapper.addClass("activeSlider"))};a.gotoHash=function(){var c=a.win.location.hash,f=c.indexOf("&"),e=c.match(a.regex);null===e&&!/^#&/.test(c)&&!/#!?\//.test(c)?(c=c.substring(0,0<=f?f:c.length),e=d(c).length&&d(c).closest(".anythingBase")[0]===a.el?a.$items.index(d(c).closest(".panel"))+a.adj:null):null!==e&&(e=b.hashTags?parseInt(e[1],10):null);return e};a.setHash=function(b){var d="panel"+a.runTimes+"-",e=a.win.location.hash;"undefined"!==typeof e&&(a.win.location.hash=0<e.indexOf(d)?e.replace(a.regex, d+b):e+"&"+d+b)};a.slideControls=function(c){var d=c?0:b.animationTime,e=c?b.animationTime:0,g=c?1:0,h=c?0:1;b.toggleControls&&a.$controls.stop(!0,!0).delay(d)[c?"slideDown":"slideUp"](b.animationTime/2).delay(e);b.buildArrows&&b.toggleArrows&&(!a.hovered&&a.playing&&(h=1,g=0),a.$forward.stop(!0,!0).delay(d).animate({right:a.arrowRight+h*a.arrowWidth,opacity:g},b.animationTime/2),a.$back.stop(!0,!0).delay(d).animate({left:a.arrowLeft+h*a.arrowWidth,opacity:g},b.animationTime/2))};a.clearTimer=function(b){a.timer&& (a.win.clearInterval(a.timer),!b&&a.slideshow&&(a.$el.trigger("slideshow_stop",a),a.slideshow=!1))};a.startStop=function(c,d){!0!==c&&(c=!1);if((a.playing=c)&&!d)a.$el.trigger("slideshow_start",a),a.slideshow=!0;b.buildStartStop&&(a.$startStop.toggleClass("playing",c).find("span").html(c?b.stopText:b.startText),"hidden"===a.$startStop.find("span").css("visibility")&&a.$startStop.addClass(b.tooltipClass).attr("title",c?b.stopText:b.startText));c?(a.clearTimer(!0),a.timer=a.win.setInterval(function(){b.isVideoPlaying(a)? b.resumeOnVideoEnd||a.startStop():a.goForward(true)},b.delay)):a.clearTimer()};a.init()};d.anythingSlider.defaults={theme:"default",mode:"horiz",expand:!1,resizeContents:!0,showMultiple:!1,easing:"swing",buildArrows:!0,buildNavigation:!0,buildStartStop:!0,toggleArrows:!1,toggleControls:!1,startText:"Start",stopText:"Stop",forwardText:"&raquo;",backText:"&laquo;",tooltipClass:"tooltip",enableArrows:!0,enableNavigation:!0,enableStartStop:!0,enableKeyboard:!0,startPanel:1,changeBy:1,hashTags:!0,infiniteSlides:!0, navigationFormatter:null,navigationSize:!1,autoPlay:!1,autoPlayLocked:!1,autoPlayDelayed:!1,pauseOnHover:!0,stopAtEnd:!1,playRtl:!1,delay:3E3,resumeDelay:15E3,animationTime:600,delayBeforeAnimate:0,clickForwardArrow:"click",clickBackArrow:"click",clickControls:"click focusin",clickSlideshow:"click",allowRapidChange:!1,resumeOnVideoEnd:!0,resumeOnVisible:!0,addWmodeToObject:"opaque",isVideoPlaying:function(){return!1}};d.fn.anythingSlider=function(i,k){return this.each(function(){var a,b=d(this).data("AnythingSlider"); (typeof i).match("object|undefined")?b?b.updateSlider():new d.anythingSlider(this,i):/\d/.test(i)&&!isNaN(i)&&b?(a="number"===typeof i?i:parseInt(d.trim(i),10),1<=a&&a<=b.pages&&b.gotoPage(a,!1,k)):/^[#|.]/.test(i)&&d(i).length&&b.gotoPage(i,!1,k)})}})(jQuery);



//Pagination
;(function($){
/*******************************************************************************************/    
// jquery.pajinate.js - version 0.4
// A jQuery plugin for paginating through any number of DOM elements
// Modified by: Johnny Pericon
// To fit in the current application
/*******************************************************************************************/
$.fn.pajinate = function(options){
        // Set some state information
        var current_page = 'current_page';
    var items_per_page = 'items_per_page';
    
    var meta;
   
    // Setup default option values
    var defaults = {
      item_container_id : '.content',
      items_per_page : 10,      
      nav_panel_id : '.page_navigation',
      nav_info_id : '.info_text',
      num_page_links_to_display : 20,     
      start_page : 0,
      wrap_around : false,
      nav_label_first : 'First',
      nav_label_prev : 'Prev',
      nav_label_next : 'Next',
      nav_label_last : 'Last',
      nav_order : ["first", "prev", "num", "next", "last"],
      nav_label_info : 'Showing {0}-{1} of {2} results',
            show_first_last: true,
            abort_on_small_lists: false,
            jquery_ui: false,
            jquery_ui_active: "ui-state-highlight",
            jquery_ui_default: "ui-state-default",
            jquery_ui_disabled: "ui-state-disabled"
    };
    var options = $.extend(defaults,options);
    var $item_container;
    var $page_container;
    var $items;
    var $nav_panels;
        var total_page_no_links;
        var jquery_ui_default_class = options.jquery_ui ? options.jquery_ui_default : '';
        var jquery_ui_active_class = options.jquery_ui ? options.jquery_ui_active : '';
        var jquery_ui_disabled_class = options.jquery_ui ? options.jquery_ui_disabled : '';

    return this.each(function(){
      $page_container = $(this);
      $item_container = $(this).find(options.item_container_id);
      $items = $page_container.find(options.item_container_id).children();
         
      if (options.abort_on_small_lists && options.items_per_page >= $items.size())
   
                return $page_container;
                
      meta = $page_container;
      
      // Initialize meta data
      meta.data(current_page,0);
      meta.data(items_per_page, options.items_per_page);
          
      // Get the total number of items
      var total_items = $item_container.children().size();

      // Calculate the number of pages needed
      var number_of_pages = Math.ceil(total_items/options.items_per_page);
      
      // Total pages top
      $("#totalpage").html(number_of_pages);
      if (number_of_pages == 1) {
        $("div.pageindicator").hide();
        $("div.page_navigation").hide();
      } else {
        $("div.pageindicator").show();
        $("div.page_navigation").show();
      }
      
      // Construct the nav bar
      var more = '<span class="ellipse more">...</span>';
      var less = '<span class="ellipse less">...</span>';
            var first = !options.show_first_last ? '' : '<a class="first_link '+ jquery_ui_default_class +'" href="">'+ options.nav_label_first +'</a>';
            var last = !options.show_first_last ? '' : '<a class="last_link '+ jquery_ui_default_class +'" href="">'+ options.nav_label_last +'</a>';
      
      var navigation_html = "";
      
      for(var i = 0; i < options.nav_order.length; i++) {
        switch (options.nav_order[i]) {
        case "first":
          navigation_html += first;
          break;
        case "last":
          navigation_html += last;
          break;
        case "next":
          navigation_html += '<a class="next_link '+ jquery_ui_default_class +'" href="">'+ options.nav_label_next +'</a>';
          break;
        case "prev":
          navigation_html += '<a class="previous_link '+ jquery_ui_default_class +'" href="">'+ options.nav_label_prev +'</a>';
          break;
        case "num":
          navigation_html += less;
          var current_link = 0;
          while(number_of_pages > current_link){
            navigation_html += '<a class="page_link '+ jquery_ui_default_class +'" href="" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
            current_link++;
          }
          navigation_html += more;
          break;
        default:
          break;
        }
          
      }
      
      // And add it to the appropriate area of the DOM  
      $nav_panels = $page_container.find(options.nav_panel_id);     
      $nav_panels.html(navigation_html).each(function(){
      
        $(this).find('.page_link:first').addClass('first');
        $(this).find('.page_link:last').addClass('last');
        
      });
      
      // Hide the more/less indicators
      $nav_panels.children('.ellipse').hide();
      
      // Set the active page link styling
      $nav_panels.find('.previous_link').next().next().addClass('active_page '+ jquery_ui_active_class);
      
      /* Setup Page Display */
      // And hide all pages
      $items.hide();
      // Show the first page      
      $items.slice(0, meta.data(items_per_page)).show();

      /* Setup Nav Menu Display */
      // Page number slices
      
      total_page_no_links = $page_container.children(options.nav_panel_id+':first').children('.page_link').size();
      options.num_page_links_to_display = Math.min(options.num_page_links_to_display,total_page_no_links);

      $nav_panels.children('.page_link').hide(); // Hide all the page links
      
      // And only show the number we should be seeing
      $nav_panels.each(function(){
        $(this).children('.page_link').slice(0, options.num_page_links_to_display).show();      
      });
      
      /* Bind the actions to their respective links */
       
      // Event handler for 'First' link
      $page_container.find('.first_link').click(function(e){
        e.preventDefault();
        
        movePageNumbersRight($(this),0);
        gotopage(0);        
      });     
      
      // Event handler for 'Last' link
      $page_container.find('.last_link').click(function(e){
        e.preventDefault();
        var lastPage = total_page_no_links - 1;
        movePageNumbersLeft($(this),lastPage);
        gotopage(lastPage);       
      });     
      
      // Event handler for 'Prev' link
      $page_container.find('.previous_link').click(function(e){
        e.preventDefault();
        showPrevPage($(this));
      });

      $('a.prevp').die("click");
      // Event handler for 'Prev' link top
      $('a.prevp').live("click",function(e){
        e.preventDefault();
        showPrevPage($page_container.find('.previous_link'));
      });
      
      // Event handler for 'Next' link
      $page_container.find('.next_link').click(function(e){
        e.preventDefault();       
        showNextPage($(this));
      });

      $('a.nextp').die("click");
      // Event handler for 'Next' link top
      $('a.nextp').live("click",function(e){
        e.preventDefault();       
        showNextPage($page_container.find('.next_link'));
      });
      
      // Event handler for each 'Page' link
      $page_container.find('.page_link').click(function(e){
        e.preventDefault();
        gotopage($(this).attr('longdesc'));
      });     
      
      // Goto the required page
      gotopage(parseInt(options.start_page));
      toggleMoreLess();
            if(!options.wrap_around)
          tagNextPrev();
    });
    
    function showPrevPage(e){
      new_page = parseInt(meta.data(current_page)) - 1;           
      
      // Check that we aren't on a boundary link
      if($(e).siblings('.active_page').prev('.page_link').length==true){
        movePageNumbersRight(e,new_page);
        gotopage(new_page);
      }else if(options.wrap_around){
                gotopage(total_page_no_links-1);   
      }
        
    };
      
    function showNextPage(e){
      new_page = parseInt(meta.data(current_page)) + 1;

      // Check that we aren't on a boundary link
      if($(e).siblings('.active_page').next('.page_link').length==true){    
        movePageNumbersLeft(e,new_page);
        gotopage(new_page);
      } else if (options.wrap_around) {
        gotopage(0);
      }
        
    };
      
    function gotopage(page_num){
      
      var ipp = parseInt(meta.data(items_per_page));
      
      var isLastPage = false;
      
      // Find the start of the next slice
      start_from = page_num * ipp;
      
      // Find the end of the next slice
      end_on = start_from + ipp;
      // Hide the current page  
      var items = $items.hide().slice(start_from, end_on);
      
      items.show();
      
      // Reassign the active class
      $page_container.find(options.nav_panel_id).children('.page_link[longdesc=' + page_num +']').addClass('active_page '+ jquery_ui_active_class)
                           .siblings('.active_page')
                           .removeClass('active_page ' + jquery_ui_active_class);                    
      
      // Set the current page meta data             
      meta.data(current_page,page_num);
      
      // Current page on
      $("#pageon").text(page_num + 1);
      
      $page_container.find(options.nav_info_id).html(options.nav_label_info.replace("{0}",start_from+1).
          replace("{1}",start_from + items.length).replace("{2}",$items.length));
      
      // Hide the more and/or less indicators
      toggleMoreLess();
      
      // Add a class to the next or prev links if there are no more pages next or previous to the active page
      tagNextPrev();
    };  
    
    // Methods to shift the diplayed index of page numbers to the left or right
    function movePageNumbersLeft(e, new_p){
      var new_page = new_p;
      
      var $current_active_link = $(e).siblings('.active_page');
    
      if($current_active_link.siblings('.page_link[longdesc=' + new_page +']').css('display') == 'none'){
        
        $nav_panels.each(function(){
              $(this).children('.page_link')
                .hide() // Hide all the page links
                .slice(parseInt(new_page - options.num_page_links_to_display + 1) , new_page + 1)
                .show();    
              });
      }
      
    } 
    
    function movePageNumbersRight(e, new_p){
      var new_page = new_p;
      
      var $current_active_link = $(e).siblings('.active_page');
      
      if($current_active_link.siblings('.page_link[longdesc=' + new_page +']').css('display') == 'none'){
                        
        $nav_panels.each(function(){
              $(this).children('.page_link')
                .hide() // Hide all the page links
                .slice( new_page , new_page + parseInt(options.num_page_links_to_display))
                .show();
              });
      }
    }
    
    // Show or remove the ellipses that indicate that more page numbers exist in the page index than are currently shown
    function toggleMoreLess(){
                           
      if(!$nav_panels.children('.page_link:visible').hasClass('last')){         
        $nav_panels.children('.more').show();
      }else {
        $nav_panels.children('.more').hide();
      }
      
      if(!$nav_panels.children('.page_link:visible').hasClass('first')){
        $nav_panels.children('.less').show();
      }else {
        $nav_panels.children('.less').hide();
      }     
    }
    
        /* Add the style class ".no_more" to the first/prev and last/next links to allow custom styling */
      function tagNextPrev() {
      if($nav_panels.children('.last').hasClass('active_page')){
        $nav_panels.children('.next_link').add('.last_link').addClass('no_more ' + jquery_ui_disabled_class);
      } else {
        $nav_panels.children('.next_link').add('.last_link').removeClass('no_more ' + jquery_ui_disabled_class);
      }
      
      if($nav_panels.children('.first').hasClass('active_page')){
        $nav_panels.children('.previous_link').add('.first_link').addClass('no_more ' + jquery_ui_disabled_class);
      } else {
        $nav_panels.children('.previous_link').add('.first_link').removeClass('no_more ' + jquery_ui_disabled_class);
      }
    }
    
  };
  
})(jQuery);
//End Pagination

