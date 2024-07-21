import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Step, StepLabel, Stepper, StepperContext } from "@mui/material";
import Sidebar from "../components/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { styled } from "@mui/system";

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

  const [discussion, setDiscussion] = useState([])
  const [skipped, setSkipped] = useState(new Set());


  let navigate = useNavigate()

  const addDiscussion = () => {
    discussion.push({
      DiscussionName: 'Web Development',
      createdBy: 'Thanesh Kumar',
      endAt: '26/07/2024',
      id: discussion.length + 1,
    })
    setDiscussion([...discussion])
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
      <Box padding={1} bgcolor='white' margin={0} >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <CustomBox display='flex' flexDirection='column' height='100vh' width='30%' padding={0.5} sx={{
            overflowX: 'scroll',
          }}>
            <Button fullWidth variant="contained" onClick={addDiscussion}>+ Discussion</Button>
            {
              discussion.map((discussion) => (
                <Box>
                  <Button variant="outlined" fullWidth onClick={() => navigate(`/discussion/${discussion.id}`)} sx={{
                    justifyContent: 'flex-end',
                    marginTop: 0.5,
                    marginBottom: 0.5,
                    color: 'black'
                  }}>
                    <Box display='flex' flexDirection='column'>
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
      <Dialog open={false}>

        <DialogTitle>Create Discussion</DialogTitle>
        <DialogContent>
          <Stepper activeStep={activeStep}>
            {/* {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })} */}

            <Step>
              Hello
            </Step>
          </Stepper>
          {activeStep === steps.length - 1 && (
            <>
              <div className="stepper">
                {/* <Button onClick={handleSubmit}>Submit</Button> */}
              </div>
              <Box>
                {/* <Button sx={{mr: 5}} onClick={handleSubmit}>Submit</Button> */}
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </>
          )} 
          {activeStep === 0 && (
            <>
              <div className="stepperZero" style={{ textAlign: 'center' }}>

              </div>
              <div style={{ paddingTop: 5, textAlign: 'center' }}>
                <div>

                </div>
                <div style={{ paddingTop: 20, textAlign: 'center' }}>

                </div>
              </div>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </>
          )}
          {activeStep === 1 && (
            <>
              <div >
                <div className="stepper">
                  
                </div>
                <div className="stepperOneSub">
                  
                </div>
                <div className="stepperOneSub" style={{paddingTop: 50}}>

                </div>
              </div>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </>
          )}

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