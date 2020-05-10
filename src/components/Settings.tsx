import React, { useState, useEffect, MouseEvent } from 'react';

const KeyUrlPatterns: string = "url_patterns";

const defaultUrlPatterns: Array<string> = [
  "chrome://newtab/", 
  "https://www.google.com/search"
];

const Settings: React.FC = () => {
  const [urlPatterns, setUrlPatterns] = useState<Array<string>>([]);
  const [url, setUrl] = useState<string>('');

  const addUrlPatterns = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUrlPatterns([...urlPatterns, url]);
    setUrl('');
  };

  const deleteUrlPattern = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const pattern: string = e.currentTarget.value;
    setUrlPatterns(urlPatterns.filter(pt => pt != pattern));
  };

  useEffect(() => {
    chrome.storage.sync.get("url_patterns", (items) => {
      if (items.hasOwnProperty("url_patterns")) {
        setUrlPatterns(items["url_patterns"]);
      } else {
        setUrlPatterns(defaultUrlPatterns);
      }
    });
  }, []);

  useEffect(() => {
    chrome.storage.sync.set({"url_patterns": urlPatterns});
  }, [urlPatterns]);

  return (
    <div>
    { urlPatterns.map((pt: string, index: number) => (
      <div key={index}>
        <button value={pt} onClick={deleteUrlPattern}>delete</button>
        <p>{pt}</p>
      </div>
    )) }
    <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
    <button onClick={addUrlPatterns}>save</button>
    </div>
  );
};

export default Settings;
