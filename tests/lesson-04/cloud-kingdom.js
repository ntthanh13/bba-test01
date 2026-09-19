// Khai báo
let playerName = "Mario";
let currentLives = 3;
const coinLevel1 = 25;
const coinLevel2 = 30;
const coinLevel3 = 45;

// Tính tổng coin của 3 level, sau đó tính giá trị trung bình (tổng / 3)
const tongCoin3Level = coinLevel1 + coinLevel2 + coinLevel3;
const trungBinhCoin = tongCoin3Level / 3;

// In ra số coin dư khi chia tổng số coin cho 3
console.log(tongCoin3Level % 3);