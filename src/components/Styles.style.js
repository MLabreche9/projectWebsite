import styled, { keyframes } from 'styled-components';
import {
	slideInRight,
	fadeIn,
	fadeInDownBig,
	lightSpeedOut
} from 'react-animations';

export const Slide = styled.div`
	animation: ${(props) => props.seconds} ${keyframes`${slideInRight}`};
`;

export const FadeIn = styled.div`
	animation: 3s ${keyframes`${fadeIn}`};
`;

export const Drop = styled.span`
	animation: ${(props) => props.seconds} ${keyframes`${fadeInDownBig}`};
`;

export const Out = styled.div`
	animation: 3s ${keyframes`${lightSpeedOut}`};
`;
