import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar'

const Login = () => {
	const navbg = '#002e29'
	const type = "Login"
	const submitText = "Sign in"

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<Box minHeight='100vh' width='100vw' bgcolor='teal'>
				{/* Nav Bar */}
				<NavBar />

				{/* main page */}
				<Box display={'flex'} justifyContent={'center'} alignItems={'center'} mt={5} flexDirection={'column'} width={'100vw'}>
					<Stack width={'100vw'}>
						<Typography fontSize={'2rem'} fontWeight={700} sx={{ textAlign: 'start', ml: 4 }}>
							{type}
						</Typography>
					</Stack>

					<Stack direction={'row'} spacing={10} sx={{ p: 2 }}>
						<img src='/online_test.svg' alt='certificate png' style={
							{
								width: '40%',
								height: '40%'
							}
						} />

						<Box component={'form'} onSubmit={handleSubmit}>
							<TextField
								margin='normal'
								required
								fullWidth
								id='email'
								label='Emaill Address'
								autoComplete='email'
							/>
							<TextField
								margin='normal'
								required
								fullWidth
								id='password'
								label='Password'
								autoComplete='current-password'
								type="password"
							/>

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
		</>
	)
}

export default Login
