chrome.browserAction.onClicked.addListener((_) => {
  chrome.tabs.query({}, function(tabs: Array<chrome.tabs.Tab>){
    let tabIds: Array<number> = [];
    tabs.forEach((t: chrome.tabs.Tab) => {
      if (isUrlToClose(t.url)) {
        if (t.id != null) {
          tabIds.push(t.id);
        }
      }
    });
    chrome.tabs.remove(tabIds);
  });
});

const targetHosts = ["www.google.com", "www.google.co.jp"];

export const isUrlToClose = (url: string | undefined): boolean => {
  if (url == null) {
    return false;
  }
  if (url == "chrome://newtab/") {
    return true;
  }
  const urlParser = new URL(url);

  return targetHosts.includes(urlParser.host) && urlParser.pathname === "/search";
};
