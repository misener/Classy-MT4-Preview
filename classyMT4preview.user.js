// ==UserScript==
// @name       Classy MT4 Preview
// @author       Dan Misener
// @namespace  http://misener.org
// @version    0.2
// @description  Force CBC MT4 preview to actually work in Chrome.
// @include     https://mt.nm.cbc.ca/mt.cgi
// @match      https://mt.nm.cbc.ca/mt.cgi
// @updateURL	https://github.com/misener/Classy-MT4-Preview/raw/master/classyMT4preview.user.js
// ==/UserScript==
 
var previewTitle = "Preview | Movable Type Enterprise";
var title = document.getElementsByTagName("title")[0].innerHTML;
 
if (title == previewTitle) {
    location.href = document.getElementById('frame').getAttribute('src');
};