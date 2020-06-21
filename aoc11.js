let state=(prevstate,floorfrom,floorto,item)=>{
    let s=[floorto]
    for(let k=1;k<=4;k++)
        s[k]=[...prevstate[k]]
    s[floorfrom].splice(item,1)
    s[floorto].push(prevstate[floorfrom][item])
    return s
}


let valid=(floor)=>{
    let microchips=floor.filter(e=>e>='A' && e<='Z')
    let generators=floor.filter(e=>e>='a' && e<='z')
    if(!generators.length) return true
    for(let m of microchips)
        if(!generators.includes(m.toLowerCase())) 
            return false
    return true
}


let key=(state)=>{
    let k=[state[0]]
    let map=[]
    let microchips=[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    let generators=[...'abcdefghijklmnopqrstuvwxyz']
    let index=(i)=>{
        if(!map[i])
            if(i>='A' && i<='Z'){
                map[i]=microchips.shift()
                map[i.toLowerCase()]=generators.shift()
            }else{
                map[i]=generators.shift()
                map[i.toUpperCase()]=microchips.shift()
            }
        return map[i]
    }
    for(let f of state.slice(1)){
        let s=[]
        for(let i of f) s.push(index(i))
        k.push(s.sort().join(''))
    }
    return k.join(',')
}


let bfs=(s0,s1)=>{
    let seen=[]
    seen[key(s0)]=1
    let q=[{s:s0,d:0}]
    let key_s1=key(s1)
    while(q.length){
        let {s,d}=q.shift()
        if(key(s)==key_s1)
            return console.log(d)
        let f0=s[0]
        for(let f1 of [f0-1,f0+1]){
            if(f1<1||f1>4) continue
            for(let i=0;i<s[f0].length;i++){
                let s2=state(s,f0,f1,i)
                let k=key(s2)
                let v=!seen[k] && valid(s2[f0]) && valid(s2[f1])
                if(v) {seen[k]=1;q.push({s:s2,d:d+1})}
                for(let j=0;j<i;j++){
                    let s3=state(s2,f0,f1,j)
                    let k=key(s3)
                    let v=!seen[k] && valid(s3[f0]) && valid(s3[f1])
                    if(v) {seen[k]=1;q.push({s:s3,d:d+1})}
                }
            }  
        }
    }
}


bfs([1,'AB','a','b','']          ,[4,'','','','ABab']          ) // given test case. expext: 11
bfs([1,'Aa','bcde','BCDE','']    ,[4,'','','','ABCDEabcde']    ) // part 1
bfs([1,'AaFfGg','bcde','BCDE',''],[4,'','','','ABCDEabcdeFfGg']) // part 2