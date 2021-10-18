import styled from 'styled-components';

export const Maindiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 70vw;
  height: 92%;
`;

export const Listdiv = styled.div`
  width: 45%;
  height: 40%;
  margin: 30px;
  min-width: 450px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px gray;
  padding: 20px;
`;
export const Boardtitle = styled.div`
  border-bottom: solid 5px #ffad4f;
  width: 100%;
  height: 15%;
  display: flex;
`;

export const Title = styled.div`
  display: flex;
  margin-left: 10px;
  font-size: 25px;
  align-items: center;
  margin-bottom: 10px;
`;

export const BoardContent = styled.div`
  width: 100%;
  height: 85%;
`;

export const List = styled.div`
  display: flex;
  margin-left: 10px;
  margin-top: 10px;
  font-size: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Listtitle = styled.div`
  /* display: flex;
  margin-left: 10px;
  margin-top: 10px;
  align-items: center; */
  font-size: 20px;
`;

export const CreatedDate = styled.div`
  /* display: flex;
  margin-left: 10px;
  margin-top: 10px;
  align-items: center; */
  font-size: 20px;
  margin-right: 10px;
`;
