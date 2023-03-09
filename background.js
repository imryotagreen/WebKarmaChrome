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