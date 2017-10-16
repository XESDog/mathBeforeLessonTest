//将文件夹`/Users/work/Desktop/切图`中的文件copy到static

const fsExtra = require('fs-extra');
const fs = require('fs');

const targetPath = `/Users/work/Desktop/切图`
const destinationPath = `/Users/work/Documents/math_before_lesson_test/static`;
const dirMap = [
  ['例1', 'level_0/question_0'],
  ['例2', 'level_0/question_1'],
  ['例3', 'level_0/question_2'],

  ['例4', 'level_1/question_0'],
  ['例5', 'level_1/question_1'],

  ['例6', 'level_2/question_0'],
  ['例7', 'level_2/question_1'],

  ['例8', 'level_3/question_0'],
  ['例9', 'level_3/question_1'],

  ['例10', 'level_4/question_0'],

  ['例11', 'level_5/question_0'],
  ['例12', 'level_5/question_1'],
]

fsExtra.emptyDirSync(destinationPath);

for (let [key, value] of dirMap) {
  let t = `${targetPath}/题干图/${key}.png`
  let d = `${destinationPath}/${value}/stem.png`

  if (fs.existsSync(t)) {
    fsExtra.copySync(t, d)
  } else {
    console.log(`不存在文件${t}`);
  }

  copyOption(key,value,'Option');
  copyOption(key,value,'Selected');

}

function copyOption(key,value,p) {
  let optionT = `${targetPath}/选项/${key}/${p}`;
  let optionStats = fs.statSync(optionT);
  if (optionStats.isDirectory()) {
    let files = fs.readdirSync(optionT);
    files = files.filter(value => {
      return !/Thumbs\.db/.test(value);
    })

    for (let f of files) {
      let name = f.toLowerCase();
      name = name.replace(/-/g, '_');
      name=name.replace(/\d/,(match)=>{
        return match-1;
      })
      fsExtra.copySync(`${optionT}/${f}`, `${destinationPath}/${value}/${name}`);
    }
  }
}







