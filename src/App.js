import styled from 'styled-components';
import Main from './components/main/Main';
import Nav from '../src/components/nav/Nav';
import {BrowserRouter as Router } from 'react-router-dom';
const StyleApp = styled.div`
  min-height:100vh;
  display:flex;
  flex-direction:column;
  width:100%;
`

const App =()=> {
  return (
    <StyleApp className="App">
      <Router>
          <Nav/>
          <Main/>
      </Router>
    </StyleApp>
  );
}

export default App;
