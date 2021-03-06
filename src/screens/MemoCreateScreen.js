import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import firebase from 'firebase';
import { db } from '../../App';

import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
  state = {
    body: '',
    body2: '',
  }

  handleSubmit() {
    // const db = firebase.firestore();
    // const settings = {
    //   timestampsInSnapshots: true,
    // };
    const { currentUser } = firebase.auth();
    // db.settings(settings);
    db.collection(`users/${currentUser.uid}/memos`).add({
      // body: this.state.body,
      body: this.state.body2,
      createdOn: new Date(),
    })
      .then(() => {
        this.setState({ body: this.state.body2 });
        this.props.navigation.goBack();
      })
      .catch((error) => {
        global.console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body2: text }); }}
        />
        <CircleButton onPress={this.handleSubmit.bind(this)}>
          {'\uf00c'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
    paddingTop: 32,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default MemoCreateScreen;
