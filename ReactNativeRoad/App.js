/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

/**
 导入库包 StyleSheet、Text、View
 组件导入区： 所有用到的组件都需要事先进行导入，包括样式也需要进行导入
 从RN中导入需要使用的系统包，
 */
import
{
    Platform,
    StyleSheet,
    Text,
    View,
    
} from 'react-native';

/**
 注册启动组件：组件只有注册后才能运行。
 */
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};

/**
 核心代码区：所有逻辑代码编写的地方
 */

export default class App extends Component<Props> {
  render() {
    return (
            
      <View style={styles.container}>
            
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
            <View style = {styles.container}>
            <Text style = {styles.Welcome}>Hello world!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            </View>
      </View>
    );
  }
}

/**
 组件样式区：render() 方法中用到的组件的样式，可以集中在这里编写
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#94C0DE',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
  },
  instructions: {
    textAlign: 'center',
    color: '#D93F1F',
    marginBottom: 15,
  },
});
