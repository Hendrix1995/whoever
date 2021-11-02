import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Main from './pages/main';
import NewPost from './pages/newPost';
import OnePost from './pages/onePost';
import PostList from './pages/postList';
import Mypost from './pages/mypost';
import Searchpost from './pages/searchPost';
import SearchMypost from './pages/searchMyPost';
import Footer from './components/Footer';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);

  const issueTokens = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/tokenRequest`, {
        headers: { authorization: `Bearer ${localStorage.getItem('aToken')}` },
        withCredentials: true
      })
      .then((res) => {
        setUserInfo(res.data.data.userInfo);
        setIsLogin(true);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/main`, { withCredentials: true })
      .then((res) => {
        setCategories(res.data.categoryList);
        setPosts(res.data.result);
        issueTokens();
      });
  }, []);

  const loginHandler = () => {
    issueTokens();
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Header
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          loginHandler={loginHandler}
          categories={categories}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Main posts={posts} categories={categories} />}
          />
          <Route
            path="/postList=:no"
            render={(match) => (
              <PostList match={match.match} isLogin={isLogin} />
            )}
          />

          <Route
            path="/onePost=:no"
            render={(match) => (
              <OnePost match={match.match} userInfo={userInfo} />
            )}
          />

          <Route
            path="/searchpost=:no"
            render={(match) => <Searchpost match={match.match} />}
          />

          <Route
            path="/searchmypost=:no"
            render={(match) => (
              <SearchMypost userInfo={userInfo} match={match.match} />
            )}
          />
          {isLogin ? (
            <Route
              path="/mypost"
              render={(match) => <Mypost userInfo={userInfo} />}
            />
          ) : (
            <Redirect to={'/'} />
          )}
          {isLogin ? (
            <Route
              path="/newPost/postList=:no"
              render={(match) => (
                <NewPost match={match.match} userInfo={userInfo} />
              )}
            />
          ) : (
            <Redirect to={'/'} />
          )}
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
