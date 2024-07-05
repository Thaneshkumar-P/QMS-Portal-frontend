import { Box, Stack, Paper } from "@mui/material";
// import OnGoing from '../assets/images/png/ongoing.png';

const Dashboard = () => {
    return (
        <>
            <Box padding={2}>
                <Stack direction="row" spacing={5}>
                    <Paper elevation={1} sx={{ padding: 2 }}>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={150}>
                            {/* <img src={OnGoing} alt="Ongoing" /> */}
                            <Box display={"flex"} justifyContent={"center"} alignItems={"flex-start"} flexDirection={"column"} >
                                <Box sx={{
                                    fontSize: 50,
                                    color: '#000000ad',
                                    padding: 1
                                }}>
                                    500
                                </Box>
                                <Box sx={{
                                    fontSize: 15,
                                    color: 'grey',
                                    marginLeft: 1
                                }}>
                                    On-Going Projects
                                </Box>
                            </Box>      
                        </Box>
                    </Paper>
                    <Paper elevation={1} sx={{ padding: 2 }}>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={150}>
                            {/* <img src={OnGoing} alt="Ongoing" /> */}
                            <Box display={"flex"} justifyContent={"center"} alignItems={"flex-start"} flexDirection={"column"} >
                                <Box sx={{
                                    fontSize: 50,
                                    color: '#000000ad',
                                    padding: 1
                                }}>
                                    500
                                </Box>
                                <Box sx={{
                                    fontSize: 15,
                                    color: 'grey',
                                    marginLeft: 1
                                }}>
                                    On-Going Projects
                                </Box>
                            </Box>      
                        </Box>
                    </Paper>
                    <Paper elevation={1} sx={{ padding: 2 }}>
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} width={150}>
                            {/* <img src={OnGoing} alt="Ongoing" /> */}
                            <Box display={"flex"} justifyContent={"center"} alignItems={"flex-start"} flexDirection={"column"} >
                                <Box sx={{
                                    fontSize: 50,
                                    color: '#000000ad',
                                    padding: 1
                                }}>
                                    500
                                </Box>
                                <Box sx={{
                                    fontSize: 15,
                                    color: 'grey',
                                    marginLeft: 1
                                }}>
                                    On-Going Projects
                                </Box>
                            </Box>      
                        </Box>
                    </Paper>
                </Stack>
            </Box>
        </>
    );
};

export default Dashboard;
