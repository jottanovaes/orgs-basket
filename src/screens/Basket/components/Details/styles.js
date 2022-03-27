import styled from 'styled-components/native';

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

export const BuyButton = styled.TouchableOpacity`
  margin-top: 16px;
  background-color: #2A9F85;
  padding: 16px 0;
  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 16px;
  line-height: 26px;
  font-family: "MontserratBold"
`;
