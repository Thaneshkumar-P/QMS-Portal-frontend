import { ArrowBack, Close, People } from "@mui/icons-material"
import { Button, IconButton } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setUser } from "../../store/userSlice"

const NewEmployee = () => {

  const [newRole, setNewRole] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  let roles = ['Admin', 'Project Manager', 'Team Leader', 'Sr. Software Developer', 'Software Devloper', 'Lead Generation', 'BDA', 'DBA', 'Content Writer']

  const validateFields = () => {

  }

  const handleNewEmployee = () => {
    let validatedFields = validateFields()
    if(validatedFields){
      
    }
  }

  return (
    <>
      <Box>
        <Box padding={2} bgcolor="white" display="flex" flexDirection="row" alignItems="center" gap={2}>
          <IconButton onClick={() => navigate('/employees')}>
            <ArrowBack />
          </IconButton>
          <Box width="100%">
            <h5 className="text-medium text-[25px]">Create New Employee</h5>
          </Box>
        </Box>
        <Box margin={9} marginTop={0}>
          <Box>
            <Box>
              <h4 variant="h6">1. Basic Details</h4>
            </Box>
            <Box display="flex" flexDirection="row" gap={2} marginLeft={3} marginTop={3}>
              <div className="mb-2">
                <label htmlFor="firstName" className="mb-2 block text-sm font-medium">
                  First Name
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="middleName" className="mb-2 block text-sm font-medium">
                  Middle Name
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="middleName"
                      name="middleName"
                      type="text"
                      placeholder="middle Name"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="lastName" className="mb-2 block text-sm font-medium">
                  Last Name
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
            </Box>
            <Box display="flex" flexDirection="row" gap={2} marginLeft={3} marginTop={3}>
              <div className="mb-2">
                <label htmlFor="fatherName" className="mb-2 block text-sm font-medium">
                  Father's Name
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="fatherName"
                      name="fatherName"
                      type="text"
                      placeholder="Father's Name"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
            </Box>
            <Box display="flex" flexDirection="row" gap={2} marginLeft={3} marginTop={3}>
              <div className="mb-2">
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email Id
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Id"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                  Phone No.
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Phone Number"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="altPhone" className="mb-2 block text-sm font-medium">
                  Alternate Phone Number
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="altPhone"
                      name="altPhone"
                      type="text"
                      placeholder="Alternate Number"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
            </Box>
            <Box display="flex" flexDirection="row" gap={2} marginLeft={3} marginTop={3}>
              <div className="mb-2 w-[50%]">
                <label htmlFor="addressL1" className="mb-2 block text-sm font-medium">
                  Address
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="addressL1"
                      name="addressL1"
                      type="text"
                      placeholder="Address line 1"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 mb-2 text-sm outline-2 placeholder:text-gray-500"
                    />
                    <input
                      id="addressL1"
                      name="addressL1"
                      type="text"
                      placeholder="Address line 2"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
            </Box>
            <Box display="flex" flexDirection="row" gap={2} marginLeft={3} marginTop={1}>
              <div className="mb-2">
                <label htmlFor="city" className="mb-2 block text-sm font-medium">
                  City
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="City"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 mb-2 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="state" className="mb-2 block text-sm font-medium">
                  State
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="state"
                      name="state"
                      type="text"
                      placeholder="State"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 mb-2 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="nation" className="mb-2 block text-sm font-medium">
                  Nation
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="nation"
                      name="nation"
                      type="text"
                      placeholder="Nation"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 mb-2 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor="pin" className="mb-2 block text-sm font-medium">
                  Pin Code
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="pin"
                      name="pin"
                      type="text"
                      placeholder="Pincode"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 mb-2 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
            </Box>
          </Box>
          <Box marginTop={2}>
            <Box>
              <h4 variant="h6">2. Employement Details</h4>
            </Box>
            <Box display="flex" flexDirection="row" gap={2} marginLeft={3} marginTop={3}>
              <div className="mb-4">
              <label htmlFor="workType" className="mb-2 block text-sm font-medium">
                  Work Type
                </label>
                <div className="relative">
                  <select
                    id="workType"
                    name="WorkType"
                    className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Work Type
                    </option>
                    <option value={'Work From Office'}>Work From Office</option>
                    <option value={'Work From Home'}>Work From Home</option>
                    <option value={'On-Site'}>On-Site</option>
                  </select>
                </div>
              </div>
              { newRole ?
                <div className="mb-4">
                  <label htmlFor="newRole" className="mb-2 block text-sm font-medium">
                    New Role
                  </label>
                  <div className="relative mt-2 rounded-md">
                    <div className="relative">
                      <input
                        id="newRole"
                        name="newRole"
                        type="text"
                        placeholder="Role Name"
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                </div>
                :
                <div className="mb-4">
                  <label htmlFor="role" className="mb-2 block text-sm font-medium">
                    Choose Role
                  </label>
                  <div className="relative">
                    <select
                      id="role"
                      name="role"
                      className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select Role
                      </option>
                      {roles.map(role => (
                        <option value={role}>{role}</option>
                      ))}
                    </select>
                  </div>
                </div>
              }
              <div className="mb-4 flex items-center">
                <div className="relative mt-2 rounded-md flex items-center">
                  <p>New Role</p>
                  <div className="relative ms-1">
                    <input
                      id="newRole"
                      name="newRole"
                      type="checkbox"
                      placeholder="Role Name"
                      onChange={() => setNewRole(!newRole)}
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
            </Box>
          </Box>
          <Box>
            <Box display="flex" flexDirection="row-reverse" gap={2} marginLeft={3} marginTop={1} flexWrap="wrap">
              <Button color="warning" variant="contained">Clear</Button>
              <Button color="success" variant="contained" onClick={handleNewEmployee}>Create</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default NewEmployee