import styled from '@emotion/styled'

const getBackground = (state) => {
  switch (state) {
    case 'normal':
      return 'background-color: #D2B48C'
    case 'forbidden':
      return (
        'background-image: url(' + process.env.PUBLIC_URL + `/img/cross.png);  
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;`
      )
    case 'doomed':
      return (
        'background-image: url(' + process.env.PUBLIC_URL + `/img/skull.jpg);  
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;`
      )
    case 'magic':
      return (
        'background-image: url(' + process.env.PUBLIC_URL + `/img/magic.jpg);  
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;`
      )
    case 'confused':
      return (
        'background-image: url(' + process.env.PUBLIC_URL + `/img/nou.gif);  
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;`
      )
  }
}

export const Socket = styled.div`
    position: absolute;
    width: ${props => props.width};
    height: ${props => props.height};
    top: ${props => props.posY + '%'};
    left: ${props => props.posX + '%'};
    ${props => getBackground(props.backgroundState)};
    clip-path: polygon(98% 50%,97.9034% 53.0443%,97.6138% 56.0764%,97.1326% 59.0841%,96.4615% 62.0551%,95.6034% 64.9776%,94.5617% 67.8398%,93.3405% 70.6302%,91.9448% 73.3374%,90.3802% 75.9508%,88.653% 78.4596%,86.7701% 80.8538%,84.7392% 83.1238%,82.5685% 85.2604%,80.2665% 87.255%,77.8427% 89.0996%,75.3068% 90.7868%,72.669% 92.3098%,69.9399% 93.6623%,67.1305% 94.8391%,64.2522% 95.8353%,61.3164% 96.647%,58.3351% 97.2708%,55.3202% 97.7042%,52.2839% 97.9456%,49.2384% 97.994%,46.196% 97.849%,43.1689% 97.5114%,40.1693% 96.9825%,37.2093% 96.2644%,34.3007% 95.36%,31.4554% 94.273%,28.6848% 93.0077%,26% 91.5692%,23.4118% 89.9634%,20.9307% 88.1966%,18.5667% 86.276%,16.3292% 84.2093%,14.2273% 82.0049%,12.2695% 79.6716%,10.4635% 77.2189%,8.8168% 74.6565%,7.3359% 71.9949%,6.02679% 69.2447%,4.89475% 66.417%,3.94434% 63.5232%,3.17937% 60.5749%,2.60293% 57.5841%,2.21735% 54.5627%,2.02417% 51.5229%,2.02417% 48.4771%,2.21735% 45.4373%,2.60293% 42.4159%,3.17937% 39.4251%,3.94434% 36.4768%,4.89475% 33.583%,6.02679% 30.7553%,7.3359% 28.0051%,8.8168% 25.3435%,10.4635% 22.7811%,12.2695% 20.3284%,14.2273% 17.9951%,16.3292% 15.7907%,18.5667% 13.724%,20.9307% 11.8034%,23.4118% 10.0366%,26% 8.43078%,28.6848% 6.9923%,31.4554% 5.72699%,34.3007% 4.63996%,37.2093% 3.73558%,40.1693% 3.01748%,43.1689% 2.48857%,46.196% 2.15097%,49.2384% 2.00604%,52.2839% 2.05437%,55.3202% 2.29575%,58.3351% 2.72923%,61.3164% 3.35304%,64.2522% 4.16469%,67.1305% 5.1609%,69.9399% 6.33766%,72.669% 7.69024%,75.3068% 9.21318%,77.8427% 10.9004%,80.2665% 12.745%,82.5685% 14.7396%,84.7392% 16.8762%,86.7701% 19.1462%,88.653% 21.5404%,90.3802% 24.0492%,91.9448% 26.6626%,93.3405% 29.3698%,94.5617% 32.1602%,95.6034% 35.0224%,96.4615% 37.9449%,97.1326% 40.9159%,97.6138% 43.9236%,97.9034% 46.9557%,98% 50%);
`

export const SeedContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
