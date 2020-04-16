import React from 'react';

interface IProps {
  message: string;
  onClick(): void;
}

export const App: React.FunctionComponent<IProps> = ( { message, onClick } ) => (
    <article>
      <h1>Hello, World!</h1>
      <p>{message}</p>
      <button onClick={onClick}>Click Here!</button>
    </article>
);
