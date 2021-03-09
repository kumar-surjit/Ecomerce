import React, {Component} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Linking,
  Platform,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import openMap from 'react-native-open-maps';
import Share from 'react-native-share';
import {showMessage} from 'react-native-flash-message';
import colors from '../styles/colors';

export function dialCall(phoneNumber) {
  if (Platform.OS === 'android') {
    phoneNumber = `tel:${phoneNumber}`;
  } else {
    phoneNumber = `telprompt:${phoneNumber}`;
  }

  Linking.openURL(phoneNumber);
}

export function openEmail(email) {
  Linking.openURL(`mailto:${email}`);
}

export default class TrackingModal extends Component {
  state = {
    modalVisible: false,
  };

  shareDetails = () => {
    Share.open({
      title: 'Share',
      message:
        'Tracking Details - \nPhone no: +919056167932 \nEmail: surjit9464@gmail.com',
    })
      .then((res) => {
        console.log('here', res);
        showMessage({
          message: 'Successfully shared!',
          type: 'success',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  closeButtonPressed = () => {
    const {modalVisible} = this.state;
    this.setModalVisible(!modalVisible);
    this.props.closeFunc();
  };

  render() {
    const {modalVisible} = this.state;
    console.log(this.props);
    return (
      <View style={[styles.centeredView, {display: this.props.display}]}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.props.visibility}
          onRequestClose={this.closeButtonPressed}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Order Placed!</Text>
              <View style={{marginBottom: 15}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.textHeadingSpacing}>
                    Tracking Details:
                  </Text>
                  <TouchableOpacity onPress={this.shareDetails}>
                    <MaterialCommunityIcons name="share" size={20} />
                  </TouchableOpacity>
                </View>

                <View style={styles.textSpacing}>
                  <Text>Phone No: </Text>
                  <TouchableOpacity
                    onPress={() => dialCall(+919056167932)}
                    style={{justifyContent: 'center'}}>
                    <Text>+919056167932</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.textSpacing}>
                  <Text>Email: </Text>
                  <TouchableOpacity
                    onPress={() => openEmail('surjit9464@gmail.com')}
                    style={{justifyContent: 'center'}}>
                    <Text>surjit9464@gmail.com</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    openMap({
                      end: 'Elante Mall, Industrial Area Phase I, Chandigarh',
                    })
                  }
                  style={[
                    styles.textSpacing,
                    {
                      backgroundColor: colors.themePinkColor,
                      paddingHorizontal: 12,
                      paddingVertical: 8,
                      marginTop: 8,
                      justifyContent: 'center',
                      borderRadius: 20,
                    },
                  ]}>
                  <Text style={[styles.modalText, {color: '#fff'}]}>
                    Track Your Package
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{alignSelf: 'center'}}
                onPress={this.closeButtonPressed}>
                <MaterialCommunityIcons
                  name="close-circle"
                  size={30}
                  color={'gray'}
                />
              </TouchableOpacity>
              {/* <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={this.closeButtonPressed}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable> */}
            </View>
          </View>
        </Modal>
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
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
  buttonOpen: {
    backgroundColor: '#F194FF',
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
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textHeadingSpacing: {
    paddingVertical: 10,
  },
  textSpacing: {
    paddingVertical: 4,
    flexDirection: 'row',
  },
});
