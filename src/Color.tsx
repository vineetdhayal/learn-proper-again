import { useState, useEffect } from "react";
import './color.css';
import textSearch from "./ColorFunction";

export default function Color() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const data = await (
      await fetch(`https://dummyjson.com/products/search?q=${search}`)
    ).json();
    console.log(data);
    setData(data.products);
  };

  useEffect(() => {
    if (search.length) {
      fetchData();
    }
  }, [search]);

  return (<div>
    <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
    {data.map((k: any, index) => <div key={index}>{textSearch(k.title, search)}</div>)}
  </div>)
}
