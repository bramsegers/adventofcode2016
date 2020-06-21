let input=3012210


// https://oeis.org/A006257
// https://www.youtube.com/watch?v=uCsD3ZGzMgE


let solve1=(n)=>{
    let m=1
    while(2*m<=n) m*=2
    let a=(n-m)*2+1
    console.log(a)
}


let solve2=(n)=>{
    let m=1
    while(3*m<=n) m*=3
    let a=n-m
    if(a==0) a=n
    else if(2*a>n) a=2*n-3*m
    console.log(a)
}


solve1(input)
solve2(input)