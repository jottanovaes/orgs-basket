import styled from 'styled-components/native';

export const ItemTitle = styled.Text`
  color: #464646;
  font-weight: bold;
  margin-top: 32px;
  margin-top: 8px;
  font-size: 20px;
  line-height: 32px;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #ECECEC;
  padding: 16px 0;
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
