import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from"./routs/header";
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
   width: 100%;
  
`;


function App() {
  return (
    <div className="container">
       
      <Navigation />
      <AppContainer>
      
      <Outlet/>
      </AppContainer>
    </div>
  );
}

export default App;