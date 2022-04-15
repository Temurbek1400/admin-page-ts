const matritsalarKopaytmasi = (a, b) => {
   if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) {
      throw new Error("matritsa xato kiritildi");
   }
   let x = a.length,
      z = a[0].length,
      y = b[0].length;
   if (b.length !== z) {
      // XxZ & ZxY => XxY
      throw new Error(
         `birinchi matritsaning qatorlar soni ikkinchisining ustunlar soniga teng bo'lishi kerak`
      );
   }
   let productRow = Array.apply(null, new Array(y)).map(
      Number.prototype.valueOf,
      0
   );
   let product = new Array(x);
   for (let p = 0; p < x; p++) {
      product[p] = productRow.slice();
   }
   for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
         for (let k = 0; k < z; k++) {
            product[i][j] += a[i][k] * b[k][j];
         }
      }
   }
   return product;
};
let a = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
];
let b = [
   [1, 4, 7],
   [2, 5, 8],
   [3, 6, 9],
];
// should result in a 5 x 6 matrix
console.log(matritsalarKopaytmasi(a, b));
