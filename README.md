# react-native-thunder-talks
React-native app for 15-minute thunder-talk; adds two numbers together and presents the results modally
# Goal:
   * Be able to talk through -- in-depth -- the making of a simple react-native app using what we know from react & js
      * Must be able to do so from start to finish in ~9-10 minutes
      * Simple, clear, straightfoward
         * Explain the whys

## Notes:
* What is react native?
    * *First-slide*
        * Library that builds upon React & JavaScript to create native apps in either Android / iOS or both
        * With what we know already, we can build apps that are tailored specifically to iOS or Android -- but we don't have to write or use Swift or Java
        * Allows you to use React & JavaScript during the build-process; your code is compiled into respective native Swift / Java code
        * The entire UI is compiled to native-code
            * All the UI elements, the buttons and so on, will be the native equivalents
        * Maybe mention [airBnb] <https://www.youtube.com/watch?v=8qCociUB6aQ>
            *   

    * *Second-slide*
        * Different from something like Cordova / Ionic apps, which are just a mobile-'wrapper' for your web-app; you can even write with Swift / Java
        * We don't work with CSS at all; it's not supported
        * We won't work with traditional html element anymore -- different to React -- which we will see in our render methods

    * Code:
        * Android / iOS folders hold the config files and builds related to the specific apps
        * index.js registers a component which is a function which returns our App.js

### App.js
* Our App.js is instantly recognisable, it's a normal React component
    * Render method returns JSX, no html / css is used
    * React native doesn't work with the normal dom
* *Components:*
    * View; essentially our div replacement
    * Text; our paragraph or span replacement
    * StyleSheet; allows you to create 'classes', like this property
        * Every core component in 'react-native' accepts a 'style' property -- you can pass it one 'class' of styles, or an array of styles just like you could with html & css

### From skeleton to solution:
1. Talk through setup w react-native getting started guide; simulator
2. App.js looks familiar; except we are pulling in the react-native components we need in order to build a mobile user-interface
3. Introduce some of the components; View, Text
4. Render method
5. StyleSheet component
6. Add a button, get it to log something
7. Build constructor; this.state w the stuff we need
8. TextInput(s) -- talk about differences in interfacing with web vs. mobile; keyboardType
9. onChangeText setState w refactoring; rewrite addNumbers
10. Ternary to show results on submitted
11. Modal to present the results on submit -- complete code is available on master 



