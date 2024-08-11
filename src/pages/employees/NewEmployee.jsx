import { ArrowBack, Close, People } from "@mui/icons-material"
import { Button, IconButton } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setUser } from "../../store/userSlice"
import { ApolloClient, createHttpLink, gql, InMemoryCache } from "@apollo/client"
import { CustomizedSnackbars } from "../projects/Project"

const NewEmployee = () => {

  const link = createHttpLink({
    uri: process.env.REACT_APP_API_URL,
    credentials: 'include'
  })

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });


  const [newRole, setNewRole] = useState(false)
  const [openSnack, setOpenSnack] = useState(false)
  const [snackType, setSnackType] = useState('')
  const [snackMessage, setSnackMessage] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  let roles = ['Admin', 'Project Manager-PM', 'Team Leader-TL', 'Sr. Software Developer-SrSR', 'Software Devloper-SD', 'Lead Generation-LD', 'BDA', 'DBA', 'Content Writer-CW']

  const validateFields = () => {
    let firstName = document.getElementById('firstName').value
    let middleName = document.getElementById('middleName').value
    let lastName = document.getElementById('lastName').value
    let fatherName = document.getElementById('fatherName').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let altPhone = document.getElementById('altPhone').value
    let address1 = document.getElementById('addressL1').value
    let address2 = document.getElementById('addressL2').value
    let city = document.getElementById('city').value
    let state = document.getElementById('state').value
    let nation = document.getElementById('nation').value
    let pincode = document.getElementById('pin').value
    let workType = document.getElementById('workType').value
    let role = document.getElementById('role').value

    console.table(firstName, middleName, lastName, fatherName, email, phone, altPhone, address1, address2, city, state, nation, pincode, workType, role)
    setSnackType('warning')
    if(!firstName) {
      setOpenSnack(true)
      setSnackMessage('First Name is required')
      return false
    }
    if(!fatherName) {
      setOpenSnack(true)
      setSnackMessage('Father Name is required')
      return false
    }
    if(!email) {
      setOpenSnack(true)
      setSnackMessage('Email is required')
      return false
    }
    if(!phone) {
      setOpenSnack(true)
      setSnackMessage('Phone Number is required')
      return false
    }
    if(!address1) {
      setOpenSnack(true)
      setSnackMessage('address is required')
      return false
    }
    if(!city) {
      setOpenSnack(true)
      setSnackMessage('City Name is required')
      return false
    }
    if(!state) {
      setOpenSnack(true)
      setSnackMessage('State Name is required')
      return false
    }
    if(!nation) {
      setOpenSnack(true)
      setSnackMessage('Nation Name is required')
      return false
    }
    if(!pincode) {
      setOpenSnack(true)
      setSnackMessage('pincode is required')
      return false
    }
    if(!workType) {
      setOpenSnack(true)
      setSnackMessage('WorkType is required')
      return false
    }
    if(!role) {
      setOpenSnack(true)
      setSnackMessage('Choose a Role')
      return false
    }

    return {
      firstName,
      email,
      role,
      lastName,
      middleName,
      fatherName,
      phoneNo: phone,
      altPhoneNo: altPhone,
      address: [address1, address2],
      city,
      state,
      nation,
      pincode,
      workType,
    }
  }

  const handleNewEmployee = () => {
    let validatedFields = validateFields()
    if(validatedFields)
    try {
      client
        .mutate({
          mutation: gql`
            mutation Register($firstName: String!, $middleName: String, $lastName: String, $fatherName: String!, $email: String!, $phoneNo: String!, $altPhoneNo: String, $address: [String]!, $city: String!, $state: String!, $nation: String!, $pincode: String!, $workType: String!, $role: String!) {
              Register(firstName: $firstName, middleName: $middleName, lastName: $lastName, fatherName: $fatherName, email: $email, phoneNo: $phoneNo, altPhoneNo: $altPhoneNo, address: $address, city: $city, state: $state, nation: $nation, pincode: $pincode, workType: $workType, role: $role) {
                message
                status
                username
                email
                password
              }
            }
          `,
          variables: {firstName: validatedFields.firstName, middleName: validatedFields.middleName, lastName: validatedFields.lastName, fatherName: validatedFields.fatherName, email: validatedFields.email, phoneNo: validatedFields.phoneNo, altPhoneNo: validatedFields.altPhoneNo, address: validatedFields.address, city: validatedFields.city, state: validatedFields.state, nation: validatedFields.nation, pincode: validatedFields.pincode, workType: validatedFields.workType, role: validatedFields.role },
        })
        .then( async (result) => {
          if(result.data.Register.status){
            try{

            }
            catch{

            }
          }
          else{

          }
        })
        .catch((error) => console.log('Errors:', error.message));
    } catch (error) {
      console.log('Error:', error.message);
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
                      id="addressL2"
                      name="addressL2"
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
                  <label htmlFor="role" className="mb-2 block text-sm font-medium">
                    New Role
                  </label>
                  <div className="relative mt-2 rounded-md">
                    <div className="relative">
                      <input
                        id="role"
                        name="role"
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
        <CustomizedSnackbars open={openSnack} setOpen={setOpenSnack} type={snackType} message={snackMessage} />
      </Box>
    </>
  )
}

export default NewEmployee