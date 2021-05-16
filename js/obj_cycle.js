const obj = {
    name: 'Sergey',
    hasTale: true,
    color: 'Pink',
    gender: 'male',
    noseColor: 'Carrot color',
}


for (let key in obj) {
    if(key === 'hasTale') {
        console.log(key + ': ' + obj[key]);
        break;
    }
}