import './styles/globals.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

// React 컴포넌트란?
// 리액트 요소를 재사용하기 위한 방법 제공
// 함수(function) 또는 클래스(class)

const Button = (props) => {
  return (
    <button type="button" className="Button">
      { props.children } <span>😌</span>
    </button>
  );
};

createRoot(document.getElementById('root')).render(
  <div className="App">
    <h1 className="Greeting">
      <span className="message">헬로!</span>{' '}
      <span className="libraryName">리액트</span>
    </h1>
    <Button>시작하기(<span lang="en-US">getting started</span>)</Button>
    <Button>패키지 설치</Button>
  </div>
);
