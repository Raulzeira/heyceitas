import React from 'react';
import { ActivityIndicator, StyleSheet, FlatList, Image, View, Text} from 'react-native';

export default class Recipe extends React.Component {

  //static navigationOptions = {
  //  tabBarLabel: null,
  //  tabBarIcon: ({ tintColor }) => (
  //    <Image source={require('../images/recipe.png')} style={[ styles.icon, {tintColor: tintColor} ]} />
  //  )
  //}

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      recipes: []
    }

    fetch('http://18.222.51.173/json/heyceitas.json')
    .then( res => res.json())
    .then(
      data => {
        console.log('[OK]: ' + data);
        this.setState({
          isLoading: false,
          recipes: data.receitas
        });
      }
    ).catch(e => console.log('[ERROR]: ' + e.message));
  }

  render() {

    if(this.state.isLoading){
      return(
        <View style={[styles.container, {
          justifyContent: 'center',
          alignItems: 'center'
        }]}>
          <ActivityIndicator />
        </View>
      );
    }

    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.recipes}
          renderItem={({item}) => <RecipeItem image={{ uri: item.imageURL}} recipe={item.nome} ingredients={item.ingredientes.length} />}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

// Aqui vai ser a interface da Receitas
class RecipeItem extends React.Component {
  render() {
    return(
      <View style={styles.recipe}>
        <Image source={this.props.image} style={styles.recipeImage}/>

        <Text>{this.props.recipe}</Text>
        <Text>{this.props.ingredients}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  recipe: {
    height: 100,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    flexDirection: 'row'
  },
  recipeImage: {
    height: 50,
    width: 50
  }
  //icon: {
  //  width: 24,
  //  height: 24
  //}
});
