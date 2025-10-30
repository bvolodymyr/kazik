'use client';
import { Box, Text, Flex } from '@chakra-ui/react';
import TabsComponent from './components/TabsComponent';
import './App.css';

function App() {
	return (
		<Flex
			direction='column'
			align='center'
			bg='#1a1a1a'
			color='white'
			height='100vh'
			width='100vw'
			overflow='hidden'
			position='relative'>
			{/* Заголовок */}
			<Box pt={{ base: 4, md: 6 }}>
				<Text
					fontSize={{ base: 'lg', md: '2xl' }}
					fontWeight='bold'
					textAlign='center'>
					Random Gift
				</Text>
			</Box>

			{/* Контент по центру, але без виходу за межі екрана */}
			<Flex
				flex='1'
				width='100%'
				align='center'
				justify='center'
				overflow='hidden'
				pb='60px' // місце під табами
			>
				<Box
					p={{ base: 4, md: 6 }}
					width={{ base: '90%', md: '450px' }}
					maxW='500px'
					maxH='calc(100vh - 120px)' // не виходить за екран
					// скрол всередині, якщо потрібно
				>
					<TabsComponent />
				</Box>
			</Flex>
		</Flex>
	);
}

export default App;
