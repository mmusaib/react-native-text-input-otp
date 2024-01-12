import React from 'react';
import { View,TextInput } from 'react-native';

const OtpInput = ({ digits, otpRef, style, setOtp, otp, _render }) => {
    return(
        <View style={{ flex: 1 }}>
            <TextInput 
                maxLength={ digits }
                ref={ otpRef }
                style={ style }
                onChangeText={ setOtp }
                value={ otp }
                keyboardType='number-pad'
            />

            { _render }
        </View>
    );
}
export default OtpInput;