import React, { useState, useEffect } from 'react';

const defaultUrlPatterns: Array<string> = [
  "chrome://newtab/", 
  "https://www.google.com/search"
];

const Settings: React.FC = () => {
  const [urlPatterns, setUrlPatterns] = useState<Array<string>>(defaultUrlPatterns);
  const [url, setUrl] = useState<string>('');

  const addUrlPatterns = () => {
    setUrlPatterns([...urlPatterns, url]);
  };

  useEffect(() => {
    // TODO: load URLs from storage
    // TODO: set URLs
    // TODO: save URLs to storage
  });

  return (
    <div>
    { urlPatterns.map((pt: string) => (
      <p>{pt}</p>
    )) }
    <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
    <button onClick={addUrlPatterns}>save</button>
    </div>
  );
};

export default Settings;
