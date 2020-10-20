import React from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

export const CarouselCard = props => {
  const { subject, url } = props;

  const _renderTitleGroup = () => {
    return (
      <View style={styles.titleGroupContainer}>
        <Text style={styles.titleText}>{subject}</Text>
        <View style={styles.titleDivider} />
      </View>
    );
  };

  const _renderWebView = () => {
    return (
      <View style={styles.webViewContainer}>
        <WebView
          source={{ uri: url }}
          initialScale={100}
          javaScriptEnabled
          scrollEnabled
          automaticallyAdjustContentInsets={false}
          scalesPageToFit={false}
          cacheEnabled
          cacheMode="LOAD_DEFAULT"
          contentInset={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
          opacity={0.99}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {_renderTitleGroup()}
        {_renderWebView()}
      </View>
    </View>
  );
};

CarouselCard.propTypes = {
  subject: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    paddingTop: 20,
    width: '100%',
    marginTop: 15,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#CCCCCC',
  },
  titleGroupContainer: {
    flexDirection: 'column',
    alignSelf: 'center',
    width: '95%',
    marginRight: 13,
  },
  titleText: {
    paddingLeft: 2,
    fontSize: 24,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'left',
  },
  titleDivider: {
    marginTop: 4,
    marginLeft: 4,
    marginRight: 4,
    backgroundColor: '#333333',
    borderColor: '#333333',
    height: 1,
  },
  webViewContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '95%',
    marginTop: 8,
    justifyContent: 'center',
    marginRight: 13,
    zIndex: 2000,
  },
});

export default CarouselCard;
