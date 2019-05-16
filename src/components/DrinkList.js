import React from 'react';
import { Text, ScrollView, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

import { type DrinkItem } from '../records/Drink';
import SoftDrink from './Drink';
import { fetchDrinks } from '../actions/drinks';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    paddingTop: 20,
    paddingBottom: 20,
  }
});

type Props = {
  drinks: Array<DrinkItem>
};

class DrinkList extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchDrinks();
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={{paddingBottom: 10}}>{ this.props.drinks.length == 0 ? 'loading...' : 'Random Drinks' }</Text>
        {this.props.drinks.map((item: DrinkItem) => {
            return (
              <SoftDrink key={item.idDrink} drink={item} />
            )}
          )
        }
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {drinks: state.drinks}
}
const mapDispatchToProps = dispatch => ({
  fetchDrinks: () => dispatch(fetchDrinks()),
})

export default connect(mapStateToProps, mapDispatchToProps)(DrinkList);
