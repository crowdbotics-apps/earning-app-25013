import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile214619Navigator from '../features/UserProfile214619/navigator';
import Settings214618Navigator from '../features/Settings214618/navigator';
import Settings214616Navigator from '../features/Settings214616/navigator';
import SignIn2214614Navigator from '../features/SignIn2214614/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile214619: { screen: UserProfile214619Navigator },
Settings214618: { screen: Settings214618Navigator },
Settings214616: { screen: Settings214616Navigator },
SignIn2214614: { screen: SignIn2214614Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
