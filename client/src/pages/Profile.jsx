import React from 'react'
import NavBar from './NavBar'
import { Box, Button, Stack, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
	const navigate = useNavigate()

	return (
		<>
			<NavBar />
			<Box minHeight={'100vh'} width={'100vw'} sx={{ p: '2rem', background: 'teal' }}>
				<Stack>
					{
						[
							{ name: "First name", value: "John" },
							{ name: "Last name", value: "Doe" },
							{ name: "Email", value: "johndoe@eamil.com" },
							{ name: "Username", value: "johon123" }
						].map((v, i) => {
							return <Typography fontSize={'2rem'} fontWeight={600}>
								{v.name}: {v.value}
							</Typography>
						})
					}
					<Button onClick={()=>{
						navigate('/update')
					}}
						sx={{
							background: 'black',
							width: '30vw',
							my: '3px',
							color: 'white',
							'&:hover': {
								background: 'black'
							}

						}}
					>
						<Typography>Update Profile</Typography>
					</Button>
				</Stack>
			</Box>
		</>
	)
}

export default Profile
