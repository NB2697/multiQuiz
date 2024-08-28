import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

const App = () => {
  const [level, setLevel] = useState(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('Select Profession');
  const [businessName, setBusinessName] = useState('');
  const [businessPhone, setBusinessPhone] = useState('');
  const [individualPhone, setIndividualPhone] = useState('');
  const [dropDown, setdropDown] = useState(false);

  const handleNextLevel = () => {
    setLevel(prevStep => prevStep + 1);
  };

  const handlePrevLevel = () => {
    setLevel(prevStep => prevStep - 1);
  };

  const handleProfessionSelect = (selectedProfession: any) => {
    setProfession(selectedProfession);
    handleNextLevel();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 28, color: 'white'}}>Multi Level Quize</Text>
      </View>

      {level === 1 && (
        <View style={{flex: 0.8, justifyContent: 'center', padding: 16}}>
          <Text style={styles.question}>What's your full name?</Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
            placeholder="Full Name"
          />
          <TouchableOpacity
            onPress={handleNextLevel}
            disabled={!fullName}
            style={[
              styles.nextButton,
              {backgroundColor: !fullName ? '#E7E8F9' : '#675BD8'},
            ]}>
            <Text style={{color: !fullName ? 'grey' : 'white'}}>Next</Text>
          </TouchableOpacity>
        </View>
      )}

      {level === 2 && (
        <View style={{flex: 0.8, justifyContent: 'center', padding: 16}}>
          <Text style={styles.question}>What's your email?</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TouchableOpacity
            onPress={handleNextLevel}
            disabled={!email}
            style={[
              styles.nextButton,
              {backgroundColor: !email ? '#E7E8F9' : '#675BD8'},
            ]}>
            <Text style={{color: !email ? 'grey' : 'white'}}>Next</Text>
          </TouchableOpacity>
        </View>
      )}

      {level === 3 && (
        <View style={{flex: 0.8, justifyContent: 'center', padding: 16}}>
          <Text style={styles.question}>What's your profession?</Text>
          <TouchableOpacity
            style={[
              styles.input,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#675BD8',
              },
            ]}
            onPress={() => setdropDown(!dropDown)}>
            <Text style={[styles.optionText, {color: 'white'}]}>
              {profession}
            </Text>

            <Image
              style={{height: 20, width: 20, tintColor: 'white'}}
              source={require('./src/assets/down.png')}
            />
          </TouchableOpacity>

          {dropDown && (
            <View style={{}}>
              <TouchableOpacity
                style={[styles.optionButton]}
                onPress={() => {
                  handleProfessionSelect('Business'), setdropDown(false);
                }}>
                <Text style={styles.optionText}>Business</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.optionButton]}
                onPress={() => {
                  handleProfessionSelect('Individual'), setdropDown(false);
                }}>
                <Text style={styles.optionText}>Individual</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}

      {level === 4 && profession === 'Business' && (
        <View style={{flex: 0.8, justifyContent: 'center', padding: 16}}>
          <Text style={styles.question}>Business Name</Text>
          <TextInput
            style={styles.input}
            value={businessName}
            onChangeText={setBusinessName}
            placeholder="Business Name"
          />
          <Text style={styles.question}>Business Phone</Text>
          <TextInput
            style={styles.input}
            value={businessPhone}
            onChangeText={setBusinessPhone}
            placeholder="Business Phone"
            keyboardType="phone-pad"
          />

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={handlePrevLevel}
              style={styles.prevButton}>
              <Text style={{color: 'white'}}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Alert.alert('Submitted')}
              disabled={!businessPhone && !businessName}
              style={[
                styles.nextButton,
                {
                  backgroundColor: !(businessPhone && businessName)
                    ? '#E7E8F9'
                    : '#675BD8',
                },
              ]}>
              <Text
                style={{
                  color: !(businessPhone && businessName) ? 'grey' : 'white',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {level === 4 && profession === 'Individual' && (
        <View style={{flex: 0.8, justifyContent: 'center', padding: 16}}>
          <Text style={styles.question}>Phone Number</Text>
          <TextInput
            style={styles.input}
            value={individualPhone}
            onChangeText={setIndividualPhone}
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              onPress={handlePrevLevel}
              style={styles.prevButton}>
              <Text style={{color: 'white'}}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Alert.alert('Submitted')}
              disabled={!individualPhone}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: !individualPhone ? '#E7E8F9' : '#675BD8',
                padding: 10,
                borderRadius: 30,
              }}>
              <Text style={{color: !individualPhone ? 'grey' : 'white'}}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE2FB',
  },
  header: {
    flex: 0.1,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: '#675BD8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 12,
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E7E8F9',
    padding: 10,
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: '#E7E8F9',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  optionButton: {
    padding: 10,
    backgroundColor: '#E7E8F9',
    borderRadius: 30,
    marginBottom: 10,
    minWidth: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
  },
  prevButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#675BD8',
    padding: 10,
    borderRadius: 30,
  },

  selectedOption: {
    backgroundColor: '#c0e4fc',
  },
  optionText: {
    fontSize: 16,
  },
});

export default App;
