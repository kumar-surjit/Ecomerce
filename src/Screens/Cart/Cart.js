import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default class Cart extends Component {
  state = {
    product: [
      {
        id: 1,
        name: 'LOCOMOTIVE',
        price: '995',
        discountedPrice: '646',
        discount: '35% OFF',
        coverImg:
          'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9785483/2020/12/3/9ae1cdc6-8d0d-42f9-9dde-87ad334d182c1606963394083LOCOMOTIVEMenWhiteSneakers1.jpg',
        rating: '3.9',
        sizes: [6, 7, 8, 9, 10, 11],
        imageCarousel: [
          'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9785483/2020/12/3/9ae1cdc6-8d0d-42f9-9dde-87ad334d182c1606963394083LOCOMOTIVEMenWhiteSneakers1.jpg',
          'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9785483/2020/12/3/aa2a7e4b-31bc-4abb-bc1e-ff2dddb1a8ad1606963394211LOCOMOTIVEMenWhiteSneakers2.jpg',
          'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9785483/2020/12/3/10f2d7fe-319e-46e2-bb55-cd7104242cb21606963394383LOCOMOTIVEMenWhiteSneakers3.jpg',
          'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9785483/2020/12/3/1512605b-2cc2-4f66-8dbc-0a11b301e8351606963394496LOCOMOTIVEMenWhiteSneakers4.jpg',
        ],
        description: 'Men White Urban Athleisure Shoes',
      },
    ],
  };

  componentDidMount() {
    console.log(this.props.route.params);
  }

  _renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <View style={styles.productDetailsContainer}>
        <Image
          source={{uri: item.product.coverImg}}
          style={{height: 150, flex: 0.4}}
        />
        <View style={{flex: 0.6, paddingHorizontal: 10}}>
          <Text style={{fontWeight: 'bold', paddingBottom: 4}}>
            {item.product.name}
          </Text>
          <Text numberOfLines={1}>{item.product.description}</Text>
          <Text style={{fontWeight: 'bold'}}>Quantity: {item.quantity}</Text>
          <Text style={{paddingTop: 6}}>
            ₹
            <Text style={styles.discountedPriceStyle}>
              {item.product.discountedPrice}
              {'  '}
            </Text>
            <Text style={styles.originalPriceStyle}>₹{item.product.price}</Text>
            <Text style={styles.discountStyle}> {item.product.discount}</Text>
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', paddingVertical: 16}}>
        <TouchableOpacity style={styles.buttonContainerLeft}>
          <Text style={styles.buttonLeftStyle}>REMOVE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 0.6,
          }}>
          <Text style={styles.buttonRightStyle}>MOVE TO WISHLIST</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    const {product} = this.state;
    return (
      <View
        style={{
          backgroundColor: '#dfdfe2',
          flex: 1,
          paddingHorizontal: 8,
          paddingVertical: 16,
        }}>
        <FlatList
          data={this.props.route.params.cartProducts}
          renderItem={this._renderItem}
          keyExtractor={(item) => String(item.product.id)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 4,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  productDetailsContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    marginHorizontal: 12,
    borderBottomWidth: 1.5,
    borderBottomColor: '#D4D5D9',
  },
  discountedPriceStyle: {
    fontWeight: 'bold',
  },
  originalPriceStyle: {
    textDecorationLine: 'line-through',
    color: '#919296',
  },
  discountStyle: {
    color: '#e56f2e',
  },
  buttonContainerLeft: {
    flex: 0.4,
    borderRightWidth: 1.5,
    borderRightColor: '#D4D5D9',
  },
  buttonLeftStyle: {
    color: '#696B79',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonRightStyle: {
    textAlign: 'center',
    color: '#FF4D77',
    fontWeight: 'bold',
  },
});
