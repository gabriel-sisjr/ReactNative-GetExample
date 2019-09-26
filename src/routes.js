import { createStackNavigator } from 'react-navigation'

import Main from './pages/main'
import Repo from './pages/repositorio'

export default createStackNavigator({
    Main,
    Repo
},
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#7159c1"
            },
            headerTintColor: "#FFF"
        }
    }
);