import styled from 'styled-components';

export const Listdiv = styled.div`
  border-bottom: solid 1px gray;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  cursor: pointer;

  @media only screen and (max-width: 950px) {
    justify-content: space-between;
  }
  &:hover {
    background-color: #ffad4f;
  }
`;

export const Title = styled.span`
  cursor: pointer;
`;

export const ListTitleContainer = styled.span`
  width: 50%;
`;

export const ListCreatedAtContainer = styled.span`
  width: 30%;
  @media only screen and (max-width: 950px) {
    text-align: right;
  }
`;

export const ListDataCreatedAt = styled.span`
  @media only screen and (max-width: 950px) {
    text-align: right;
  }
`;

export const ListViewsContainer = styled.span`
  width: 10%;
  text-align: left;
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

export const ListDataViews = styled.span`
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

export const ListSuggContainer = styled.span`
  width: 10%;
  text-align: right;
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;

export const ListDataSugg = styled.span`
  @media only screen and (max-width: 950px) {
    display: none;
  }
`;
