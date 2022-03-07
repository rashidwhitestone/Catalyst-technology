
import React from 'react';
import { useRef } from 'react';
import { PanGestureHandler, TapGestureHandler, State, Swipeable } from 'react-native-gesture-handler';

import { Animated, PanResponder, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
const Val = () => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y }
                ]
            ),
            onPanResponderRelease: () => {
                pan.flattenOffset();
            }
        })
    ).current;
    // Pan gesture
    const translateX = new Animated.Value(0);
    const translateY = new Animated.Value(0);

    const onPanGestureEvent = Animated.event(
        [
            {
                nativeEvent: {
                    translationX: translateX,
                    translationY: translateY,
                },
            },
        ],
        { useNativeDriver: true }
    );

    //Tab gesture
    const [likeColour, setLikeColour] = React.useState('#28b5b5');

    const onDoubleTapEvent = (event) => {
        if (event.nativeEvent.state === State.ACTIVE) {
            likeColour === '#28b5b5'
                ? setLikeColour('red')
                : setLikeColour('#28b5b5');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <PanGestureHandler
                    onGestureEvent={onPanGestureEvent}
                >


                    <Animated.View
                        style={{
                            transform: [{ translateX: 1 }, { translateY: pan.y }]
                        }}
                        {...panResponder.panHandlers}
                    >
                        {
                            <View style={styles.box} />

                        }
                    </Animated.View>
                </PanGestureHandler>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "bold"
    },
    box: {
        height: 50,
        width: 50,
        backgroundColor: "pink",
        borderRadius: 35,
        alignSelf: "center",
    },
    view1: {
        backgroundColor: "#2DA1DA",
        height: 480,
        width: 70,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35
    }
});

export default Val;
