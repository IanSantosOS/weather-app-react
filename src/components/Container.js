import { View } from 'react-native';

export default (props) => (
  <View style={{
    marginTop: props.marginTop || 0,
    padding: props.padding || 0,
    width: props.width || 'auto',
    borderRadius: 12,
    gap: props.gap || 0,
    backgroundColor: props.color || 'transparent',
    borderColor: props.borderColor || 'transparent',
    borderWidth: props.borderWidth || 0,
    shadowColor: props.shadowColor || 'transparent',
    shadowRadius: props.shadowRadius || 0,
    flexDirection: props.flexDirection || 'column',
    justifyContent: props.justifyContent || 'flex-start',
    alignItems: props.alignItems || 'flex-start'
  }}>
    {props.children}
  </View>
)