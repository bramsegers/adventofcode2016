let input
    =require('fs')
    .readFileSync('input/aoc24.txt','utf8')
    .split('\r\n')



let bfs=(p0,p1)=>{
    let dy=[0,-1,1,0]
    let dx=[-1,0,0,1]
    let seen=[]
    seen[p0]=1
    let q=[]
    q.push({p:p0,d:0})
    while(q.length){
        let n=q.shift()
        let p=n.p
        let d=n.d
        if(p[0]==p1[0] && p[1]==p1[1])
            return d
        for(let k=0;k<4;k++){
            let j2=p[0]+dy[k]
            let i2=p[1]+dx[k]
            if(!maze[j2][i2]) continue
            if(seen[[j2,i2]]) continue
            q.push({p:[j2,i2],d:d+1})
            seen[[j2,i2]]=1
        }
    }
    return 1<<30
}


let maze=[]
let node=[]
let dist=[]
let H=input.length
let W=input[0].length
for(let i,j=0;j<H;j++){
    for(maze[j]=[],i=0;i<W;i++){
        let k=input[j][i]
        maze[j][i]=(k=='#')?0:1
        if(k!='#' && k!='.') node[k|0]=[j,i]
    }
}


for(let i=0;i<node.length;i++){
    for(let j=i+1;j<node.length;j++){
        let d=bfs(node[i],node[j])
        dist[[i,j]]=d
        dist[[j,i]]=d
    }
}


function* permutations(p,q=[]){
    let n=p.length
    if(n==0) yield q
    for(let i=0;i<n;i++){
        let r=[...p]
        let s=[...q,p[i]]
        r.splice(i,1)
        for(let y of permutations(r,s)) 
            yield y
    }
}


let mindist=(part)=>{
    let dmin=1<<30
    let nodes=Object.keys(node).filter(e=>e>0).join('')
    for(let p of permutations(nodes)){
        let d=dist[0+','+p[0]]
        for(let j=0;j<p.length-1;j++){
            let key=p[j]+','+p[j+1]
            d+=dist[key]
        }
        if(part==2) d+=dist[p[p.length-1]+',0']
        if(d>dmin) continue 
        dmin=d
        console.log(p.join(''),d)
    }
    return dmin
}


console.log(mindist(1))
console.log(mindist(2))