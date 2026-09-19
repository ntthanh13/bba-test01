// Hãy đếm và in ra có bao nhiêu cặp số từ 1 tới 100 có tổng chia hết cho 17
// Lưu ý:
// - Mỗi cặp số chỉ được đếm 1 lần — (1, 16) và (16, 1) là cùng 1 cặp
// - 2 số trong cặp được phép bằng nhau — (17, 17), (34, 34)... là hợp lệ

// Khai báo biến đếm count
let count = 0;
// Chạy vòng lặp cho số a từ 1 -> 100
for (let a = 1; a <= 100; a++) {
    // Chạy vòng lặp cho số b = a để tránh trường hợp lặp trùng cặp
    for (let b = a; b <= 100; b++) {
        // Kiểm tra tổng (a,b) chia hết cho 17 thì in kết quả và count+1
        if ((a + b) % 17 === 0) {
            console.log(`(${a},${b}) = 17`);
            count++;
        };
    };
};
// In tổng số cặp
console.log(`Tổng: ${count} cặp`);