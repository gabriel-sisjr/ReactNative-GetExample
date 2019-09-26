import React from 'react'

import { Text } from 'react-native'

const Repo = () => {
    return <Text>Opa</Text>
}

Repo.navigationOptions = ({ navigation }) => ({
    title: "navigation.params.item.nome"
})

export default Repo;