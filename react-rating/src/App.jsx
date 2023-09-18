import { useState } from 'react'
import './App.css'
import ThankYouPage from './ThankYouPage'
import Ratings from './ratings.jsx'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
 const [rating , setRating] = useState(undefined);
 const [submit , updateSubmit] = useState(false);
 const modal=()=>{
 updateSubmit(!false)
 }

 const ratingHandler = (rate) =>{
   setRating(rate)
  }
  
  return (
    <>
      <div className='center'>
      <Ratings ratingHandler ={ratingHandler} modal={modal}></Ratings>
      <ThankYouPage rating ={rating} submit={submit} updateSubmit={updateSubmit}></ThankYouPage>
      </div>
      
    </>
  )
}

export default App
