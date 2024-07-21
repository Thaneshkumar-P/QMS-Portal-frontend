import { Close, Group, Search } from "@mui/icons-material";
import { Box, Button, Drawer, IconButton, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/system";
import DP from '../assets/evil-rabbit.png';

const CustomBox = styled(Box)({
  "&::-webkit-scrollbar": {
    width: "5px",
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
});

const DiscussionChat = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: "You",
        timestamp: new Date(),
        read: true,
        dp: DP,
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <>
      <Box display="flex" height="98vh" className="md:hidden">
        <Box
          borderRadius="0.375rem"
          padding="0.5rem"
          bgcolor="#8080800f"
          marginLeft={1}
          width="100%"
          display="flex"
          flexDirection="column"
          height="100%"
          flexGrow={1}
        >
          <Box bgcolor="white" borderRadius={1} padding={1} display="flex" alignItems="center">
            <Typography variant="h5" width="100%">
              Marketing Team
            </Typography>
            <IconButton onClick={() => setOpen(!open)}>
              {open ? (
                <Close sx={{ color: "black" }} />
              ) : (
                <Group sx={{ color: "black" }} />
              )}
            </IconButton>
          </Box>
          <CustomBox height="auto" display="flex" flexGrow={1} id="message" flexDirection="column" overflow="auto" bgcolor="white" borderRadius={1} marginTop={1} marginBottom={1} padding={1}>
            {messages.map((msg) => (
              <Box key={msg.id} display="flex" flexDirection={msg.sender === "You" ? "row-reverse" : "row"} alignItems="flex-start" mb={2}>
                <img src={msg.dp} alt="dp" width={25} height={25} className="rounded-full" />
                <Box display="flex" flexDirection="column" mx={2} p={1} /* bgcolor={msg.sender === "You" ? "#007bff24" : "#f1f1f1"} */ borderRadius={1.5} maxWidth="60%">
                  <Box display={"flex"} alignItems={"center"}>
                    <Typography variant="body2" color="textPrimary" fontWeight={600}>{msg.sender}</Typography>
                    <Typography variant="caption" color="textSecondary" sx={{ marginLeft: 1, paddingTop: '2px' }}>{msg.timestamp.toLocaleString()}</Typography>
                  </Box>
                  <Typography variant="body1" color="textPrimary" sx={{ whiteSpace: 'pre-wrap' }}>{msg.text}</Typography>
                  {msg.read && msg.sender === "You" && <Typography variant="caption" color="textSecondary">Read</Typography>}
                </Box>
              </Box>
            ))}
          </CustomBox>
          <Box>
            <Box display="flex" bgcolor="#007bff24" borderRadius={1.5}>
              <CustomBox
                component={TextField}
                fullWidth
                multiline
                placeholder="Type a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  height: "fit-content",
                  maxHeight: "100px",
                  overflow: "auto",
                }}
              />
              <Box display="flex" flexDirection="column-reverse">
                <Button
                  size="small"
                  variant="contained"
                  onClick={handleSendMessage}
                  sx={{
                    minWidth: 0,
                    margin: 0.5,
                    padding: "1px 12px",
                  }}
                >
                  Send
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Drawer
          variant="permanent"
          open={open}
          PaperProps={{
            sx: {
              width: open ? 200 : 0,
              transition: "width 0.3s",
              overflowX: "hidden",
              position: "sticky",
              background: "transparent",
              borderRight: "none",
            },
          }}
        >
          <Paper sx={{ width: 200 }} elevation={0}>
            <Box display={"flex"} alignItems={"center"}>
              <Typography variant="h6" width="100%" padding={2}>
                Members
              </Typography>
              <Button variant="contained" size="small" onClick={() => document.getElementById('addMember').classList.remove('hidden')}>Add</Button>
            </Box>
            <Box paddingLeft={2}>
              <div className="relative flex flex-1 flex-shrink-0 hidden" id="addMember">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  placeholder='Search Member'
                />
                {/* <Search className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" /> */}
              </div>
            </Box>
            <Box paddingLeft={2} marginTop={2}>
              <Box>
                <div>
                  <div className="mb-2 flex items-center">
                    <div className="flex items-center gap-3">
                      <img
                        src={DP}
                        className="rounded-full"
                        alt={`Thanesh's profile`}
                        width={28}
                        height={28}
                      />
                      <div>
                        <p>Thanesh Kumar</p>
                        <p className="text-sm text-gray-500">
                          Software Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </Box>
          </Paper>
        </Drawer>
      </Box>
    </>
  );
};

export default DiscussionChat;
