import {
	Box,
	Button,
	Text,
	Avatar,
	SegmentGroup,
	HStack,
} from '@chakra-ui/react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

export default function ProfilePageComponent() {
	return (
		<div>
			<div>
				<Avatar.Root
					margin={10}
					marginRight={'23%'}
					size='2xl'>
					<Avatar.Fallback name='Test Name' />
				</Avatar.Root>
				<SegmentGroup.Root
					defaultValue='mute'
					size='xs'
					bgColor='#5153663d'
					marginTop={'9%'}
					marginRight={'-30%'}>
					<SegmentGroup.Indicator />
					<SegmentGroup.Items
						items={[
							{
								value: 'mute',
								label: (
									<HStack>
										<FaVolumeMute />
									</HStack>
								),
							},
							{
								value: 'unmute',
								label: (
									<HStack>
										<FaVolumeUp />
									</HStack>
								),
							},
						]}
					/>
				</SegmentGroup.Root>
			</div>
			<Text textStyle='3xl'>TestName </Text>
			<Text>У вас є 0✨іскор </Text>
			<Button
				marginTop={4}
				variant='plain'
				color='#A8C7FA'>
				🕘Історія дій {...'>'}
			</Button>

			<Box
				p='4'
				borderWidth='1px'
				borderColor='border.disabled'
				color='fg.disabled'
				margin={8}
				borderRadius={10}
				minHeight={200}>
				No gifts yet
			</Box>
		</div>
	);
}
