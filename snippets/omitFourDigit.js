/*
Paraleipw ton arithmo 4 

o arithmos 100 sto sinithismeno dekadiko sistima se poion arithmo antistoixei
sto kainourio sistima

*/

//! brute force
const omitFourDigit = (numberInDecadeSystem) => {
  let extraSteps = 0;

  for (let i = 1; i <= numberInDecadeSystem; i++) {
    if (i.toString().match(/4/gi)) {
      console.log("i", i, "div", i / 4, " mod", i % 4);
      extraSteps++;
    }
  }
  return numberInDecadeSystem + extraSteps;
};

const inRangeOf100 = (numberInDecadeSystem, BASE) => {
  const ceil = Math.ceil(numberInDecadeSystem / BASE);

  let output = numberInDecadeSystem;

  /* an einai mikrotero tou 100
    prosthetw ceil - 1 + ta extra bimata apo tin dekada tou 40

    case 1 na einai megalitero apo to 40 --> 10

    case 2 na einai mikrotero tou 40 --> 0

    case 3 na einai stin mesi --> ta metrw ena ena
  */

  if (numberInDecadeSystem < 4 * BASE) {
    output += ceil;
  }

  if (
    numberInDecadeSystem >= 4 * BASE &&
    numberInDecadeSystem <= 5 * BASE - 1
  ) {
    output += ceil + numberInDecadeSystem - 4 * BASE + 1;
  }

  if (numberInDecadeSystem > 5 * BASE - 1) {
    output += ceil - 1 + BASE;
  }

  return output;
};

const omitFourDigitOptimal = (numberInDecadeSystem) => {
  const veryLarge = 100000;

  //   const findRange

  console.log("brute", omitFourDigit(numberInDecadeSystem));

  //! project in range of 100
  //   const hundreds = console.log(
  //     "optimal",
  //     inRangeOf100(numberInDecadeSystem, 10)
  //   );
};

export default omitFourDigitOptimal;

/* analisi dekadwn

gia 100

exw ena 4ari ana dekada ektos tin dekada tou 40
ara exw 10 dekades - tin dekada tou 40 --> extra steps 9
episis exw tin dekada tou 40 i opoia exei 10 stoixeia

ara exw 19 sinolika nea bimata --> sinolo 100 + 19 = 119

gia 0-10

0-9 --> 1
0-100 --> 1*19 = (10^(d-2) + (d-2)*9) * 9 + 10^d-1 //! --> d=2
0-1000 --> (10^d-2 + 9) * 9 + 100 = 19*9 + 10^d-1 //! d=3
0-10000 --> (10^(d-2) + (d-2)*9) * 9 + 10^d-1

gia 1000

0 - 40 , 40-49, 50 - 99, --> 9 + base
100 - 140, 140 -149, 150 - 199 --> 9 + 10
200 - 240, 240 -249, 250 -299 --> 9 + 10
300 - 340, 340 -349, 350 - 399 --> 9 + 10
400 -> olo --> 100 
...
900 - 939, 940 - 949, 950 - 999 --> 9 + 10

19 * 4 + 100 * (numb>400?1:0) + numb
19 * 4 + 100 + numb

19 * 7 + 100 + 800

7 + 10 + 80

4 + 0 * 10 + 40

200 -> 2 * 100 + 0*10 + 0*1





*/
