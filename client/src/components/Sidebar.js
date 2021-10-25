import {
  SidebarContainer,
  ModalSideBarBackdrop,
  MenuContainer,
  UserProfileContainer,
  UserInfoUpContainer,
  UserPhoto,
  UserName,
  UserInfoDownBtnContainer,
  UserPost,
  UserPostText,
  LogIn,
  Logout,
  LogoutText,
  PostListContainer,
  Listdiv,
  BoardtitleBox,
  Stylelink,
  BoardTitle
} from './Sidebar.style';

const Sidebar = ({ isLogin, isOpen, sideBarOpenHandler, categories }) => {
  return (
    <SidebarContainer>
      {isOpen ? (
        <ModalSideBarBackdrop onClick={sideBarOpenHandler}>
          <MenuContainer onClick={(e) => e.stopPropagation()}>
            <UserProfileContainer>
              <UserInfoUpContainer>
                <UserPhoto className="fas fa-user"></UserPhoto>
                <UserName>HyeonSi</UserName>
              </UserInfoUpContainer>
              <UserInfoDownBtnContainer>
                {isLogin ? (
                  <UserPost className="fas fa-user-edit">
                    <Stylelink
                      to={`/mypost`}>
                    <UserPostText>작성글</UserPostText>
                    </Stylelink>
                  </UserPost>
                ) : (
                  <div style={{ display: 'none' }} />
                )}
                {/* 당신... 작성한 글 페이지 만들어야돼.. */}
                {isLogin ? (
                  <Logout className="fas fa-sign-out-alt">
                    <LogoutText>로그아웃</LogoutText>
                  </Logout>
                ) : (
                  <LogIn className="fas fa-sign-in-alt">
                    <LogoutText>로그인</LogoutText>
                  </LogIn>
                )}
                {/* 여기 로그인 로그아웃 버튼으로 연결하기 */}
              </UserInfoDownBtnContainer>
            </UserProfileContainer>

            <PostListContainer>
              {categories.map((category) => (
                <Listdiv key={category.id}>
                  <BoardtitleBox>
                    <Stylelink
                      to={`/postList=${category.id}`}
                      onClick={sideBarOpenHandler}
                    >
                      <BoardTitle>{category.content}</BoardTitle>
                    </Stylelink>
                  </BoardtitleBox>
                </Listdiv>
              ))}
            </PostListContainer>
          </MenuContainer>
        </ModalSideBarBackdrop>
      ) : null}
    </SidebarContainer>
  );
};

export default Sidebar;
