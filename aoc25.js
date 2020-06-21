let input
    =require('fs')
    .readFileSync('input/aoc25.txt','utf8')
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
    let next=0
    let run=(check)=>{
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
                case 'out':
                    let out=reg[e.ix1]
                    if(out!=next) return false
                    next=1-next
                    check--
                    i++
                    break
            }
            if(!check) return true
        }
    }
    return {run}
}


for(let i=0;;i++){
    if(prog([i,0,0,0]).run(1000)){
        console.log(i)
        break
    }
}