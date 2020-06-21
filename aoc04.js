let input
    =require('fs')
    .readFileSync('input/aoc04.txt','utf8')
    .split('\r\n')


let rooms=input.map(e=>{
    let t=e.split('[')
    let csum=t[1].slice(0,-1)
    let u=t[0].split('-')
    let sid=u.pop()|0
    let enc=u.join('-')
    return{enc,sid,csum}
})


let sum=0
let north
let abc='abcdefghijklmnopqrstuvwxyz'
for(let r of rooms){
    let a=[]
    for(let i=0;i<26;i++)
        a[i]={c:abc[i],f:0}
    for(let e of r.enc){
        let i=abc.indexOf(e)
        if(i>=0) a[i].f++
    }
    a.sort((b,c)=>{
        let df=c.f-b.f
        let dc=(b.c>c.c)?1:-1
        return df?df:dc
    })
    let b=a.slice(0,5).map(e=>e.c).join('')
    if(b!=r.csum) continue
    sum+=r.sid
    let t=''
    for(let e of r.enc){
        let i=abc.indexOf(e)
        t+=(i<0)?' ':abc[(i+r.sid)%26]
    }
    if(t.includes('northpole')){
        north=r
        north.decr=t
    }
}


console.log(sum)
console.log(north)