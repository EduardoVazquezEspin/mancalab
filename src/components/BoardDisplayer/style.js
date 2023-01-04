import styled from '@emotion/styled'

export const Board = styled.div`
    position: absolute;
    width: 75%;
    height: 30%;
    top: 35%;
    background-color: #654321;
`

export const Bridge = styled.div`
    position: absolute;
    width: 12.5%;
    height: 10%;
    top: ${props => props.posY + '%'};
    left: ${props => props.posX + '%'};
    background-color: grey;
`
