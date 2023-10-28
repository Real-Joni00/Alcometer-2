import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, Text, TextInput, View, Switch } from 'react-native';
import { LightStyle, DarkStyle } from './styles/style';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import { useFonts } from 'expo-font';

export default function App() {

  const [dark, setDark] = useState(false)
  const AlcoStyle = dark ? DarkStyle : LightStyle
  const [isEnabled, setIsEnabled] = useState(false)

  const [weight, setWeight] = useState('')
  const [bottles, setBottles] = useState(0)
  const [hours, setHours] = useState(0)
  const [gen, setGen] = useState('Male')
  const [result, setResult] = useState(0)
  const [weightWarning, setWeightWarning] = useState(false)
  const [bottleWarning, setBottleWarning] = useState(false)

  let burn = Number(weight) / 10
  let litres = bottles * 0.33
  let grams = litres * 8 * 4.5
  let gramsL = grams - burn * hours

  const [loaded] = useFonts({
    Russo: require('./assets/fonts/RussoOne-Regular.ttf'),
    Bebas: require('./assets/fonts/BebasNeue-Regular.ttf')
  })

  if (!loaded) {
    return null
  }

  function CalcRes() {

    if (gen === 'Male') {
      const maleResult = (gramsL / (Number(weight) * 0.7)); setResult(maleResult)
      if (maleResult < 0) {
        setResult(0)
      }
    } else {
      const femaleResult = (gramsL / (Number(weight) * 0.6)); setResult(femaleResult)
      if (femaleResult < 0) {
        setResult(0)
      }
    }
    return (result)
  }

  return (
    <ScrollView contentContainerStyle={AlcoStyle.container}>
      <Switch value={isEnabled} onValueChange={() => { setIsEnabled(prev => !prev); setDark(prev => !prev) }} />
      <StatusBar style="auto" />
      <Text style={AlcoStyle.h3}>Alcometer</Text>
      <View>
        <TextInput
          placeholderTextColor={AlcoStyle.inputTextColor.color}
          placeholder='Weight'
          style={AlcoStyle.textInput}
          value={weight}
          onChangeText={setWeight}
          keyboardType='number-pad'
        />

        <View style={AlcoStyle.Mid}>
          <View>
            <Text style={AlcoStyle.text}>Bottles</Text>
            <NumericInput
              rightButtonBackgroundColor={AlcoStyle.NumericInput.rightButtonBackgroundColor}
              leftButtonBackgroundColor={AlcoStyle.NumericInput.leftButtonBackgroundColor}
              upDownButtonsBackgroundColor={AlcoStyle.NumericInput.upDownButtonsBackgroundColor}
              textColor={AlcoStyle.NumericInput.textColor}
              borderColor={AlcoStyle.NumericInput.borderColor}
              iconStyle={{ color: AlcoStyle.plusMinus.color }}
              value={bottles}
              minValue={0}
              onChange={setBottles}
            />
            <Text style={AlcoStyle.text}>Hours</Text>
            <NumericInput
              rightButtonBackgroundColor={AlcoStyle.NumericInput.rightButtonBackgroundColor}
              leftButtonBackgroundColor={AlcoStyle.NumericInput.leftButtonBackgroundColor}
              upDownButtonsBackgroundColor={AlcoStyle.NumericInput.upDownButtonsBackgroundColor}
              textColor={AlcoStyle.NumericInput.textColor}
              borderColor={AlcoStyle.NumericInput.borderColor}
              iconStyle={{ color: AlcoStyle.plusMinus.color }}
              value={hours}
              minValue={0}
              onChange={setHours}
            />
          </View>
          <ScrollView>
            <Text style={AlcoStyle.Result}>{result.toFixed(2)}</Text>
          </ScrollView>
        </View>

        <RadioButton.Group value={gen} onValueChange={g => setGen(g)}>
          <View style={AlcoStyle.RadioButton}>
            <View style={AlcoStyle.RadioButton} >
              <RadioButton color = {AlcoStyle.radioButtonColor.color} value='Male' />
              <Text style={AlcoStyle.text}>Male</Text>
            </View>
            <View style={AlcoStyle.RadioButton} >
              <RadioButton color = {AlcoStyle.radioButtonColor.color} value='Female' />
              <Text style={AlcoStyle.text}>Female</Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>

      <Pressable
        style={AlcoStyle.Butt}
        onPress={() => {
          CalcRes(); if (!weight.trim()) {
            setResult(0); setWeightWarning(true)
          } else if (bottles <= 0) {
            setResult(0); setBottleWarning(true)
          } else { { setWeightWarning(false); setBottleWarning(false) } }
        }}

      >
        <Text style={AlcoStyle.ButtonText}>Calculate</Text>
      </Pressable>
      {weightWarning && <Text style={AlcoStyle.Warning}>Add weight</Text>}
      {bottleWarning && <Text style={AlcoStyle.Warning}>Add bottles</Text>}
    </ScrollView>

  );
}