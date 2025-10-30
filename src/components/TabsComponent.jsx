'use client';
import { Center, Tabs } from '@chakra-ui/react';
import { CgProfile } from 'react-icons/cg';
import { FaGlobe, FaDice, FaGift } from 'react-icons/fa';
import ProfilePageComponent from './ProfilePageComponent';

export default function TabsComponent() {
	return (
		<Tabs.Root
			variant='enclosed'
			maxW='md'
			fitted
			colorPalette={'gray'}
			defaultValue={'profile'}
			justifySelf='center'
			justifyContent='center'
			textAlign='center'
			width={450}
			minWidth={100}>
			<Tabs.Content value='profile'>
				<ProfilePageComponent />
			</Tabs.Content>
			<Tabs.Content value='leaders'>Leaders</Tabs.Content>
			<Tabs.Content value='play'>Play</Tabs.Content>
			<Tabs.Content value='lotery'>Lottery</Tabs.Content>
			<Tabs.List
				bgColor='#0000003d'
				position='fixed'
				bottom='0'
				width='100%'
				display='flex'
				justifyContent='space-around'
				paddingY={2}
				backdropFilter='blur(10px)'
				borderTop='1px solid rgba(255,255,255,0.2)'
				zIndex='100'
				maxWidth='500px'>
				<Tabs.Trigger
					value='leaders'
					fontSize={25}>
					<FaGlobe />
				</Tabs.Trigger>
				<Tabs.Trigger
					value='play'
					fontSize={25}>
					<FaDice />
				</Tabs.Trigger>
				<Tabs.Trigger
					value='lotery'
					fontSize={25}>
					<FaGift />
				</Tabs.Trigger>
				<Tabs.Trigger
					value='profile'
					fontSize={25}>
					<CgProfile />
				</Tabs.Trigger>
			</Tabs.List>
		</Tabs.Root>
	);
}
