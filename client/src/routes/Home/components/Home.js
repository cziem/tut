import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import Colors from '../../../components/Colors';


export default class CardHeaderFooterExample extends Component {
			state = {
				loading: true
			}

			async componentWillMount() {
				await Expo.Font.loadAsync({
					Roboto: require('native-base/Fonts/Roboto.ttf'),
					Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
					Product: require('native-base/Fonts/FontAwesome.ttf'),
					Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
				});
				this.setState({ loading: false });
			}
		
			render() {
				if (this.state.loading) {
					return null;
				}

				return (
					<Container>
						<Header />
						<Content>
							<Card>
								<CardItem header>
									<Text style={styles.title}>Top Up Tracker</Text>
								</CardItem>
								<CardItem>
									<Body>
										<Text style={styles.text}>
										It has been observed that most people regardless of thier income spend more than supposed on airtime and that is why we decide to come up with this app to help keep track of your daily top-ups so as to have a full history of your recharge.
										</Text>
									</Body>
								</CardItem>
								<CardItem footer>
									<Text>LFA18</Text>
								</CardItem>
						 </Card>
						</Content>
					</Container>
				);
			}
}


const styles = {
	title: {
		color: Colors.darkBlue,
		fontSize: 16
	},
	footer: {
		// fontSize: 14,
		fontFamily: 'Roboto_medium'
	},
	text: {
		fontFamily: 'Roboto'
	}
};
