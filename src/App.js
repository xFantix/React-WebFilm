import styled from 'styled-components'

import Nav from './components/nav/Nav'


const StyleApp = styled.div`
  min-height:100vh;
  display:flex;
  flex-direction:column;
  width:100%;
`

const App =()=> {
  return (
    <StyleApp className="App">
      <Nav/>
    </StyleApp>
  );
}

export default App;
