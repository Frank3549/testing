//Name: Frank Bautista

export const summationFor = (list) => {
    let accumulator = 0;
    for (let i = 0; i < list.length; i++) {
        accumulator += list[i];
    }
    return accumulator;
      
  };

export const summationforEach = (list) => {
    let accumulator = 0;
    list.forEach((element) => accumulator += element);  //element is a number in the array
    return accumulator;
};


export const summationReduce = (list) => {
    let startingValue = 0;
    return list.reduce((accumulator, element) => accumulator + element, startingValue);
};

export const decorate = (list) => {
    let decoratedArray = [];
    list.forEach((element) => {
        let decoratedString = `-<< ${element} >>-`;
        decoratedArray.push(decoratedString);
    });
    return decoratedArray;

}



