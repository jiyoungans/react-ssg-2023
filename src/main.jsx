import './styles/globals.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

const Button = (props) => {
  return (
    <button type="button" className="Button">
      { props.children }
    </button>
  );
};

createRoot(document.getElementById('root')).render(
  <div className="App">
    <h1 className="Greeting">
      <span className="message">헬로!</span>{' '}
      <span className="libraryName">리액트</span>
    </h1>
    <Button>시작하기</Button>
    <Button>패키지 설치</Button>
  </div>
);
