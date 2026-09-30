import { View, Text } from "react-native";

    const renderLegend = (text:string, color:string) => {
        return (
          <View style={{flexDirection: 'row', marginBottom: 12}}>
            <View
              style={{
                height: 18,
                width: 18,
                marginRight: 10,
                borderRadius: 4,
                backgroundColor: color || 'white',
              }}
            />
            <Text style={{color: 'black', fontSize: 16}}>{text || ''}</Text>
          </View>
        );
      };

export default renderLegend