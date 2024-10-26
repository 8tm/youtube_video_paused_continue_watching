// ==UserScript==
// @name         Ignore "Video Paused, continue watching?" using XPath
// @version      1.0
// @description  This script will click on "YES" button
// @author       8TM (https://github.com/8tm/youtube_video_paused_continue_watching)
// @match        https://youtube.com/*
// @match        https://www.youtube.com/*
// @match        http://youtube.com/*
// @match        http://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    setInterval(() => {
        // Find "YES" button using XPath
        let xpath = "//div[@id='main']//div[contains(@class, 'buttons')]//yt-button-renderer[@id='confirm-button']//button";
        let result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        let confirmButton = result.singleNodeValue;

        if (confirmButton && confirmButton.offsetParent !== null && !confirmButton.disabled) {
            confirmButton.click();

            // Debug:
            // let currentDateTime = new Date();
            // let formattedDateTime = currentDateTime.toLocaleString();
            // console.log(`Kliknięto 'TAK' dnia ${formattedDateTime}.`);
            // alert(`Kliknięto 'TAK' dnia ${formattedDateTime}.`);
        }
    },500);
})();