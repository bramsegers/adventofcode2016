let input
    =require('fs')
    .readFileSync('input/aoc07.txt','utf8')
    .split('\r\n')



let count1=0
for(let i of input){
    let brack=false,found=false
    for(let j=0;j<i.length;j++){
        let [a,b,c,d]=i.substring(j,j+4)
        if(a=='[') brack=true
        if(a==']') brack=false
        let abba=(a==d)&&(b==c)&&(a!=b)
        if(!abba) continue
        if(!brack) found=true
        else {found=false;break}    
    }
    count1+=found
}
console.log(count1)



let count2=0
for(let i of input){
    let brack=false
    let ABA=[],BAB=[]
    for(let j=0;j<i.length;j++){
        let [a,b,c]=i.substring(j,j+3)
        if(a=='[') brack=true
        if(a==']') brack=false
        let aba=(a==c)&&(a!=b)
        if(aba && brack)  BAB.push(a+b)
        if(aba && !brack) ABA.push(a+b)
    }
    let found=false
    for(let e of ABA)
        if(BAB.includes(e[1]+e[0])) 
            {found=true;break}
    count2+=found
}
console.log(count2)