import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Button from '.';

storiesOf('UI / Button', module)
	.addDecorator((getStory) => getStory())
	.add('Default', () => (
		<Button onPress={action('clicked-text')} type="success">
			<Text>{text('Button text', 'Hello Button')}</Text>
		</Button>
	));
