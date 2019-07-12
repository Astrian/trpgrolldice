const alfy = require('alfy');
const moment = require('moment')

let { input } = alfy

if (!(/([1-9][0-9]*)?d([1-9][0-9]*)/).test(input)) {
  alfy.output([{
    title: '输入不正确',
    subtitle: '请以 xdy 格式输入。'
  }])
  return
}

let times = input.split('d')[0]
let dimensions = input.split('d')[1]

let result = []
let output = ''
let total = 0

for (let i = 0; i < times; i++) {
  let point = Math.floor(Math.random() * dimensions);
  point += 1
  result[result.length] = {
    title: `🎲 第 ${i+1} 次投掷点数 ${point}`
  }
  output += `\n🎲 第 ${i+1} 次投掷点数 ${point}`
  total += point
}

result = [{
  title: `✅ 投掷 ${times} 次 ${dimensions} 面骰，投掷总点数为 ${total}`,
  subtitle: `选择此条目复制结果`,
  arg: `✅ 投掷 ${times} 次 ${dimensions} 面骰，投掷总点数为 ${total}${output}\n生成时间：${moment().format("HH:mm")}`
}].concat(result)


alfy.output(result)