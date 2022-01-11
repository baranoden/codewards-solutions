/* Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8 */

function rowSumOddNumbers(n) {
  let num = ((n - 1) * n) / 2;

  let firstnum = num * 2 + 1;
  let lastnum = firstnum + 2 * (n - 1);

  return (n * (firstnum + lastnum)) / 2;
}

// ----- VERY EASY ALTERNATE WAY ES10+ ----
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
