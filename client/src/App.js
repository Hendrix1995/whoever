import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './pages/main';
import NewPost from './pages/newPost';
import OnePost from './pages/onePost';
import PostList from './pages/postList';
import Footer from './components/Footer';
// import { initialState } from './static/dummyData';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header isLogin={isLogin} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/postList/:no/newPost" component={NewPost} />
          <Route path="/onePost/:no" component={OnePost} />
          <Route path="/postList/:no" component={PostList} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
