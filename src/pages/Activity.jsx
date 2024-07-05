import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Container, Grid, Input } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material"
import { useState } from "react";

const Month = (month) => {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][month]
}

const Activity = () => {

  const [row, setRow] = useState([
    {
      date: '21 Jun 2024',
      activities: [{
        activity: 'Frontend',
        project: 'PMT',
        module: 'Login',
        task: 'Authentication',
        worked: '1:00',
        approved: '1:00',
        efficiency: null,
        productivity: null
      },
      {
        activity: 'Frontend',
        project: 'PMT',
        module: 'Login',
        task: 'Authentication',
        worked: '1:00',
        approved: '1:00',
        efficiency: null,
        productivity: null
      },
      {
        activity: 'Frontend',
        project: 'PMT',
        module: 'Login',
        task: 'Authentication',
        worked: '1:00',
        approved: '1:00',
        efficiency: null,
        productivity: null
      },
      {
        activity: 'Frontend',
        project: 'PMT',
        module: 'Login',
        task: 'Authentication',
        worked: '1:00',
        approved: '1:00',
        efficiency: null,
        productivity: null
      },
      ]
    },
    {
      date: 'Yesterday',
      activities: [{
        activity: 'Frontend',
        project: 'PMT',
        module: 'Login',
        task: 'Authentication',
        worked: '1:00',
        approved: '1:00',
        efficiency: null,
        productivity: null
      },
      {
        activity: 'Frontend',
        project: 'PMT',
        module: 'Login',
        task: 'Authentication',
        worked: '1:00',
        approved: '1:00',
        efficiency: null,
        productivity: null
      },
      {
        activity: 'Frontend',
        project: 'PMT',
        module: 'Login',
        task: 'Authentication',
        worked: '1:00',
        approved: '1:00',
        efficiency: null,
        productivity: null
      },
      {
        activity: 'Frontend',
        project: 'PMT',
        module: 'Login',
        task: 'Authentication',
        worked: '1:00',
        approved: '1:00',
        efficiency: null,
        productivity: null
      },
      ]
    }
  ])

  const onSave = () => {
    let DDate = document.getElementById('Date').value
    let activity = document.getElementById('activity').value
    let project = document.getElementById('Project').value
    let prjModule = document.getElementById('Module').value
    let task = document.getElementById('Task').value
    let worked = document.getElementById('worked').value
    let date = new Date(DDate)
    date = `${date.getDate()} ${Month(date.getMonth())} ${date.getFullYear()}`
    let tempData = row
    tempData.forEach((data, index) => {
      if(data.date === date){
        data.activities.push({
          activity: activity,
          project: project,
          module: prjModule,
          task: task,
          worked: worked,
          approved: null,
          efficiency: null,
          productivity: null
        })
        console.log(data)
      }
    })
    setRow([...tempData])
  }


  return (
    <>
    <Container sx={{
      marginTop: 3,
    }}>
      <Grid container spacing={2}>
        <Grid item xs={1.5}>
          <input type="date" id="Date"></input>
        </Grid>
        <Grid item xs={2}>
          <input type="text" id="activity"></input>
        </Grid>
        <Grid item xs={2}>
          <input type="text" id="Project"></input>
        </Grid>
        <Grid item xs={2}>
          <input type="text" id="Module"></input>
        </Grid>
        <Grid item xs={2}>
          <input type="text" id="Task"></input>
        </Grid>
        <Grid item xs={2}>
          <input type="text" id="worked"></input>
        </Grid>
        <Grid item xs={2}>
          <Button onClick={() => onSave()} variant="contained" size="small">Save</Button>
        </Grid>
      </Grid>
    {row.map((byDate) => (
      <TableContainer component={Paper} sx={{
        marginBottom: '10px'
      }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{
                width: '20%'
              }}>{byDate.date}</TableCell>
              <TableCell>Project</TableCell>
              <TableCell>Module</TableCell>
              <TableCell>Task</TableCell>
              <TableCell>Worked</TableCell>
              <TableCell>Approved</TableCell>
              <TableCell>Efficiency</TableCell>
              <TableCell>Productivity</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {byDate.activities.map((row) => (
              <TableRow>
                <TableCell>{row.activity}</TableCell>
                <TableCell>{row.project}</TableCell>
                <TableCell>{row.module}</TableCell>
                <TableCell>{row.task}</TableCell>
                <TableCell>{row.worked}</TableCell>
                <TableCell>{row.approved ?? '-'}</TableCell>
                <TableCell>{row.efficiency ?? '-'}</TableCell>
                <TableCell>{row.productivity ?? '-'}</TableCell>
                <TableCell>                
                  <Edit />
                </TableCell>
                <TableCell>
                  <Delete />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    ))}
    </Container>
    </>
  )
}

export default Activity;