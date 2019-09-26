import React, { Component } from 'react'

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

// Serviços
import api from '../services/api'

export default class Main extends Component {
    static navigationOptions = {
        title: "Repositorios - Gabriel Santana"
    }

    state = {
        countador: 0,
        itensRequisicao: []
    };

    componentDidMount() {
        this.CarregarSalas('abralvs');

        //console.log(this.props.navigation)
    }

    CarregarMais = () => { }


    // Tem q ser Arrow function, pois, se nao for, o "this" nao é reconhecido.
    CarregarSalas = async (username) => {
        try {
            const salas = await api.get(`/users/${username}/repos`)
            this.setState({ itensRequisicao: salas.data })
        } catch (err) {
            console.log(err)
        }
    }

    Renderizador = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.titulo}>{item.name}</Text>
            <Text style={styles.descricao}>{item.description}</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    //console.log(item)
                    console.log(this.props.navigation.params)
                    this.props.navigation.navigate('Repo', { Item: item })
                }}>
                <Text
                    style={styles.btnText}
                >Acessar
                </Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.itensRequisicao}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.Renderizador}
                // Isso aqui é para fazer o carregamento igual do instagram.
                // onEndReached={this.CarregarMais}
                // onEndReachedThreshold={0.1}
                ></FlatList>
            </View>
        );
    }
}


styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },
    list: {
        padding: 20
    },
    productContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },
    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },
    descricao: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        marginBottom: 2,
        lineHeight: 24
    },
    btn: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center"
    },
    btnText: {
        fontSize: 16,
        color: "#DA552F",
        fontWeight: "bold"
    }
})