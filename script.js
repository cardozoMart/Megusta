const btnmg = document.querySelectorAll('.btnlike');
const likes = document.querySelectorAll('.like');

for (let i = 0; i < btnmg.length; i++) {
    let count = 0; 

    btnmg[i].addEventListener('click', function() {
        count++; 
        document.querySelectorAll('.like')[i].innerText = count + ' Like(s)'; 
    });
}