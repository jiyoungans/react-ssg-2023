import './styles/globals.css';
import * as React from 'react';
import { createRoot } from 'react-dom/client';

// JSX (JavaScript eXtension for ECMAScript like XML Syntax)
// JSX Compiler (Babel, TypeScript)
createRoot(document.getElementById('root')).render(
  <div className="App">
    <h1 className="Greeting">
      <span className="message">헬로!</span>{' '}
      <span className="libraryName">리액트</span>
    </h1>
    <button type="button" className="Button">시작하기</button>
    <button type="button" className="Button">
      <abbr title="Application Programming Interface">API</abbr> 참고하기
    </button>
    <button type="button" className="Button">패키지 설치</button>
  </div>
);
