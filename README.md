# carousel-example
Item vertical scroll interferes with carousel horizontal scroll

Here is a small project that reproduces the issue. (created with `npx react-native init CarouselExample --version 0.62.0`)

I have a carousel where each item is a card that has a title and a WebView. On Android, when attempting to scroll the web page loaded in the webview, the gesture handler of the Carousel gets fired instead most of the time. On iOS, everything works fine.

Here is a gif with Android and iOS side by side showing the issue. The iOS build on the left works fine, but the Android build on the right shows that it's hard to scroll a webpage vertically without triggering the horizontal Carousel scroll.


# Initialize
- clone the repo
- cd `carousel-example`
- run `yarn`
- run `cd ios; pod install; cd ..`

# Run
- start the metro bundler `yarn start`
- start the iOS app `yarn ios`
- start the Android app `yarn android`

The project uses [npx](https://www.npmjs.com/package/npx), but it can be run without it if you have `react-native` installed globally

`react-native start`

`react-native run-ios`

`react-native run-android`
