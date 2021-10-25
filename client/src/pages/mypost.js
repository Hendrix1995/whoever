import { useState } from 'react';
import { initialState } from '../static/dummyData';
import Lists from '../components/Lists';
import PostTitle from '../components/PostTitle';
import Pagination from '../components/Pagination';
import { Stylelink } from '../pages/main.style';
import {
    MypageContainer,
    ListmenuBox,
    ListTitle,
    ListCreatedAt,
    ListView,
    ListLike,
    ListdivBox,
    WritiBox,
    PagenumBox,
  } from "./mypost.style";

  const Mypost = ({match}) => {
    const categoryId = Number(match.params.no);
    const [myposts, setmyPosts] = useState(initialState.mypost); //dummyData = axios
    // categoryId에 맞는 post만 서버에서 받는다. useEffect,axios
    const categoryPost = myposts.reverse();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const categoryLength = categoryPost.length;
  
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;

    const getCategoryTitle = (no) => {
        if (no === 1) return '여행';
        if (no === 2) return '술';
        if (no === 3) return '맛집';
        if (no === 4) return '낚시';
        if (no === 5) return '노래';
        if (no === 6) return '코딩';
      };
  
    const currentPosts = (tmp) => {
      let currentPost = 0;
      currentPost = tmp.slice(indexOfFirst, indexOfLast);
      return currentPost;
    };

    return(
        <MypageContainer>
                <div>내가 작성한 글</div>
        {/* // categorLength={categorLength} */}
            <ListmenuBox>
            <ListTitle>제목</ListTitle>
            <ListCreatedAt>작성시간</ListCreatedAt>
            <ListView>조회수</ListView>
            <ListLike>좋아요</ListLike>
            </ListmenuBox>
            <ListdivBox>
            {currentPosts(categoryPost).map((post) => (
                <Lists
                key={post.id}
                post={post}
                categoryTitle={getCategoryTitle(categoryId)}
                />  
            ))}
            </ListdivBox>
            <WritiBox>
                <Stylelink to={`/postList/${categoryId}/newPost`}></Stylelink>
            </WritiBox>
            <PagenumBox>
            <Pagination
             postsPerPage={postsPerPage}
            totalPosts={categoryLength}
            paginate={setCurrentPage}
            />
            </PagenumBox>
           
        </MypageContainer>
      )
  }

  export default Mypost;
