import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Scan from '../pages/Scan';
import Scanner from '../pages/Scanner';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Scan" component={Scan} />
      <AuthStack.Screen
        name="Scanner"
        component={Scanner}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;