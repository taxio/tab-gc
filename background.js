chrome.browserAction.onClicked.addListener((_) => {
  chrome.tabs.query({}, function(tabs){
    let tabIds = [];
    tabs.forEach((t) => {
      if (isUrlToClose(t.url)) {
        tabIds.push(t.id);
      }
    });
    chrome.tabs.remove(tabIds);
  });
});

const isUrlToClose = (url) => {
  if (url == "chrome://newtab/") {
    return true;
  }
  if (url.indexOf("https://www.google.com/search") === 0) {
    return true;
  }
  return false;
};
