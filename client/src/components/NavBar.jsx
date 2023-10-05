import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
	const navigate = useNavigate()
	const navbg = '#002e29'
	return (
		<Stack direction='row' bgcolor={navbg} height='80px' paddingLeft={2}>
			<Stack flexGrow={1}>
				<Typography fontSize='3rem' fontWeight={700} color="white">
					<a href='/' style={{ textDecoration: "None" }}>School Match</a>
				</Typography>
			</Stack>

			<Stack spacing={2} direction='row' padding={2}>
				{
					[{ name: "Home", link: "/dashboard" },
					{ name: "Profile", link: "/profile" },
					{ name: "Favorites", link: '/favorites' },
					{ name: "Sign Up", link: '/register' },
					{ name: "Search", link: '/search' },
					{ name: "Logout", link: '/' }
					]
						.map((v, i) => {
							return <Button key={i} onClick={() => { navigate(v.link) }}>
								<Typography color="white" fontSize='1.5rem'>
									{v.name}
								</Typography>
							</Button>
						})}

			</Stack>
		</Stack>
	)
}

export default NavBar
