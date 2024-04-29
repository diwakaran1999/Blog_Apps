
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://hyperhci.com/wp-content/uploads/2020/02/hyperhci-tech-blog-wallpaper-1.jpg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 60px;
    color: #FFFFFF;
    line-height: 1
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOG</Heading>
        </Image>
    )
}

export default Banner;