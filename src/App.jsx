import React from 'react';
import MovieList from './components/MovieList/MovieList';
import Header from './common/Header/Header';
import Login from './components/Login/Login';
import ImportFile from './common/ImportFile/ImportFile';

function App() {
  return (
    <div>
      <Header />
      <Login />
      <MovieList />
      <ImportFile />
    </div>
  );
}

export default App;
