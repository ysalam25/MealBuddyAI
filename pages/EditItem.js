import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { StyledContainer, InnerContainer, StyledButton, ButtonText, SubTitle, StyledButton2} from "../components/styles";
import { Colors } from "../components/styles";
import styled from "styled-components";
import SelectPantry from './SelectPantry';

const ItemScreen = styled.View`
  border: 2px solid ${Colors.background};
  width: 100%;
  height: 80%;
  flex: 1;

`;

const ItemField = styled.View`
  border: 2px solid ${Colors.background};
  width: 100%;
  align-items: center;

`;

const ItemFieldKey = styled.View`
  border: 2px solid ${Colors.background};
  width: 100%;
  padding: 2%;
`;

const ItemFieldValue = styled.View`
  border: 2px solid ${Colors.background};
  width: 100%;
`;


const ItemTextInput = styled.TextInput`
  width: 100%;
  border: 1px solid black;
  background-color: white;
  align-self: center;
  padding: 2%;
  border-radius: 8px;
  font-size: 18px;
`;



const EditItem = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const header = route.params?.header;
    const data = route.params?.data;

    const [inputValue, setInputValue] = useState('');
    const [selectedPantry, setSelectedPantry] = useState(null);

    const handleInputChange = (text) => {
      const numericValue = text.replace(/[^0-9]/g, '');      
      setInputValue(numericValue);
    };

    const handlePantrySelection = (pantry) => {
        setSelectedPantry(pantry);
      };

      const handleContinue = () => {
        // Implement logic for continue button (currently does nothing)
      };
    
      const handleCancel = () => {
        // Close the current screen and return to the previous screen
        navigation.goBack();
      };

    return (
    <StyledContainer>
      <InnerContainer>

        <SubTitle>{header}</SubTitle>
        <ItemScreen>  

            <ItemField>
                <ItemFieldKey><Text style={{  fontSize: 16, fontWeight: '600',}}>Item Name</Text></ItemFieldKey>
                <ItemFieldValue><ItemTextInput value={data.name} returnKeyType="done"></ItemTextInput></ItemFieldValue>
            </ItemField>  

            <ItemField>
                <ItemFieldKey><Text style={{  fontSize: '16px'}}>Category</Text></ItemFieldKey>
                <ItemFieldValue><ItemTextInput value={data.category} returnKeyType="done"></ItemTextInput></ItemFieldValue>
            </ItemField> 

            <ItemField>
                <ItemFieldKey><Text style={{  fontSize: '16px'}}>Units</Text></ItemFieldKey>
                <ItemFieldValue><ItemTextInput placeholder="e.g. mLs, cups" returnKeyType="done"></ItemTextInput></ItemFieldValue>
            </ItemField>

            <ItemField>
                <ItemFieldKey><Text style={{ fontSize: '16px'}}>Quantity</Text></ItemFieldKey>
                <ItemFieldValue>    
                    <ItemTextInput
                        placeholder='e.g. 2'
                        value={inputValue}
                        onChangeText={handleInputChange}
                        keyboardType="numeric"
                        returnKeyType="done"
                    />
                </ItemFieldValue>
            </ItemField>

            <ItemField>
                <ItemFieldKey><Text style={{  fontSize: '16px'}}>Pantry</Text></ItemFieldKey>
                <ItemFieldValue>
                
                    <SelectPantry placeholder="Select Pantry" onSelect={handlePantrySelection} />

                
                </ItemFieldValue>
            </ItemField>

            <View style={{flexDirection: 'row'}}>
                <StyledButton onPress={() => handleContinue()} style={{ marginRight: 10 }}>
                    <ButtonText>Add</ButtonText>
                </StyledButton>

                <StyledButton2 onPress={() => handleCancel()} style={{ marginLeft: 10 }}>
                    <ButtonText style={{ color: Colors.secondary}}>Cancel</ButtonText>
                </StyledButton2>
            </View>

        </ItemScreen>
      </InnerContainer>
    </StyledContainer>
  );
};

export default EditItem;

// <Text>{JSON.stringify(data, null, 2)}</Text>
