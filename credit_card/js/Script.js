
document.getElementById('card_number').onkeyup = () => {
    document.getElementById('card-number-box').innerText = document.getElementById('card_number').value;
}

document.getElementById('card_holder').onkeyup = () => {
    document.getElementById('card-holder-box').innerText = document.getElementById('card_holder').value;
}

document.getElementById('month').oninput = () => {
    document.getElementById('exp-month-box').innerText = document.getElementById('month').value;
}

document.getElementById('year').oninput = () => {
    document.getElementById('exp-year-box').innerText = document.getElementById('year').value;
}

document.getElementById('cvv').onmouseenter = () => {
    document.getElementById('front').style.transform = 'perspective(1000px) rotateY(-180deg)'
    document.getElementById('back').style.transform = 'perspective(1000px) rotateY(0deg)'
}

document.getElementById('cvv').onmouseleave = () => {
    document.getElementById('front').style.transform = 'perspective(1000px) rotateY(0deg)'
    document.getElementById('back').style.transform = 'perspective(1000px) rotateY(180deg)'
}

document.getElementById('cvv').onfocus = () => {
    document.getElementById('front').style.transform = 'perspective(1000px) rotateY(-180deg)'
    document.getElementById('back').style.transform = 'perspective(1000px) rotateY(0deg)'
}

document.getElementById('cvv').onblur = () => {
    document.getElementById('front').style.transform = 'perspective(1000px) rotateY(0deg)'
    document.getElementById('back').style.transform = 'perspective(1000px) rotateY(180deg)'
}

document.getElementById('eye').onmouseenter = () => {
    document.getElementById('front').style.transform = 'perspective(1000px) rotateY(-180deg)'
    document.getElementById('back').style.transform = 'perspective(1000px) rotateY(0deg)'
}
document.getElementById('eye').onclick = () => {
    document.getElementById('front').style.transform = 'perspective(1000px) rotateY(-180deg)'
    document.getElementById('back').style.transform = 'perspective(1000px) rotateY(0deg)'
}

/* document.getElementById('cvv').oninput = () => {
    document.getElementById('cvv-box').innerText = document.getElementById('cvv').value;
} */

/* document.getElementById('cvv').oninput = () => {
    const cvvValue = document.getElementById('cvv').value;
    document.getElementById('cvv-box').innerText = '*'.repeat(cvvValue.length);
} */

let isMasked = true; 

document.getElementById('cvv').oninput = () => {
    const cvvValue = document.getElementById('cvv').value;
    if (isMasked) {
        document.getElementById('cvv-box').innerText = '*'.repeat(cvvValue.length);
    } else {
        document.getElementById('cvv-box').innerText = cvvValue;
    }
}

document.getElementById('eye').onclick = () => {
    isMasked = !isMasked; 
    const cvvValue = document.getElementById('cvv').value;
    if (isMasked) {
        document.getElementById('cvv-box').innerText = '*'.repeat(cvvValue.length); 
    } else {
        document.getElementById('cvv-box').innerText = cvvValue;
    }
}


document.getElementById('card_number').addEventListener('input', function (e) {

    let value = e.target.value.replace(/\D/g, '');

    let formattedValue = '';
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' ';
        }
        formattedValue += value[i];
    }
    e.target.value = formattedValue;
});


document.getElementById('card_holder').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, '').toUpperCase();

    let words = e.target.value.trim().split(' ');

    if (words.length > 2) {
        e.target.value = words.slice(0, 2).join(' ');
    }
});


const cvvShow = document.getElementById('eye'),
    Cvv = document.getElementById('cvv');

cvvShow.addEventListener("click", () => {
    if (Cvv.type === "password") {
        Cvv.type = "text";
        cvvShow.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        Cvv.type = "password";
        cvvShow.classList.replace("fa-eye", "fa-eye-slash");
    }
});

document.getElementById('submit').onclick = function () {
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    if (year < currentYear || (year == currentYear && month < currentMonth)) {
        document.getElementById('error-message').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'none';
    }
};

document.getElementById('main-form').addEventListener("submit", checkForm); 

function checkForm(e) {
    e.preventDefault(); 
    let el = document.getElementById('main-form');

    let card_number = el.card_number.value;
    let card_holder = el.card_holder.value;
    let month = el.month.value;
    let year = el.year.value;
    let cvv = el.cvv.value;

    if (card_number == "" || card_holder == "" || month == "" || year == "" || cvv == "") {
        document.getElementById('error').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'none';
    }
}
