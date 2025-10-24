// guess_number_plus.js
// 猜數字遊戲：可選難度、多局遊玩、統計結果

function randomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

function playGame(range) {
  var answer = randomInt(range);
  var count = 0;
  var guess;
  var log = `🎯 新遊戲開始！（範圍 1–${range}）\n`;

  while (true) {
    guess = prompt(`請輸入你猜的數字 (1–${range})：`);
    if (guess === null) {
      log += '❌ 你放棄了遊戲。\n';
      break;
    }

    var num = parseInt(guess, 10);
    if (isNaN(num) || num < 1 || num > range) {
      alert(`請輸入 1 到 ${range} 之間的整數！`);
      continue;
    }

    count++;

    if (num === answer) {
      alert(`✅ 恭喜答對！答案是 ${answer}，共猜了 ${count} 次 🎉`);
      log += `✅ 恭喜答對（共猜 ${count} 次）\n`;
      break;
    } else if (num < answer) {
      alert('再大一點！');
    } else {
      alert('再小一點！');
    }
  }

  return log;
}

// === 主流程 ===
var resultText = '🎮 猜數字遊戲紀錄\n\n';

do {
  // 選擇難度
  var level = prompt('請選擇難度：\n1. 簡單（1–50）\n2. 普通（1–100）\n3. 困難（1–500）');
  var range = 100; // 預設普通

  if (level === '1') range = 50;
  else if (level === '2') range = 100;
  else if (level === '3') range = 500;
  else alert('未輸入有效選項，預設普通難度。');

  resultText += playGame(range) + '\n';

} while (confirm('是否再玩一局？'));

document.getElementById('result').textContent = resultText;
console.log(resultText);
