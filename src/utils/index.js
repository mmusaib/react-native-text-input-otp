import { StyleSheet } from 'react-native';


export const _size = (digits) => {
    let s = 90/digits;
    return `${s}%`;
}



export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        height: 1,
        width: 1,
        opacity: 0
    },
    renderInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#DEDEDE',
        paddingVertical: 5,

    },
    textStyles: {
        width: '100%', 
        textAlign: 'center',
        fontSize: 16
    },
    focused: {
        borderColor: '#ABABAB'
    }
});


