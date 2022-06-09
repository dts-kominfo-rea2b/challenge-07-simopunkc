const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const data1 = await promiseTheaterIXX()
  const data2 = await promiseTheaterVGC()
  let count = 0
  data1.concat(data2).forEach(element => {
    if (element.hasil == emosi) {
      count += 1
    }
  });
  return count
};

module.exports = {
  promiseOutput,
};
