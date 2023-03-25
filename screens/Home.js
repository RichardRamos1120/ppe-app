import {StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



//styles 
import screenStyle from './screensStyle'

export default function Home({navigation}) {



  return (
    <View style={screenStyle.container}>
      {/* <Text>this is my Home yey!</Text>
      <Button title="Go to Profile" onPress={()=> navigation.navigate("Profile")}/> */}

        <View>

            {/*Header*/}
            <View style={StyleSheet.create({
                flexDirection: 'row',
                justifyContent:'space-between',
                alignItems:"center"
            })}>
                <View>
                    <View>
                        <Text style={HomeStyle.title}>User's Name</Text>
                    </View>

                    <View>
                        <Text style={HomeStyle.titleSub}>User role</Text>
                    </View>
                </View>
                <View>
                    <Image source={require('../assets/default-thumbnail.png')}
                           style={StyleSheet.create({
                               width: 48,
                               height: 48,
                               borderRadius:999
                           })}/>
                </View>
            </View>

            {/*input for searching PPE*/}
            <View style={StyleSheet.create({
                marginTop:27,
                flexDirection:'row',
                gap:14,
                alignItems:"center"
            })}>
                <AntDesign name="search1" size={24} color="#828282" />
                <TextInput
                           placeholder="Search PPE..."
                           // secureTextEntry
                           autoCorrect={false}

                />

            </View>


            {/*PPE LIST TITLE*/}
            <View style={StyleSheet.create({
                marginTop:40,
            })}>
                <View style={StyleSheet.create({
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                })}>
                    <Text style={HomeStyle.defaultFontStyle}>PPE List</Text>
                    <TouchableOpacity>
                        <Text style={HomeStyle.defaultFontStyle}>Check out all</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        {/*PPE LIST*/}

        <View style={StyleSheet.create({
            marginTop:40,
            flexDirection: 'row',
            justifyContent:'space-between'
        })}>
            <View>
                <View style={StyleSheet.create({
                    flexDirection:'row',
                    gap:10,

                })}>
                    <Image source={require('../assets/default-ppe.png')}
                           style={StyleSheet.create({
                               width: 100,
                               height: 100,
                               borderWidth:1,
                               borderColor: '#139BFF'
                           })}/>

                    <View style={StyleSheet.create({
                        maxWidth:120,
                    })}>
                        <Text style={StyleSheet.create({
                            fontWeight:500,
                            fontSize:16,
                        })}>Belt</Text>
                        <Text>Description</Text>
                        <Text>Weight...</Text>
                    </View>

                </View>
            </View>

            <View style={StyleSheet.create({
                gap:10,
                alignItems:'center'
            })}>
                <TouchableOpacity style={StyleSheet.create({
                    backgroundColor:'#D9D9D9',
                    width:50,
                    height:50,
                    borderRadius:9999,
                    alignItems:'center',
                    justifyContent:'center'

                })}>
                    <Ionicons name="enter-outline" size={30} color="#fdfdfd" />
                </TouchableOpacity>

                <TouchableOpacity style={StyleSheet.create({
                    backgroundColor:'#D9C9C5',
                    width:40,
                    height:40,
                    borderRadius:9999,
                    alignItems:'center',
                    justifyContent:'center'

                })}>
                    <Ionicons name="enter-outline" size={20} color="#fdfdfd" />
                </TouchableOpacity>
            </View>
        </View>

        <View style={StyleSheet.create({
            marginTop:40,
            flexDirection: 'row',
            justifyContent:'space-between'
        })}>
            <View>
                <View style={StyleSheet.create({
                    flexDirection:'row',
                    gap:10,

                })}>
                    <Image source={require('../assets/default-ppe.png')}
                           style={StyleSheet.create({
                               width: 100,
                               height: 100,
                               borderWidth:1,
                               borderColor: '#139BFF'
                           })}/>

                    <View style={StyleSheet.create({
                        maxWidth:120,
                    })}>
                        <Text style={StyleSheet.create({
                            fontWeight:500,
                            fontSize:16,
                        })}>Belt</Text>
                        <Text>Description</Text>
                        <Text>Weight...</Text>
                    </View>

                </View>
            </View>

            <View style={StyleSheet.create({
                gap:10,
                alignItems:'center'
            })}>
                <TouchableOpacity style={StyleSheet.create({
                    backgroundColor:'#D9D9D9',
                    width:50,
                    height:50,
                    borderRadius:9999,
                    alignItems:'center',
                    justifyContent:'center'

                })}>
                    <Ionicons name="enter-outline" size={30} color="#fdfdfd" />
                </TouchableOpacity>

                <TouchableOpacity style={StyleSheet.create({
                    backgroundColor:'#D9C9C5',
                    width:40,
                    height:40,
                    borderRadius:9999,
                    alignItems:'center',
                    justifyContent:'center'

                })}>
                    <Ionicons name="enter-outline" size={20} color="#fdfdfd" />
                </TouchableOpacity>
            </View>
        </View>

        <View style={StyleSheet.create({
            marginTop:40,
            flexDirection: 'row',
            justifyContent:'space-between'
        })}>
            <View>
                <View style={StyleSheet.create({
                    flexDirection:'row',
                    gap:10,

                })}>
                    <Image source={require('../assets/default-ppe.png')}
                           style={StyleSheet.create({
                               width: 100,
                               height: 100,
                               borderWidth:1,
                               borderColor: '#139BFF'
                           })}/>

                    <View style={StyleSheet.create({
                        maxWidth:120,
                    })}>
                        <Text style={StyleSheet.create({
                            fontWeight:500,
                            fontSize:16,
                        })}>Belt</Text>
                        <Text>Description</Text>
                        <Text>Weight...</Text>
                    </View>

                </View>
            </View>

            <View style={StyleSheet.create({
                gap:10,
                alignItems:'center'
            })}>
                <TouchableOpacity style={StyleSheet.create({
                    backgroundColor:'#D9D9D9',
                    width:50,
                    height:50,
                    borderRadius:9999,
                    alignItems:'center',
                    justifyContent:'center'

                })}>
                    <Ionicons name="enter-outline" size={30} color="#fdfdfd" />
                </TouchableOpacity>

                <TouchableOpacity style={StyleSheet.create({
                    backgroundColor:'#D9C9C5',
                    width:40,
                    height:40,
                    borderRadius:9999,
                    alignItems:'center',
                    justifyContent:'center'

                })}>
                    <Ionicons name="enter-outline" size={20} color="#fdfdfd" />
                </TouchableOpacity>
            </View>
        </View>



    </View>
  )
}

const HomeStyle = StyleSheet.create({
    title:{
        color: '#854E34',
        fontSize: 24,
        fontWeight: 700
    },
    titleSub:{
        color: 'black',
        fontSize: 14,
        fontWeight: 500,
    },
    defaultFontStyle: {
        color:'#828282',
        fontSize:18,
        fontWeight:500
    }
})