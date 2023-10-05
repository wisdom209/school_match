import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { searchGeneral } from '../api/client'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Landing = () => {
	const navbg = '#002e29'
	const navigate = useNavigate()
	const [schools, setSchools] = useState([])

	useEffect(() => {
		const gen = searchGeneral()
		gen.then(data => {
			console.log(data)
			setSchools(data)
		})

	}, [])

	return (
		<>
			<Box minHeight='100vh' width='100vw' bgcolor='teal'>
				{/* Nav Bar */}
				<NavBar options={["sign up", "sign in"]} />
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
							}} onClick={() => {
								navigate('/dashboard')
							}}>
								<Typography>
									Come Onboard!
								</Typography>
							</Button>
						</Stack>
					</Stack>
				</Box>

				<Stack sx={{ mx: '20px' }} display={'flex'} alignItems={'center'}>
					<h3 style={{ textAlign: 'center', fontSize: '5rem', color: 'white', marginTop: '-2.5rem', marginBottom: '5px' }}>Some of our Schools</h3>
					{
						schools.map((v, i) => {
							return <Stack
								key={i} display={'flex'} flexDirection={'row'} gap={"2p"} sx={{ my: '5px', width: '80%' }}>
								<Stack sx={{ mr: '30px' }}>
									<img src="/exp.png" alt="school image" style={{
										width: '500px'
									}} />
								</Stack>
								<Stack>
									<Typography><b>{v.school.name}, {v.school.country}</b></Typography>
									<Typography><b>{v.school.type}</b></Typography>
									<Typography><b>{v.degree.title}</b></Typography>
									<Typography><b>{v.grade.grade}</b></Typography>
									<Typography><b>{v.course.name}</b></Typography>
									<Typography><Link to="/dashboard">See Details</Link></Typography>
								</Stack>

							</Stack>
						})
					}
				</Stack>

				<Footer />

			</Box>
		</>
	)
}

export default Landing
