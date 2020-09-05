import React, { Fragment, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Pressable, View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default (podiumComponent) => {
	const [isSelected, setIsSelected] = useState(false);

	const activateMedal = () => setIsSelected(!isSelected);

	const gradientColors = isSelected 
		? ['rgba(200,70,0,0)', '#e36b07'] 
		: ['transparent', 'transparent'];

	return (
		<View style={isSelected ? styles.active : styles.disabled}>
			<TouchableOpacity style={styles.medalContainer} onPress={activateMedal}>
				<LinearGradient
				  colors={gradientColors}
	        style={styles.gradient}
	      >
				<Image source={require('../assets/bronzeBanner.png')} />
				{podiumComponent}
				</LinearGradient>
			</TouchableOpacity>
			<Text style={styles.text}>Bronze</Text>
		</View>
	);
};

const styles = StyleSheet.create({
  disabled: {
  	paddingHorizontal: 10,
	  opacity: 0.3
	},
	active: {
		paddingHorizontal: 10,
		opacity: 1
	},
	gradient: {
		position: 'relative',
		bottom: 0,
		width: '100%',
    height: 400,
    alignItems: 'center',
		justifyContent: 'flex-end'
	},
	text: {
		padding: 10,
		fontWeight: '900',
		fontSize: 17,
		color: '#fff'
	}
});