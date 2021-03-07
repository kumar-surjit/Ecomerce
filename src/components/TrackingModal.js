import React, {Component} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Linking,
  Platform,
  TouchableOpacity,
} from 'react-native';
import navigationStrings from '../constants/navigationStrings';

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
                <Text style={styles.textHeadingSpacing}>Tracking Details:</Text>

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
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={this.closeButtonPressed}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
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
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textHeadingSpacing: {
    paddingVertical: 10,
  },
  textSpacing: {
    paddingVertical: 2,
    flexDirection: 'row',
  },
});
