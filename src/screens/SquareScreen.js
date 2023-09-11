import React, { useReducer } from "react";
import { View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 10;
const initialState = { red: 0, green: 0, blue: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      return { ...state, red: state.red + action.payload };
    case "green":
      return { ...state, green: state.green + action.payload };
    case "blue":
      return { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          red < 255 && dispatch({ type: "red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          red > 0 && dispatch({ type: "red", payload: -COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          green < 255 && dispatch({ type: "green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          green > 0 && dispatch({ type: "green", payload: -COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          blue < 255 && dispatch({ type: "blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          blue > 0 && dispatch({ type: "blue", payload: -COLOR_INCREMENT })
        }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
