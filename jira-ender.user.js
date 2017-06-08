// ==UserScript==
// @name         JIRA Ender Extensions
// @namespace    http://enderlabs.com/
// @version      0.1
// @description  Do things I want JIRA to do
// @author       @thesoftwarejedi
// @match        http*://*.atlassian.net/secure/RapidBoard.jspa*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('#ghx-plan').click(function() {
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
