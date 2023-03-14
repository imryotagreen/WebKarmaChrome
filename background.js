document.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById('login-btn');
    btn.addEventListener('click', function() {
        chrome.tabs.create({ url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }, function(tab) {
            chrome.tabs.executeScript(tab.id, { code: "alert(document.title);" });
        });
    });
});

chrome.runtime.onInstalled.addListener((() => {
    console.log('hello');
}))
chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab) {
        let currentUrl = new URL(tab.url);
        let domain = currentUrl.hostname;
        console.log(domain);
/*
        chrome.notifications.create({
            type: 'basic',
            title: 'Nouvelle URL détectée',
            message: `Domaine : ${domain}`,
            iconUrl: "assets/icons/logo48.png"
        });
*/
    });
});
console.log(document)