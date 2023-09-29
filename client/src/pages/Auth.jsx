import React, { useState } from 'react'
import { Box, Typography, Stack, Button, Paper, TextField } from '@mui/material'

const Auth = () => {
	const navbg = '#002e29'
	const [authState, setAuthState] = useState('Login')

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<>
			<Box height='100vh' width='100vw' bgcolor='teal'>
				{/* Nav Bar */}
				<Stack direction='row' bgcolor={navbg} height='80px' paddingLeft={2}>
					<Stack flexGrow={1}>
						<Typography fontSize='3rem' fontWeight={700} color="white">
							School Match
						</Typography>
					</Stack>

					<Stack spacing={2} direction='row' padding={2}>
						<Button>
							<Typography color="white" fontSize='1.5rem'>
								Home
							</Typography>
						</Button>
						<Button onClick={() => {
							if (authState == 'Login') {
								setAuthState('Register')
							} else {
								setAuthState('Login')
							}
						}} >
							<Typography color="white" fontSize='1.5rem'>
								{authState}
							</Typography>
						</Button>

					</Stack>
				</Stack>

				{/* main page */}
				<Box display={'flex'} justifyContent={'center'} alignItems={'center'} mt={5} flexDirection={'column'} width={'100vw'}>
					<Stack width={'100vw'}>
						<Typography fontSize={'2rem'} fontWeight={700} sx={{ textAlign: 'start', ml: 4 }}>
							{authState == "Register" ? "Sign In".toUpperCase() : "Register".toUpperCase()}
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
								autoFocus
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
								{authState == "Register" ? "Sign In" : "Register"}
							</Button>
						</Box>

					</Stack>
				</Box>

			</Box>
		</>
	)
}

export default Auth
