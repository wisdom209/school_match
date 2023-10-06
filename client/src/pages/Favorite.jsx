import { FavoriteBorder } from '@mui/icons-material'
import { Box, Card, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { getFavorites } from '../api/client'
import Loading from '../components/Loading'

const Favorite = () => {
	const [favorites, setFavorites] = useState([])
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		let favorites = getFavorites().then(res => {
			return res
		})
		favorites = favorites.then(res => {
			if (res.data) {
				setFavorites(res.data.results)
				setLoading(false)
			}
			console.log(res.data.results)

		})
	}, [])

	const navbg = '#002e29'
	const fakeObj = {
		name: "Abia State University, Uturu",
		description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum reprehenderit natus minus est reiciendis veritatis enim nam sed quis officia accusantium nemo quibusdam, voluptates quae laudantium quam eius exercitationem cum autem cumque perferendis adipisci doloremque. Animi accusantium numquam optio at sequi doloremque consectetur praesentium vel provident! Eaque obcaecati dolorum similique!",
		degree: "animal and environmental science",
		grade: "Second class Upper",
		url: "#",
		img: "/exp.png"
	}

	const school = Array(3).fill(fakeObj)

	const navigate = useNavigate()
	return (
		<>
			{
				loading ? <Loading /> :
					<Box minHeight='100vh' width='100vw' bgcolor='teal'>
						{/* Nav Bar */}
						<NavBar options={['home', 'profile', 'favorites', 'search', 'logout']} />

						<Stack>
							<Stack>
								<Typography marginLeft={10} fontWeight={700} fontSize={'2rem'} marginTop='5px'>
									Your Favorites
								</Typography>
							</Stack>
							<Stack>
								{favorites.map((v, i) => <Stack key={i} direction={'row'} spacing={3} sx={{ mx: 10, my: 3 }}>
									<Stack sx={{ zIndex: 1 }}>
										<Card >
											<CardMedia
												sx={{ objectFit: 'cover', width: '20rem', margin: '0px', background: 'grey', zIndex: '-99' }}
												component='img'
												height='300px'
												alt="media banner"
												loading='lazy'
												src={'/exp.png'}
											/>
										</Card>
									</Stack>
									<Stack spacing={1}>
										<Typography fontWeight={600}>{v.department.school.name}</Typography>
										<Typography>{v.department.program.program_detail}</Typography>
										<Typography><b>Degree:</b> {v.department.degree.title}</Typography>
										<Typography><b>Grade:</b> {v.department.grade.grade}</Typography>
										<Typography><a href={v.department.school.school_link}>Visit Us</a></Typography>
									</Stack>
								</Stack>)}
							</Stack>

						</Stack>
						<Footer />
					</Box>
			}
		</>
	)
}

export default Favorite
