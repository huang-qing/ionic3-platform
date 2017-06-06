/**
 * 
 * custom-icons:
 * npm run ionic2-custom-icons
 * 
 * http://ionicframework.com/docs/resources/platform-setup/windows-setup.html
 * https://ionicframework.com/docs/intro/deploying/
 * 
 * nodejs
 * http://nodejs.cn/download/
 * 
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
 * Sign Android APK：-keytool
 * https://ionicframework.com/docs/intro/deploying/
 * https://cordova.apache.org/docs/en/dev/guide/platforms/android/index.html
 * http://www.jianshu.com/p/dfd98ad47af1
 * http://blog.csdn.net/yu17310133443/article/details/52701492
 * 
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
 * IOS:
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
 */



import { zh_CN } from './i18n/zh-CN';

var COLORS = ["#387ef5", '#000', "#f53d3d", "rebeccapurple", "#FFC125", "#32db64"];
var getColor = function () {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}
var pages = [];

//hello ionic page
var helloIonic = {
    id: 'hello-ionic',
    title: 'HELLO_IONIC',
    component: 'hello-ionic',
    iconSet: 'evil',
    iconName: 'heart',
    color: getColor(),
    style: null,
    api: '',
    next: null,
    actions: null,
    isNav: true,
    isTabs: true
};
pages.push(helloIonic);

// hello list page 
var helloList = {
    id: 'hello-list',
    title: 'MY_FIRST_LIST',
    component: 'hello-list',
    style: null,
    iconSet: '',
    iconName: 'list',
    color: getColor(),
    api: '',
    next: null,
    actions: null,
    isNav: false,
    isTabs: true
};
pages.push(helloList);

// list demo page 
var listDemo = {
    id: 'list-demo',
    title: 'LIST_PAGE',
    component: 'list-page',
    api: 'api/lists',
    iconSet: '',
    iconName: 'list-box',
    color: getColor(),
    style: {
        nolines: false,
        inset: false
    },
    actions: {
        button: {
            title: 'DETAIL_PAGE',
            component: 'detail-page',
            api: 'api/items',
            style: null,
            next: null
        },
        sliding: {

        }
    },
    next: {
        title: 'DETAIL_PAGE',
        component: 'detail-page',
        api: 'api/items',
        style: null,
        next: null,
        actions: null
    },
    isNav: true,
    isTabs: true
};
pages.push(listDemo);

// tabs demo page
var tabsDemo = {
    id: 'tabs-demo',
    //title: 'TABS-DEMO',
    title: 'Tabs示例',
    component: 'tabs-page',
    style: null,
    iconSet: '',
    iconName: 'list',
    color: getColor(),
    api: '',
    next: null,
    actions: null,
    isNav: true,
    isTabs: false
};
pages.push(tabsDemo);

const AppConfig = {
    i18n: {
        name: 'zh-CN',
        content: zh_CN
    },
    rootPage: 'tabs-page',
    router: pages
}

export { AppConfig };
