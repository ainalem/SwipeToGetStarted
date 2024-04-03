import React from 'react';
import {
  Alert,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SwipeToStart from './SwipeToStart';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.bg}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.container}>
        <Text style={styles.title}>
          React Native{' '}
          <Text style={[styles.title, styles.titleLight]}>
            - Swipe to Start
          </Text>
        </Text>
        <View style={styles.swipeToStart}>
          <SwipeToStart onStart={() => Alert.alert('Here we go!')} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {backgroundColor: 'black', flex: 1},
  container: {},
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: '800',
    padding: 30,
  },
  titleLight: {
    fontWeight: '500',
  },
  swipeToStart: {
    marginHorizontal: 20,
  },
});

export default App;
