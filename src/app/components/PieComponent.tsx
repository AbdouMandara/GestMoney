import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import renderLegend from "./RenderLegend";
export default function PieComponent(){
      return (
        <View>
          <View
            style={{
              marginHorizontal: 30,
              borderRadius: 10,
              paddingVertical: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>

            <PieChart
              strokeColor="white"
              strokeWidth={4}
              donut
              data={[
                {value: 40, color: 'rgba(14, 250, 45, 0.52)'},
                {value: 20, color: 'rgb(243, 31, 31)'},
              ]}
              innerCircleColor="#414141"
              innerCircleBorderWidth={4}
              innerCircleBorderColor={'white'}
              showValuesAsLabels={true}
              showText
              textSize={18}
              showTextBackground={true}
              centerLabelComponent={() => {
                return (
                  <View>
                    <Text style={{color: 'white', fontSize: 32, fontFamily: "Oldenburg"}}>90</Text>
                    <Text style={{color: 'white', fontSize: 18, fontFamily: "Oldenburg"}}>Total</Text>
                  </View>
                );
              }}
            />

            {/*********************    Custom Legend component      ********************/}
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 20,
              }}>
              {renderLegend('Gains', 'rgba(14, 250, 45, 0.52)')}
              {renderLegend('Dépenses', 'rgb(243, 31, 31)')}
            </View>
            {/****************************************************************************/}

          </View>
        </View>
    );
}