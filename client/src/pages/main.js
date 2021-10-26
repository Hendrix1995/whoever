import { useState, useEffect } from 'react';
import { initialState } from '../static/dummyData';
import axios from 'axios';
import PostList from './postList';
import {
  Listdiv,
  Maindiv,
  BoardtitleBox,
  BoardContentBox,
  BoardTitle,
  ListBox,
  Listtitle,
  CreatedDate,
  Stylelink
} from '../pages/main.style';

const Main = () => {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4000/main', { withCredentials: true })
      .then((res) => {
        setCategories(res.data.categoryList);
        setPosts(res.data.result);
      });
  }, []);
  return (
    <Maindiv>
      {categories.map((category) => (
        <Listdiv key={category.id}>
          <BoardtitleBox>
            <Stylelink to={`/postList=${category.id}`}>
              {/* 서버쪽으로 categoryId를보내주고, 
               서버에서는 받은 categoryId에 연관된 post를 가져온다? */}
              <BoardTitle>{category.content}</BoardTitle>
            </Stylelink>
          </BoardtitleBox>

          <BoardContentBox>
            {posts
              .filter((el) => el.categoryId === category.id)
              .slice(-10)
              .reverse() //여행인 게시물 10개씩, 최신순
              .map((el) => (
                <ListBox key={el.id}>
                  <Stylelink to={`/onePost=${el.id}`}>
                    <Listtitle>{el.title}</Listtitle>
                  </Stylelink>
                  <CreatedDate>
                    {new Date(el.createdAt).toLocaleDateString('ko-kr')}
                  </CreatedDate>
                </ListBox>
              ))}
          </BoardContentBox>
        </Listdiv>
      ))}
    </Maindiv>
  );
};

export default Main;
