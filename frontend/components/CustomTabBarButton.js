import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image ,Dimensions} from "react-native";

const CustomTabBarButton = (props) => {
  const { children, accessibilityState, onPress, icon } = props;
  if (accessibilityState.selected) {
    return (
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={onPress} style={styles.activeBtn}>
          <Image source={icon} style={[styles.icon, { tintColor: '#008080', width:35, height:35 }]} />
          <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
      </View> 
    );
  } else {
    return (
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={onPress} style={styles.inactiveBtn}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  inactiveBtn: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  activeBtn: {
    position: "absolute",
    width: 55,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  btnWrapper: {
    flex: 1,
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
  text: {
    color: "gray",
    fontSize: 12,
  },
});

export default CustomTabBarButton;