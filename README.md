
- TROUBLESHOOT

CFBundleIdentifier not found

If errors occur during the building of iOS app do the following steps: 

1. Change the build type from New Build System to Legacy build
2. Fix the glog file:
   
"I had the same issue, using this steps solves for me:

Running into the same issue here after upgrading from 0.44. None of the above solutions or clearing caches did the trick for me. Here's what I did to get things working again:
In the Terminal, navigate to the react-native/third-party/glog folder inside node_modules (for me, this was cd node_modules/react-native/third-party/glog-0.3.4)
Once actively in this folder, run sh ../../scripts/ios-configure-glog.sh
Glog is configured and the required config.h header file is created for Xcode to find
Run your iOS BUILD
Regards!"

3. That should fix the iOS issues