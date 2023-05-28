import { StyleSheet, Platform } from 'react-native';
import {themes as theme, themes} from "../../theme/colors";

export default StyleSheet.create({
    buttonStyle: {
        borderColor: "#0064FA",
        borderWidth: 1,
        // paddingHorizontal:35,
        backgroundColor: theme['light'].colors.secondary4,
        // padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 60,

        color: '#0064FA',
        borderWidth: 1,
        borderColor: '#0064FA',
        
    },
    buttonText: {
        color: "#0064FA",
        fontSize: 16,
        fontFamily: themes.font.medium,
    },
    buttonIcon: {
        color: theme['light'].colors.secondary,
        fontSize: 12,
        marginLeft: 10,
        marginTop: Platform.OS === 'ios' ? 2 : 4
    },

})
