export const addCart = (val = 0) => {
  return {
    type: "addCart",
    value: val,
  };
}
export const removeCart = () => {
    return {
      type: "removeCart",
      value:0
    };
  };
  


// export const addCart = (val=0) => {
//     return {
//         type: "addCart",
//         value:val
//     }
// }

// export const removeCart = () => {
//     return {
//         type: "removeCart",
//         value:0
//     }
// }