// temp_converter_plus.js
// 智慧溫度轉換 + 可重複執行

function parseInput(input) {
  if (!input) return null;

  // 允許格式：36C、100f、37.5 c 等
  input = input.trim().toUpperCase();
  var match = input.match(/^(-?\d+(\.\d+)?)\s*([CF])$/);

  if (!match) return null;

  return {
    value: parseFloat(match[1]),
    unit: match[3]
  };
}

function convertTemp(value, unit) {
  if (unit === 'C') {
    return { value: value * 9 / 5 + 32, unit: 'F' };
  } else if (unit === 'F') {
    return { value: (value - 32) * 5 / 9, unit: 'C' };
  }
  return null;
}

var text = '🌡️ 溫度轉換器開始\n\n';

do {
  var input = prompt('請輸入溫度（例如：36.5C 或 100F）：');
  var parsed = parseInput(input);

  if (!parsed) {
    alert('輸入格式錯誤，請重新輸入（格式例如 36.5C 或 100F）');
    continue;
  }

  var result = convertTemp(parsed.value, parsed.unit);
  var msg = parsed.value + '°' + parsed.unit + ' = ' + result.value.toFixed(2) + '°' + result.unit;

  alert(msg);
  text += msg + '\n';

} while (confirm('是否要再轉換一次？'));

document.getElementById('result').textContent = text;
