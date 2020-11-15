function numberToWords(age) {
  // variable to hold string representation of number
  let words = '';
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
    'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
    'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
    'eighteen', 'nineteen'];
  const tensArray = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety'];

  if (age === 0) {
    return 'zero';
  }

  // check if number is divisible by 100 billion
  if (Math.floor((age / 100_000_000_000)) > 0) {
    words += numberToWords(Math.floor(age / 100_000_000_000)) + 'hundred ';
    age = Math.floor(age % 100_000_000_000);
  }

  // check if number is divisible by 1 billion
  if (Math.floor((age / 1_000_000_000)) > 0) {
    words += numberToWords(Math.floor(age / 1_000_000_000)) + 'billion ';
    age = Math.floor(age % 1_000_000_000);
  }

  // check if number is divisible by 100 million
  if (Math.floor((age / 100_000_000)) > 0) {
    words += numberToWords(Math.floor(age / 100_000_000)) + 'hundred ';
    age = Math.floor(age % 100_000_000);
  }

  // check if number is divisible by 1 million
  if (Math.floor((age / 1_000_000)) > 0) {
    words += numberToWords(Math.floor(age / 1_000_000)) + 'million ';
    age = Math.floor(age % 1_000_000);
  }

  // check if number is divisible by 1 thousand
  if (Math.floor((age / 1_000)) > 0) {
    words += numberToWords(Math.floor(age / 1_000)) + 'thousand ';
    age = Math.floor(age % 1000);
  }

  // check if number is divisible by 1 hundred
  if (Math.floor(age / 100) > 0) {
    words += numberToWords(Math.floor(age / 100)) + 'hundred ';
    age = Math.floor(age % 100);
  }

  if (age > 0) {
    // check if number is within teens
    if (age < 20) {
      // fetch the appropriate value from unit array
      words += units[age] + ' ';
    } else {
      // fetch the appropriate value from tens array
      words += tensArray[Math.floor(age / 10)];
      if (Math.floor(age % 10) > 0) {
        words += '-' + units[Math.floor(age % 10)] + ' ';
      } else {
        words += ' ';
      }
    }
  }
  return words;
}