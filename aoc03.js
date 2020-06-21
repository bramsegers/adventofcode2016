let input
    =require('fs')
    .readFileSync('input/aoc03.txt','utf8')
    .split('\r\n')


let count1=0
for(let i of input){
    let a=i.substring(0,5)|0
    let b=i.substring(5,10)|0
    let c=i.substring(10,15)|0
    let t=[a,b,c]
    t.sort((a,b)=>a-b)
    count1+=t[0]+t[1]>t[2]
}
console.log(count1)

    
let count2=0
for(let i=0;i<input.length-2;i+=3){
    for(let j=0;j<15;j+=5){
        let a=input[i  ].substring(j,j+5)|0
        let b=input[i+1].substring(j,j+5)|0
        let c=input[i+2].substring(j,j+5)|0
        let t=[a,b,c]
        t.sort((a,b)=>a-b)
        count2+=t[0]+t[1]>t[2]
    }
}
console.log(count2)