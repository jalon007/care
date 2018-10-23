var describes=[
  '程序员A：借我1000元吧。 程序员B：给你凑个整数。问：程序员B借给程序员A多少钱？',
  '为什么程序员分不清万圣节和圣诞节？',
  '程序员：哎，太累了日子没法过了，怎么才能换行啊？',
  '程序员会给自己的孩子起什么名字？',
  '如何快速挣到一百万？',

  '程序员A：老婆，晚饭吃啥？ 老婆：买1斤包子，如果遇到卖西瓜的，就买一个。 程序员买包子时，看到旁边有卖西瓜。问：程序员带了什么晚饭回家？',
  '一对程序员恋人面对面坐着，他们在做什么？',
  '老板：小程，下班前一定要上线哦！ 小程：好的。第二天，老板：小程新版本怎么没上线？小程该怎么回答？',
  '程序员进阶到高级阶段必读的书籍是？',
  '高级程序员进阶到骨灰级阶段必读的书籍是？',

  '如何快速杀死一个程序员？',
  '如果程序员的女友和老妈同时掉进水里，他会怎么办？',
  '为什么吸烟的程序员不在乎香烟盒上的那个警告？',
  '这个世界上最痛苦的事是什么？',
  '以下哪位“经理”是程序员最怕的经理？',

  '一下哪个是“正确”的求生口号？',
  '数字9的下一个数是几？',
  '蔺相如，司马相如；魏无忌，长孙无忌。下列哪一组对应关系与此类似？',
  '程序员最怕弹出的窗口是？',
  '程序员的书房里最喜欢挂什么？'

]


var answers=[
  { 'A': '1000元', 'B': '没有借给他', 'C': '1024元' },
  { 'A': '因为 31 OCT == 25 DEC', 'B': '程序员只有加班/不加班，不过节', 'C': '程序员没有女朋友，不过节' },
  { 'A': '打回车', 'B': '不换行，日子不过了', 'C': ' 除了敲代码，都不会，换行还是敲代码啊' },
  { 'A': '依依、灵灵、依灵、灵依、依初', 'B': 'Ctrl、Alt 、Delete', 'C': '程序员怎么会有女朋友' },
  { 'A': 'while true', 'B': '买彩票', 'C': '洗洗睡吧' },

  { 'A': '1斤包子', 'B': '1个包子', 'C': '1个西瓜' },
  { 'A': '面向对象编程', 'B': '喝咖啡', 'C': '抱怨产品经理' },
  { 'A': '版本出问题了', 'B': '版本上线前需求又改了', 'C': '老板，我还没下班呢！' },
  { 'A': '《C语言程序与设计》', 'B': '《沉默的愤怒》', 'C': '《颈椎病康复指南》' },
  { 'A': '《C语言程序与设计》', 'B': '《颈椎病康复指南》', 'C': '《活着》' },

  { 'A': '让他加班', 'B': '给他提bug', 'C': '改三次需求' },
  { 'A': '先救女友', 'B': '先救老妈', 'C': 'Ctrl+Z' },
  { 'A': '字太小', 'B': '程序员只会编程序', 'C': '只关心Error级别,不关心Warning' },
  { 'A': '程序没做完，需求又改了', 'B': '程序刚做完了，整个需求砍掉了', 'C': '产品又改需求了' },
  { 'A': '大堂经理', 'B': '产品经理', 'C': '销售经理' },

  { 'A': 'help! help!', 'B': 'SOS! SOS!', 'C': 'F1 F1 F1' },
    { 'A': '10', 'B': 'a', 'C': '哲学问题，没有答案' },
  { 'A': 'PHP，Python', 'B': 'C、C++', 'C': 'Java、Javascript' },
    { 'A': '404 Not Found', 'B': '504 GateWay Time-Out', 'C': '找不到对象！' },
  { 'A': 'Hello World', 'B': 'Impossible Is Nothing', 'C': 'just do it' }
  ]
var key = [
  'C','C','A','C','A',
  'B','A','C','C','C',
  'C','C','C','B','B',
  'C','B','C','C','A'
]
module.exports = {
  describe: describes,
  answer: answers,
  key: key
}