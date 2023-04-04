const x1 = 10;
const x2 = 30;
const number = 45;

if (number < x1) {
    console.log(`${number} входить у відрізок до ${x1}`);
} else if (number > x1) {
    console.log(`${number} входить у відрізок після ${x1}`);
} else if (number >= x1 && number <= x2) {
    console.log(`${number} входить у відрізок від ${x1} до ${x2}`);
} else if (number < x1  || number > x2) {
    console.log(`${number} входить у відрізок менше ${x1} або більше ${x2}`);
};