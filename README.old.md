# react-native-thunder-talks
React-native app for 15-minute thunder-talk; adds two numbers together and presents the results modally

## Notes:
* What is react native?
    * *First-slide*
        * Library that builds upon React & JavaScript to create native apps in either Android / iOS or both
        * With what we know already, we can build apps that are tailored specifically to iOS or Android -- but we don't have to write or use Swift or Java
        * Allows you to use React & JavaScript during the build-process; your code is compiled into respective native Swift / Java code
        * The entire UI is compiled to native-code
            * All the UI elements, the buttons and so on, will be the native equivalents
    * *Second-slide*
        * Different from something like Cordova / Ionic apps, which are just a mobile-'wrapper' for your web-app; you can even write with Swift / Java
        * We don't work with CSS at all; it's not supported
        * We won't work with traditional html element anymore -- different to React -- which we will see in our render methods