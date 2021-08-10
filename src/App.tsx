import React from 'react';

import './App.scss';
import logo from './marvel_logo.png';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { ComicList } from './features/comic-list/ComicList';
import { User } from './features/user/User';
import { CharacterSearch } from './features/character-search/CharacterSearch';

function App() {

  const Header = () => {
    return(
      <Navbar expand="lg" fixed="top" className="header">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo}></img>
          </Navbar.Brand>
          <User />
          <Nav>
            <CharacterSearch />
          </Nav>
        </Container>
      </Navbar>
    )
  }


  return (
    <div className="App">
      <Header />
      <ComicList />
    </div>
  );
}

export default App;
