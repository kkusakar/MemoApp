import { createStackNavigator } from 'react-navigation';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const App = createStackNavigator({
  Home:   { screen: MemoListScreen },
  Detail: { screen: MemoDetailScreen },
  Edit:   { screen: MemoEditScreen },
  Login:  { screen: LoginScreen },
  Signup: { screen: SignupScreen },
}, {
  navigationOptions: {
    headerTitle: 'MEMOT',
    headerStyle: {
      backgroundColor: '#265366',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default App;
