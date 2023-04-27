import React  from 'react';
import { Text, Animated } from 'react-native';
import { themes } from '../../theme/colors';

Text.defaultProps = {
    ...(Text.defaultProps || {}),
    allowFontScaling: false,
};

const CText = (props) => {
   
    return <Animated.Text
        allowFontScaling={false}
        {...props} style={[props.style]}>
        {props.children}
    </Animated.Text>
};

export default React.memo(CText);
