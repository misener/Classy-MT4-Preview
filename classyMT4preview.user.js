// ==UserScript==
// @name       Classy MT4 Preview
// @author       Dan Misener
// @namespace  http://misener.org
// @version    0.1
// @description  Makes MT4 preview actually work in Chrome.
// @include     https://mt.nm.cbc.ca/mt.cgi
// @match      https://mt.nm.cbc.ca/mt.cgi
// ==/UserScript==
 
var previewTitle = "Preview | Movable Type Enterprise";
var title = document.getElementsByTagName("title")[0].innerHTML;
 
if (title == previewTitle) {
    location.href = document.getElementById('frame').getAttribute('src');
};