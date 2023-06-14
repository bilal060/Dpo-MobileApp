import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import GlobalStyle from '../../assets/styling/GlobalStyle';
import {useSelector} from 'react-redux';
import {
  CInput,
  CList,
  CLoading,
  CText,
  ProgressiveImage,
} from '../../components';
import Styles from './CountriesModal.style';

function CountriesModal(props) {
  const {onSelect, data, key, Value} = props;
  console.log("🚀 ~ file: CountriesModal.js:16 ~ CountriesModal ~ data:", data)

  const [searchText, updateSearchText] = useState('');
  const [filteredCountry, updateFilteredCountry] = useState([]);
  console.log("🚀 ~ file: CountriesModal.js:20 ~ CountriesModal ~ filteredCountry:", filteredCountry)
  const [loading, setLoading] = useState(true);

  const reduxState = useSelector(({global}) => {
    return {
      data: global.allCountries,
      currentCountry: global.currentCountry,
    };
  });

  useEffect(() => {
    updateFilteredCountry(data);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleChange = val => {
    setLoading(true);

    updateSearchText(val);
    let foundArray = [];
    if (val) {
      foundArray = data.filter(o =>
        o?.name?.common
          ? o?.cioc?.toLowerCase().includes(val?.toLowerCase()) ||
            o?.name?.common.toLowerCase().includes(val?.toLowerCase())
          : o?.name?.toLowerCase().includes(val?.toLowerCase()),
      );
      setLoading(false);
    } else {
      foundArray = data;
      setLoading(false);
    }
    updateFilteredCountry(foundArray);
  };

  const renderItem = ({item, index}) => {
    console.log("🚀 ~ file: CountriesModal.js:58 ~ renderItem ~ item:", item?.name)
    return item ? (
      <TouchableOpacity
        style={[Styles.listItem, index === 0 && Styles.lastListItem]}
        onPress={() => onSelect(item)}>
        {item?.flags?.png && (
          <View style={Styles.listItemIcon}>
            <ProgressiveImage
              source={{uri: item?.flags?.png}}
              resizeMode={'contain'}
              style={[Styles.listItemIconImage]}
            />
          </View>
        )}
        <CText style={Styles.listItemText}>
          {item?.name?.common || item?.name || item?.description }
        </CText>
        {item?.detail?.code && (
          <CText style={[Styles.listItemText, Styles.listItemLastText]}>
            {item?.detail?.code}
          </CText>
        )}
      </TouchableOpacity>
    ) : null;
  };

  return (
    <View style={[GlobalStyle.fullContainer, {backgroundColor: 'transparent'}]}>
      <View style={GlobalStyle.listHeader}>
        <CInput
          value={searchText}
          onChangeText={val => handleChange(val)}
          inputContainerStyle={GlobalStyle.searchInput}
          inputInnerContainerStyle={[
            GlobalStyle.searchInputInnerContainer,
            {borderwidth: 0},
          ]}
          style={[GlobalStyle.inputStyle, GlobalStyle.searchInputStyle]}
          leftIconName={'search1'}
          placeholder="Search"
          iconStyle={GlobalStyle.searchInputIcon}
          onSubmitEditing={() => null}
        />
      </View>
      {filteredCountry.length > 0 ? (
        <CList
          loading={loading}
          contentContainerStyle={GlobalStyle.list2}
          data={filteredCountry}
          renderItem={renderItem}
          maxToRenderPerBatch={10}
          windowSize={10}
          keyExtractor={(item, index) => index.toString()}
          emptyOptions={{
            // icon: require('../../assets/images/country-not-found.png'),
            text: `${Value} not found`,
          }}
        />
      ) : (
        <CLoading loading={true} />
      )}
    </View>
  );
}

export default React.memo(CountriesModal);
