// Khai báo
let powerUp = "mushroom";
let powerEffect = "";

// Xác định tên hiệu ứng tương ứng với các powerUp
if (powerUp === "mushroom") {
    powerEffect = "Mario becomes Super!";
} else if (powerUp === "flower") {
    powerEffect = "Mario can shoot fireballs!";
} else if (powerUp === "star") {
    powerEffect = "Mario is invincible!";
} else if (powerUp === "none") {
    powerEffect = "Mario is normal";
} else {
    powerEffect = "Unknown power-up";
}
// In ra ngoài console hiệu ứng tên hiệu ứng
console.log(powerEffect);