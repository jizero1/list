import React, {Component, useEffect} from 'react';
import logo from './logo.svg'; 
import './App.css';
import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faCheck } from "@fortawesome/free-solid-svg-icons";

// const data = [
//   {
//     id: 0,
//     content: "고구마먹기",
//   },
//   {
//     id: 1,
//     content: "삼각김밥 사러가기",
//   }
// ]

function App() {

  const [post, setPost] = useState([]);
  const [input, setInput] = useState('');
  // const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="list-container">
        <div className="list-container2">
          <p className="line">|</p>
          <h1 className="list-h1">To do list</h1>
          <Insert post={post} setPost={setPost} input={input} setInput={setInput}></Insert>
          <hr className="list-hr"></hr>
          <InsertView post={post} setPost={setPost} input={input} setInput={setInput}></InsertView>
        </div>
      </div>
    </div>  
  );
}

// 할일 입력창 + 제출버튼
function Insert(props) {

  // 제출버튼 누르면, input란을 비움
  const onSubmit = useCallback((e) => {
    props.setInput('');
    e.preventDefault();

    // props.post.map(function(a,i) {
    //   props.setCount(i+1);
    // })
  });
  const onChange = useCallback((e) => {
    props.setInput(e.target.value);
  })
  const onClick = useCallback((e) => {
    if (props.input != '' && props.post.length<9) {
      const inputPost = [...props.post];
      inputPost.push(props.input)
      props.setPost(inputPost);
    }
    else if (props.input == '') {
      alert("할일을 입력해주세요!");
    }
    else {
      alert("할일이 꽉 찼어요!");
    }

    // let 입력 = props.input;
    // let 배열 = props.post;
    // if (배열.includes(입력)==true) {
    //   alert("이미 할일에 추가되어있어요!");
    // }
  })
  return (
    <div className="list-ib">
      <form onSubmit={onSubmit}> 
        <input value={props.input} className="list-input" onChange={onChange} placeholder="오늘 할 일을 입력해주세요!"></input>
        <button className="list-button" onClick={onClick}>💙</button>
      </form>
    </div>
  )
}

// 입력한 내용보여주는곳
function InsertView(props) {

  const [바꿈,set바꿈] = useState('');

  return (
    <div className="list-post">
    {
    props.post.map(function(a,i) {

      const onClick = () => {
        set바꿈('postAdd');
      }
      const onRemove = () => {
        const clickData = props.post[i]; //현재 클릭한값 저장. 
        const postData = props.post; //post 배열 전체값.
        // filter을 이용하여, 현재 선택한값이 post배열안에 있으면, 걔만빼고 배열재구성
        props.setPost(postData.filter((e) => e !== clickData));
      }

      return (
      <div clasName="post" key={i}>
          <input className={'post-chk '+바꿈} type="checkbox" id={'chk'+i} onClick={onClick}></input>
          <label for={'chk'+i}>
          <div className="font"><FontAwesomeIcon icon={faCheck} ></FontAwesomeIcon></div>
          </label>
          <label for={'chk'+i} className="post-p">{props.post[i]}</label>
          <button className="post-remove"onClick={onRemove}><FontAwesomeIcon icon={faX}></FontAwesomeIcon></button>
          {/* <input type="text"></input> */}
      </div>
      )
    })
    }
  </div>
  )
}

export default App;

