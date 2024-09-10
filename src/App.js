import React, {Component, useEffect} from 'react';
import logo from './logo.svg'; 
import './App.css';
import { useState } from 'react';

function App() {
  
  // const today = new Date();
  // const date = today.toLocaleDateString();
  const [input, setInput] = useState('');
  const [post, setPost] = useState([]);
  let [btn, setBtn] = useState(false);
  const [clickEvent,setClickEvent] = useState('');


  return (
    <div className="container">
      <div className="list-container">
        <div className="list-container2">
          <p className="line">|</p>
          <h1 className="list-h1">To do list</h1>
          {/* <p className="date">{date}</p> */}
          {/* <hr></hr> */}
          <div className="list-ib">
            <input className="list-input" onChange = {(e) => {
              const inputValue = e.target.value;
              setInput(inputValue);
            }}></input>
    
            <button className="list-button" onClick = {() => {
              const inputPost = [...post];
              inputPost.unshift(input);
              setPost(inputPost);
            }}>💙</button>
          </div>
          <hr className="list-hr"></hr>
          <div className="list-post">
            {
            post.map(function(a,i) {
              return (
              <div clasName="post" key={i}>
                <div className="post-p">{post[i]}</div>
                <div className="post-btn" onClick={(e)=>{
                  let 누른버튼 = e.target;
                  console.log(누른버튼);
                }}></div>
              </div>
            )
            })
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;

