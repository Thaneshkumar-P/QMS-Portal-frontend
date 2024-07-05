import { Box, Icon, Typography, Grid } from '@mui/material';
import Paper from '@mui/material/Paper'
import MessageRoundedIcon from '@mui/icons-material/MessageRounded'
import Input from '@mui/material/Input';


const Chat = () => {
    return (
        <>
            <Paper elevation={4} sx={{
                margin: 1,
                backgroundColor: '#1976d2'
            }}>
                <Box sx={{
                    
                }}>
                    <Box sx={{
                        paddingLeft: 2,
                        paddingRight: 2,
                        paddingBottom: 1,
                        paddingTop: 1,
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Icon>
                            <MessageRoundedIcon sx={{
                                color: 'white'
                            }}/>
                        </Icon>
                        <Typography variant="h5" sx={{
                            marginLeft: 1,
                            color: 'white'
                        }}>Messages</Typography>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{
                        height: '89vh',
                        backgroundColor: 'white',
                        borderRadius: 1
                    }}>
                        <Grid container spacing={0}>
                            <Grid item xs={3}>
                                <Grid container spacing={2} sx={{
                                    display: 'flex'
                                }}>
                                    <Grid item xs={10}>
                                        <Input defaultValue="Hello world" />
                                    </Grid>
                                    <Grid item xs={2}>
                                        h
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={9}>
                                Hello world
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Paper>
        </>
    );
}

export default Chat;