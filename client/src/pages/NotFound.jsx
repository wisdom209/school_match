import { Box, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar'

const NotFound = () => {
	return (
		<Box sx={{ width: '100vw', minHeight: '100vh', background: 'teal' }}>
			<NavBar options={['sign in', 'sign up']} />
			<Box sx={{
				width: '100%', height: '100%', display: 'flex',
				justifyContent: 'center'
			}}>
				<Typography fontSize={'50px'} fontWeight={700}>
					404
				</Typography>

			</Box>
		</Box>
	)
}

export default NotFound
