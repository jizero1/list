import React, {Component, useEffect} from 'react';
import logo from './logo.svg'; 
import './App.css';
import { useState, useCallback } from 'react';
import styled from 'styled-components';

function App() {
  
  // const today = new Date();
  // const date = today.toLocaleDateString();
  const [post, setPost] = useState([]);
  const [pop, setPop] = useState('');



  return (
    <div className="container">
      <div className="list-container">
        <div className="list-container2">
          <p className="line">|</p>
          <h1 className="list-h1">To do list</h1>
          {/* <p className="date">{date}</p> */}
          {/* <hr></hr> */}
          {/* <div className="list-ib">
          <input className="list-input" onChange = {(e) => {
              const inputValue = e.target.value;
              setInput(inputValue);
            }} placeholder="오늘 할 일을 입력해주세요!"></input>
    
            <button className="list-button" onClick = {() => {
              const inputPost = [...post];
              inputPost.unshift(input);
              setPost(inputPost);
            }}>💙</button>
          </div> */}
          <Insert post={post} setPost={setPost}></Insert>
          
          <hr className="list-hr"></hr>
          {/* <div className="list-post">
            {
            post.map(function(a,i) {
              return (
              <div clasName="post" key={i}>
                <div className="post-p">{post[i]}</div>
                <label>
                  <input type="checkbox"></input>
                </label>
              </div>
            )
            })
            }
            
          </div> */}
          <InsertView post={post}></InsertView>
        </div>
      </div>
    </div>

    
  );
}

// 할일 입력창 + 제출버튼
function Insert(props) {
  const [input, setInput] = useState('');

  const onSubmit = useCallback((e) => {
    setInput('');
    e.preventDefault();
  });
  return (
    <div className="list-ib">
      <form onSubmit={onSubmit}> 
      <input value={input} className="list-input" onChange = {(e) => {
        setInput(e.target.value);
        }} placeholder="오늘 할 일을 입력해주세요!"></input>
    
      <button className="list-button" onClick = {() => {
        const inputPost = [...props.post];
        inputPost.unshift(input);
        props.setPost(inputPost);
      }}>💙</button>
      </form>
    </div>
  )
}

// 입력한 내용보여주는곳
function InsertView(props) {
  return (
    <div className="list-post">
    {
    props.post.map(function(a,i) {

      <div clasName="post" key={i}>
          <input className="post-chk" type="checkbox" id="chk"></input>
          <label for="chk"></label>
          <label for="chk" className="post-p">{props.post[i]}</label>

      </div>

    })
    }
  </div>
  )
}

export default App;

