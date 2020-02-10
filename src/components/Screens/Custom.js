import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Animated, Easing } from 'react-native'







class lottieloader2 extends React.Component {


  state = {
    spinValue: new Animated.Value(0)
  }

  componentDidMount() {
    this.startAnimation()
  }
  startAnimation = () => {
    this.state.spinValue.setValue(0)
    Animated.timing(
      this.state.spinValue,
      {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        loop: true
      }
    ).start((a) => {
      if (a.finished) {
        this.startAnimation()
      }
    })
  }


  render() {



    return (



      <View style={styles.container}>

        <View>

          <Animated.Text
            style={{
              transform: [{
                rotate: this.state.spinValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg']
                })
              }]
            }}

          >
            home
        </Animated.Text>

        </View>

      </View>
    )

  }
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A6207E'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  }
})


export default lottieloader2