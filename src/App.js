import styled from 'styled-components';
import Main from './components/main/Main';
import Nav from '../src/components/nav/Nav';
import SearchFilm from './components/searchFilm/SearchFilm'
import {BrowserRouter as Router } from 'react-router-dom';
const StyleApp = styled.div`
  min-height:100vh;
  display:flex;
  flex-direction:column;
  width:100%;
  position:relative;
  overflow:hidden;
`
const App =()=> {
  return (
    <StyleApp className="App">
      <Router>
          <Nav/>
          <Main/>
          <SearchFilm/>
      </Router>
    </StyleApp>
  );
}

export default App;
