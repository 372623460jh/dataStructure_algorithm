# 原生Android应用中内嵌RN
> 环境以及版本：
> python v2.7.13 x64 |
> node v6.10.3 |
> npm v3.10.10 |
> Android Studio v2.2.2 |
> React v15.4.1 |
> React-Native v0.39.2 |
> Android-SDK 23 

---

## 1.用AS新建原生Android空项目

- 如图:

    ![Alt text](http://img.ijianghe.cn/images/jiang/rn1.png)

- 创建完成后的文件目录结构如下：

    ![Alt text](http://img.ijianghe.cn/images/jiang/rn2.png)

## 2.使用npm在原生android根目录下初始化项目
```shell
$ npm init
```
- 如图(注：name必须为全小写):

    ![Alt text](http://img.ijianghe.cn/images/jiang/rn3.png)

- 修改package.json文件(这里之所以限定版本是因为不同版本之间可能会用兼容问题。在实际开发中发现"react": "15.4.1"与"react-native": "0.39.2"可以兼容)
```json
"scripts": {
  "start": "node node_modules/react-native/local-cli/cli.js start"
}
"dependencies": {
  "react": "15.4.1",
  "react-native": "0.39.2"
}
```

- 修改后如下

    ![Alt text](http://img.ijianghe.cn/images/jiang/rn4.png)

## 3.使用npm安装
```shell
$ npm install
```

> 安装过程中的报错信息，例如require react@某.某.某版本, but none was installed 说明react 和 react-native的版本不兼容需更换版本（测试中react 15.4.1 和react-native 0.39.2是兼容的）

- 出现以下情况说明下载成功，项目下会多一个node_modules里面就是react 和rn相关

    ![Alt text](http://img.ijianghe.cn/images/jiang/rn5.png)

## 4.新建`.flowconfig`文件
> 在项目根目录下新建`.flowconfig`文件
- `.flowconfig`文件内容为:
```
[ignore]
; We fork some components by platform
.*/*[.]android.js

; Ignore templates for 'react-native init'
.*/local-cli/templates/.*

; Ignore the website subdir
<PROJECT_ROOT>/website/.*

; Ignore "BUCK" generated dirs
<PROJECT_ROOT>/\.buckd/

; Ignore unexpected extra "@providesModule"
.*/node_modules/.*/node_modules/fbjs/.*

; Ignore duplicate module providers
; For RN Apps installed via npm, "Libraries" folder is inside
; "node_modules/react-native" but in the source repo it is in the root
.*/Libraries/react-native/React.js
.*/Libraries/react-native/ReactNative.js

[include]

[libs]
Libraries/react-native/react-native-interface.js
flow/

[options]
emoji=true

module.system=haste

experimental.strict_type_args=true

munge_underscores=true

module.name_mapper='^[./a-zA-Z0-9$_-]+\.\(bmp\|gif\|jpg\|jpeg\|png\|psd\|svg\|webp\|m4v\|mov\|mp4\|mpeg\|mpg\|webm\|aac\|aiff\|caf\|m4a\|mp3\|wav\|html\|pdf\)$' -> 'RelativeImageStub'

suppress_type=$FlowIssue
suppress_type=$FlowFixMe
suppress_type=$FixMe

suppress_comment=\\(.\\|\n\\)*\\$FlowFixMe\\($\\|[^(]\\|(\\(>=0\\.\\(4[0-5]\\|[1-3][0-9]\\|[0-9]\\).[0-9]\\)? *\\(site=[a-z,_]*react_native_oss[a-z,_]*\\)?)\\)
suppress_comment=\\(.\\|\n\\)*\\$FlowIssue\\((\\(>=0\\.\\(4[0-5]\\|[1-3][0-9]\\|[0-9]\\).[0-9]\\)? *\\(site=[a-z,_]*react_native_oss[a-z,_]*\\)?)\\)?:? #[0-9]+
suppress_comment=\\(.\\|\n\\)*\\$FlowFixedInNextDeploy
suppress_comment=\\(.\\|\n\\)*\\$FlowExpectedError

unsafe.enable_getters_and_setters=true

[version]
^0.45.0
```

## 5.项目根目录下新建 index.android.js

```javaScript
'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World</Text>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
```

## 6.修改app中`build.gradle`文件

- 文件位置

    ![Alt text](http://img.ijianghe.cn/images/jiang/rn6.png)

- 将app中`build.gradle`文件修改为:

> 配置文件中最大版本不能超过23最低不能低于16,添加以下信息到相应位置.

![Alt text](http://img.ijianghe.cn/images/jiang/rn7.png) 

## 7.为 React Native 添加一个 maven 依赖的入口

```
allprojects {
    repositories {
        ...
        maven {
            // All of React Native (JS, Android binaries) is installed from npm
            url "$rootDir/../node_modules/react-native/android"
        }
    }
    ...
}
```

- 如下图：
    ![Alt text](http://img.ijianghe.cn/images/jiang/rn8.png) 

## 8.在新建的原生android项目中新建一个用于装载RN的activity

- activity内容如下：

```java
import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.view.KeyEvent;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

/**
 * Created by jianghe on 2017/5/11.
 */
public class MyReactActivity extends Activity implements DefaultHardwareBackBtnHandler {
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")//制定ReactInstanceManager对应的js文件
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();

        // 注意这里的HelloWorld必须对应“index.android.js”中的
        // “AppRegistry.registerComponent()”的第一个参数
        mReactRootView.startReactApplication(mReactInstanceManager, "HelloWorld", null);
        setContentView(mReactRootView);
    }
    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    @Override
    protected void onPause() {
        super.onPause();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause(this);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostDestroy();
        }
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }
}
```

## 9.修改android清单文件

- 如下图：

    ![Alt text](http://img.ijianghe.cn/images/jiang/rn9.png) 

## 10.启动rn服务

```shell
$ npm start
```

> 补充个打包命令（将rn打包为bundle文件放入assets资源文件夹下）

```shell
$ react-native bundle  --platform android --dev false --entry-file index.android.js --bundle-output app/src/main/assets/index.android.bundle --assets-dest app/src/main/res/
```

> 后续会补充android+RN增量热更新以及预加载的文档