const xlsx = require('xlsx');

const workbook = xlsx.readFile('./test.xlsx');
const firstSheetName = workbook.SheetNames[0]; //첫번째 시트이름
const firstSheet = workbook.Sheets[firstSheetName]

const firstSheetJson = xlsx.utils.sheet_to_json(firstSheet);
console.log(firstSheetJson)
console.log(['A1']) //A1 셀의 내용을 출력

//내용 수정하기
firstSheet['B2'].v = '변경된 값' //B2의 value를 변경
firstSheet['A3'] = {t:'s', v:'값'} //t = type, v = 값

//writeFile 함수 - 새로운 파일 생성
xlsx.writeFile(workbook, './xlsx/test2.xlsx') //새로운 엑셀 파일에 저장

