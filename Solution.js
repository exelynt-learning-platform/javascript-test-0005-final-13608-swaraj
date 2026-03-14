function Solution(row) {
  const rows = row;
  let currentNumber = 1;

  for (let i = 1; i <= rows; i++) {

    for (let j = 1; j <= i; j++) {
      process.stdout.write(currentNumber + " ");
      currentNumber++;
    }

    console.log();
  }
}
Solution(5);