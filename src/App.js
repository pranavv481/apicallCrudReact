import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPost from './Components/AddPost';
import Post from './Components/Post';
import UpdatePost from './Components/UpdatePost';
import Posts from './Components/Posts';
import Navbar from './Components/Navbar';
import store from './Store';
function App() {
  return (
    <Provider store={store}>
    <Router>
     
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/addPost" exact component={AddPost} />
          <Route path="/post/:id" exact component={Post} />
          <Route path="/updatepost/:id" exact component={UpdatePost} />
        </Switch>
      </div>
    
    </Router>
    </Provider>
  );
}


export default App;
