import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  NativeModules,
  Animated,
  Platform,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselCard from './CarouselCard';
const { width: viewportWidth } = Dimensions.get('window');

const data = [
  { subject: 'Github', url: 'https://www.github.com' },
  { subject: 'Apple', url: 'https://www.apple.com' },
  { subject: 'Oracle', url: 'https://www.oracle.com' },
  { subject: 'Amazon', url: 'https://www.amazon.com' },
];

const CarouselExample = props => {
  let _carouselRef = null;
  const [activeIndex, setActiveIndex] = useState(0);

  // ---------------------
  // Private functions
  // ---------------------
  const _renderDots = () => {
    return (
      <View style={styles.dots}>
        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeIndex}
          containerStyle={styles.dotsContainerStyle}
          dotColor={'#333333'}
          inactiveDotColor={'#333333'}
          carouselRef={_carouselRef}
          tappableDots
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
          }}
          animatedDuration={0}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    );
  };

  const _renderItem = ({ item, index }) => {
    const { subject, url } = item;

    return <CarouselCard subject={subject} url={url} />;
  };

  const _onSnapToItem = index => {
    setActiveIndex(index);
  };

  // ---------------------
  // Render
  // ---------------------
  const _wp = percentage => {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
  };

  const slideWidth = _wp(98);
  const itemHorizontalMargin = _wp(-6);
  const sliderWidth = viewportWidth;
  const itemWidth = slideWidth + itemHorizontalMargin * 1.2;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Carousel
          layout="default"
          // layout="stack"
          // layout="tinder"
          ref={c => {
            _carouselRef = c;
          }}
          data={data}
          renderItem={_renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          onSnapToItem={_onSnapToItem}
          inactiveSlideScale={0.98}
          callbackOffsetMargin={8}
        />
        {_renderDots()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: Platform.OS === 'ios' ? 46 : 0,
  },
  content: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  dots: {
    marginBottom: 2,
  },
  dotsContainerStyle: {
    backgroundColor: '#F2F2F2',
    paddingTop: 10,
  },
});

export default CarouselExample;
