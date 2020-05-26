import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from 'emotion-theming';

import ReactRough, { Rectangle, LinearPath, Circle } from 'react-rough';

const Container = styled.div`
  width: 160px;
  height: 90px;
  background-size: contain;
`;

//fillStyle="solid"

export default function Logo({}) {
    const theme = useTheme();
    return (
        <Container>
        <ReactRough height={90} width={160} renderer="svg">
            <Rectangle height={50} width={100} stroke="#ffffff00" strokeWidth={1} roughness={2} fillWeight="2" fillStyle="hauchure" hachureAngle={50} fill={"#bbb"} x={15} y={25}  />
            <LinearPath points={[ [13, 0], [30, 83], [61, 63] ]} stroke="#333"/>
            <LinearPath points={[ [65, 30], [0, 54], [81, 67] ]} stroke="#333"/>
            <Circle diameter={27} x={33} y={26} stroke="#333" fill={theme.colors.primary} fillStyle="solid"/>
        </ReactRough>
        </Container>
    )
}

//import logo from '../assets/logo.svg';
