// bài 1: sắp xếp theo thứ tự tăng dần của 3 số nguyên
// Cách giải:
// so sánh từng cặp số(bằng cách dùng toán tử && và điều kiện if)
let output1 = document.querySelector(".bai1 .output1");
output1.onclick = function () {
  const so1 = document.querySelector("#so1").value * 1;
  const so2 = document.querySelector("#so2").value * 1;
  const so3 = document.querySelector("#so3").value * 1;
  let output_bai1;
  if (so1 > so2 && so1 > so3) {
    so2 > so3
      ? (output_bai1 = `${so3}, ${so2}, ${so1}`)
      : (output_bai1 = `${so2}, ${so3}, ${so1}`);
  }
  if (so2 > so3 && so2 > so1) {
    so3 > so1
      ? (output_bai1 = `${so1}, ${so3}, ${so2}`)
      : (output_bai1 = `${so3}, ${so1}, ${so2}`);
  }
  if (so3 > so1 && so3 > so2) {
    so1 > so2
      ? (output_bai1 = `${so2}, ${so1}, ${so3}`)
      : (output_bai1 = `${so1}, ${so2}, ${so3}`);
  }
  const ketqua_bai1 = document.querySelector(".ketqua_bai1");
  ketqua_bai1.value = output_bai1;
};

// bài 2: viết chương trình chào hỏi thành viên trong gia đình
let output2 = document.querySelector("#laptop");
output2.onblur = () => {
  const output_bai2 = document.querySelector(".output_bai2");
  output_bai2.innerHTML = "Output: Welcome " + output2.value + "!";
};

// bài 3: viết chương trình đếm số lẻ, số chẵn
// tóm tắt: người dùng sẽ nhập 3 số tự nhiên bất kỳ
// lấy từng số tự nhiên đem chia cho 2 rồi lấy phần dư
// nếu dư 0 thì đó là số chẵn và ngược lại
const output3 = document.querySelector(".bai3 .output3");
output3.onclick = function () {
  const so1 = document.querySelector("#so1-bai3").value * 1;
  const so2 = document.querySelector("#so2-bai3").value * 1;
  const so3 = document.querySelector("#so3-bai3").value * 1;
  const ketqua_bai3 = document.querySelector(".ketqua_bai3");
  let so_chan = 0;
  let so_le = 0;
  let dau_vao = [so1, so2, so3];
  for (let i of dau_vao) {
    i % 2 === 0 ? (so_chan += 1) : (so_le += 1);
  }
  let output_bai3 = `Tổng số chẵn: ${so_chan}, tổng số lẻ: ${so_le}`;
  ketqua_bai3.innerHTML = "Kết quả: " + output_bai3;
};

// bài 4: xác định loại tam giác
// hướng giải:
// tìm cạnh dài nhất của tam giác
// rồi xét từng trường hợp
const output4 = document.querySelector(".bai4 .output4");
output4.onclick = () => {
  const so1 = document.querySelector("#canh1").value * 1;
  const so2 = document.querySelector("#canh2").value * 1;
  const so3 = document.querySelector("#canh3").value * 1;
  const ketqua = document.querySelector(".bai4 .ketqua");
  // sắp xếp chiều dài các cạnh theo thứ tự tăng dần
  let ba_canh;
  if (so1 > so2 && so1 > so3) {
    so2 > so3 ? (ba_canh = [so3, so2, so1]) : (ba_canh = [so2, so3, so1]);
  }
  if (so2 > so3 && so2 > so1) {
    so3 > so1 ? (ba_canh = [so1, so3, so2]) : (ba_canh = [so3, so1, so2]);
  }
  if (so3 > so1 && so3 > so2) {
    so1 > so2 ? (ba_canh = [so2, so1, so3]) : (ba_canh = [so1, so2, so3]);
  }
  so1 === so2 ? (ba_canh = [so1, so2, so3]) : null;
  so2 === so3 ? (ba_canh = [so2, so3, so1]) : null;
  let output_bai4;
  // trường hợp tam giác cân và tam giác đều
  if (ba_canh[0] === ba_canh[1]) {
    ba_canh[1] === ba_canh[2]
      ? (output_bai4 = "Đây là tam giác đều!")
      : (output_bai4 = "Đây là tam giác cân");
  } else {
    output_bai4 = "Đây là tam giác thường!";
  }

  // trường hợp tam giác vuông
  if (
    ba_canh[2] * ba_canh[2] ===
    ba_canh[1] * ba_canh[1] + ba_canh[0] * ba_canh[0]
  ) {
    ba_canh[1] === ba_canh[0]
      ? (output_bai4 = "Đây là tam giác vuông cân!")
      : (output_bai4 = "Đây là tam giác vuông!");
  }
  ketqua.innerHTML = "Kết quả: " + output_bai4;
};
