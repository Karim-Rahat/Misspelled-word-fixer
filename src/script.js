const numberInWords = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];
const numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const mispelledWord = document.getElementById("mispelledWord");
function myFunction() {
  let count = 0;
  numberInWords.map((data, i) => {
    if (data.length == mispelledWord.value.length) {
      count = 0;
      let dataSplit = data.toLowerCase().split("");
      let mispelledWordSplit = mispelledWord.value.toLowerCase().split("");
      dataSplit.map((item, j) => {
        if (item == mispelledWordSplit[j]) {
          count++;
          if (mispelledWord.value.length - 1 == count) {
            result.innerHTML = `Let me guess : ` + data + `(${numbers[i]})`;
          }
        }
      });
    }
  });
}
