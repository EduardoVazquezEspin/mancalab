import styled from '@emotion/styled'

export const CardsDisplayer = styled.div`
    position: absolute;
    width: 100%;
    height: 60%;
    left: 0%;
    top: ${props => props.id === 'player-top' ? '40%' : '0%'};
    display: flex;
    flex-wrap: wrap;
`
