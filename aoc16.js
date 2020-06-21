let input='01000100010010111'


let checksum=(input,len)=>{

    let a=[]
    for(let i=0;i<len;i++)
        a[i]=(i<input.length)?input[i]|0:0

    let size=input.length
    while(size<len){
        for(let i=1;i<=size;i++){
            if(size+i==len) break
            a[size+i]=1-a[size-i]
        }
        size=2*size+1
    }

    while(a.length%2==0){
        let b=[]
        for(let i=0;i<a.length;i+=2)
            b.push(a[i]==a[i+1]?1:0)
        a=b
    }

    console.log(a.join(''))
}


checksum(input,272)
checksum(input,35651584)