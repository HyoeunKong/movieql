export const people = [{
    id:0,
    name:"hyoeun",
    age:28,
    gender:"female",
},
{   id:1,
    name:"mingi",
    age:18,
    gender:"female",
},
{   id:2,
    name:"dorim",
    age:26,
    gender:"female",
}];

export const getById = (id) => {
    const filteredData = people.filter(person => person.id === id);
    return filteredData[0];
}

export const getByAge = (age) => {
    const filteredData = people.filter(person => person.age > age);
    return filteredData;
}