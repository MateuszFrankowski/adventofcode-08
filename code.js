
const triesTest1=
 [30373,
  25512,
  65332,
  33549,
  35390]
   //i
 //j 0 1 2 3 4
 //  

const triesColumn=triesTest1[0].toString().length


const triesRow=triesTest1.length
const TriesInString=[]
for(let i=0;i<triesColumn;i++){
  TriesInString.push(triesTest1[i].toString())
}


let iSeeTheTree=0

const findTries=(triesTest)=> {
 //column
for(let i=1;i<triesColumn-1;i++){
  //row
 for(let j=1;j<triesRow-1;j++){
 //check column under
 let left=triesTest[i].slice(0,j).split('')
 let leftMax=Math.max(left)
 let right=triesTest[i].slice(j,triesTest[i].length+1).split('')
 let rightMax=Math.max(right)
 const upper=[]
 const below=[]
 for (let a=1;a<triesRow;a++){
  console.log("a",triesTest[a][j])
  upper.push(triesTest[a][j])
 }
 for (let a=1;a>triesRow;a--){
  console.log("b",triesTest[a][j])
  below.push(triesTest[a][j])
 }
 let belowMax=Math.max(upper)
 let upperMax=Math.max(below)

console.log("maksy",left,rightMax,belowMax,upperMax)
  if (((triesTest[i][j]>leftMax[0]) && (leftMax===1)) || ((triesTest[i][j]>rightMax[0]) && (rightMax.length===1))||
  ((triesTest[i][j]>belowMax[0]) && (belowMax===1)) || ((triesTest[i][j]>upperMax[0]) && (upperMax.length===1))){
  iSeeTheTree++
}
  // console.log("iseeTries",iSeeTheTree,"TreePosition","column",i,"row",j,"triesTest[i][j]",triesTest[i][j],triesTest[i+1][j],triesTest[i][j-1],triesTest[i][j+1])
}
 };

 

const totalSesTries=(triesColumn+triesRow-2)*2+ iSeeTheTree
return totalSesTries}


console.log(findTries(TriesInString))
