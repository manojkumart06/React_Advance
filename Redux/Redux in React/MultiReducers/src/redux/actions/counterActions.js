// define counter action constants here
export const INCREMENT_COUNT = "Increment count";
export const DECREMENT_COUNT = "Decrememt count";
export const RESET_COUNT = "Reset count";

// define counter action creators here




// action creators
export const incrementCount = () => ({ type: INCREMENT_COUNT });
export const decrementCount = () => ({ type: DECREMENT_COUNT });
export const resetCount = () => ({ type: RESET_COUNT });

