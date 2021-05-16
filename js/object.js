function getDogWords() {
    return 'Gav-gav';
}
let dogHasChildren = true;

const dog = {
    name: 'Vova',
    hasTale: true,
    color: 'brown',
    gender: 'male',
    noseColor: 'black',
    whatsTheDogSay: getDogWords(),
    '2nd dog son': 'Pretty little puppy',
    [2 * 2 + ' puppies age']: 'some string',
    avChildrenAge: 2 * 2,
    avChildrenQty: dogHasChildren ? 2 : 0,
    childrenNames: ['Dragon', 'Alex'],
    children1 : {
        name: 'Dragon',
        hasTale: true,
        color: 'brown',
        gender: 'male',
        noseColor: 'black',
        children1: {
            name: 'Shaitan',
            hasTale: true,
            color: 'black',
            gender: 'male',
            noseColor: 'pink',
        }
    },
    voice: function () {
        let dogWords = getDogWords();
        console.log(dogWords);
    },

    someFunc() {
        console.log('some string')
    },

}

// console.log(dog)
dog.voice()

// const cat = {
//     name: 'Sergey',
//     hasTale: true,
//     color: 'Pink',
//     gender: 'male',
//     noseColor: 'Carrot color',
// }
//
//
// console.log(dog, cat)