import { FavoriteBorder } from '@mui/icons-material'
import { Box, Card, CardMedia, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Favorite = () => {
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

			<Box minHeight='100vh' width='100vw' bgcolor='teal'>
				{/* Nav Bar */}
				<NavBar options={['home', 'profile', 'favorites', 'search', 'logout']} />

				<Stack>
					<Stack>
						<Typography marginLeft={10} fontWeight={700} fontSize={'2rem'} marginTop='90px'>
							Your Favorites
						</Typography>
					</Stack>
					<Stack>
						{school.map(({ description, grade, url, img, name, degree }, i) => <Stack key={i} direction={'row'} spacing={3} sx={{ mx: 10, my: 3 }}>
							<Stack sx={{ zIndex: 1 }}>
								<Card >
									<CardMedia
										sx={{ objectFit: 'cover', width: '20rem', margin: '0px', background: 'grey', zIndex: '-99' }}
										component='img'
										height='300px'
										alt="media banner"
										loading='lazy'
										src={img}

									/>
								</Card>
							</Stack>
							<Stack spacing={1}>
								<Typography fontWeight={600}>{name}</Typography>
								<Typography>{description}</Typography>
								<Typography><b>Degree:</b> {degree}</Typography>
								<Typography><b>Grade:</b> {grade}</Typography>
								<Typography><a href={url}>Visit Us</a></Typography>
								<IconButton sx={{
									'&:hover': {
										background: 'transparent'
									},
									width: "10px"

								}}>
									<FavoriteBorder />
								</IconButton>
							</Stack>
						</Stack>)}
					</Stack>

				</Stack>

			</Box>
		</>
	)
}

export default Favorite
