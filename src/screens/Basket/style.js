import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const width = Dimensions.get('screen').width;

export const Thumb = styled.Image`
  width: 100%;
  height: ${ (578 / 768 * width) }px;
`;

export const Title = styled.Text`
  position: absolute;
  text-align: center;
  width: 100%;
  color: white;
  font-size: 16px;
  line-height: 26px;
  font-weight: bold;
  padding: 32px;
`;

export const Name = styled.Text`
  color: #464646;
  font-size: 26px;
  line-height: 42px;
  font-family: "MontserratBold"
`;

export const Logo = styled.Image`
  width: 32px;
  height: 32px;
`;

export const Farm = styled.View`
  flex-direction: row;
  padding: 12px 0;
`;

export const FarmName = styled.Text`
  font-size: 16px;
  line-height: 26px;
  padding-left: 12px;
  font-family: "MontserratRegular"
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 26px;
  color: #A3A3A3;
`;

export const Price = styled.Text`
  font-size: 26px;
  line-height: 42px;
  color: #2A9F85;
  font-weight: bold;
  margin-top: 8px;
`;

export const BasketDetails = styled.View`
  padding: 8px 16px;
`;