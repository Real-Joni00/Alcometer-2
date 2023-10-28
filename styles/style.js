import { StyleSheet } from "react-native";

const LightStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(159, 225, 255)',
        alignItems: 'center',
        justifyContent: 'center',
    },

    scroll: {
        justifyContent: "center"
    },

    textInput: {
        borderWidth: 2,
        borderRadius: 3,
        marginTop: 5,
        marginBottom: 5,
        padding : 5,
        width: 300,
        backgroundColor: 'rgb(18, 143, 200)',
    },

    inputTextColor: {
        color: 'rgb(240, 240, 240)',
    },

    h3: {
        fontSize: 28,
        fontFamily: 'Russo',
    },

    text: {
        color: 'rgb(18, 143, 200)',
        fontWeight: 'bold'
    },

    NumericInput: {
        rightButtonBackgroundColor: 'rgb(252, 252, 252)',
        leftButtonBackgroundColor: 'rgb(255, 255, 255)',
        upDownButtonsBackgroundColor: 'rgb(0, 0, 0)',
        borderColor: 'rgb(0, 0, 0)',
    },

    plusMinus: {
        color: 'rgb(18, 143, 200)',
    },
    
    RadioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
        paddingRight: 20,
    },

    radioButtonColor: {
        color: 'rgb(49, 49, 49)',
    },

    Butt: {
        alignItems: 'center',
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor:'rgb(18, 143, 200)',
    },

    ButtonText: {
        fontFamily: 'Bebas',
        fontSize: 40,
        color: 'rgb(110, 209, 255)',
    },

    Mid: {
        flexDirection: 'row', 
        alignItems: 'center'
    },

    Result: {
        fontSize: 40,
        paddingTop: 10,
        paddingLeft: 50,
    },

    Warning: {
        color: 'rgb(252, 0, 0)',
        fontSize: 20,
        marginTop: 10,
    }
})


const DarkStyle = StyleSheet.create({
    container: {
        ...LightStyle.container,
        backgroundColor: 'rgb(129, 98, 170)',
    },
    

    textInput: {
        ...LightStyle.textInput,
        color: 'rgb(129, 98, 170)',
        backgroundColor: 'rgb(235, 220, 252)',
    },

    inputTextColor: {
        color: 'rgb(129, 98, 170)',
    },

    h3: {
        ...LightStyle.h3
    },

    text: {
        color: 'rgb(235, 220, 252)',
        fontWeight: 'bold',
    },

    NumericInput: {
        ...LightStyle.NumericInput,
        textColor: 'rgb(255, 255, 255)',
    },

    plusMinus: {
        color: 'rgb(129, 98, 170)' 
    },

    RadioButton: {
        ...LightStyle.RadioButton
    },

    radioButtonColor: {
        color: 'rgb(49, 49, 49)',
    },

    Butt: {
        ...LightStyle.Butt,
        backgroundColor: 'rgb(235, 220, 252)',
    },

    ButtonText: {
        ...LightStyle.ButtonText,
        color: 'rgb(129, 98, 170)',
    },

    Mid: {
        ...LightStyle.Mid
    },

    Result: {
        ...LightStyle.Result,
        color: 'rgb(255, 255, 255)',
    },

    Warning: {
        ...LightStyle.Warning
    }
})

export { LightStyle, DarkStyle }