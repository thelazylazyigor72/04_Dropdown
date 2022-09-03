import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

//notice how we getting spreaded before props
const Question = ({title,info}) => {
  //set state value w/ fasle as initial
  const [showInfo,setShowInfo] = useState(false)

  //so when its false - we not showing info and btn is plus - {showInfo && <p>{info}</p>}
  //when we click the button we reversing state
  //so we can get an info and minus as icon
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => {setShowInfo(!showInfo)}}>
          {showInfo? <AiOutlineMinus/>:<AiOutlinePlus/>}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
};

export default Question;
