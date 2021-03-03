import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Profile extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            color: '#7E808C',
            paddingHorizontal: 20,
            paddingVertical: 20,
            fontWeight: 'bold',
          }}>
          Profile
        </Text>
        <View>
          <View style={{height: 80, backgroundColor: '#535766'}}></View>
          <View
            style={{
              height: 60,
              justifyContent: 'space-around',
              flexDirection: 'row',
            }}>
            <View
              style={{
                position: 'relative',
                top: -20,
                backgroundColor: '#fff',
                padding: 12,
                height: 100,
                justifyContent: 'center',
                borderColor: '#c1c1c8',
                borderWidth: 0.5,
              }}>
              <Image
                source={{
                  uri:
                    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_210318.png&f=1&nofb=1',
                }}
                style={{
                  width: 80,
                  height: 100,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <Text
              style={{
                backgroundColor: '#FF3F6C',
                color: '#fff',
                alignSelf: 'flex-end',
                paddingHorizontal: 40,
                paddingVertical: 10,
              }}>
              LOG IN/SIGN UP
            </Text>
          </View>
        </View>
        <View style={{backgroundColor: '#e0e0e3', height: 15, marginTop: 30}} />
        <View>
          <View
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: '#e0e0e3',
              borderBottomWidth: 1.5,
            }}>
            <MaterialCommunityIcons
              name="dropbox"
              size={30}
              color={'#999BA3'}
              style={{flex: 2}}
            />
            <View style={{flex: 10}}>
              <Text
                style={{color: '#535766', fontWeight: 'bold', marginBottom: 4}}>
                Orders
              </Text>
              <Text style={{color: '#999BA3', fontSize: 12}}>
                Check your order status
              </Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              style={{flex: 1}}
            />
          </View>
          <View
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: '#e0e0e3',
              borderBottomWidth: 1.5,
            }}>
            <MaterialCommunityIcons
              name="dropbox"
              size={30}
              color={'#999BA3'}
              style={{flex: 2}}
            />
            <View style={{flex: 10}}>
              <Text
                style={{color: '#535766', fontWeight: 'bold', marginBottom: 4}}>
                Help Center
              </Text>
              <Text style={{color: '#999BA3', fontSize: 12}}>
                Help regarding your recent purchases
              </Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              style={{flex: 1}}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
