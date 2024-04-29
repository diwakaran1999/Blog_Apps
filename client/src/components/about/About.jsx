
import { Box, styled, Typography} from '@mui/material';

const Banner = styled(Box)`
    background-image: url(https://hyperhci.com/wp-content/uploads/2020/02/hyperhci-tech-blog-wallpaper-1.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">This is a Blog Application using MERN</Typography>
                <Text variant="h5"> It is a Capstone Project.<br />
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;