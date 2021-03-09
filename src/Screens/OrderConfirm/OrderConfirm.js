import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import imagePath from '../../../imagePath';
import colors from '../../styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {LinearGradient} from 'expo-linear-gradient';
import navigationStrings from '../../constants/navigationStrings';

export default class OrderConfirm extends Component {
  continueShoppingButton = () => {
    this.props.navigation.navigate(navigationStrings.Home, {addedToBag: -1});
  };

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      this.props.navigation.navigate(navigationStrings.Home, {addedToBag: -1});
    });
  }

  componentWillUnmount() {
    console.log('in Order Confirmation unmount');
    this.focusListener();
  }

  render() {
    console.log(this.props.route.params);
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={{alignItems: 'center', marginBottom: 20, elevation: 10}}>
            <Image
              source={imagePath.ic_confirm}
              tintColor={colors.confirmGreen}
              style={{
                width: 80,
                height: 80,
                margin: 20,
              }}
            />
            <Text style={{fontFamily: 'Nunito-Bold', marginBottom: 10}}>
              Your Order is Successful
            </Text>
            <Text
              style={{
                fontFamily: 'Nunito-SemiBold',
                color: colors.themeLightPink,
              }}>
              Order Id: #12345678
            </Text>
          </View>
          <View style={{height: 18, backgroundColor: '#ececec'}} />
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 25,
              paddingVertical: 15,
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="truck-delivery"
              size={25}
              color={colors.themePinkColor}
              style={{marginRight: 15}}
            />
            <Text style={{fontSize: 14}}>
              Estimated Delivery by{' '}
              <Text style={{fontWeight: 'bold'}}>20th Mar, Saturday</Text>
            </Text>
          </View>
          <View style={{height: 18, backgroundColor: '#ececec'}} />
          <View style={{padding: 20}}>
            <View style={styles.buttonStyle}>
              <LinearGradient
                colors={['#B765D7', '#EE609C']}
                style={styles.gradientStyle}
                start={[0, 0]}
                end={[1, 0]}>
                <Text style={styles.buttonText}>
                  Your Bank Details are Missing.Add Bank Details to Receive your
                  Payments.
                </Text>
                <TouchableOpacity
                  style={{
                    paddingHorizontal: 15,
                    paddingVertical: 8,
                    backgroundColor: '#fff',
                    alignSelf: 'center',
                    borderRadius: 5,
                    marginTop: 12,
                  }}>
                  <Text style={{color: '#DD66B2'}}>Add Bank Detail</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
          <View style={{height: 18, backgroundColor: '#ececec'}} />
          <View style={{paddingHorizontal: 15, paddingVertical: 15}}>
            <Text
              style={{
                fontFamily: 'Nunito-Bold',
                fontSize: 16,
                paddingBottom: 8,
              }}>
              Price Summary
            </Text>
            <View style={styles.priceStyling}>
              <Text style={[styles.priceTextStyling, {color: '#929292'}]}>
                Bag Total
              </Text>
              <Text
                style={[styles.priceTextStyling, {fontFamily: 'Nunito-Bold'}]}>
                ₹{this.props.route.params.data.mrp}
              </Text>
            </View>
            <View style={styles.priceStyling}>
              <Text style={[styles.priceTextStyling, {color: '#929292'}]}>
                Total Savings
              </Text>
              <Text
                style={[styles.priceTextStyling, {fontFamily: 'Nunito-Bold'}]}>
                ₹{this.props.route.params.data.discount}
              </Text>
            </View>
            <View style={[styles.priceStyling, {marginTop: 4}]}>
              <Text
                style={[styles.priceTextStyling, {fontFamily: 'Nunito-Bold'}]}>
                Order Total
              </Text>
              <Text
                style={[styles.priceTextStyling, {fontFamily: 'Nunito-Bold'}]}>
                ₹{this.props.route.params.data.total}
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={{paddingHorizontal: 20, paddingVertical: 8}}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 8,
              paddingVertical: 12,
              backgroundColor: colors.themePinkColor,
              borderRadius: 4,
            }}
            onPress={this.continueShoppingButton}>
            <Text style={{color: '#fff', textAlign: 'center'}}>
              Continue Shopping
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gradientStyle: {
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  priceStyling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  priceTextStyling: {
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
  },
});
