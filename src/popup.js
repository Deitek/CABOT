!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=6)}([function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"a",function(){return o}),t.d(n,"d",function(){return i}),t.d(n,"c",function(){return u});var r="GitHub Gloc",o="github-gloc",i=5,u={POPUP:["addToken","github","shortName","indexWorksOnly","indexCountsFrom","indexProjectPage","indexUserPage","indexSearchPage","indexTrandingPage","indexEtc","attentionPlease","translateOurApp"],OPTIONS:["optionsTitle","github","shortName","optionsUlDescription","optionsAccess","optionsLimits","optionsCreateToken"]}},function(e,n,t){"use strict";t.d(n,"b",function(){return o}),t.d(n,"c",function(){return i}),t.d(n,"a",function(){return u});var r=t(0),o=function(e,n){switch(e){case"i":console.info(r.b+": "+n);break;case"w":console.warn(r.b+": "+n);break;case"e":console.error(r.b+": "+n);break;default:console.info(n)}},i=function(e){e.map(function(e){document.getElementById(e).innerHTML=chrome.i18n.getMessage(e)})},u=function(e){for(var n in e)if(e.hasOwnProperty(n))return!1;return!0}},,,,,function(e,n,t){"use strict";t.r(n);var r=t(1),o=t(0);document.getElementById("settings-button").addEventListener("click",function(){chrome.tabs.create({url:"chrome://extensions/?options="+chrome.runtime.id})}),Object(r.c)(o.c.POPUP)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvcHVwLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJBUFBfTkFNRSIsIkFQUF9DTEFTU05BTUUiLCJUUklFU19ERUZBVUxUIiwiTUVTU0FHRV9JRFMiLCJQT1BVUCIsIk9QVElPTlMiLCJsb2ciLCJ0cmFuc2xhdGVFbGVtZW50cyIsImlzRW1wdHkiLCJfY29uc3RhbnRzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJ0eXBlIiwic3RyIiwiY29uc29sZSIsImluZm8iLCJ3YXJuIiwiZXJyb3IiLCJpZHMiLCJtYXAiLCJpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJjaHJvbWUiLCJpMThuIiwiZ2V0TWVzc2FnZSIsIm9iaiIsIl91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fIiwiX2NvbnN0YW50c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhYnMiLCJ1cmwi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RixLQUlISixFQUFvQixTQUFDUyxHQUNqQ0EsRUFBSUMsSUFBSSxTQUFBQyxHQUNTQyxTQUFTQyxlQUFlRixHQUNoQ0csVUFBWUMsT0FBT0MsS0FBS0MsV0FBV04sTUFJaENWLEVBQVUsU0FBQ2lCLEdBQ3ZCLElBQUssSUFBTXBDLEtBQU9vQyxFQUNoQixHQUFJQSxFQUFJOUIsZUFBZU4sR0FDdEIsT0FBTyxFQUdWLE9BQU8saUJBQUFTLEVBQUFQLEVBQUFQLEdBQUEsYUNwQ1J0QixFQUFBa0IsRUFBQW1CLEdBQUEsSUFBQTJCLEVBQUFoRSxFQUFBLEdBQUFpRSxFQUFBakUsRUFBQSxHQUlDeUQsU0FBU0MsZUFBZSxtQkFBbUJRLGlCQUFpQixRQUFTLFdBQ3BFTixPQUFPTyxLQUFLekMsT0FBTyxDQUFDMEMsSUFBSyxnQ0FBa0NSLE9BQU9TLFFBQVFiLE9BRzNFMUMsT0FBQWtELEVBQUEsRUFBQWxELENBQWtCbUQsRUFBQSxFQUFZdkIiLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4iLCJleHBvcnQgY29uc3QgQVBQX05BTUUgPSAnR2l0SHViIEdsb2MnO1xyXG5leHBvcnQgY29uc3QgQVBQX0NMQVNTTkFNRSA9ICdnaXRodWItZ2xvYyc7XHJcbmV4cG9ydCBjb25zdCBUUklFU19ERUZBVUxUID0gNTtcclxuZXhwb3J0IGNvbnN0IFJFUE9fQ0xBU1MgPSAncHVibGljJztcclxuXHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFX0lEUyA9IHtcclxuXHRQT1BVUDogW1xyXG5cdFx0J2FkZFRva2VuJyxcclxuXHRcdCdnaXRodWInLFxyXG5cdFx0J3Nob3J0TmFtZScsXHJcblx0XHQnaW5kZXhXb3Jrc09ubHknLFxyXG5cdFx0J2luZGV4Q291bnRzRnJvbScsXHJcblx0XHQnaW5kZXhQcm9qZWN0UGFnZScsXHJcblx0XHQnaW5kZXhVc2VyUGFnZScsXHJcblx0XHQnaW5kZXhTZWFyY2hQYWdlJyxcclxuXHRcdCdpbmRleFRyYW5kaW5nUGFnZScsXHJcblx0XHQnaW5kZXhFdGMnLFxyXG5cdFx0J2F0dGVudGlvblBsZWFzZScsXHJcblx0XHQndHJhbnNsYXRlT3VyQXBwJyxcclxuXHRdLFxyXG5cdE9QVElPTlM6IFtcclxuXHRcdCdvcHRpb25zVGl0bGUnLFxyXG5cdFx0J2dpdGh1YicsXHJcblx0XHQnc2hvcnROYW1lJyxcclxuXHRcdCdvcHRpb25zVWxEZXNjcmlwdGlvbicsXHJcblx0XHQnb3B0aW9uc0FjY2VzcycsXHJcblx0XHQnb3B0aW9uc0xpbWl0cycsXHJcblx0XHQnb3B0aW9uc0NyZWF0ZVRva2VuJyxcclxuXHRdLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBBUFBfTkFNRSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbi8qKlxyXG4gKiBMb2dnZXJcclxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBpbmZvLCB3YXJuLCBlcnJcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciAtIGluZm8gZm9yIG91dHB1dFxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvZyA9ICh0eXBlOiBzdHJpbmcsIHN0cjogYW55KSA9PiB7XHJcblx0c3dpdGNoICh0eXBlKSB7XHJcblx0XHRjYXNlICdpJzpcclxuXHRcdFx0Y29uc29sZS5pbmZvKEFQUF9OQU1FICsgJzogJyArIHN0cik7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAndyc6XHJcblx0XHRcdGNvbnNvbGUud2FybihBUFBfTkFNRSArICc6ICcgKyBzdHIpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ2UnOlxyXG5cdFx0XHRjb25zb2xlLmVycm9yKEFQUF9OQU1FICsgJzogJyArIHN0cik7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0Y29uc29sZS5pbmZvKHN0cik7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHRyYW5zbGF0ZUVsZW1lbnRzID0gKGlkczogc3RyaW5nW10pID0+IHtcclxuXHRpZHMubWFwKGlkID0+IHtcclxuXHRcdGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblx0XHRlbGVtZW50LmlubmVySFRNTCA9IGNocm9tZS5pMThuLmdldE1lc3NhZ2UoaWQpO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGlzRW1wdHkgPSAob2JqOiBvYmplY3QpID0+IHtcclxuXHRmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuXHRcdFx0aWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0fVxyXG5cdHJldHVybiB0cnVlO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB0cmFuc2xhdGVFbGVtZW50cyB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgeyBNRVNTQUdFX0lEUyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbigoKSA9PiB7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldHRpbmdzLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0Y2hyb21lLnRhYnMuY3JlYXRlKHt1cmw6ICdjaHJvbWU6Ly9leHRlbnNpb25zLz9vcHRpb25zPScgKyBjaHJvbWUucnVudGltZS5pZH0pO1xyXG5cdH0pO1xyXG5cclxuXHR0cmFuc2xhdGVFbGVtZW50cyhNRVNTQUdFX0lEUy5QT1BVUCk7XHJcbn0pKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=