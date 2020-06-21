let input
    =require('fs')
    .readFileSync('input/aoc15.txt','utf8')
    .split('\r\n')
    .map(e=>e.match(/\d+/g))
    .map(e=>[e[1]|0,e[3]|0])


let valid=(t)=>{
    for(let i=0;i<input.length;i++){
        let a=input[i][0]
        let b=input[i][1]
        let p=(b+t+i+1)%a
        if(p) return false
    }
    return true
}


let solve=()=>{
    let t=0
    while(!valid(t)) t++
    console.log(t)
}


solve(input)
input.push([11,0])
solve(input)