!function i(e,r,a){function c(t,o){if(!r[t]){if(!e[t]){var n="function"==typeof require&&require;if(!o&&n)return n(t,!0);if(p)return p(t,!0);throw(o=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",o}n=r[t]={exports:{}},e[t][0].call(n.exports,function(o){return c(e[t][1][o]||o)},n,n.exports,i,e,r,a)}return r[t].exports}for(var p="function"==typeof require&&require,o=0;o<a.length;o++)c(a[o]);return c}({1:[function(o,t,n){$(function(){var o,t={position:"fixed","z-index":"9999999",opacity:"0.5","font-family":'"Helvetica Neue",Tahoma,Arial,sans-serif',"font-weight":"400","font-size":"18px","line-height":"20px",height:"21px",top:"0",right:"0","background-color":"#555",color:"#fff","border-bottom-left-radius":"10px","text-align":"right",padding:"0 2px 0 5px",cursor:"pointer"};window.parent.location!==window.location?($.pubEditor=!0,o=$('<div class="pub-button" title="Close editor">Close</div>').css(t),$("body").prepend(o),o.on("click",function(){var o=location.pathname+location.search+location.hash,t=window.generator&&window.generator.opts.staticRoot;t&&o.slice(0,t.length)!==t&&(o=t+o),window.parent.location=o})):($.pubEditor=!1,o=$('<div class="pub-button" title="Edit">Edit</div>').css(t),$("body").prepend(o),o.on("click",function(){var o=window.pubRef||{},t=(o.href||location.pathname)+location.search+location.hash,o=(o.relPath||"")+"/pub/?page="+encodeURIComponent(t);location=o}))})},{}]},{},[1]);