import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { auth } from './firebase';
import {useAuthState} from "react-firebase-hooks/auth"
import Login from './components/Login/Login';
import Spinner from "react-spinkit"
function App() {
  const [user,loading]= useAuthState(auth);
  if(loading){
    return(
      <AppLoadingContainer>
        <AppLoadingContent>
        <img src="https://eu.wargaming.net/clans/media/clans/emblems/cl_868/500146868/emblem_195x195.png" alt="" />

        <Spinner 
        name="ball-spin-fade-loader"
        color="purple"
        fadeIn="none"
        />
        </AppLoadingContent>
        
      </AppLoadingContainer>
    )
  }
  return (
    <div className="App">
     <Router>
       {!user ? (
         <Login />
       ) : (<>
        <Header />
        <AppBody>
          <Sidebar />
          <Switch>
            
            <Route path="/" exact>
              <Chat />
            </Route>
          </Switch>
          </AppBody>
        </>) }
      
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;


const AppLoadingContainer = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  width: 100%;
`;

const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

   >img{
     height:150px;
     padding: 20px;
     margin-bottom: 40px;
   }

`;
