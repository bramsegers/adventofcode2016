let input
    =require('fs')
    .readFileSync('input/aoc21.txt','utf8')
    .split('\r\n')


let scramble=(a)=>{
    for(let i of input){
        let s=i.split(' ')

        if(i.startsWith('swap pos')){
            let x=s[2]|0
            let y=s[5]|0
            let t=a[x]
            a[x]=a[y]
            a[y]=t

        }else if(i.startsWith('swap letter')){
            let x=s[2]
            let y=s[5]
            for(let j=0;j<a.length;j++){
                if(a[j]==x) a[j]=y
                else if(a[j]==y) a[j]=x
            }
        
        }else if(i.startsWith('rotate left')){
            let x=s[2]|0
            for(let j=0;j<x;j++)
                a.push(a.shift())

        }else if(i.startsWith('rotate right')){
            let x=s[2]|0
            for(let j=0;j<x;j++)
                a.unshift(a.pop())
            
        }else if(i.startsWith('rotate based')){
            let x=s[6]
            let n=a.indexOf(x)
            n+=(n>=4)?2:1
            for(let j=0;j<n;j++)
                a.unshift(a.pop())

        }else if(i.startsWith('reverse position')){
            let x=s[2]|0
            let y=s[4]|0
            while(x<y){
                let t=a[x]
                a[x++]=a[y]
                a[y--]=t
            }
        
        }else if(i.startsWith('move position')){
            let x=s[2]|0
            let y=s[5]|0
            let r=a.splice(x,1)[0]
            a.splice(y,0,r)
        }
    }
    return a.join('')
}


function* permutations(p,q=[]){
    let n=p.length
    if(n==0) yield q
    for(let r,s,i=0;i<n;i++){
        r=[...p]
        r.splice(i,1)
        s=[...q,p[i]]
        for(let y of permutations(r,s)) 
            yield y
    }
}


console.log(scramble([...'abcdefgh']))


for(let p of permutations('abcdefgh'))
    if(scramble([...p])=='fbgdceah')
        console.log(p.join(''))