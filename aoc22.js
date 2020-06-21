let input
    =require('fs')
    .readFileSync('input/aoc22.txt','utf8')
    .split('\r\n')
    .filter((e,i)=>i>1)
    .map(e=>{
        let a=e.split(' ').filter(e=>e.length)
        let b=a[0].split('-')
        let x=b[1].substr(1)|0
        let y=b[2].substr(1)|0
        let size=parseInt(a[1])
        let used=parseInt(a[2])
        return {x,y,size,used}
    })


let count=0
for(let i of input){
    for(let j of input){
        if(i==j) continue
        if(i.used==0) continue
        if(i.used+j.used>j.size) continue
        count++        
    }
}
console.log(count)


let A=[] 
let X=input.reduce((a,b)=>a.x>b.x?a:b).x
let Y=input.reduce((a,b)=>a.y>b.y?a:b).y
for(let y=0;y<=Y;y++) A[y]=[]


for(let i of input){
    let c=i.used==0?'E':'.'
    if(i.y==0 && i.x==X) c='G'
    if(i.y==0 && i.x==0) c='X'
    A[i.y][i.x]=c
    for(let j of input){
        if(i==j) continue
        if(i.used<=j.size) continue
        A[i.y][i.x]='#'
        break        
    }
}


for(let y=0;y<=Y;y++)
    console.log(A[y].join(''))


// action               steps
// move E left 6x       6
// move E up 26x        26
// move E right 13x     13
// move G left 30x      5x30


console.log(6+26+13+5*30)