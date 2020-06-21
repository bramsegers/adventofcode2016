let input
    =require('fs')
    .readFileSync('input/aoc20.txt','utf8')
    .split('\r\n')
    .map(e=>e.split('-').map(Number))


let block=(r,range)=>{
    let f=r[0]
    let t=r[1]
    for(let i=range.length-1;i>=0;i--){
        let a=range[i][0]
        let b=range[i][1]
        if(f>b) break
        if(t<a) continue
        if(f<=a && t>=b) range.splice(i,1)
        if(f> a && t>=b) range[i][1]=f-1
        if(f<=a && t< b) range[i][0]=t+1
        if(f> a && t <b) {range[i][0]=t+1;range.splice(i,0,[a,f-1])}
    }
}


let range=[[0,4294967295]]
for(let i of input)
    block(i,range)


let allowed=0
for(let r of range)
    allowed+=r[1]-r[0]+1


console.log('part1',range[0][0])
console.log('part2',allowed)
