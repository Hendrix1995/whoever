import {
  PostTitleBox,
  PTitle,
  SearchBox,
  SearchText,
  SearchIcon
} from './PostTitle.style';
const PostTitle = ({ categorTitle, categorLength }) => {
  return (
    <PostTitleBox>
      <PTitle>{categorTitle} 게시판</PTitle>
      <SearchBox>
        <SearchText type="text" />
        <SearchIcon className="fas fa-search" />
      </SearchBox>
    </PostTitleBox>
  );
};
export default PostTitle;
