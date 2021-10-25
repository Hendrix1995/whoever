import styled from 'styled-components';

export const MypageContainer = styled.div`  
display: flex;
flex-wrap: wrap;
margin-left: auto;
margin-right: auto;
margin-top: 40px;
width: 70vw;
height: 92%;
`;
export const ListmenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  border-bottom: solid 3px black;
  margin-bottom: 4px;
  font-size: 25px;
`;

export const ListTitle = styled.div`
  width: 50%;
  font-family: 'MaplestoryOTFBold';
`;

export const ListCreatedAt = styled.div`
  width: 30%;
  margin-left: 40px;
  font-family: 'MaplestoryOTFBold';

  @media only screen and (max-width: 950px) {
    text-align: right;
  }
`;

export const ListView = styled.div`
  width: 10%;
  font-family: 'MaplestoryOTFBold';

  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

export const ListLike = styled.div`
  width: 10%;
  font-family: 'MaplestoryOTFBold';

  text-align: right;
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

export const ListdivBox = styled.div`
  width: 100%;
`;

export const WritiBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 14px 0;
`;

export const PagenumBox = styled.div`
  border: solid 1px orange;
  width: 100%;
  /* margin-top: 30px; */
  text-align: center;
`;
