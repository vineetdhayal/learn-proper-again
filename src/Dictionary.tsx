const GRAPHIC_URL =
  'https://ik.imagekit.io/devtoolstech/devtools-tech-banner_QuoILF3fK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643016588956';
import { useState } from 'react';
import '/style.css'

export default function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState({});

  const fetchData = async () => {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
    );
    const words = await data.json();
    console.log(words);
    setData({
      pronounciation: words[0].phonetics[0].text,
      noun: words[0].meanings[0].definitions.map((x) => x.definition),
      verb: words[0].meanings[1] ? words[0].meanings[1].definitions.map((x) => x.definition) : [],
      audio: words[0].phonetics[0].audio,
    });
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };

  const handleClick = () => {
    console.log(data.audio);
    new Audio(data.audio).play();
  }

  return (
    <>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => handleKey(e)}
      ></input>
      {data && (
        <div>
          <div className="overlay">
            <div>{search}</div>
            <div onClick={handleClick}>pronounciation: {data.pronounciation}</div>
          </div>
          <div className="overlay">
          <div className="bold">noun</div>
            <ul>
              {data.noun && data.noun.length &&
                data.noun.map((p, index) => <li key={index}>{p}</li>)}
            </ul>
          </div>
          <div className={data.verb && data.verb.length ? 'overlay' : ''}>
            {data.verb && data.verb.length ? <div className="bold">verb</div> : null}
            <ul>
              {data.verb &&
                data.verb.map((p, index) => <li key={index}>{p}</li>)}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
