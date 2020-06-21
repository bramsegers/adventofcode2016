let wallspace=(x,y,i)=>{
    if(x<0 || y<0) return '#'
    let bc=0, r=x*x+3*x+2*x*y+y+y*y+i
    while(r>0) {bc+=(r&1);r>>=1}
    return (bc&1)?'#':'.'
}


let bfs1=(p0,p1,input)=>{
    let dx=[-1,0,0,1]
    let dy=[0,-1,1,0]
    let seen=[]
    seen[p0]=1
    let q=[]
    q.push({p:p0,d:0})
    while(q.length){
        let n=q.shift()
        let p=n.p
        let d=n.d
        if(p[0]==p1[0] && p[1]==p1[1])
            return console.log({dist:d})
        for(let k=0;k<4;k++){
            let i2=p[0]+dx[k]
            let j2=p[1]+dy[k]
            let v=!seen[[i2,j2]] && wallspace(i2,j2,input)=='.'
            if(v) {seen[[i2,j2]]=1;q.push({p:[i2,j2],d:d+1})}
        }
    }
}


let bfs2=(p0,input,steps)=>{
    let dx=[-1,0,0,1]
    let dy=[0,-1,1,0]
    let loc=1
    let seen=[]
    seen[p0]=1
    let q=[]
    q.push({p:p0,d:0})
    while(q.length){
        let n=q.shift()
        let p=n.p
        let d=n.d
        if(d==steps) return console.log({loc})
        for(let k=0;k<4;k++){
            let i2=p[0]+dx[k]
            let j2=p[1]+dy[k]
            let v=!seen[[i2,j2]] && wallspace(i2,j2,input)=='.'
            if(v) {seen[[i2,j2]]=1;q.push({p:[i2,j2],d:d+1});loc++}
        }
    }
}


bfs1([1,1],[7,4],10)
bfs1([1,1],[31,39],1358)
bfs2([1,1],1358,50)