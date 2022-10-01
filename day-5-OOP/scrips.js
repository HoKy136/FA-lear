// ~~~~~~~~~~~~~Problem 1~~~~~~~~~~~~~~
class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	plus(vector) {
		return new Vec(this.x + vector.x, this.y + vector.y);
	}
	minus(vector) {
		return new Vec(this.x - vector.x, this.y - vector.y);
	}
    get length() {
		return Math.sqrt(Math.pow(this.y,2) + Math.pow(this.x,2));
	}
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));

console.log(new Vec(1, 2).minus(new Vec(2, 3)));

console.log(new Vec(3, 4).length);

// ~~~~~~~~~~~~Problem 2~~~~~~~~~~~~~~

 class Group {
    constructor() {
        this.group = [];
      }
      add(value){
        if(!this.has(value)){
            this.group.push(value);
        }
      }
      delete(value){
        this.group = this.group.filter((item) => {
            return item !== value;
          });
      }
      
      has(value){
        return this.group.includes(value);
      }
     static  from(index) {
        let group = new Group();
        for (let value of index) {
          group.add(value);
        }
        return group;
      }
 }

 let group = Group.from([10, 20 ]);
console.log(group.has(10));
 // → true
 console.log(group.has(30));
 // → false
 group.add(10);
 group.delete(10);
 console.log(group.has(10));
 // → false


//  ~~~~~~~~~~~~Problem 3~~~~~~~~~~~~~
let map = { one: true, two: true, hasOwnProperty: true };


// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, "one")); // → true

