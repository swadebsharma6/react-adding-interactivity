import { useState } from "react";
import { sculptureList } from "/public/data.js";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  //   let index = 0;

  function handleMoreClick() {
      setShowMore(!showMore);
    }

  function handleClick() {
    setIndex(index + 1)
    console.log("next",index);
  }

  const handlePrev =()=>{
      setIndex(index -1);
      console.log("Prev",index)
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleClick}>Next</button>
      <button onClick={handlePrev}>Previous</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      <img src={sculpture.url} alt={sculpture.alt} />
      {showMore && <p>{sculpture.description}</p>}
      
    </>
  );
}
