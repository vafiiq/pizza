"use strict"


const cards = document.querySelectorAll('#card');
const options = document.querySelectorAll('#option')



// $('.thin').addEventListener('click', () => {
//     console.log($('.card').classList);
//     $('.card').classList.add('text-center', 'text-danger', 'fw-bold','d-block');
//     console.log($('.card').classList);
//  })




function fun1() {
    var chbox;
    chbox = document.getElementById('pomidor');
    if (chbox.checked) {
        $('.pomidor').classList.add('d-block');

    }
    else {
        $('.pomidor').classList.remove('d-block');

    }
}
function fun2() {
    var chbox;
    chbox = document.getElementById('cucumber');
    if (chbox.checked) {
        $('.cucumber').classList.add('d-block');

    }
    else {
        $('.cucumber').classList.remove('d-block');

    }
}

function fun3() {
    var chbox;
    chbox = document.getElementById('meat');
    if (chbox.checked) {
        $('.meat').classList.add('d-block');

    }
    else {
        $('.meat').classList.remove('d-block');

    }
}
function fun4() {
    var chbox;
    chbox = document.getElementById('grib');
    if (chbox.checked) {
        $('.grib').classList.add('d-block');

    }
    else {
        $('.grib').classList.remove('d-block');

    }
}

function fun5() {
    var chbox;
    chbox = document.getElementById('olive');
    if (chbox.checked) {
        $('.olive').classList.add('d-block');

    }
    else {
        $('.olive').classList.remove('d-block');

    }
}
function fun6() {
    var chbox;
    chbox = document.getElementById('kazi');
    if (chbox.checked) {
        $('.kazi').classList.add('d-block');

    }
    else {
        $('.kazi').classList.remove('d-block');

    }
}

function fun7() {
    var chbox;
    chbox = document.getElementById('pomidor');
    if (chbox.checked) {
        $('.spicy').classList.add('d-block');

    }
    else {
        $('.spicy').classList.remove('d-block');

    }
}
function fun8() {
    var chbox;
    chbox = document.getElementById('sausage');
    if (chbox.checked) {
        $('.sausage').classList.add('d-block');

    }
    else {
        $('.sausage').classList.remove('d-block');

    }
}


$('#small').addEventListener('click', () => {
    console.log($('.small').classList);
    $('.small').classList.add('text-center', 'text-danger', 'fw-bold', 'd-block');
    console.log($('.small').classList);
})

$('#average').addEventListener('click', () => {
    console.log($('.average').classList);
    $('.average').classList.add('text-center', 'text-danger', 'fw-bold', 'd-block');
    console.log($('.average').classList);
})

$('#big').addEventListener('click', () => {
    console.log($('.big').classList);
    $('.big').classList.add('text-center', 'text-danger', 'fw-bold', 'd-block');
    console.log($('.big').classList);
})

$('#yupqa').addEventListener('mouseover', () => {
    console.log($('.yupqa').classList);
    $('.yupqa').classList.add('text-center', 'text-danger', 'fw-bold', 'd-block');
    console.log($('.yupqa').classList);
})
$('.btn-warning').addEventListener('click', () => {

    $('.card').classList.toggle('swipe');
    if ($('.card').classList.contains('swipe')) {
    }
})
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function fun9() {
    document.getElementById("width").addEventListener("change", ()=>{
        $('.yupqa').classList.add('text-center', 'text-danger', 'fw-bold', 'd-block');
    })

}

