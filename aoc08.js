let input
    =require('fs')
    .readFileSync('input/aoc08.txt','utf8')
    .split('\r\n')


let X=50
let Y=6 
let A=[]


for(let j=0;j<Y;j++)
    A[j]=new Array(X).fill(0)


for(let i of input){
    let mode,val
    let parse=(e,p,s)=>e.substring(p).split(s).map(e=>e|0)
    if(i.startsWith('rect'))       {mode='rec'; val=parse(i,5,'x')}
    if(i.startsWith('rotate row')) {mode='row'; val=parse(i,13,' by ')}
    if(i.startsWith('rotate col')) {mode='col'; val=parse(i,16,' by ')}
    if(mode=='rec'){
        for(let j=0;j<val[1];j++)
            for(let i=0;i<val[0];i++)
                A[j][i]=1
    }
    if(mode=='row'){
        for(let i=0;i<val[1];i++)
            A[val[0]].unshift(A[val[0]].pop())
    }
    if(mode=='col'){
        let t=[]
        for(let i=0;i<Y;i++)
            t[i]=A[i][val[0]]
        for(let i=0;i<Y;i++)
            A[i][val[0]]=t[(i-val[1]+Y)%Y]
    }
}


let sum=0
for(let i of A){
    sum+=i.reduce((a,b)=>a+b)
    console.log(i.map(e=>e?'★ ':'  ').join(''))
}
console.log(sum)