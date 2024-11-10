{

const person={
    name:"Yuvraj",
    age:23
}
function getProperty<X,Y extends keyof X>(obj:X,key:Y){
    return obj[key]
} 
const res=getProperty(person,'name')
//console.log(res);
}