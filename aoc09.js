let input
    =require('fs')
    .readFileSync('input/aoc09.txt','utf8')


let decomprLen=(input,part)=>{
    let len=0
    let collect
    let marker
    for(let i=0;i<input.length;i++){
        let ch=input[i]
        if      (!collect && ch!='(') {len++}
        else if (!collect && ch=='(') {marker='';collect=1}
        else if ( collect && ch!=')') {marker+=ch}
        else if ( collect && ch==')') {
            let v=marker.split('x').map(e=>e|0)
            let t=input.substring(i+1,i+v[0]+1)
            len+=(part==1) ? v[0]*v[1] : v[1]*decomprLen(t,2)
            collect=0
            i+=v[0]
        }
    }
    return len
}


console.log(decomprLen(input,1))
console.log(decomprLen(input,2))