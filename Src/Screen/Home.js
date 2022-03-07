import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput, ImageBackground } from 'react-native';
import { Fonts } from '../globle';
import { DP } from '../globle/constants';
import Search from '../assest/svg/Search';
import SettingSvg from '../assest/svg/settings';
function Home({ dispatch, name, address }) {

    const image1 = [{
        imageurl: 'https://images.ctfassets.net/lzny33ho1g45/best-mobile-scanning-ocr-apps-p-img/ddcb0c1189355b7337ec9c4b220abc90/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760',
        Scantypes: 'Single Scan',
    },
    {
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnF5EXJFD_TEXTWV-hQJu2c4zTgkIqo0kN2Q&usqp=CAU',
        Scantypes: 'Batch Scan',
    },
    {
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT0AXv4-8SDbF5i_XUnP7L6obohu5KHQyxBg&usqp=CAU',
        Scantypes: 'Scan to text'
    }
    ]
    const ResentData = [{
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToENkSuZNTs4XizLj-GLU2S6BNEjmVeDVuYA&usqp=CAU',
        date: '2d ago'
    },
    {
        imageurl: 'https://wallpapercave.com/wp/wp2532971.jpg',
        date: '2d ago'

    }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.mainView}>

                <Text style={styles.GooodEvg}>Good Evening</Text>
                <Image
                    style={{ height: DP(26), width: DP(40), alignSelf: 'center', marginTop: DP(20), marginRight: DP(50), }}
                    source={{ uri: 'https://images.vexels.com/media/users/3/151208/isolated/lists/a61b4830c6f330b4eb2a8db3a99ebc38-royal-crown-icon.png' }}
                />
            </View>
            <Text style={styles.Welcom}>Welcom back</Text>
            <View style={styles.UnLockView}>
                <Text style={styles.UnlockTxt}>Unlock Premium</Text>
                <Text style={styles.UnlockTxt2}>Create unlimited HD Scan & Picture to text Scan without watermarks </Text>
            </View>

            <View style={{ height: DP(40), width: DP(370), borderRadius: DP(20), flexDirection: 'row', marginTop: DP(20), marginHorizontal: DP(20), backgroundColor: '#fff', elevation: DP(2) }}>
                <TouchableOpacity style={{ alignItems: 'center', alignSelf: 'center', marginLeft: DP(10) }}>
                    <Search />

                </TouchableOpacity>
                <View style={{ width: "70%", marginLeft: DP(5) }}>
                    <TextInput
                        placeholder={"Search through your Scan"}
                        style={{ padding: 5, borderRadius: 10, backgroundColor: "#fff", }} />
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: DP(20), alignSelf: 'center' }}>
                {
                    image1.map((item, index) => {
                        return (
                            <View >
                                <Image
                                    style={{ height: DP(47), width: DP(47), marginLeft: DP(25) }}
                                    source={{
                                        uri: item.imageurl
                                    }}
                                />
                                <Text style={{ marginTop: DP(8), marginHorizontal: DP(10), alignSelf: 'center' }} >{item.Scantypes}</Text>
                            </View>
                        )
                    })
                }
            </View>


            <View style={{ height: DP(20), width: DP(202), backgroundColor: '#fff', marginTop: DP(30) }}>
                <Text style={{ marginLeft: DP(25), fontWeight: 'bold' }}>Recent Scans</Text>
                <View style={{ flexDirection: 'row', marginTop: DP(10), borderRadius: DP(20) }}>

                    {
                        ResentData.map((item, index) => {
                            return (
                                <View>
                                    <Image
                                        style={{ height: DP(150), width: DP(150), marginLeft: DP(25), borderRadius: DP(4) }}
                                        source={{
                                            uri: item.imageurl
                                        }}
                                    />
                                    <Text style={{ marginTop: DP(-25), marginLeft: DP(30), backgroundColor: '#0975EC', color: '#fff', width: DP(70), borderRadius: DP(5), textAlign: 'center' }}>{item.date}</Text>
                                </View>
                            )

                        })
                    }
                </View>
            </View>


            <Text style={styles.FolderTxt}>Folders</Text>

            <View style={{ marginLeft: DP(330), marginTop: DP(-20) }}>
                <Image
                    source={{ uri: 'data:image/png;base64,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' }}
                    style={{ height: DP(40), width: DP(40) }} />
            </View>

            <View style={styles.FoldImg}>
                <View style={{ position: 'absolute', marginTop: DP(-10), alignSelf: 'center' }}>
                    <Image
                        source={{ uri: 'https://www.inventicons.com/uploads/iconset/1176/wm/512/tv-feature-plus-add-round-labelsvg-27.png' }}
                        style={{ height: DP(40), width: DP(40), }} />
                </View>


                <View style={styles.StgImg}>
                    <View style={styles.StgImgView}>
                        <Image
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGuaUxO2E5-tllelOo8o9Z9WIoAavHdf68g&usqp=CAU' }}
                            style={{ height: DP(30), width: DP(30), backgroundColor: '#fff' }} />
                    </View>
                    <View style={styles.Setting}>
                        <SettingSvg />
                    </View>
                </View>


            </View>



        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    GooodEvg: {
        height: DP(30),
        fontSize: DP(24),
        width: DP(150),
        marginTop: DP(30),
        marginLeft: DP(30),
        fontWeight: 'bold'
    },
    Welcom:
    {
        color: '#7c7c7c',
        marginLeft: DP(30)
    },
    Setting:
    {
        height: DP(20),
        width: DP(20),
        marginTop: DP(15),
        marginRight: DP(25)
    },
    StgImg:
    {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    StgImgView:
    {
        height: DP(18),
        width: DP(18),
        marginTop: DP(15),
        marginLeft: DP(25)
    },
    FoldImg:
    {
        height: DP(190),
        backgroundColor: '#F5F5F5',
        marginTop: DP(15)
    },
    FolderTxt:
    {
        marginTop: DP(180),
        marginLeft: DP(25),
        fontWeight: 'bold'
    },
    UnlockTxt:
    {
        fontWeight: '800',
        fontSize: DP(15),
        color: '#fff',
        marginLeft: DP(10),
        marginTop: DP(3)
    },
    UnlockTxt2:
    {
        fontWeight: '800',
        fontSize: DP(14),
        color: '#fff',
        marginLeft: DP(10),
        width: DP(290),
        marginTop: DP(2),
    },
    UnLockView:
    {
        height: DP(70),
        marginTop: DP(20),
        width: DP(370),
        backgroundColor: '#0975EC',
        marginHorizontal: DP(20),
        borderRadius: DP(4)
    }
});
