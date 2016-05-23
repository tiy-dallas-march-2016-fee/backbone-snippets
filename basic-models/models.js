
var Person = Backbone.Model.extend({
  defaults: {
    hairColor: 'red'
  },

  sayHi: function() {
    return 'Hello, my name is ' + this.get('name');
  }
});

var person = new Person({ name: 'Bob', age: 17 });
//or
//person.set('name', 'Bob');
//person.set('age', 17);

//or
//person.set({ name: 'Bob', age: 17 });

person.sayHi();

console.log(person.sayHi());



person.on('change:age', function() {
  console.log(this.get('name'), 'is his new name and this person is', this.get('age'), 'years old!')
});

person.on('change:hairColor', function() {
  console.log(this.get('name'), 'changed his/her hair color to ', this.get('hairColor'));
});

person.set('name', 'Fred');
person.set('age', 18);

person.set('hairColor', 'brown');
console.log(person.get('hairColor'));
