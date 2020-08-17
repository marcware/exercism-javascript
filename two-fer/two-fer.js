//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name) => {
  let distribution = "One for you, one for me.";
  
  if (name === "Alice") {
    distribution = "One for Alice, one for me.";
  } else if (name === "Bob") {
    distribution = "One for Bob, one for me.";
  }
  return distribution;
};
