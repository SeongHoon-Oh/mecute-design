# Mecute Design Module for ReactNative

## How to install

- type below command in your project terminal

```
npm install @mecute/design

...

cd ios && pod install
```

<br/>

## How to use

```
import {View} from "react-native";
import {StyleButton} from "@mecute/design";


function App () {
  const onPressHandler = () => {
    console.log("Button Pressed!");
  };

  return (
    <View>
      <StyleButton
        theme="gray"
        type="enabled"
        size="xl"
        onPress={onPressHandler}
      >
        TEXT YOU WANT TO TYPE
      </StyleButton>
    </View>
  )
}

export default App;


```

<br/>

## You can set throttle/debounce feature with duration or custom button style to StyleButton.

```
import {View} from "react-native";
import {StyleButton} from "@mecute/design";


function App () {
  const onPressHandler = () => {
    console.log("Button Pressed!");
  };

  return (
    <View>
      <StyleButton
        theme="gray"
        type="enabled"
        size="xl"
        onPress={onPressHandler}
        <!-- You can set throttle/debounce feature with duration -->
        pressOption={["debounce", 250]}
        <!-- You can set custom button style -->
        buttonStyle={{ backgroundColor: "blue" }}
      >
        TEXT YOU WANT TO TYPE
      </StyleButton>
    </View>
  )
}

export default App;
```

<br/>

## You can put Icon next to Button"s text either to the left or right.

```
import {View} from "react-native";
import {StyleButton} from "@mecute/design";


function App () {
  const onPressHandler = () => {
    console.log("Button Pressed!");
  };

  return (
    <View>
      <StyleButton
        theme="gray"
        type="enabled"
        size="xl"
        onPress={onPressHandler}
        leftIcon={
          <Image source={require("./assets/images/sample/TestBox.png")} />
        }
        rightIcon={
          <Image source={require("./assets/images/sample/TestBox.png")} />
        }
      >
        Icon rendering next to text
      </StyleButton>
    </View>
  )
}

export default App;


```

<br />

## Checkout all StyleButtons we provide!

```
import {View, StyleSheet} from "react-native";
import {StyleButton, STYLE_BUTTON_THEME, STYLE_BUTTON_TYPE, STYLE_BUTTON_SIZE} from "@mecute/design";

...

function APP () {
  <!-- get requirement props(themes, types, and sizes) of StyleButton Component -->
  const themes = Object.keys(STYLE_BUTTON_THEME).map(
    key => STYLE_BUTTON_THEME[key],
  );
  const types = Object.keys(STYLE_BUTTON_TYPE).map(
    key => STYLE_BUTTON_TYPE[key],
  );
  const sizes = Object.keys(STYLE_BUTTON_SIZE).map(
    key => STYLE_BUTTON_SIZE[key],
  );

  <!-- You can checkout all types of buttons we provide -->
  const renderAllButtons = (themes, types, sizes) => {
    return themes.map(theme =>
      types.map(type =>
        sizes.map(size => (
          <StyleButton
            key={`${theme}${type}${size}`}
            text={"TEXT YOU WANT"}
            theme={theme}
            type={type}
            size={size}
            onPress={() => {
              console.log(
                `버튼 클릭! THEME :: ${theme} , SIZE :: ${size}, TYPE:: ${type}`,
              );
            }}
            pressOption={["throttle", 100]}
          />
        )),
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentsContainer}>
        {renderAllButtons(themes, types, sizes)}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;

```
