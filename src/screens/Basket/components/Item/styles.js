import styled from 'styled-components/native';

export const ItemCard = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #ECECEC;
  padding: 16px 0;
  margin: 0 16px;
`;

export const ItemThumb = styled.Image`
  width: 46px;
  height: 46px;
`;

export const ItemName = styled.Text`
  font-size: 16px;
  line-height: 26px;
  margin-left: 11px;
  color: #464646;
`;
