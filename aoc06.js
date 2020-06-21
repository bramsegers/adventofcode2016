let input
    =require('fs')
    .readFileSync('input/aoc06.txt','utf8')
    .split('\r\n')


let message1=''
let message2=''
let abc='abcdefghijklmnopqrstuvwxyz'


for(let i=0;i<input[0].length;i++){
    let col=input.map(e=>e[i]).join('')
    let a=[]
    for(let i=0;i<26;i++)
        a[i]={c:abc[i],f:0}
    for(let c of col){
        let i=abc.indexOf(c)
        if(i>=0) a[i].f++
    }
    a.sort((b,c)=>c.f-b.f)
    message1+=a.shift().c
    message2+=a.pop().c
}


console.log(message1)
console.log(message2)