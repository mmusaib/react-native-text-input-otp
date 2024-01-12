import { ViewStyle, TextStyle } from 'react-native';

export interface OtpProps {
    /**
     * state variable from the parent screen 
     *
     */
    otp: string;
    /**
     * setState method from the parent screen 
     *
     */
    setOtp: React.Dispatch<React.SetStateAction<undefined>>;
    /**
     * Number of OTP digits to render 
     *
     */
    digits: number;

    /**
     * To over-ride the default style of OTP input
     *
     */
    style?: ViewStyle;

    /**
     * To over-ride the dfault text style of OTP input
     *
     */
    fontStyle?: TextStyle;

    /**
     * To over-ride the default style of OTP input when it is focused
     *
     */
    focusedStyle?: ViewStyle;
}


declare const OtpTextInput = React.FC<OtpProps>;

export default OtpTextInput;