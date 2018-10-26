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
    Image,
    ScrollView
    
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
为Greeting类定义了一个name属性
*/ 
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

/**
为SomeWords类定义了一个age属性
*/ 

class SomeWords extends Component{
    render() {
        return (
        <Text> 
        Hello {this.props.age}!
        </Text>
        );
    }
}

/**
 核心代码区：所有逻辑代码编写的地方
 */

export default class App extends Component<Props> {
  render() {
    return (
            
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Greeting name = 'kenan'/>
                <Greeting name = 'kenan'/>
                <Greeting name = 'kenan'/>
                <SomeWords age = '11'/>
                <SomeWords age = '23'/>
                <SomeWords age = '44'/>

        <Text style={styles.instructions}>{instructions}</Text>
            <Text style = {styles.Welcome}> Hello world!</Text>
            
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

class WhyReactNativeIsSoGreat extends Component{
    render() {
        return (
                <View>
                <Text>
                如何你喜欢在web上使用React，那你k也肯定n会喜欢React Native。
                </Text>
                
                <Text>
                基本上就是用原生组件比如'View'和'Text'
                来代替web组件'div'和'span'。
                </Text>
                </View>
                );
    }
}


class AwkwardScrollingImageWithText extends Component{
    render() {
        return (
        <ScrollView>
                <Image
                source = {{url:'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}}
                style = {{width:320, height:180}}
                />
                
                <Text>
                在iOS上，React Native 的scrollviewz组件封装s的是原生的UIScrollView。
                在Android上，封装的s则是原生的Scrollview。
                
                在iOS上，React Native的image组件封装的是原生的UIImageView。
                在Android上，封装的则是原生的ImageView。
                
                React Native封装了这些基础的原生组件，使你在得到媲美原生应用性能的同时，还能受益于React优雅的架构设计。
                
                </Text>
        </ScrollView>
        )
    }
}
