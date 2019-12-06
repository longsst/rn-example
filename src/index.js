import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Index from './pages/Index'
const MainNavigator = createSwitchNavigator({
  Index
});
export default createAppContainer(MainNavigator);
