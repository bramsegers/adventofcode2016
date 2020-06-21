let input
    =require('fs')
    .readFileSync('input/aoc01.txt','utf8')
    .split(', ')
    .map(e=>{return {d:e[0],s:e.slice(1)|0}})


let dx=[0,1,0,-1]
let dy=[1,0,-1,0]
let d=0
let seen=[]
let [x1,y1]=[0,0]
let [x2,y2]=[0,0]
for(let i of input){
    d+=(i.d=='R')?1:3
    if(d>=4) d-=4
    for(let s=0;s<i.s;s++){
        x1+=dx[d]
        y1+=dy[d]
        if(!x2 && seen[[x1,y1]]) {x2=x1,y2=y1}
        else seen[[x1,y1]]=1
    }
}


console.log(Math.abs(x1)+Math.abs(y1))
console.log(Math.abs(x2)+Math.abs(y2))