import React, { useState } from 'react'
import { Box, Typography, Stack, Button, Paper, TextField } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const Register = () => {
	const navbg = '#002e29'
	const type = "Register"
	const submitText = "Sign Up"

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<Box minHeight='100vh' width='100vw' bgcolor='teal'>
				{/* Nav Bar */}
				<NavBar options={['sign in']}/>

				{/* main page */}
				<Box display={'flex'} justifyContent={'center'} alignItems={'center'} mt={5} flexDirection={'column'} width={'100vw'}>
					<Stack width={'100vw'}>
						<Typography fontSize={'2rem'} fontWeight={700} sx={{ textAlign: 'start', ml: 4 }}>
							{type}
						</Typography>
					</Stack>

					<Stack direction={'row'} spacing={10} sx={{ px: 2, py: 3 }}>
						<img src='/online_test.svg' alt='certificate png' style={
							{
								width: '40%',
								height: '40%',
								paddingTop: '12px'
							}
						} />

						<Box component={'form'} onSubmit={handleSubmit}>
							{[
								{ label: "First name", id: "first_name", type: 'text' },
								{ label: "Last name", id: "last_name", type: 'text' },
								{ label: "Username", id: "username", type: 'text' },
								{ label: 'Email Address', id: "email", type: 'email' },
								{ label: 'Password', id: 'password', type: 'password' },
								{ label: 'Confirm Password', id: 'confirm_password', type: 'password' },

							].map((v, i) => <TextField
								color='text'
								key={i}
								margin='normal'
								required
								fullWidth
								id={v.id}
								type={v.type}
								label={v.label}
							/>)}

							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{
									mt: 2,
									background: navbg,
									':hover': {
										bgcolor: 'green'
									}
								}}
							>
								{submitText}
							</Button>
						</Box>

					</Stack>
				</Box>

			</Box>
			<Footer/>
		</>
	)
}

export default Register
