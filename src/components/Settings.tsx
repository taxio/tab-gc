import React, { useState, useEffect } from 'react';

const KeyUrlPatterns: string = "url_patterns";

const defaultUrlPatterns: Array<string> = [
  "chrome://newtab/", 
  "https://www.google.com/search"
];

const Settings: React.FC = () => {
  const [urlPatterns, setUrlPatterns] = useState<Array<string>>([]);
  const [url, setUrl] = useState<string>('');

  const addUrlPatterns = () => {
    setUrlPatterns([...urlPatterns, url]);
    setUrl('');
  };

  useEffect(() => {
    chrome.storage.sync.get(KeyUrlPatterns, (items) => {
      console.log(items);
      if (items.hasOwnProperty(KeyUrlPatterns)) {
        setUrlPatterns(items[KeyUrlPatterns]);
      } else {
        setUrlPatterns(defaultUrlPatterns);
      }
    });
  }, []);

  useEffect(() => {
    console.log("useEffect: urlPatterns");
    chrome.storage.sync.set({KeyUrlPatterns: urlPatterns});
  }, [urlPatterns]);

  return (
    <div>
    { urlPatterns.map((pt: string, index: number) => (
      <p key={index}>{pt}</p>
    )) }
    <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
    <button onClick={addUrlPatterns}>save</button>
    </div>
  );
};

export default Settings;
