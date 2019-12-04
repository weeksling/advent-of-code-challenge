const mutateAddition = (code, index) => {
  const first = code[index + 1];
  const second = code[index + 2];
  const updateIndex = code[index + 3];

  code[code[index + 3]] = code[code[index + 1]] + code[code[index + 2]];
  return code;
};
const mutateMultiply = (code, index) => {
    const first = code[index + 1];
    const second = code[index + 2];
    const updateIndex = code[index + 3];
    
    code[code[index + 3]] = code[code[index + 1]] * code[code[index + 2]];
    return code;
  };

const traverseArray = code => {
//   console.log("INCOMING CODE", code);
  let index = 0;
  let nextCode;
  while (index < code.length) {
    // console.log({ index, operator: code[index] });
    switch (code[index]) {
      case 1:
        // console.log("ADD");
        mutateAddition(code, index);
        break;
      case 2:
        // console.log("SUBTRACT");
        mutateMultiply(code, index);
        break;
      case 99:
        // console.log("END");
        index = code.length + 1;
        break;
    }
    index += 4;
  }
//   console.log("OUTGOING CODE", code);
  return code;
};

const interpretOpCode = code => {
  return traverseArray(code.split(",").map(n => Number.parseInt(n))).join(",");
};

module.exports = interpretOpCode;
