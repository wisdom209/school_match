import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import { search } from '../api/client'

const Search = () => {
	const navbg = '#002e29'
	const type = "Search For School"
	const submitText = "Search"
	const navigate = useNavigate()
	const [school, setSchool] = useState(null)
	const [department, setDepartment] = useState(null)
	const [course, setCourse] = useState(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		let SearchResult = search(value).then(res => res)
		SearchResult.then(res => {
			console.log(res, 'response search')
		})
	}

	return (
		<>
			<Box minHeight='100vh' width='100vw' bgcolor='teal'>
				{/* Nav Bar */}
				<NavBar options={['home', 'profile', 'favorites', 'search', 'logout']} />

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

						<Box component={'form'} sx={{ translate: '0px -20px', width: '150%' }} onSubmit={handleSubmit}>
							{[
								{ label: "Search by school", id: "school", type: 'text' },
								{ label: "Search by dept", id: "department", type: 'text' },
								{ label: "Search by course", id: "course", type: 'text' },

							].map((v, i) => {
								return <Box key={i} marginBottom={'3px'} >
									<TextField
										color='text'
										margin='normal'
										fullWidth
										id={v.id}
										type={v.type}
										label={v.label}
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
							})}
						</Box>

					</Stack>
				</Box >
				<Footer />
			</Box >
		</>
	)
}

export default Search

