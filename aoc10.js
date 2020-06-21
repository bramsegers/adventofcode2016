let input
    =require('fs')
    .readFileSync('input/aoc10.txt','utf8')
    .split('\r\n')


let instr=[]
let owner=[]


for(let i of input){
    let t=i.split(' ')
    if(t.length==6){
        let v=t[1]|0
        let o=t[4]+t[5]
        if(!owner[o]) owner[o]=[]
        owner[o].push(v)
    }else{
        let o=t[0]+t[1]
        let lo=t[5]+t[6]
        let hi=t[10]+t[11]
        if(!owner[o]) owner[o]=[]
        if(!owner[lo]) owner[lo]=[]
        if(!owner[hi]) owner[hi]=[]
        instr.push({o,lo,hi})
    }
}


let bot
while(true){
    let n
    for(let i of instr)
        if(owner[i.o].length==2){
            n={i,o:owner[i.o]}
            break
        }    
    if(!n) break
    let lo=Math.min(...n.o)
    let hi=Math.max(...n.o)
    if(lo==17 && hi==61) bot=n.i.o
    owner[n.i.lo].push(lo)
    owner[n.i.hi].push(hi)
    owner[n.i.o]=[]
}


let mul=[0,1,2]
    .map(e=>owner['output'+e])
    .flat().reduce((a,b)=>a*b)


console.log(bot)
console.log(mul)