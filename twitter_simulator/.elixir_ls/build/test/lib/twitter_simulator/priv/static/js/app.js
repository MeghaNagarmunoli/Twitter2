/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/app.css":
/*!*********************!*\
  !*** ./css/app.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/app.css?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.css */ \"./css/app.css\");\n/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var phoenix_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phoenix_html */ \"./node_modules/phoenix_html/priv/static/phoenix_html.js\");\n/* harmony import */ var phoenix_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phoenix_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket */ \"./js/socket.js\");\n// We need to import the CSS so that webpack will load it.\n// The MiniCssExtractPlugin is used to separate it out into\n// its own CSS file.\n // webpack automatically bundles all modules in your\n// entry points. Those entry points can be configured\n// in \"webpack.config.js\".\n//\n// Import dependencies\n//\n\n // Import local files\n//\n// Local files can be imported directly using relative paths, for example:\n\n\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/socket.js":
/*!**********************!*\
  !*** ./js/socket.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phoenix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phoenix */ \"./node_modules/phoenix/priv/static/phoenix.js\");\n/* harmony import */ var phoenix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phoenix__WEBPACK_IMPORTED_MODULE_0__);\n// NOTE: The contents of this file will only be executed if\n// you uncomment its entry in \"assets/js/app.js\".\n// To use Phoenix channels, the first step is to import Socket,\n// and connect at the socket path in \"lib/web/endpoint.ex\".\n//\n// Pass the token on params as below. Or remove it\n// from the params if you are not using authentication.\n\nvar messageContainer = document.querySelector('#messages');\nvar twitter_socket = new phoenix__WEBPACK_IMPORTED_MODULE_0__[\"Socket\"](\"/socket\", {\n  params: {\n    token: window.userToken\n  }\n});\nvar username = document.querySelector('#username');\nvar subscription = document.querySelector('#subscribe');\nvar search_user_tweets = document.querySelector('#search_user_tweets');\ntwitter_socket.connect(); // Now that you are connected, you can join channels with a topic:\n\nvar channel = twitter_socket.channel(\"room:lobby\", {});\nchannel.join().receive(\"ok\", function (resp) {\n  console.log(\"Joined successfully\", resp);\n}).receive(\"error\", function (resp) {\n  console.log(\"Unable to join\", resp);\n});\n\nfunction register_users(userName) {\n  //register the new client\n  channel.push(\"register\", userName).receive(\"registered_user\", function (resp) {\n    return console.log(\"registered\", resp);\n  });\n} //give subscribers to each client\n\n\nfunction subscribe_user(user_id, subscribeUser) {\n  channel.push(\"subscribe\", {\n    user_id: user_id,\n    userToSub: subscribeUser\n  }).receive(\"subscribed\", function (resp) {\n    return console.log(\"subscribed\", user_id);\n  });\n  console.log({\n    username: user_id,\n    usersToSub: subscribeUser\n  });\n}\n/**function to send tweets */\n\n\nfunction sendTweet(tweet_text, user_id) {\n  channel.push(\"tweet_user_subscribers\", {\n    tweetText: tweet_text,\n    username: user_id,\n    time: \"\".concat(Date())\n  });\n  console.log({\n    tweetText: tweet_text,\n    username: user_id,\n    time: \"\".concat(Date())\n  });\n}\n/**event listener to  register username**/\n\n\nusername.addEventListener(\"keypress\", function (event) {\n  if (event.keyCode === 13) {\n    register_users(username.value);\n    var messageItem = document.createElement(\"li\");\n    messageItem.innerText = \"\".concat(username.value, \" logged in \");\n    messageContainer.appendChild(messageItem); //username.value = \"\"\n  }\n});\n/**event listener to perform a user subscription*/\n\nsubscription.addEventListener(\"keypress\", function (event) {\n  if (event.keyCode === 13) {\n    var val = document.getElementById('subscribe').value;\n    subscribe_user(username.value, val);\n    var messageItem = document.createElement(\"li\");\n    messageItem.innerText = \"\".concat(username.value, \" subscribed to \").concat(val);\n    messageContainer.appendChild(messageItem);\n    subscribe.value = \"\";\n  }\n});\n/**event listener to  send tweets*/\n\nsendtweet.addEventListener(\"keypress\", function (event) {\n  if (event.keyCode === 13) {\n    sendTweet(sendtweet.value, username.value);\n    var messageItem = document.createElement(\"li\");\n    messageItem.innerText = \"\".concat(username.value, \" tweeted: \").concat(sendtweet.value);\n    messageContainer.appendChild(messageItem);\n    sendtweet.value = \"\";\n  }\n});\nchannel.on(\"new_tweet\", function (payload) {\n  //let followersList = payload.followerList;\n  var followersList = new Set(payload.followerList);\n  console.log({\n    follower_list: followersList\n  });\n  var messageItem = document.createElement(\"li\");\n\n  if (followersList.has(username.value)) {\n    console.log(\"in the if\");\n    messageItem.innerText = \"\".concat(payload.uid, \" tweeted:  \").concat(payload.body);\n    var retweetButton = document.createElement(\"button\");\n    messageContainer.appendChild(messageItem);\n    messageContainer.appendChild(retweetButton);\n    retweetButton.innerText = \"retweet\";\n    retweetButton.style.display = \"inline\";\n    retweetButton.addEventListener('click', function () {\n      channel.push(\"retweet\", {\n        user_id: username.value,\n        tweet_owner: payload.uid,\n        retweet_text: payload.body\n      });\n    });\n  }\n});\nchannel.on(\"re_tweet\", function (payload) {\n  var followersList = new Set(payload.followerList);\n  console.log({\n    follower_list: followersList\n  });\n  var messageItem = document.createElement(\"li\");\n\n  if (followersList.has(username.value)) {\n    console.log(\"in the if\");\n    messageItem.innerText = \"\".concat(payload.uid, \" re-tweeted:  \").concat(payload.tweet_owner, \"'s tweet: \").concat(payload.body);\n    messageContainer.appendChild(messageItem);\n  }\n});\nsearch_hashtag.addEventListener(\"keypress\", function (event) {\n  if (event.keyCode === 13) {\n    channel.push(\"search_hashtag\", {\n      username: username.value,\n      hashtag: search_hashtag.value\n    });\n    console.log({\n      username: username.value,\n      hashtag: search_hashtag.value,\n      time: \"\".concat(Date())\n    });\n    search_hashtag.value = \"\";\n  }\n});\nchannel.on(\"query_hashtag\", function (tweets) {\n  var messageItem = document.createElement(\"li\");\n  var tw_list = tweets.tweets_list;\n  messageItem.innerHTML = \"searched hashtag's tweets are: <br />\"; //messageContainer.appendChild(messageItem)\n\n  for (var i = 0; i < tw_list.length; i++) {\n    messageItem.innerHTML = messageItem.innerHTML + tw_list[i] + \"<br />\";\n    messageContainer.appendChild(messageItem);\n  }\n});\nsearch_mentions.addEventListener(\"keypress\", function (event) {\n  if (event.keyCode === 13) {\n    channel.push(\"search_mention\", {\n      username: username.value,\n      mention: search_mentions.value\n    });\n    console.log({\n      username: username.value,\n      mention: search_mentions.value,\n      time: \"\".concat(Date())\n    });\n    search_mention.value = \"\";\n  }\n});\nchannel.on(\"query_mention\", function (tweets) {\n  var messageItem = document.createElement(\"li\");\n  var tw_list = tweets.mention_tweets_list;\n  messageItem.innerHTML = \"searched mention tweets are: <br />\"; //messageContainer.appendChild(messageItem)\n\n  for (var i = 0; i < tw_list.length; i++) {\n    messageItem.innerHTML = messageItem.innerHTML + tw_list[i] + \"<br />\";\n    messageContainer.appendChild(messageItem);\n  }\n});\n/**event listener to  search tweets of all \r\n * users you have subscribed to*/\n\ndocument.getElementById('search_tweets').onclick = function () {\n  //var val = document.getElementById('search_user_tweets').value\n  console.log({\n    username: username.value,\n    time: \"\".concat(Date())\n  });\n  channel.push(\"search_tweets_by_user\", {\n    username: username.value,\n    time: \"\".concat(Date())\n  });\n};\n\nchannel.on(\"query_tweets\", function (tweets) {\n  var messageItem = document.createElement(\"li\");\n  var tw_list = tweets.user_tweets_list;\n  messageItem.innerHTML = \"searched user tweets are: <br />\"; //messageContainer.appendChild(messageItem)\n\n  for (var i = 0; i < tw_list.length; i++) {\n    messageItem.innerHTML = messageItem.innerHTML + tw_list[i] + \"<br />\";\n    messageContainer.appendChild(messageItem);\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (twitter_socket);\n\n//# sourceURL=webpack:///./js/socket.js?");

/***/ }),

/***/ "./node_modules/phoenix/priv/static/phoenix.js":
/*!*****************************************************!*\
  !*** ./node_modules/phoenix/priv/static/phoenix.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=0)}([function(e,t,n){(function(t){e.exports=t.Phoenix=n(2)}).call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function(\"return this\")()||(0,eval)(\"this\")}catch(e){\"object\"==typeof window&&(n=window)}e.exports=n},function(e,t,n){\"use strict\";function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||\"[object Arguments]\"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\")}()}function o(e){return(o=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e})(e)}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}(e,t)||function(){throw new TypeError(\"Invalid attempt to destructure non-iterable instance\")}()}function s(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,\"value\"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.r(t),n.d(t,\"Channel\",function(){return j}),n.d(t,\"Serializer\",function(){return C}),n.d(t,\"Socket\",function(){return R}),n.d(t,\"LongPoll\",function(){return T}),n.d(t,\"Ajax\",function(){return w}),n.d(t,\"Presence\",function(){return E});var u=\"undefined\"!=typeof self?self:null,h=\"undefined\"!=typeof window?window:null,l=u||h||void 0,f=\"2.0.0\",d={connecting:0,open:1,closing:2,closed:3},p=1e4,v={closed:\"closed\",errored:\"errored\",joined:\"joined\",joining:\"joining\",leaving:\"leaving\"},y={close:\"phx_close\",error:\"phx_error\",join:\"phx_join\",reply:\"phx_reply\",leave:\"phx_leave\"},g=[y.close,y.error,y.join,y.reply,y.leave],m={longpoll:\"longpoll\",websocket:\"websocket\"},k=function(e){if(\"function\"==typeof e)return e;return function(){return e}},b=function(){function e(t,n,i,o){s(this,e),this.channel=t,this.event=n,this.payload=i||function(){return{}},this.receivedResp=null,this.timeout=o,this.timeoutTimer=null,this.recHooks=[],this.sent=!1}return c(e,[{key:\"resend\",value:function(e){this.timeout=e,this.reset(),this.send()}},{key:\"send\",value:function(){this.hasReceived(\"timeout\")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}},{key:\"receive\",value:function(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}},{key:\"reset\",value:function(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}},{key:\"matchReceive\",value:function(e){var t=e.status,n=e.response;e.ref;this.recHooks.filter(function(e){return e.status===t}).forEach(function(e){return e.callback(n)})}},{key:\"cancelRefEvent\",value:function(){this.refEvent&&this.channel.off(this.refEvent)}},{key:\"cancelTimeout\",value:function(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}},{key:\"startTimeout\",value:function(){var e=this;this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,function(t){e.cancelRefEvent(),e.cancelTimeout(),e.receivedResp=t,e.matchReceive(t)}),this.timeoutTimer=setTimeout(function(){e.trigger(\"timeout\",{})},this.timeout)}},{key:\"hasReceived\",value:function(e){return this.receivedResp&&this.receivedResp.status===e}},{key:\"trigger\",value:function(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}}]),e}(),j=function(){function e(t,n,i){var o=this;s(this,e),this.state=v.closed,this.topic=t,this.params=k(n||{}),this.socket=i,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new b(this,y.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new S(function(){o.socket.isConnected()&&o.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(function(){return o.rejoinTimer.reset()})),this.stateChangeRefs.push(this.socket.onOpen(function(){o.rejoinTimer.reset(),o.isErrored()&&o.rejoin()})),this.joinPush.receive(\"ok\",function(){o.state=v.joined,o.rejoinTimer.reset(),o.pushBuffer.forEach(function(e){return e.send()}),o.pushBuffer=[]}),this.joinPush.receive(\"error\",function(){o.state=v.errored,o.socket.isConnected()&&o.rejoinTimer.scheduleTimeout()}),this.onClose(function(){o.rejoinTimer.reset(),o.socket.hasLogger()&&o.socket.log(\"channel\",\"close \".concat(o.topic,\" \").concat(o.joinRef())),o.state=v.closed,o.socket.remove(o)}),this.onError(function(e){o.socket.hasLogger()&&o.socket.log(\"channel\",\"error \".concat(o.topic),e),o.isJoining()&&o.joinPush.reset(),o.state=v.errored,o.socket.isConnected()&&o.rejoinTimer.scheduleTimeout()}),this.joinPush.receive(\"timeout\",function(){o.socket.hasLogger()&&o.socket.log(\"channel\",\"timeout \".concat(o.topic,\" (\").concat(o.joinRef(),\")\"),o.joinPush.timeout),new b(o,y.leave,k({}),o.timeout).send(),o.state=v.errored,o.joinPush.reset(),o.socket.isConnected()&&o.rejoinTimer.scheduleTimeout()}),this.on(y.reply,function(e,t){o.trigger(o.replyEventName(t),e)})}return c(e,[{key:\"join\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;if(this.joinedOnce)throw new Error(\"tried to join multiple times. 'join' can only be called a single time per channel instance\");return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}},{key:\"onClose\",value:function(e){this.on(y.close,e)}},{key:\"onError\",value:function(e){return this.on(y.error,function(t){return e(t)})}},{key:\"on\",value:function(e,t){var n=this.bindingRef++;return this.bindings.push({event:e,ref:n,callback:t}),n}},{key:\"off\",value:function(e,t){this.bindings=this.bindings.filter(function(n){return!(n.event===e&&(void 0===t||t===n.ref))})}},{key:\"canPush\",value:function(){return this.socket.isConnected()&&this.isJoined()}},{key:\"push\",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.timeout;if(!this.joinedOnce)throw new Error(\"tried to push '\".concat(e,\"' to '\").concat(this.topic,\"' before joining. Use channel.join() before pushing events\"));var i=new b(this,e,function(){return t},n);return this.canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}},{key:\"leave\",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=v.leaving;var n=function(){e.socket.hasLogger()&&e.socket.log(\"channel\",\"leave \".concat(e.topic)),e.trigger(y.close,\"leave\")},i=new b(this,y.leave,k({}),t);return i.receive(\"ok\",function(){return n()}).receive(\"timeout\",function(){return n()}),i.send(),this.canPush()||i.trigger(\"ok\",{}),i}},{key:\"onMessage\",value:function(e,t,n){return t}},{key:\"isLifecycleEvent\",value:function(e){return g.indexOf(e)>=0}},{key:\"isMember\",value:function(e,t,n,i){return this.topic===e&&(!i||i===this.joinRef()||!this.isLifecycleEvent(t)||(this.socket.hasLogger()&&this.socket.log(\"channel\",\"dropping outdated message\",{topic:e,event:t,payload:n,joinRef:i}),!1))}},{key:\"joinRef\",value:function(){return this.joinPush.ref}},{key:\"sendJoin\",value:function(e){this.state=v.joining,this.joinPush.resend(e)}},{key:\"rejoin\",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.timeout;this.isLeaving()||this.sendJoin(e)}},{key:\"trigger\",value:function(e,t,n,i){var o=this.onMessage(e,t,n,i);if(t&&!o)throw new Error(\"channel onMessage callbacks must return the payload, modified or unmodified\");for(var r=0;r<this.bindings.length;r++){var s=this.bindings[r];s.event===e&&s.callback(o,n,i||this.joinRef())}}},{key:\"replyEventName\",value:function(e){return\"chan_reply_\".concat(e)}},{key:\"isClosed\",value:function(){return this.state===v.closed}},{key:\"isErrored\",value:function(){return this.state===v.errored}},{key:\"isJoined\",value:function(){return this.state===v.joined}},{key:\"isJoining\",value:function(){return this.state===v.joining}},{key:\"isLeaving\",value:function(){return this.state===v.leaving}}]),e}(),C={encode:function(e,t){var n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))},decode:function(e,t){var n=r(JSON.parse(e),5);return t({join_ref:n[0],ref:n[1],topic:n[2],event:n[3],payload:n[4]})}},R=function(){function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,e),this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.timeout=i.timeout||p,this.transport=i.transport||l.WebSocket||T,this.defaultEncoder=C.encode,this.defaultDecoder=C.decode,this.closeWasClean=!1,this.unloaded=!1,this.binaryType=i.binaryType||\"arraybuffer\",this.transport!==T?(this.encode=i.encode||this.defaultEncoder,this.decode=i.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder),h&&h.addEventListener&&h.addEventListener(\"beforeunload\",function(e){n.conn&&(n.unloaded=!0,n.abnormalClose(\"unloaded\"))}),this.heartbeatIntervalMs=i.heartbeatIntervalMs||3e4,this.rejoinAfterMs=function(e){return i.rejoinAfterMs?i.rejoinAfterMs(e):[1e3,2e3,5e3][e-1]||1e4},this.reconnectAfterMs=function(e){return n.unloaded?100:i.reconnectAfterMs?i.reconnectAfterMs(e):[10,50,100,150,200,250,500,1e3,2e3][e-1]||5e3},this.logger=i.logger||null,this.longpollerTimeout=i.longpollerTimeout||2e4,this.params=k(i.params||{}),this.endPoint=\"\".concat(t,\"/\").concat(m.websocket),this.vsn=i.vsn||f,this.heartbeatTimer=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new S(function(){n.teardown(function(){return n.connect()})},this.reconnectAfterMs)}return c(e,[{key:\"protocol\",value:function(){return location.protocol.match(/^https/)?\"wss\":\"ws\"}},{key:\"endPointURL\",value:function(){var e=w.appendParams(w.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return\"/\"!==e.charAt(0)?e:\"/\"===e.charAt(1)?\"\".concat(this.protocol(),\":\").concat(e):\"\".concat(this.protocol(),\"://\").concat(location.host).concat(e)}},{key:\"disconnect\",value:function(e,t,n){this.closeWasClean=!0,this.reconnectTimer.reset(),this.teardown(e,t,n)}},{key:\"connect\",value:function(e){var t=this;e&&(console&&console.log(\"passing params to connect is deprecated. Instead pass :params to the Socket constructor\"),this.params=k(e)),this.conn||(this.closeWasClean=!1,this.conn=new this.transport(this.endPointURL()),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=function(){return t.onConnOpen()},this.conn.onerror=function(e){return t.onConnError(e)},this.conn.onmessage=function(e){return t.onConnMessage(e)},this.conn.onclose=function(e){return t.onConnClose(e)})}},{key:\"log\",value:function(e,t,n){this.logger(e,t,n)}},{key:\"hasLogger\",value:function(){return null!==this.logger}},{key:\"onOpen\",value:function(e){var t=this.makeRef();return this.stateChangeCallbacks.open.push([t,e]),t}},{key:\"onClose\",value:function(e){var t=this.makeRef();return this.stateChangeCallbacks.close.push([t,e]),t}},{key:\"onError\",value:function(e){var t=this.makeRef();return this.stateChangeCallbacks.error.push([t,e]),t}},{key:\"onMessage\",value:function(e){var t=this.makeRef();return this.stateChangeCallbacks.message.push([t,e]),t}},{key:\"onConnOpen\",value:function(){this.hasLogger()&&this.log(\"transport\",\"connected to \".concat(this.endPointURL())),this.unloaded=!1,this.closeWasClean=!1,this.flushSendBuffer(),this.reconnectTimer.reset(),this.resetHeartbeat(),this.stateChangeCallbacks.open.forEach(function(e){return(0,r(e,2)[1])()})}},{key:\"resetHeartbeat\",value:function(){var e=this;this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(function(){return e.sendHeartbeat()},this.heartbeatIntervalMs))}},{key:\"teardown\",value:function(e,t,n){this.conn&&(this.conn.onclose=function(){},t?this.conn.close(t,n||\"\"):this.conn.close(),this.conn=null),e&&e()}},{key:\"onConnClose\",value:function(e){this.hasLogger()&&this.log(\"transport\",\"close\",e),this.triggerChanError(),clearInterval(this.heartbeatTimer),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(function(t){return(0,r(t,2)[1])(e)})}},{key:\"onConnError\",value:function(e){this.hasLogger()&&this.log(\"transport\",e),this.triggerChanError(),this.stateChangeCallbacks.error.forEach(function(t){return(0,r(t,2)[1])(e)})}},{key:\"triggerChanError\",value:function(){this.channels.forEach(function(e){e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(y.error)})}},{key:\"connectionState\",value:function(){switch(this.conn&&this.conn.readyState){case d.connecting:return\"connecting\";case d.open:return\"open\";case d.closing:return\"closing\";default:return\"closed\"}}},{key:\"isConnected\",value:function(){return\"open\"===this.connectionState()}},{key:\"remove\",value:function(e){this.off(e.stateChangeRefs),this.channels=this.channels.filter(function(t){return t.joinRef()!==e.joinRef()})}},{key:\"off\",value:function(e){for(var t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter(function(t){var n=r(t,1)[0];return!e.includes(n)})}},{key:\"channel\",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new j(e,t,this);return this.channels.push(n),n}},{key:\"push\",value:function(e){var t=this;if(this.hasLogger()){var n=e.topic,i=e.event,o=e.payload,r=e.ref,s=e.join_ref;this.log(\"push\",\"\".concat(n,\" \").concat(i,\" (\").concat(s,\", \").concat(r,\")\"),o)}this.isConnected()?this.encode(e,function(e){return t.conn.send(e)}):this.sendBuffer.push(function(){return t.encode(e,function(e){return t.conn.send(e)})})}},{key:\"makeRef\",value:function(){var e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}},{key:\"sendHeartbeat\",value:function(){if(this.isConnected()){if(this.pendingHeartbeatRef)return this.pendingHeartbeatRef=null,this.hasLogger()&&this.log(\"transport\",\"heartbeat timeout. Attempting to re-establish connection\"),void this.abnormalClose(\"heartbeat timeout\");this.pendingHeartbeatRef=this.makeRef(),this.push({topic:\"phoenix\",event:\"heartbeat\",payload:{},ref:this.pendingHeartbeatRef})}}},{key:\"abnormalClose\",value:function(e){this.closeWasClean=!1,this.conn.close(1e3,e)}},{key:\"flushSendBuffer\",value:function(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(function(e){return e()}),this.sendBuffer=[])}},{key:\"onConnMessage\",value:function(e){var t=this;this.decode(e.data,function(e){var n=e.topic,i=e.event,o=e.payload,s=e.ref,a=e.join_ref;s&&s===t.pendingHeartbeatRef&&(t.pendingHeartbeatRef=null),t.hasLogger()&&t.log(\"receive\",\"\".concat(o.status||\"\",\" \").concat(n,\" \").concat(i,\" \").concat(s&&\"(\"+s+\")\"||\"\"),o);for(var c=0;c<t.channels.length;c++){var u=t.channels[c];u.isMember(n,i,o,a)&&u.trigger(i,o,s,a)}for(var h=0;h<t.stateChangeCallbacks.message.length;h++){(0,r(t.stateChangeCallbacks.message[h],2)[1])(e)}})}}]),e}(),T=function(){function e(t){s(this,e),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=d.connecting,this.poll()}return c(e,[{key:\"normalizeEndpoint\",value:function(e){return e.replace(\"ws://\",\"http://\").replace(\"wss://\",\"https://\").replace(new RegExp(\"(.*)/\"+m.websocket),\"$1/\"+m.longpoll)}},{key:\"endpointURL\",value:function(){return w.appendParams(this.pollEndpoint,{token:this.token})}},{key:\"closeAndRetry\",value:function(){this.close(),this.readyState=d.connecting}},{key:\"ontimeout\",value:function(){this.onerror(\"timeout\"),this.closeAndRetry()}},{key:\"poll\",value:function(){var e=this;this.readyState!==d.open&&this.readyState!==d.connecting||w.request(\"GET\",this.endpointURL(),\"application/json\",null,this.timeout,this.ontimeout.bind(this),function(t){if(t){var n=t.status,i=t.token,o=t.messages;e.token=i}else n=0;switch(n){case 200:o.forEach(function(t){return e.onmessage({data:t})}),e.poll();break;case 204:e.poll();break;case 410:e.readyState=d.open,e.onopen(),e.poll();break;case 0:case 500:e.onerror(),e.closeAndRetry();break;default:throw new Error(\"unhandled poll status \".concat(n))}})}},{key:\"send\",value:function(e){var t=this;w.request(\"POST\",this.endpointURL(),\"application/json\",e,this.timeout,this.onerror.bind(this,\"timeout\"),function(e){e&&200===e.status||(t.onerror(e&&e.status),t.closeAndRetry())})}},{key:\"close\",value:function(e,t){this.readyState=d.closed,this.onclose()}}]),e}(),w=function(){function e(){s(this,e)}return c(e,null,[{key:\"request\",value:function(e,t,n,i,o,r,s){if(l.XDomainRequest){var a=new XDomainRequest;this.xdomainRequest(a,e,t,i,o,r,s)}else{var c=l.XMLHttpRequest?new l.XMLHttpRequest:new ActiveXObject(\"Microsoft.XMLHTTP\");this.xhrRequest(c,e,t,n,i,o,r,s)}}},{key:\"xdomainRequest\",value:function(e,t,n,i,o,r,s){var a=this;e.timeout=o,e.open(t,n),e.onload=function(){var t=a.parseJSON(e.responseText);s&&s(t)},r&&(e.ontimeout=r),e.onprogress=function(){},e.send(i)}},{key:\"xhrRequest\",value:function(e,t,n,i,o,r,s,a){var c=this;e.open(t,n,!0),e.timeout=r,e.setRequestHeader(\"Content-Type\",i),e.onerror=function(){a&&a(null)},e.onreadystatechange=function(){if(e.readyState===c.states.complete&&a){var t=c.parseJSON(e.responseText);a(t)}},s&&(e.ontimeout=s),e.send(o)}},{key:\"parseJSON\",value:function(e){if(!e||\"\"===e)return null;try{return JSON.parse(e)}catch(t){return console&&console.log(\"failed to parse JSON response\",e),null}}},{key:\"serialize\",value:function(e,t){var n=[];for(var i in e)if(e.hasOwnProperty(i)){var r=t?\"\".concat(t,\"[\").concat(i,\"]\"):i,s=e[i];\"object\"===o(s)?n.push(this.serialize(s,r)):n.push(encodeURIComponent(r)+\"=\"+encodeURIComponent(s))}return n.join(\"&\")}},{key:\"appendParams\",value:function(e,t){if(0===Object.keys(t).length)return e;var n=e.match(/\\?/)?\"&\":\"?\";return\"\".concat(e).concat(n).concat(this.serialize(t))}}]),e}();w.states={complete:4};var E=function(){function e(t){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,e);var o=i.events||{state:\"presence_state\",diff:\"presence_diff\"};this.state={},this.pendingDiffs=[],this.channel=t,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(o.state,function(t){var i=n.caller,o=i.onJoin,r=i.onLeave,s=i.onSync;n.joinRef=n.channel.joinRef(),n.state=e.syncState(n.state,t,o,r),n.pendingDiffs.forEach(function(t){n.state=e.syncDiff(n.state,t,o,r)}),n.pendingDiffs=[],s()}),this.channel.on(o.diff,function(t){var i=n.caller,o=i.onJoin,r=i.onLeave,s=i.onSync;n.inPendingSyncState()?n.pendingDiffs.push(t):(n.state=e.syncDiff(n.state,t,o,r),s())})}return c(e,[{key:\"onJoin\",value:function(e){this.caller.onJoin=e}},{key:\"onLeave\",value:function(e){this.caller.onLeave=e}},{key:\"onSync\",value:function(e){this.caller.onSync=e}},{key:\"list\",value:function(t){return e.list(this.state,t)}},{key:\"inPendingSyncState\",value:function(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}}],[{key:\"syncState\",value:function(e,t,n,i){var o=this,r=this.clone(e),s={},a={};return this.map(r,function(e,n){t[e]||(a[e]=n)}),this.map(t,function(e,t){var n=r[e];if(n){var i=t.metas.map(function(e){return e.phx_ref}),c=n.metas.map(function(e){return e.phx_ref}),u=t.metas.filter(function(e){return c.indexOf(e.phx_ref)<0}),h=n.metas.filter(function(e){return i.indexOf(e.phx_ref)<0});u.length>0&&(s[e]=t,s[e].metas=u),h.length>0&&(a[e]=o.clone(n),a[e].metas=h)}else s[e]=t}),this.syncDiff(r,{joins:s,leaves:a},n,i)}},{key:\"syncDiff\",value:function(e,t,n,o){var r=t.joins,s=t.leaves,a=this.clone(e);return n||(n=function(){}),o||(o=function(){}),this.map(r,function(e,t){var o=a[e];if(a[e]=t,o){var r,s=a[e].metas.map(function(e){return e.phx_ref}),c=o.metas.filter(function(e){return s.indexOf(e.phx_ref)<0});(r=a[e].metas).unshift.apply(r,i(c))}n(e,o,t)}),this.map(s,function(e,t){var n=a[e];if(n){var i=t.metas.map(function(e){return e.phx_ref});n.metas=n.metas.filter(function(e){return i.indexOf(e.phx_ref)<0}),o(e,n,t),0===n.metas.length&&delete a[e]}}),a}},{key:\"list\",value:function(e,t){return t||(t=function(e,t){return t}),this.map(e,function(e,n){return t(e,n)})}},{key:\"map\",value:function(e,t){return Object.getOwnPropertyNames(e).map(function(n){return t(n,e[n])})}},{key:\"clone\",value:function(e){return JSON.parse(JSON.stringify(e))}}]),e}(),S=function(){function e(t,n){s(this,e),this.callback=t,this.timerCalc=n,this.timer=null,this.tries=0}return c(e,[{key:\"reset\",value:function(){this.tries=0,clearTimeout(this.timer)}},{key:\"scheduleTimeout\",value:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout(function(){e.tries=e.tries+1,e.callback()},this.timerCalc(this.tries+1))}}]),e}()}])});\n\n//# sourceURL=webpack:///./node_modules/phoenix/priv/static/phoenix.js?");

/***/ }),

/***/ "./node_modules/phoenix_html/priv/static/phoenix_html.js":
/*!***************************************************************!*\
  !*** ./node_modules/phoenix_html/priv/static/phoenix_html.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function() {\n  var PolyfillEvent = eventConstructor();\n\n  function eventConstructor() {\n    if (typeof window.CustomEvent === \"function\") return window.CustomEvent;\n    // IE<=9 Support\n    function CustomEvent(event, params) {\n      params = params || {bubbles: false, cancelable: false, detail: undefined};\n      var evt = document.createEvent('CustomEvent');\n      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);\n      return evt;\n    }\n    CustomEvent.prototype = window.Event.prototype;\n    return CustomEvent;\n  }\n\n  function buildHiddenInput(name, value) {\n    var input = document.createElement(\"input\");\n    input.type = \"hidden\";\n    input.name = name;\n    input.value = value;\n    return input;\n  }\n\n  function handleClick(element) {\n    var to = element.getAttribute(\"data-to\"),\n        method = buildHiddenInput(\"_method\", element.getAttribute(\"data-method\")),\n        csrf = buildHiddenInput(\"_csrf_token\", element.getAttribute(\"data-csrf\")),\n        form = document.createElement(\"form\"),\n        target = element.getAttribute(\"target\");\n\n    form.method = (element.getAttribute(\"data-method\") === \"get\") ? \"get\" : \"post\";\n    form.action = to;\n    form.style.display = \"hidden\";\n\n    if (target) form.target = target;\n\n    form.appendChild(csrf);\n    form.appendChild(method);\n    document.body.appendChild(form);\n    form.submit();\n  }\n\n  window.addEventListener(\"click\", function(e) {\n    var element = e.target;\n\n    while (element && element.getAttribute) {\n      var phoenixLinkEvent = new PolyfillEvent('phoenix.link.click', {\n        \"bubbles\": true, \"cancelable\": true\n      });\n\n      if (!element.dispatchEvent(phoenixLinkEvent)) {\n        e.preventDefault();\n        e.stopImmediatePropagation();\n        return false;\n      }\n\n      if (element.getAttribute(\"data-method\")) {\n        handleClick(element);\n        e.preventDefault();\n        return false;\n      } else {\n        element = element.parentNode;\n      }\n    }\n  }, false);\n\n  window.addEventListener('phoenix.link.click', function (e) {\n    var message = e.target.getAttribute(\"data-confirm\");\n    if(message && !window.confirm(message)) {\n      e.preventDefault();\n    }\n  }, false);\n})();\n\n\n//# sourceURL=webpack:///./node_modules/phoenix_html/priv/static/phoenix_html.js?");

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./js/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./js/app.js */\"./js/app.js\");\n\n\n//# sourceURL=webpack:///multi_./js/app.js?");

/***/ })

/******/ });