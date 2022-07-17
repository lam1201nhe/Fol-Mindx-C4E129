const tunglam = {
    firstname: 'lam',
    lastname: 'tung',
    age: '20',
    eyecolor: 'brown',

}

// console.log('1.Read Property')
// console.log(tunglam.firstname);
// console.log(tunglam['lastname']);



{
    const person = {
        firstname: 'asd',
        lastname: 'nam',
        age: '40',
        eyecolor: 'brown',
        fullname: function () {
            console.log('fullname: ' + this.firstname + ' ' + this.lastname);
        }
    }
    // person.fullname();

    // console.log(person.age);
    // person.age = 30;
    // console.log(person)
    // delete person.age;
    // console.log(person);

    console.log(Object.assign({a:2},{b:2}));
    console.log(tunglam);
    let admin = Object.assign(person, {role:'admin'});
    console.log(admin);

    let persons = [
        countries = {
            vietnam: {
                name: 'vietnam',
                capital: 'hanoi',
                population: '1.4 billion',
            }

        }
    ];

    //get population in persons
    // console.log(persons[0].vietnam.population);

}

