function* problem01(){
	var i = 0;
	 while(i<100){ 
		 if(i <6 ){
			 i++
			 yield i ;
		 }else{
			 i +=4 ;
			 yield i;
		 }
	 }
 }
 const ie = problem01();
 console.log(ie.next().value);

    // Problem 02
var map = new Map();
function fibonaci(n) {
	if (n <= 1) {
		return 1;
	}
	if (map.has(n)) {
		return map.get(n);
	}
	

	map.set(n, fibonaci(n - 1) + fibonaci(n - 2));
	
	return map.get(n);
}

console.log(fibonaci(5))




    // Problem 03
 var Person = [
    {id: 1, name: 'Dung', age: 20} ,
    {id: 2 , name: 'Diu', age: 20} ,
    {id: 3 , name: 'Ky' , age : 20},
    {id: 1 , name: 'Hai' , age : 22} ];

var PersonSet = Person.filter((set => f => !set.has(f.id) && set.add(f.id))(new Set));


console.log(PersonSet);
