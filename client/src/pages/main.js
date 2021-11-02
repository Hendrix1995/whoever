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

const Main = ({ categories, posts }) => {
  return (
    <Maindiv>
      {categories.map((category) => (
        <Listdiv key={category.id}>
          <BoardtitleBox>
            <Stylelink to={`/postList=${category.id}`}>
              <BoardTitle>{category.content}</BoardTitle>
            </Stylelink>
          </BoardtitleBox>

          <BoardContentBox>
            {posts
              .filter((el) => el.categoryId === category.id)
              .slice(-10)
              .reverse() // 여행인 게시물 10개씩, 최신순
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
