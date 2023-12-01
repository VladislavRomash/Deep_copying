// 1. Simple object
let man = {
    name: 'John',
    age: 28
};
let manFullCopy = {...man}
console.log(manFullCopy === man)

// 2. Array of primitives
let numbers = [1, 2, 3];
let numbersFullCopy = [...numbers]
console.log(numbers === numbersFullCopy)

// 3. Object inside an object
let man1 = {
    name: 'John',
    age: 28,
    mother: {
        name: 'Kate',
        age: 50
    }
};
let man1FullCopy = {...man1, mother: {...man1.mother}}
console.log(man1 === man1FullCopy)
console.log(man1.mother === man1FullCopy.mother)

// 4. Array of primitives inside an object
let man2 = {
    name: 'John',
    age: 28,
    friends: ["Peter", "Steven", "William"]
};
let man2FullCopy = {...man2, friends: [...man2.friends]}
console.log(man2 === man2FullCopy)
console.log(man2.friends === man2FullCopy.friends)
man2FullCopy.friends.push('Ann')
console.log(man2FullCopy.friends)
console.log(man2.friends)

// 5 Array of objects
let people = [
    {name: "Peter", age: 30},
    {name: "Steven", age: 32},
    {name: "William", age: 28}
];
let peopleFullCopy = people.map(m => ({...m}))
console.log(people === peopleFullCopy)
console.log(people[0] === peopleFullCopy[0])
peopleFullCopy[1].age = 27
console.log(peopleFullCopy[1].age)
console.log(people[1].age)

// 6 Array of objects inside object
let man3 = {
    name: 'John',
    age: 28,
    friends: [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ]
};
let man3FullCopy = {...man3, friends: man3.friends.map(m => ({...m}))}
console.log(man3 === man3FullCopy)
console.log(man3.friends === man3FullCopy.friends)
man3FullCopy.friends[0].name = 'Igor'
console.log(man3FullCopy.friends[0].name)
console.log(man3.friends[0].name)

// 7 Object inside an object, inside an object
let man4 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        }
    }
};
let man4FullCopy = {...man4, mother: {...man4.mother, work: {...man4.mother.work}}}
console.log(man4 === man4FullCopy)
console.log(man4.mother === man4FullCopy.mother)
console.log(man4.mother.work === man4FullCopy.mother.work)
man4FullCopy.mother.work.experience = 20
console.log(man4FullCopy.mother.work.experience)
console.log(man4.mother.work.experience)

// 8 Array of objects inside object -> object
let man5 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {name: "Kevin", age: 80},
            {name: "Jennifer", age: 78},
        ]
    }
};
let man5FullCopy = {
    ...man5,
    mother: {...man5.mother, work: {...man5.mother.work}, parents: man5.mother.parents.map(m => ({...m}))}
}
console.log(man5 === man5FullCopy)
console.log(man5.mother === man5FullCopy.mother)
console.log(man5.mother.work === man5FullCopy.mother.work)
console.log(man5.mother.parents === man5FullCopy.mother.parents)
man5FullCopy.mother.work.experience = 20
man5FullCopy.mother.parents[0].age = 79
console.log(man5.mother.work.experience)
console.log(man5FullCopy.mother.work.experience)
console.log(man5FullCopy.mother.parents[0].age)
console.log(man5.mother.parents[0].age)

// 9 Object inside an object -> array -> object ->  object
let man6 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht"
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi"
                }
            },
        ]
    }
};
let man6FullCopy = {
    ...man6,
    mother: {
        ...man6.mother,
        work: {...man6.mother.work},
        parents: man6.mother.parents.map(m => ({...m, favoriteDish: {...m.favoriteDish}}))
    }
}
console.log(man6 === man6FullCopy)
console.log(man6.mother === man6FullCopy.mother)
console.log(man6.mother === man6FullCopy.mother)
console.log(man6.mother.work === man6FullCopy.mother.work)
console.log(man6.mother.parents === man6FullCopy.mother.parents)
console.log(man6.mother.parents[0] === man6FullCopy.mother.parents[0])
console.log(man6.mother.parents[0].favoriteDish === man6FullCopy.mother.parents[0].favoriteDish)
man6FullCopy.mother.parents[0].favoriteDish.title = 'rice'
console.log(man6FullCopy.mother.parents[0].favoriteDish.title)
console.log(man6.mother.parents[0].favoriteDish.title)

//10 Array of objects inside an object -> object -> array -> object ->  object
let man7 = {
    name: 'John',
    age: 28,
    mother: {
        name: "Kate",
        age: 50,
        work: {
            position: "doctor",
            experience: 15
        },
        parents: [
            {
                name: "Kevin",
                age: 80,
                favoriteDish: {
                    title: "borscht",
                    ingredients: [
                        {title: "beet", amount: 3},
                        {title: "potatoes", amount: 5},
                        {title: "carrot", amount: 1},
                    ]
                }
            },
            {
                name: "Jennifer",
                age: 78,
                favoriteDish: {
                    title: "sushi",
                    ingredients: [
                        {title: "fish", amount: 1},
                        {title: "rice", amount: 0.5}
                    ]
                }
            },
        ]
    }
};
let man7FullCopy = {
    ...man7, mother: {
        ...man7.mother,
        work: {...man7.mother.work},
        parents: man7.mother.parents.map(m => ({
            ...m,
            favoriteDish: {
                ...m.favoriteDish,
                ingredients: m.favoriteDish.ingredients.map(el => ({...el}))
            }
        }))
    }
}
console.log(man7 === man7FullCopy)
console.log(man7.mother === man7FullCopy.mother)
console.log(man7.mother.work === man7FullCopy.mother.work)
console.log(man7.mother.parents === man7FullCopy.mother.parents)
console.log(man7.mother.parents[0] === man7FullCopy.mother.parents[0])
console.log(man7.mother.parents[0].favoriteDish === man7FullCopy.mother.parents[0].favoriteDish)
console.log(man7.mother.parents[0].favoriteDish.ingredients === man7FullCopy.mother.parents[0].favoriteDish.ingredients)
console.log(man7.mother.parents[0].favoriteDish.ingredients[0] === man7FullCopy.mother.parents[0].favoriteDish.ingredients[0])
man7FullCopy.mother.parents[0].favoriteDish.ingredients[0].amount = 7
console.log(man7FullCopy.mother.parents[0].favoriteDish.ingredients[0].amount)
console.log(man7.mother.parents[0].favoriteDish.ingredients[0].amount)