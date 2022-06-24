import './App.css';
import {useState} from 'react'

function App() {
  const [count, setCount]= useState(1)
  const [catCount, setCatCount ] = useState(1)
  const [dogCount, setDogCount ] = useState(1)
  const [catPercentageCount, setcatPercentageCount ] = useState()
  const [dogPercentageCount, setDogPercentageCount ] = useState()





  const handleCatCount= () =>{
    setCatCount(catCount + 1)
    setCount(count + 1)
    let cat = catCount / count
    setcatPercentageCount(cat)
    console.log(catCount)
    console.log(count)
    console.log(catPercentageCount)
  }
  const handleDogCount= () =>{
    setDogCount(dogCount + 1)
    setCount(count + 1)
    let dog = dogCount / count
    setDogPercentageCount(dog)
    console.log(dogCount)
    console.log(count)
    console.log(dogPercentageCount)
  }
  
  


  return (
    <div className="App">
      <div className='vote'>
        <div className='voting'>
          <div className='cats' onClick={handleCatCount}>
            <h3>CATS</h3>
            <h3>50%</h3>
          </div>
          <hr></hr>
          <div className='dogs'onClick={handleDogCount}>
            <h3>DOGS</h3>
            <h3>50%</h3>
          </div>
        </div>
      </div>
      {/* Total Clicks */}
      <div className='total-votes'>
        <h2>{count} votes</h2>
      </div>
    </div>
  );
}

export default App;
