// // challenge 6.1.1

var a={
    name:'tony',
    age:0,
    place:'kottayam',
    city:'kanjirappally'
}
console.log(a)

//challenge 6.1.2

const obj=new Object();
obj.name='tony';
obj.age=0;
obj.place='kottayam';
obj.city='kanjirappally';
console.log(obj)

//challenge 6.2`

var boolean={
    a:true,
    b:false,
    c:true,
    d:false
}
for(i in boolean){
    if(boolean[i]==true){
        console.log(i,':',boolean[i])
    }
    else{
        console.log('its false')
    }
}