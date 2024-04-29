
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub} from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://hyperhci.com/wp-content/uploads/2020/02/hyperhci-tech-blog-wallpaper-1.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
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


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">You can connect on Github</Typography>    
                <Text variant="h5">
                    Reach out to me on 
                    <Link href="https://github.com/diwakaran1999" color="inherit" target="_blank">
                        <GitHub/>
                    </Link>
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;