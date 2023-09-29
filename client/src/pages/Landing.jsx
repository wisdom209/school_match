import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'

const Landing = () => {
	const navbg = '#002e29'
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
						<Button>
							<Typography color="white" fontSize='1.5rem'>
								Sign in
							</Typography>
						</Button>

					</Stack>
				</Stack>
				<Box display={'flex'} justifyContent={'center'} alignItems={'center'} mt={5}>
					<Stack direction={'row'} spacing={5} padding={15}>
						<img src='/online_test.svg' alt='certificate png' style={
							{
								width: '25%',
								height: '25%'
							}
						} />
						<Stack>
							<Typography fontSize={'2rem'} fontWeight={500}>
								Our website helps you to find the best schools suited for your qualifications from various universities around the world
							</Typography>
							<Button style={{
								background: navbg,
								margin: '10px',
								width: '40%'
							}}>
								<Typography>
									Come Onboard!
								</Typography>
							</Button>
						</Stack>
					</Stack>
				</Box>

			</Box>
		</>
	)
}

export default Landing
