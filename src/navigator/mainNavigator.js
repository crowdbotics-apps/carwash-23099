import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile180527Navigator from '../features/UserProfile180527/navigator';
import Maps180508Navigator from '../features/Maps180508/navigator';
import Settings180486Navigator from '../features/Settings180486/navigator';
import Settings180471Navigator from '../features/Settings180471/navigator';
import NotificationList180470Navigator from '../features/NotificationList180470/navigator';
import Maps180469Navigator from '../features/Maps180469/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile180527: { screen: UserProfile180527Navigator },
Maps180508: { screen: Maps180508Navigator },
Settings180486: { screen: Settings180486Navigator },
Settings180471: { screen: Settings180471Navigator },
NotificationList180470: { screen: NotificationList180470Navigator },
Maps180469: { screen: Maps180469Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
