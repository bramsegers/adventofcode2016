let input
    =require('fs')
    .readFileSync('input/aoc23.txt','utf8')
    .split('\r\n')


let instr=input.map(e=>{
    let abc='abcd'
    let t=e.split(' ')
    return {
        mode:t[0],
        op1:t[1],
        op2:t[2],
        ix1:abc.indexOf(t[1]),
        ix2:abc.indexOf(t[2]) 
    }
})


let prog=(reg)=>{
    let i=0
    let run=()=>{
        while(true){
            if(i<0 || i>=instr.length) return {status:'done',reg}
            let e=instr[i]
            let v1=(e.ix1<0)?(e.op1|0):reg[e.ix1]
            let v2=(e.ix2<0)?(e.op2|0):reg[e.ix2]
            switch(e.mode){
                case 'cpy':
                    reg[e.ix2]=v1
                    i++
                    break
                case 'inc':
                    reg[e.ix1]++
                    i++
                    break        
                case 'dec':
                    reg[e.ix1]--
                    i++
                    break
                case 'jnz':
                    i+=(v1!=0)?v2:1
                    break
                case 'tgl':
                    let j=instr[i+v1]
                    if     (j && !j.op2 && j.mode=='inc') j.mode='dec'
                    else if(j && !j.op2 && j.mode!='inc') j.mode='inc'
                    else if(j &&  j.op2 && j.mode=='jnz') j.mode='cpy'
                    else if(j &&  j.op2 && j.mode!='jnz') j.mode='jnz'
                    i++
                    break
            }
        }
    }
    return {run}
}


console.log(prog([7,0,0,0]).run())


let ans=1
for(let i=1;i<=12;i++) ans*=i
ans+=71*75
console.log(ans)