const input = document.querySelector('input');

// const women = ['Anna', 'Sveta', 'Katya', 'Emma', 'Aya', 'Jazgul', 'Xadicha'];
// const men = ['Vova', 'jeenbek', 'Nur Ali', 'Adyl', 'Joni', 'Kaka', 'Nurbolot'];

function checkWord(word) {
    const reverseWord = [...word].reverse().join('');
    console.log(word);
    console.log(reverseWord);
    return word.toLowerCase() === reverseWord.toLowerCase() ? 'Tuura' : 'Tuura emes';
}

input.onchange = () => {
    console.log(checkWord(input.value));
}


// women.concat(men)
// // console.log(women.concat(men));
// const all=[...women,'Argen',...men]
// console.log(all);

// const stName='Aibike'
// const bukvy=[...stName]
// console.log(bukvy);

