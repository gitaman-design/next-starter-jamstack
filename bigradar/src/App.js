import './App.css';
import Sidebar from './Sidebar';
import MiniBar from './MiniBar';
import ConversationBox from './ConversationBox';
import MessageBox from './MessageBox';
import UserDetails from './UserDetails';
import Welcome from './Welcome';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
       <div className="app__body">
          <MiniBar />
        <Switch>
          <Route path="/messages">
            <Sidebar />
            <ConversationBox />
            <MessageBox />
            <UserDetails />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
       </div>
       </Router>
    </div>
  );
}

export default App;
