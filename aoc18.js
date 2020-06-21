let input
    =require('fs')
    .readFileSync('input/aoc18.txt','utf8')
    

let solve=(n)=>{
    let count=0
    let row=input.split('')
    for(let i=0;i<n;i++){
        count+=row.filter(e=>e=='.').length
        let row2=[]
        for(let j=0;j<row.length;j++){
            let a=(j==0)?'.':row[j-1]
            let b=row[j]
            let c=(j==row.length-1)?'.':row[j+1]
            let d=a+b+c
            let trap=d=='^^.' || d=='.^^' || d=='^..' || d=='..^'
            row2[j]=trap?'^':'.'
        }
        row=row2
    }
    console.log(count)
}


solve(40)
solve(400000)