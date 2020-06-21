let input
    =require('fs')
    .readFileSync('input/aoc02.txt','utf8')
    .split('\r\n')


let x1=1,y1=1,code1=''
for(let i of input){
    for(let c of i){
        if(c=='U' && y1==0) continue
        if(c=='L' && x1==0) continue
        if(c=='D' && y1==2) continue
        if(c=='R' && x1==2) continue
        if(c=='U') y1--
        if(c=='L') x1--
        if(c=='D') y1++
        if(c=='R') x1++
    }
    code1+=3*y1+x1+1
}
console.log(code1)



let pad=[
    '       ',
    '   1   ',
    '  234  ',
    ' 56789 ',
    '  ABC  ',
    '   D   ',
    '       ']


let x2=1,y2=3,code2=''
for(let i of input){
    for(let c of i){
        if(c=='U' && pad[y2-1][x2]==' ') continue
        if(c=='L' && pad[y2][x2-1]==' ') continue
        if(c=='D' && pad[y2+1][x2]==' ') continue
        if(c=='R' && pad[y2][x2+1]==' ') continue
        if(c=='U') y2--
        if(c=='L') x2--
        if(c=='D') y2++
        if(c=='R') x2++
    }
    code2+=pad[y2][x2]
}
console.log(code2)