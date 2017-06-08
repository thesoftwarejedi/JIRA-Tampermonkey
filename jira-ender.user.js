// ==UserScript==
// @name         JIRA Ender Extensions
// @namespace    http://enderlabs.com/
// @version      0.2
// @description  Do things I want JIRA to do
// @author       @thesoftwarejedi
// @match        http*://*.atlassian.net/secure/RapidBoard.jspa*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/thesoftwarejedi/JIRA-Tampermonkey/master/jira-ender.user.js
// @updateURL    https://raw.githubusercontent.com/thesoftwarejedi/JIRA-Tampermonkey/master/jira-ender.user.js
// ==/UserScript==

(function() {
    'use strict';
    $('#ghx-plan').click(function() {
        updateTarget();
    });
    $('#ghx-work').click(function() {
        updateTarget();
    });
})();

async function updateTarget() {
    await sleep(2000);
    $('#issuekey-val > a').attr('target', '_blank');
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
