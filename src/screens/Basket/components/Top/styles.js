import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

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