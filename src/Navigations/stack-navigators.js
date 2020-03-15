import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReservationScreen from '../Screens/Reservation';
import DirectionsScreen from '../Screens/Directions';
import ContactUsScreen from '../Screens/ContactUs';
import HouseAccessScreen from '../Screens/HouseAccess';
import ProfileScreen from '../Screens/Profile';
import LoginScreen from '../Screens/Auth/Login';
import WelcomeScreen from '../Screens/Auth/Welcome';
import RegisterScreen from '../Screens/Auth/Register';
import DetailsScreen from '../Screens/Details';

const ToggleDrawer = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.toggleDrawer() } >
            <Ionicons style={{ marginRight: 15 }} name="md-menu" size={24} color="black" />
        </TouchableOpacity>
    );
}

// Stack Navigators for Bottom Tab

const ReservationStack = createStackNavigator();
export const ReservationNavigator = () => (
    <ReservationStack.Navigator initialRouteName="Reservation" screenOptions={{ headerRight: () => <ToggleDrawer/> }}>
        <ReservationStack.Screen name="Reservation" component={ReservationScreen} />
        <ReservationStack.Screen name="Reservation-Details" component={DetailsScreen} />
    </ReservationStack.Navigator>
);

const ContactUsStack = createStackNavigator();
export const ContactUsNavigator = () => (
    <ContactUsStack.Navigator initialRouteName="ContactUs" screenOptions={{ headerRight: () => <ToggleDrawer/> }}>
        <ContactUsStack.Screen name="ContactUs" component={ContactUsScreen} />
    </ContactUsStack.Navigator>
);

const HouseAccessStack = createStackNavigator();
export const HouseAccessNavigator = () => (
    <HouseAccessStack.Navigator initialRouteName="HouseAccess" screenOptions={{ headerRight: () => <ToggleDrawer/> }}>
        <HouseAccessStack.Screen name="HouseAccess" component={HouseAccessScreen} />
        <HouseAccessStack.Screen name="HouseAccess-Details" component={DetailsScreen} />
    </HouseAccessStack.Navigator>
);

const DirectionsStack = createStackNavigator();
export const DirectionsNavigator = () => (
    <DirectionsStack.Navigator initialRouteName="Directions" screenOptions={{ headerRight: () => <ToggleDrawer/> }}>
        <DirectionsStack.Screen name="Directions" component={DirectionsScreen} />
    </DirectionsStack.Navigator>
);

// Stack Navigator for Profile page inside Draw Navigator

const ProfileStack = createStackNavigator();
export const ProfileNavigator = () => (
    <ProfileStack.Navigator initialRouteName="Profile" screenOptions={{ headerRight: () => <ToggleDrawer/> }}>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
);

// Auth Navigator

const AuthStack = createStackNavigator();
export const AuthNavigator = () => (
    <AuthStack.Navigator initialRouteName="Welcome" headerMode="none">
        <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
);
