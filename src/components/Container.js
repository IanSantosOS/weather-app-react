import { View } from 'react-native';

export default (props) => (
    <View style={{
        margin: props.margin || 0,
        marginTop: props.marginTop || 0,
        padding: props.padding || 0,
        backgroundColor: '#fff',
        width: props.width || 'auto',
        borderRadius: 12,
        gap: props.gap || 0,
        flexDirection: props.flexDirection || 'column',
        justifyContent: props.justifyContent || 'flex-start'
    }}>
        {props.children}
    </View>
)