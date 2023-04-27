import { StyleSheet, Platform } from 'react-native';
import {themes as theme, themes} from "../../theme/colors";

export default StyleSheet.create({
    buttonStyle: {
        borderColor: theme['light'].colors.primary,
        borderWidth: 1,
        paddingHorizontal:35,
        backgroundColor: theme['light'].colors.primary,
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        // borderRadius: 10,
        borderTopEndRadius:10,
        borderBottomStartRadius:10,
        position: 'relative',
        height: 60,
        flexDirection: 'row',
        
    },
    buttonText: {
        color: theme['light'].colors.tertiary,
        fontSize: 14,
        
        fontFamily: themes.font.regular,
    },
    buttonIcon: {
        color: theme['light'].colors.secondary,
        fontSize: 12,
        marginLeft: 10,
        marginTop: Platform.OS === 'ios' ? 2 : 4
    },

})
