// ==UserScript==
// @name         reddit-block
// @namespace    https://github.com/ThePhantomGamer/reddit-block
// @version      0.1
// @description  redirect all reddit.com traffic -> /r/getoffreddit
// @author       ThePhantomGamer
// @match        http://*.reddit.com/*
// @match        https://*.reddit.com/*
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
  'use strict';
  window.location.replace('reddit.com/r/getoffreddit');
  
})();


