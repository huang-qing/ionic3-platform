/**
 * custom-icons:
 * npm run ionic2-custom-icons
 * 
 */

/**
 * 
 * npm install rimraf -g
 * rimraf node_modules
 * 
 */


/**
 * 
 * nodejs
 * http://nodejs.cn/download/
 * 
 * http://ionicframework.com/docs/resources/platform-setup/windows-setup.html
 * https://ionicframework.com/docs/intro/deploying/
 * 
 * Android:
 * http://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html
 * https://cordova.apache.org/docs/en/dev/guide/platforms/android/index.html
 * 
 * Java JDK:
 * http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
 * 
 * Android SDK:
 * https://developer.android.com/studio/install.html
 * 
 * Envionment Variables:
 * JAVA_HOME : C:\Program Files\Java\jdk1.8.0_131
 * ANDROID_HOME : C:\Users\huangqing\AppData\Local\Android\sdk
 * Path: %JAVA_HOME%\bin;%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\build-tools\25.0.3;
 * ----
 * 
 * Gradle:
 * https://gradle.org/install
 * 
 * ionic cli 2:
 * Build android:
 * ionic platform add android 
 * --- 
 * ionic platform rm android
 * ionic platform add android@latest
 * ionic resources
 * ---
 * ionic run android --prod --release
 * ionic build android --release --prod
 * http://www.jianshu.com/p/dfd98ad47af1
 * 
 * ionic cli 3:
 * https://github.com/ionic-team/ionic-cli/issues/2224
 * 
 * ionic cordova platform add android
 * ionic cordova run android --prod --release
 * ionic cordova build android --release --prod
 * 
 * Sign Android APK：-keytool
 * https://ionicframework.com/docs/intro/deploying/
 * https://cordova.apache.org/docs/en/dev/guide/platforms/android/index.html
 * http://www.jianshu.com/p/dfd98ad47af1
 * http://blog.csdn.net/yu17310133443/article/details/52701492
 * 
 * sn：my-alias
 * keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias
 * 
 * before android v7.0
 * platforms/android/release-signing.properties 
 * ---config auto signing
 * storeFile=build/outputs/apk/my-release-key.jks
 * keyAlias=my-alias
 * storePassword=huangqing
 * keyPassword=huangqing
 * ---
 * 
 * android>=7.0 use signing v2 :use zipalign before signing
 * cd platforms/android/build/outputs/apk/
 * zipalign -v 4 android-release-unsigned.apk ionic3-demo.apk
 * 
 * jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks ionic3-demo.apk my-alias
 * 
 * apksigner verify ionic3-demo.apk
 * 
 * Genymotion:
 * https://www.genymotion.com/download/
 * 
 * 
 */

/**
 * 
 * IOS:
 * 
 * VMware:
 * http://www.jianshu.com/p/25d2d781bd98
 * http://www.cnblogs.com/DrHao/p/4921929.html
 * VMware 菜单中的“虚拟机”→“安装 VMware 工具(T)”。Workstation 安装目录下的 darwin.iso 光盘镜像
 * 
 * VMware中的mac与主机windows的硬盘文件共享：
 * http://www.cnblogs.com/85538649/archive/2012/06/07/2539858.html
 * Mac->Finder->Finder 偏好设置->通用->已连接的服务器
 * 
 * 网络：VMware Workstation->编辑->虚拟网络编辑器->NAT
 * 
 * 优化：http://www.cnblogs.com/dr-hao/p/4921929.html
 * 
 * https://nodejs.org/en/
 * 
 * http://npm.taobao.org
 * http://www.cnblogs.com/feea/p/mac-cnpm.html
 * sudo －s
 * $ npm install -g cnpm --registry=https://registry.npm.taobao.org
 * 
 * https://git-scm.com
 * https://desktop.github.com
 * 
 * https://code.visualstudio.com/Download
 * 
 * Agreeing to the Xcode/iOS license
 * http://yijiebuyi.com/blog/988227abf54d474a11999c964f5ec038.html
 * 
 * ionic:
 * sudo －s
 * $ npm install -g ionic cordova
 * 
 * 
 * https://github.com/angular/angular-cli/issues/3541
 * 
 * https://cordova.apache.org/docs/en/latest/guide/platforms/ios/
 * 
 */

/**
 * ionic2 to ionic3 
 * https://ionicacademy.com/ionic-3-lazy-loading/
 * 
 * !!!使用npm加载node_modules，不要使用cnpm，webpack会出现错误，无法打包lazy-loading懒加载文件!!!
 * 
 */


/**
 * error: ionic build andrid --prod
 * 
 * You may need an appropriate loader to handle this file type. | import * as import35
 * https://github.com/ionic-team/ionic-app-scripts/issues/930
 * This should be fixed in 1.3.6. npm install @ionic/app-scripts@latest
 * 
 * Android signing apk signature V2
 * https://stackoverflow.com/questions/41391531/android-signing-apk-signature-v2
 * 
 */

import { AppConfig } from './demo/app.config';

export {
    AppConfig as APPCONFIG
}