import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Input, Select, Step, StepLabel, Stepper, StepperContext, TextField } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowBack, ChevronLeft, ChevronRight, Close } from "@mui/icons-material";
import { styled } from "@mui/system";
import dp from '../assets/evil-rabbit.png'

const CustomBox = styled(Box)({
  "&::-webkit-scrollbar": {
    width: "5px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
});



const Discussion = () => {

  let steps = ['Start', 'choose', 'create']
  const [activeStep, setActiveStep] = useState(0)
  const [open, setOpen] = useState(false)
  const [discussion, setDiscussion] = useState([])
  const [skipped, setSkipped] = useState(new Set());


  let navigate = useNavigate()

  const addDiscussion = () => {
    let name = document.getElementById('discussionName')
    discussion.push({
      DiscussionName: name.value,
      createdBy: 'Thanesh Kumar',
      endAt: '26/07/2024',
      id: discussion.length + 1,
    })
    setDiscussion([...discussion])
    name.value = ''
  }

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Box padding={1} bgcolor='white' margin={0} overflow={"hidden"}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <CustomBox display='flex' flexDirection='column' height='100vh' width='30%' padding={0.5} sx={{
            overflowX: 'scroll',
          }}>
            <Button fullWidth variant="contained" onClick={() => setOpen(true)}>+ Discussion</Button>
            {
              discussion.map((discussion) => (
                <Box>
                  <Button variant="outlined" fullWidth onClick={() => navigate(`/discussion/${discussion.id}`)} sx={{
                    justifyContent: 'space-evenly',
                    marginTop: 0.5,
                    marginBottom: 0.5,
                    color: 'black'
                  }}>
                    
                      <Box>
                        <img 
                          src={dp}
                          alt="hello"
                          width={50}
                          height={50}
                          className="rounded"
                        />
                      </Box>
                      <Box>
                        <Box>
                          {discussion.DiscussionName}
                        </Box>
                        <Box fontSize='10px' display='flex'>
                          {discussion.createdBy}
                        </Box>
                        <Box fontSize='10px' display='flex'>
                          {discussion.endAt}
                        </Box>

                      </Box>
                    
                  </Button> 
                </Box>
              ))
            }
          </CustomBox>
          <div style={{
            width: '100%',
            height: '100%',
          }}>
            <Outlet />
          </div>
        </div>
      </Box>
      <Dialog open={open} >
        <DialogTitle sx={{ paddingLeft: 0 }}>
            { activeStep === 0 ? 
              <IconButton onClick={() => setOpen(false)}>
                <Close /> 
              </IconButton>
              : 
              <IconButton onClick={handleBack}>
                <ArrowBack />
              </IconButton>
            }
          Create Discussion
        </DialogTitle>
        <DialogContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, flexDirection: 'column', padding: 5 }}>
          
          <TextField label="Discussion Name" variant="standard" id="discussionName" required sx={{ marginTop: 2, marginBottom: 2 }} />
          <Select defaultValue={'Choose Project'} fullWidth>
            
          </Select>
          <Button variant="contained" fullWidth onClick={addDiscussion}>
            Create Discussion
          </Button>
          

          {/* <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <></>
              );
            })}

          </Stepper> */}
          {/* {activeStep === steps.length - 1 && (
            <>
              <input type="file" id="dp" />
            </>
          )} 
          {activeStep === 0 && (
            <>
              <Button onClick={handleNext}>Next</Button>
            </>
          )}
          {activeStep === 1 && (
            <>
              <Button onClick={handleNext}>Next</Button>
            </>
          )} */}

          {/* <DialogContentText>

          </DialogContentText>
          <DialogActions>
            <Button endIcon={<ChevronRight />}>Create a new Discussion</Button>
          </DialogActions> */}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Discussion;