import { View, Text } from 'react-native';
import Subtitle from './Subtitle';

export default (props) => (
  <View style={{ flexDirection: 'row', gap: 10}}>
    <View style={{width: 50, alignItems: 'center'}}>
      {props.icon}
    </View>
    <View>
      <Text style={{color: '#fff', fontWeight: 'bold'}}>
        {props.info}
      </Text>
      <Subtitle text={props.subtitle} size={13}/>
    </View>
  </View>
)