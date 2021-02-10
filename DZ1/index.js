// Next homework is done here - https://cdn.otus.ru/media/private/36/43/%D0%94%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B5%D0%B5_%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5__1-68729-3643bc.pdf?hash=toixU7HgajwXzEUhW_iMNQ&expires=1612245303
export function DZ1_nums(a, b) {
  const sum = a + b;
  const mult = a * b;
  try {
    if (isNaN(sum) || isNaN(mult)) {
      throw new Error(console.log('Error'));
    }
  } catch (err) {
    console.log('Error');
  }
  console.log(sum, mult);
}

export function DZ1_str(str1, str2) {
  try {
    const str1Length = str1.length;
    const str2Length = str2.length;
    const sumLength = str1Length + str2Length;
    console.log(sumLength);
    if (isNaN(sumLength)) {
      throw new Error(console.log('Error'));
    }
  } catch (err) {
    console.log('Error');
  }
}

export function DZ1_sumOfItems() {
  try {
    const input = prompt('Enter number');
    let sumOfItems = 0;
    for (let i = 0; i < input.length; i++) {
      sumOfItems += Number(input[i]);
    }
    console.log(sumOfItems);
  } catch (err) {
    console.log('Error');
  }
}
