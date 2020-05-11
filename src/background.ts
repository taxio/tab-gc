chrome.browserAction.onClicked.addListener((_) => {
  chrome.tabs.query({}, function(tabs: Array<chrome.tabs.Tab>){
    let tabIds: Array<number> = [];
    tabs.forEach((t: chrome.tabs.Tab) => {
      console.log(t);
      if (isUrlToClose(t.url)) {
        if (t.id != null) {
          tabIds.push(t.id);
        }
      }
    });
    chrome.tabs.remove(tabIds);
  });
});

export const isUrlToClose = (url: string | undefined): boolean => {
  if (url == null) {
    return false;
  }
  if (url == "chrome://newtab/") {
    return true;
  }
  if (url.indexOf("https://www.google.com/search") === 0) {
    return true;
  }
  return false;
};
