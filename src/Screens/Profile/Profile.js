import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  Alert,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import imagePath from '../../../imagePath';

export default class Profile extends Component {
  state = {
    profileImage:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_210318.png&f=1&nofb=1',
    modalVisible: false,
  };

  setModalVisible = () => {
    const {modalVisible} = this.state;
    this.setState({
      modalVisible: !modalVisible,
    });
  };

  openCamera = () => {
    ImagePicker.openCamera({
      width: 80,
      height: 100,
    })
      .then((image) => {
        this.setState({
          profileImage: image.path,
        });
        this.setModalVisible();
        console.log(image);
      })
      .catch((err) => {
        console.log(err);
        this.setModalVisible();
      });
  };

  openGallery = () => {
    ImagePicker.openPicker({
      width: 80,
      height: 100,
    })
      .then((image) => {
        this.setState({
          profileImage: image.path,
        });
        this.setModalVisible();
        console.log(image);
      })
      .catch((err) => {
        console.log(err);
        this.setModalVisible();
      });
  };

  render() {
    const {profileImage, modalVisible} = this.state;
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity onPress={this.openCamera}>
                <Image
                  source={imagePath.ic_camera}
                  style={{height: 50, width: 50, marginRight: 14}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.openGallery}>
                <Image
                  source={imagePath.ic_gallery}
                  style={{height: 50, width: 50, marginTop: 4}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
              <TouchableOpacity onPress={this.setModalVisible}>
                <Image
                  source={{
                    uri: profileImage,
                  }}
                  style={{
                    width: 80,
                    height: 100,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableOpacity>
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
        <View style={{backgroundColor: '#e0e0e3', height: 20, marginTop: 30}} />
        <View>
          <TouchableOpacity
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
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: '#e0e0e3',
              borderBottomWidth: 1.5,
            }}>
            <MaterialCommunityIcons
              name="face-agent"
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
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: '#e0e0e3',
              borderBottomWidth: 1.5,
            }}>
            <MaterialCommunityIcons
              name="heart-outline"
              size={30}
              color={'#999BA3'}
              style={{flex: 2}}
            />
            <View style={{flex: 10}}>
              <Text
                style={{color: '#535766', fontWeight: 'bold', marginBottom: 4}}>
                Wishlist
              </Text>
              <Text style={{color: '#999BA3', fontSize: 12}}>
                Your most loved styles
              </Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              style={{flex: 1}}
            />
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#e0e0e3', height: 20}} />
        <View>
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: '#e0e0e3',
              borderBottomWidth: 1.5,
            }}>
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={30}
              color={'#999BA3'}
              style={{flex: 2}}
            />
            <View style={{flex: 10}}>
              <Text
                style={{
                  color: '#535766',
                  fontWeight: 'bold',
                  marginBottom: 4,
                  fontSize: 15,
                }}>
                Scan for coupon
              </Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              style={{flex: 1}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              paddingHorizontal: 10,
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomColor: '#e0e0e3',
              borderBottomWidth: 1.5,
            }}>
            <MaterialCommunityIcons
              name="hand-heart"
              size={30}
              color={'#999BA3'}
              style={{flex: 2}}
            />
            <View style={{flex: 10}}>
              <Text
                style={{
                  color: '#535766',
                  fontWeight: 'bold',
                  marginBottom: 4,
                  fontSize: 15,
                }}>
                Refer & Earn
              </Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              style={{flex: 1}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
