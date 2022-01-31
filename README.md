# Dare App

To begin, be sure that you have react native installed. This can be done by following the official guide [here](https://reactnative.dev/docs/environment-setup).

Once you have react-native working you need to install the dependencies with 
```console
npm install
```


If this goes smoothly then you should be all set to run the app! There are two options for this. The first option is to run in a simulator which can be done with 
```console
npm ios
```
*The app is not built for android so only iOS will work*

In order to run it on device you need to have Xcode installed. Then open up the `dareapp.xcworkspace` file and sign the app with your developer account. Then hit the play/build button in the top left and the app should run!

By default the app is in development mode. If you want to chagne this go into **Product → Scheme → Edit Scheme.** and change the Build Configuration from Debug to Release.