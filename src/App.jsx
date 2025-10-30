'use client';
import { useState } from 'react';
import TabsComponent from './components/TabsComponent';
import './App.css';
import { Text } from '@chakra-ui/react';

function App() {
	return (
		<>
			<Text marginLeft={10}>Random Gift</Text>
			<TabsComponent />
		</>
	);
}

export default App;
