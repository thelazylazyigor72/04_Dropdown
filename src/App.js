import React, { useState } from 'react';
//import the data
import data from './data';
//importing component
import SingleQuestion from './Question';


function App() {
  //actually its uneccessary, but in case of future features why not to make it state value
  const [questions,setQuestions] = useState(data)

  //inside w/ map method we just populate components, setting key for them, and also passing all objects fields into it w/ spread operator
  return (
    <main>
      <div className='container'>
        <h3>questions and answers</h3>
        <section className='info'>
          {
            questions.map(question => {
              return <SingleQuestion key={question.id} {...question} />
            })
          }
        </section>
      </div>
    </main>
  )
}

export default App;
