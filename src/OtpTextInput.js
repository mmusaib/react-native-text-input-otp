import React from 'react';
import OtpInput from "./OtpInput";
import { 
        styles, 
        _size 
    } from "./utils";
import { 
        View, 
        Text 
    } from 'react-native';

const OtpTextInput = (props) => {
    const { 
            otp, 
            style,
            digits, 
            setOtp, 
            fontStyle, 
            focusedStyle 
        } = props;

    const otpRef = React.useRef();


    const _styles = {
        renderInput: [ 
            styles.renderInput, 
            { width: _size(digits), ...style } 
        ],
        textStyles: [
            styles.textStyles, 
            fontStyle
        ],
        focused: [
            styles.focused, 
            focusedStyle
        ]
    }

    const _onPress = () => {
        otpRef.current?.focus()
    };

   

    React.useEffect(() => {

        setTimeout(() => {
            _onPress()
        }, 100)

    }, [])




    
    const _render = React.useMemo(() => 
        <View style={ [styles.container] }>
            {
                Array.from({ length: digits }).map((_,i) => (
                    <View
                        style={[
                            _styles.renderInput, 
                            (i == otp.length) ? _styles.focused : null
                        ]}
                        key={ i }
                    >
                        <Text 
                            onPress={ _onPress } 
                            style={ [_styles.textStyles] }
                        >
                            { (otp[i]) ? otp[i] : <Text style={{ color: '#DEDEDE' }}>-</Text> }
                        </Text>
                    </View>
                    
                ))
            }
        </View>
    ,[otp]);

    



    return(
        <OtpInput
            digits={ digits } 
            otp={ otp }
            setOtp={ setOtp }
            otpRef={ otpRef }
            style={ styles.input } 
            _render={ _render }
        />
    )
}




export default OtpTextInput;
