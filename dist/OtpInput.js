var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _jsxRuntime=require("react/jsx-runtime");var _this=this,_jsxFileName="C:\\Users\\Musaib\\Desktop\\react-native-otp-text-input\\src\\OtpInput.js";var OtpInput=function OtpInput(_ref){var digits=_ref.digits,otpRef=_ref.otpRef,style=_ref.style,setOtp=_ref.setOtp,otp=_ref.otp,_render=_ref._render;return(0,_jsxRuntime.jsxs)(_reactNative.View,{style:{flex:1},children:[(0,_jsxRuntime.jsx)(_reactNative.TextInput,{maxLength:digits,ref:otpRef,style:style,onChangeText:setOtp,value:otp,keyboardType:"number-pad"}),_render]});};var _default=exports.default=OtpInput;