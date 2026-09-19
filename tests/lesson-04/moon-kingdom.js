// Bài 1: Tạo hàm createCharacters:
// Khai báo mảng các object: characters
const characters = [
    { name: "Mario", level: 5, health: 700 },
    { name: "Luigi", level: 4, health: 600 },
    { name: "Toad", level: 1, health: 200 },
    { name: "Bowser", level: 6, health: 900 },
    { name: "Yoshi", level: 2, health: 300 },
]

// Sử dụng hàm map để tạo ra mảng mới: charactersPowerUp
const charactersPowerUp = characters.map(value => ({
    name: value.name.toUpperCase(),
    level: value.level * 2,
    health: value.health * 3
}));
// Kiếm tra kết quả
// console.log(charactersPowerUp);

// Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đặt tên mảng mới lọc được này là "possibleWinners"
const possibleWinners = charactersPowerUp.filter(value => value.health > 1000);
// Kiểm tra kết quả
// console.log(possibleWinners);


// Bài 2: Tạo hàm printLeaderboard:
// Nhận vào tham số: players là mảng các object:
const players = [
    { name: "Mario", score: 1500 },
    { name: "Luigi", score: 1200 },
    { name: "Toad", score: 600 },
    { name: "Bowser", score: 1100 },
    { name: "Yoshi", score: 1800 },
    { name: "Boo", score: 300 },
    { name: "Peach", score: 1400 },
    { name: "Daisy", score: 800 }
]

// Sắp xếp mảng người chơi theo thứ tự score từ cao đến thấp.
players.sort((a, b) => b.score - a.score);

// In ra bảng xếp hạng. Lưu ý: với 3 vị trí 1, 2, 3, hãy thêm huy chương phía trước
const medal = ["Gold", "Silver", "Bronze"];
for (i = 0; i < players.length; i++) {
    if (i < 3) {
        console.log(`${medal[i]} ${i + 1}. ${players[i].name} - ${players[i].score} point`);
    } else {
        console.log(`${i + 1}. ${players[i].name} - ${players[i].score} point`);
    }
}


