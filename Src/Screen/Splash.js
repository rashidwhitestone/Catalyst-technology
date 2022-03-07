import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { DP, SCREEN_WIDTH } from '../globle/constants';
import { Fonts } from '../globle';
import Carousel from 'react-native-snap-carousel';
import CarouselActiveBar from '../component/CartItem/CarouselActiveBar';
import CarouselComponent from '../component/CarouselComponent';


const Splash = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const ScanData = [
        {
            imageUrl: 'https://thumbs.dreamstime.com/z/girl-qr-scan-mobile-illustration-concept-young-shopping-giving-to-boy-nature-vector-sh-197301711.jpg',
            type: 'Scan anything in HD, Wherever you are...',

            description: 'Simply launch the AirScan app and scan any document,paper or real world photographs in seconds.',

        },
        {
            imageUrl: 'https://thumbs.dreamstime.com/z/girl-qr-scan-mobile-illustration-concept-young-shopping-giving-to-boy-nature-vector-sh-197301711.jpg',
            type: 'Navigate work documents like a pro',
            description: 'Scan and organize your work document in Structred folders.Scan single or multiple document in one swift go.merge scans into PDFs, recorder and share them on the fly.'
        },
        {
            imageUrl: 'https://thumbs.dreamstime.com/z/girl-qr-scan-mobile-illustration-concept-young-shopping-giving-to-boy-nature-vector-sh-197301711.jpg',
            type: 'Less time scanning homework =more time for fun',
            description: 'Scanning of homework and assignments are a breez with AirScan.Capture scan,generate PDFs and push them to any app installed on your phone. is that easy!'
        },
        {
            imageUrl: 'https://thumbs.dreamstime.com/z/girl-qr-scan-mobile-illustration-concept-young-shopping-giving-to-boy-nature-vector-sh-197301711.jpg',
            type: 'Covert Picture to text with our next generation offline OCR',
            description: 'Leverage our cutting edge machine learning OCR to convert document to text in seconds with accurate result. share OCR scans as Doc files or PDFs in seconds  '
        },
        {
            imageUrl: 'https://thumbs.dreamstime.com/z/girl-qr-scan-mobile-illustration-concept-young-shopping-giving-to-boy-nature-vector-sh-197301711.jpg',
            type: 'Covert Picture to text with our next generation offline OCR',
            description: 'Leverage our cutting edge machine learning OCR to convert document to text in seconds with accurate result. share OCR scans as Doc files or PDFs in seconds  '
        }


    ]
    const [visible, setVisible] = React.useState(false);
    return (
        <View style={styles.container}>
            <View style={{ height: DP(570), marginTop: DP(70), width: DP(372), backgroundColor: '#fff', alignSelf: 'center' }}>
                <Carousel
                    data={ScanData}
                    renderItem={({ item, index }) => {
                        return (
                            <CarouselComponent item={item} />
                        )
                    }}
                    sliderWidth={DP(345)}
                    itemWidth={DP(345)}
                    horizontal={DP(2)}
                    onSnapToItem={(index) => setActiveSlide(index)}
                />

                <CarouselActiveBar item={ScanData} activeSlide={activeSlide} />






            </View>
        </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});
