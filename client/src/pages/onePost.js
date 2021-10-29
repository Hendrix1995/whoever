import { useState, useEffect } from 'react';
import { Stylelink } from '../pages/main.style';
import axios from 'axios';
import {
  Maindiv,
  PostTitleBox,
  PostTitle,
  PostInfo,
  Post_Content,
  But_Container,
  But_Suggestion_Up,
  But_Suggestion_Down,
  Title_Post,
  CreatedAt_Post,
  Hit_Post,
  Comment_input_Container,
  Comment_Input_Password,
  Comment_Input_But_Container,
  Comment_Input_RegisterBut,
  Comment_Input_RegisterAndSuggestionBut,
  Comment_Input_Content,
  CommentBox,
  Comment_createdBy,
  Comment_content,
  Comment_MakeInfo,
  Comment_createAt
} from './onePost.style';
import View from '../components/View';
import Comment from '../components/Comment';

const OnePost = ({ match }) => {
  const postId = Number(match.params.no);
  const [onePost, setOnePost] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:4000/onepost', { id: postId }).then((res) => {
      setOnePost(res.data);
    });
  }, []);

  const getCategoryTitle = (no) => {
    if (no === 1) return '여행';
    if (no === 2) return '술';
    if (no === 3) return '맛집';
    if (no === 4) return '낚시';
    if (no === 5) return '노래';
    if (no === 6) return '코딩';
  };

  return (
    <Maindiv>
      <PostTitleBox>
        <Stylelink to={`/postList=${onePost.categoryId}`}>
          <PostTitle>{getCategoryTitle(onePost.categoryId)}</PostTitle>
        </Stylelink>
      </PostTitleBox>
      <Title_Post>{onePost.title}</Title_Post>
      <PostInfo>
        <CreatedAt_Post>
          {new Date(onePost.createdAt).toLocaleDateString('ko-kr')}
        </CreatedAt_Post>
        <Hit_Post>조회수:{onePost.views}</Hit_Post>
      </PostInfo>
      <Post_Content>
        {onePost.length === 0 ? '' : <View editorHTML={onePost.content} />}
        {/* <View editorHTML={oneContent} /> */}
      </Post_Content>
      <But_Container>
        <But_Suggestion_Up
          onClick={() => {
            axios
              .put('http://localhost:4000/suggestionsup', {
                id: onePost.id,
                suggestions: onePost.suggestions
              })
              .then((res) => {
                setOnePost(res.data);
              });
          }}
        >
          <i className="fas fa-thumbs-up" /> : {onePost.suggestions}
        </But_Suggestion_Up>
        <But_Suggestion_Down
          onClick={() => {
            axios
              .put('http://localhost:4000/suggestionsdown', {
                id: onePost.id,
                suggestions: onePost.suggestions
              })
              .then((res) => {
                setOnePost(res.data);
              });
          }}
        >
          <i className="fas fa-thumbs-down" />
        </But_Suggestion_Down>
      </But_Container>
      <Comment postId={postId} />
      {/* 여기 게시글의 댓글정보 */}
      {/* TODO: 글 목록이 게시글 안에서도 보이면 다른 게시물로 옮겨 다니기 편하겠다! */}
    </Maindiv>
  );
};

export default OnePost;
