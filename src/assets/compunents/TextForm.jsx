import { useState } from "react";
import React from 'react'

export default function TextForm() {
    const [Text, setText] = useState('');

        const handleUpClick = ()=>{
          console.log("Uppercase was clicked" + Text)
          let newText = Text.toUpperCase();
          setText(newText)
        }

        const handleLoClick = ()=>{
          let newText = Text.toLowerCase();
          setText(newText)
        }

        const handleonChange = (event)=>{
          setText(event.target.value)
        }

        // Function to capitalize the first letter of each word
        const capitalizeWords = (text) => {
          return text
            .split(' ') // Split text into words
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
            .join(' '); // Join words back into a single string
        };

        // Function to speak the text
        const speakText = () => {
          // Check if SpeechSynthesis is available
          if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(Text);
            window.speechSynthesis.speak(utterance);
          } else {
            alert("Your browser does not support SpeechSynthesis.");
          }
        }
        
        // Handle button click
        const handleCapitalizeClick = () => {
          setText(capitalizeWords(Text));
        };
  return (
                  <>
                  
                  <div className="container my-5">
                  <h1>Enter Your Text:</h1>

                  <div className="mb-3">
                
                <textarea className="form-control" id="box-container" value={Text} onChange={handleonChange} rows="8"></textarea>
                <button className="btn btn-primary my-4" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary my-4 mx-4" onClick={handleLoClick} >Convert to Lowercase</button>
                <button className="btn btn-primary my-4 mx-4" onClick={handleCapitalizeClick} >Convert to Capitilize</button>
                <button className="btn btn-primary my-4 mx-4" onClick={speakText} >Read Text Aloud</button>
                <button className="btn btn-primary my-4 mx-4" onClick={()=>setText('')} >Clear all text</button>

                  <div className="container">
                    <h1 className='mt-5'>Your text summary</h1>
                    <h4 className='mt-4'>
                      Character <span className='btn btn-primary py-2 px-4'>{Text.length}</span> Words <span className='btn btn-primary py-2 px-4'>{Text.split(' ').length == 1  ? Text.split(' ').length-1 : Text.split(' ').length-1 }</span> Line <span className='btn btn-primary py-2 px-4'>{Text == '' ? '0' : Text.split('\n').length}</span>
                    </h4>
                    <h1 className='mt-5'>Read Minutes</h1>
                    <p className='fs-2 btn btn-primary py-2 px-4'>{Text == '' ? '0' : 0.008 *Text.split(' ').length} minutes</p>
                    <h1 className='mt-4 fs-1'>Priview:</h1>
                    <p className='fs-4'>{Text}</p>
                  </div>
                </div>

                  </div>
                  </>
  )
}
