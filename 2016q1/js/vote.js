(function(o){var t=o.jQuery,n=function(o){o=o.split("+").join(" ");for(var t,n={},e=/[?&]?([^=]+)=([^&]*)/g;t=e.exec(o);)n[decodeURIComponent(t[1])]=decodeURIComponent(t[2]);return n},e=function(t){o.vote_token=t,docCookies.setItem("vote_token",t)};t(o).on("vote-index-refresh",function(){t.getJSON(o.api_url+"/"+o.vote_key+"/vote",function(n){var e=0;t.each(n.data,function(n,i){e+=1;var a=o.vote_data[n],c=[];t.each(a,function(o){i[o]||(i[o]=0)}),t.each(i,function(o,t){c.push({id:o,count:t})}),c.sort(function(o,t){return t.count-o.count});var r="",s=moment().format("X");t.each(c,function(t,e){var i=n+"-"+e.id,c="";return o.time_limit>=s&&(c='<a class="vote" href="vote-pop.html#'+i+'">投票</a>'),r+='<li><div class="thumb '+i+'"><img src="'+a[e.id].img+'">',r+='<span class="rank rank-0'+(t+1).toString()+'">第'+t.toString()+"名</span>",""!==a[e.id].url&&(r+='<a class="glyphicons glyphicons-play-button" href="video-pop.html#'+a[e.id].url+'"></a>'),r+="<p>"+a[e.id].name+'</p></div><div class="vote-area"><span class="vote-number">'+e.count+"</span>"+c+"</div></li>",2>t}),t("ul#group"+e.toString()).html(r)}),t(".glyphicons-play-button").fancybox({helpers:{media:{}},width:"6",height:"4",autoScale:!1,transitionIn:"none",transitionOut:"none",type:"iframe"}),t("a.vote").fancybox({width:"6",height:"6",autoScale:!0,type:"iframe",onComplete:function(){t("body").css({"overflow-y":"hidden"})},onClosed:function(){t("body").css({"overflow-y":"visible"}),t(o).trigger("vote-index-refresh")}})})}).on("vote-page-refresh",function(n,e){t.getJSON(o.api_url+"/"+o.vote_key+"/vote/"+e,function(n){n=n.data;var i=o.vote_data[e],a=[];t.each(i,function(o){n[o]||(n[o]=0)}),t.each(n,function(o,t){a.push({id:o,count:t})}),a.sort(function(o,t){return t.count-o.count});var c=1,r="",s=moment().format("X");t.each(a,function(t,n){var a=e+"-"+n.id,l="";o.time_limit>=s&&(l='<a class="vote" href="vote-pop.html#'+a+'">投票</a>'),r+='<li><div class="thumb '+a+'"><img src="'+i[n.id].img+'">',3>=c&&(r+='<span class="rank rank-0'+c+'">第'+c+"名</span>"),""!==i[n.id].url&&(r+='<a class="glyphicons glyphicons-play-button" href="video-pop.html#'+i[n.id].url+'"></a>'),r+="<p>"+i[n.id].name+'</p></div><div class="vote-area"><span class="vote-number">'+n.count+"</span>"+l+"</div></li>",c++}),t("ul#group").html(r),t(".glyphicons-play-button").fancybox({helpers:{media:{}},width:"6",height:"4",autoScale:!1,transitionIn:"none",transitionOut:"none",type:"iframe"}),t("a.vote").fancybox({width:"6",height:"6",autoScale:!0,type:"iframe",onComplete:function(){t("body").css({"overflow-y":"hidden"})},onClosed:function(){t("body").css({"overflow-y":"visible"}),t(o).trigger("vote-page-refresh",e)}})})}).scroll(function(){t(this).scrollTop()>100?t("#back-top").fadeIn():t("#back-top").fadeOut()}),t(function(){t("#foo0").carouFredSel(),t(".w2bslikebox").hover(function(){t(this).stop().animate({right:"0"},"medium")},function(){t(this).stop().animate({right:"-250"},"medium")},500),t("#back-top").hide(),t("#back-top a").click(function(){return t("body,html").animate({scrollTop:0},800),!1})});var i=n(o.location.search);return i.return_pop&&i.token?(e(i.token),t(function(){t("body").after('<a id="hideFancybox" href="'+i.return_pop+'" style="display:none;"></a>'),t("#hideFancybox").fancybox({width:"6",height:"6",autoScale:!0,type:"iframe",onClosed:function(){o.top.location.href=o.top.location.origin+o.top.location.pathname}}),t("#hideFancybox").click()}),void 0):void 0})(window);