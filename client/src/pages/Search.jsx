import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Search = () => {
	const navbg = '#002e29'
	const type = "Search For School"
	const submitText = "Search"
	const navigate = useNavigate()

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
							{[
								{ label: "Search by school", id: "school", type: 'text' },
								{ label: "Search by dept", id: "dept", type: 'text' },
								{ label: "Search by course", id: "course", type: 'text' },

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
								onClick={() =>{
									navigate('/search_result')
								}}
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
				<Footer />
			</Box>
		</>
	)
}

export default Search

