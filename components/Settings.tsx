import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Option } from './types';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedActivities } from '../redux/slices/settingsSlice';

const activities: Option[] = [
  { key: '1', value: 'education' },
  { key: '2', value: 'recreational' },
  { key: '3', value: 'social' },
  { key: '4', value: 'diy' },
  { key: '5', value: 'charity' },
  { key: '6', value: 'cooking' },
  { key: '7', value: 'relaxation' },
  { key: '8', value: 'music' },
  { key: '9', value: 'busywork' },
];

const Settings: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.settingsContainer}>
      <Text>Type of the activity:</Text>
      <View style={styles.dropdownContainer}>
        <MultipleSelectList
          data={activities}
          setSelected={(val:string[]) => dispatch(setSelectedActivities(val))}
          save="value"
          boxStyles={{ borderWidth: 0, width: '100%' }}
          dropdownStyles={{ backgroundColor: 'white' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
  dropdownContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
});

export default Settings;
