// let bod = document.getElementById('body');

// function toggleHide() {
//     let btn = document.getElementById('close');

//     if (bod.style.display != "none") {
//         bod.style.display = "none";
//     } else {
//         bod.style.display = "block";
//     }
// }


let string = "";

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button =>{
    button.addEventListener('click', (e)=> {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('.output').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('.input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('.input').value = string;
            document.querySelector('.output').value = string;
        }
        else {
            console.log (e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
}));