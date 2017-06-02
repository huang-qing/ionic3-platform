/**
 * http://ionicframework.com/docs//resources/platform-setup/windows-setup.html
 * https://ionicframework.com/docs/intro/deploying/
 * 
 * nodejs
 * http://nodejs.cn/download/
 * 
 * 
 * Android:
 * http://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html
 * 
 * Java JDK:
 * http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
 * 
 * Android SDK:
 * https://developer.android.com/studio/install.html
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
 * ionic build android --release --prod
 * http://www.jianshu.com/p/dfd98ad47af1
 * 
 * Genymotion:
 * https://www.genymotion.com/download/
 * 
 * 
 * IOS:
 * 
 */


/**
 * 项目开发时，路径替换为需要使用的配置文件
 */
import { AppConfig } from './demo/app.config';

export {
    AppConfig as APPCONFIG
}