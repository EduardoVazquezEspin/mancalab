import styled from '@emotion/styled'

export const Board = styled.div`
    position: absolute;
    width: 75%;
    height: 35%;
    top: ${props => props.id === 'player-top' ? '0%' : '65%'};
    background-color: white;
`

export const Hand = styled.div`
    position: absolute;
    width: 100%;
    height: 40%;
    left: 0%;
    background-color: #654321;
    top: ${props => props.id === 'player-top' ? '0%' : '60%'};
`
