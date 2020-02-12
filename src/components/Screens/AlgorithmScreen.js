import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import Toast from 'react-native-simple-toast'









const HeaderAlgo = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 15,
        alignItems: 'center',
      }}
    >


      <View
        style={{
          marginLeft: 15,
        }}
      >
        <TouchableOpacity
          style={{
            paddingHorizontal: 8,
            paddingVertical: 5,
          }}
          onPress={() => {
            props.navigation.goBack()
          }}
        >
          <FontAwesome5Icon name='arrow-right' size={25} color='#3e3e3e' />
        </TouchableOpacity>
      </View>



      <View
        style={{
          marginLeft: 'auto',
        }}
      >
        <View
          style={{
            borderWidth: 2,
            borderColor: 'orange',
            padding: 5,
            borderRadius: 50,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
            }}
          >
            {props.number}
          </Text>
        </View>
      </View>


    </View>

  )
}


export const TopText = (props) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          paddingVertical: props.compact ? 5 : 50,
          maxWidth: '60%',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontFamily: props.theme.PRIMARY_FONT_FAMILY,
            fontSize: props.theme.MAIN_FONT_SIZE + 6,
          }}
        >
          {props.text}
        </Text>
      </View>
    </View>
  )
}



export const SelectAlgo = (props) => {

  const [options, setoptions] = React.useState([])

  React.useEffect(() => {

    let o = props.childs.map((child, index) => {
      if (index === props.initSelect) {
        return { text: child.text, selected: true }
      }
      return { text: child.text, selected: false }
    })
    setoptions(o)
  }, [props.childs, props.initSelect])

  return (
    <View
      style={{
        paddingVertical: 10,
      }}
    >
      {
        options.map((option, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                disabled={props.disabled}
                onPress={() => {
                  props.changedSelected(index)
                  const o = options.map((oo, ii) => {
                    if (index === ii) {
                      return { ...oo, selected: true }
                    }
                    return { ...oo, selected: false }
                  })
                  setoptions(o)
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#a1a1a1',
                    marginLeft: 10,
                    marginVertical: 5,
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    width: '90%',
                  }}
                >
                  <Text
                    style={{
                      maxWidth: '85%',
                      color: 'white',
                      fontFamily: props.theme.PRIMARY_FONT_FAMILY,
                      fontSize: props.theme.MAIN_FONT_SIZE,
                    }}
                  >
                    {option.text}
                  </Text>
                  <View
                    style={{
                      marginLeft: 'auto',
                    }}
                  >
                    <View>
                      {
                        option.selected
                          ?
                          <FontAwesome5Icon name='check-square' solid size={props.theme.MAIN_FONT_SIZE} color='#36a5ad' />
                          :
                          <FontAwesome5Icon name='square' light size={props.theme.MAIN_FONT_SIZE} color='#36a5ad' />
                      }
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )
        })
      }
    </View>
  )
}


const NextButton = (props) => {
  return (
    <View
      style={{
        marginTop: 10,
      }}
    >
      <TouchableOpacity onPress={props.onPress}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#32a885',
            marginLeft: 10,
            marginVertical: 5,
            paddingVertical: 10,
            paddingHorizontal: 15,
            width: '90%',
          }}
        >
          <Text
            style={{
              maxWidth: '85%',
              color: 'white',
              fontFamily: props.theme.PRIMARY_FONT_FAMILY,
              fontSize: props.theme.MAIN_FONT_SIZE,
            }}
          >بعدی</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}





const AlgorithmScreen = (props) => {

  const [selected, setSelected] = React.useState(-1)


  const [diagram, setdiagram] = React.useState({ id: 0, text: '', childs: [] })

  const [pathToThis, setpathToThis] = React.useState([])


  React.useEffect(() => {

    setpathToThis([...props.navigation.getParam('pathToThis', []), diagram.text])

    let d = props.navigation.getParam('diagram')


    if (typeof (d.text) === 'string' && d.childs instanceof Array) {
      setdiagram(d)
      if (d.childs.length === 1) {
        setSelected(0)
      }
    }
  }, [])

  React.useEffect(() => {
    setpathToThis([...props.navigation.getParam('pathToThis', []), diagram.text])
  }, [diagram])




  return (

    <ScrollView
      style={{
        flex: 1,
        backgroundColor: props.theme.PRIMARY_BACKGROUND_COLOR,
      }}
    >

      <HeaderAlgo {...props} number={pathToThis.length} />



      <TopText {...props} text={diagram.text} />



      {
        diagram.childs.length > 0

          ?


          <>


            <SelectAlgo
              {...props}
              childs={diagram.childs}
              initSelect={selected}
              changedSelected={(s) => {
                setSelected(s)
              }}
            />



            <NextButton
              {...props}
              onPress={() => {
                if (selected > -1 && diagram.childs[selected]) {
                  props.navigation.push('Algorithm', {
                    diagram: diagram.childs[selected],
                    pathToThis,
                  })
                }
                else {
                  Toast.show('لطفا یک گزینه را انتخاب کنید')
                }
              }}
            />


          </>


          :


          <>




            <View>
              {
                pathToThis.map((text, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        width: '100%',
                        alignItems: 'center',
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: '#a1a1a1',
                          marginVertical: 5,
                          padding: 10,
                          width: '90%',
                        }}
                      >
                        <Text
                          style={{
                            color: 'white',
                            textAlign: 'center',
                            fontFamily: props.theme.PRIMARY_FONT_FAMILY,
                            fontSize: props.theme.MAIN_FONT_SIZE,
                          }}
                        >
                          {text}
                        </Text>
                      </View>
                      {pathToThis.length !== index + 1 ?
                        <FontAwesome5Icon name='arrow-down' color='#a1a1a1' size={20} />
                        : null}
                    </View>
                  )
                })
              }
            </View>



          </>







      }

    </ScrollView>

  )
}







AlgorithmScreen.navigationOptions = () => {
  return {
    header: null
  }
}




const mapStateToProps = state => {
  return {
    sqlite: state.localdb.sqlite,
    theme: state.theme,
  }
}

const mapDispatchToProps = {}


export default connect(mapStateToProps, mapDispatchToProps)(AlgorithmScreen)
