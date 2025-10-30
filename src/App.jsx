'use client';
import { useState } from 'react';
import TabsComponent from './components/TabsComponent';
import './App.css';
import { Text, Box, Container } from '@chakra-ui/react';

function App() {
	return (
		<Box
			bg='#1a1a1a'
			color='white'
			minH='100vh'>
			<Container
				maxW='container.md'
				p={4}>
				<Text
					fontSize='xl'
					fontWeight='bold'
					mb={4}>
					Random Gift
				</Text>

				<TabsComponent />
			</Container>
		</Box>
	);
}

export default App;
