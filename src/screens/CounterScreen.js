import React, { useReducer } from "react";
import { Text, View, Button } from "react-native";

const STEP = 1;
const initialState = { count: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload };
    case "decrease":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increase", payload: STEP })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrease", payload: STEP })}
      />
      <Text>Current Count: {count}</Text>
    </View>
  );
};

export default CounterScreen;
