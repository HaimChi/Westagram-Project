const firstBox = document.querySelector('.firstBox');
const secondBox = document.querySelector('.secondBox');
const blueButton = document.querySelector('.blueButton');


secondBox.addEventListener('input', function () {;
    const valueOfSecondBox = secondBox.value
    
    if( valueOfSecondBox.length > 0) {
    blueButton.classList.add('active')
}
});


// blueButton.addEventListener('input', function(){
//    const valueOfFirstBox = first_Box.value
//    const valueOfSecondBox = second_Box.value
//    console.log('gg')

//    if( (valueOfFirstBox !== "" ) && (valueOfSecondBox !== "")) {
//     blueButton.style.backgroundColor='#332FD0'
// }
// });


// const userName = document.querySelector('.userName');
// const passWord = document.querySelector('.passWord');
// const loginBtn = document.querySelector('.loginBtn');

// userName.addEventListener('keyup',inputValue);
// passWord.addEventListener('keyup',inputValue);

// function inputValue(){
//   loginBtn.classList.add("active");
//   const userNameLength = userName.value.length;
//   const passWordLength = passWord.value.length;
//   if((userNameLength && passWordLength)===0)
//   {
//     loginBtn.classList.remove("active");
//   }
// }

