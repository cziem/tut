import React, { Component } from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import HomeContainer from './Home/containers/HomeContainer';

export default Actions.create(
	<Scene key="root" hideNavBar>
		<Scene key="Home" component={HomeContainer} title="Home" hideNavBar initial />
	</Scene>
);
