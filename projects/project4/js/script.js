// open menu
document.getElementsByClassName('hamburger')[0].addEventListener('click', function() {
    document.getElementsByClassName('open-menu')[0].classList.toggle('open');
});
document.getElementsByClassName('close-menu')[0].addEventListener('click', function() {
    document.getElementsByClassName('open-menu')[0].classList.toggle('open');
});

//procedure container button style change
document.getElementsByClassName('procedure')[0].addEventListener('mouseenter', function() {
    document.getElementsByClassName('btn-proc')[0].classList.toggle('btn-secondary');
    document.getElementsByClassName('btn-proc')[0].classList.toggle('btn-primary');
});
document.getElementsByClassName('procedure')[0].addEventListener('mouseleave', function() {
    document.getElementsByClassName('btn-proc')[0].classList.toggle('btn-secondary');
    document.getElementsByClassName('btn-proc')[0].classList.toggle('btn-primary');
});
document.getElementsByClassName('procedure')[1].addEventListener('mouseenter', function() {
    document.getElementsByClassName('btn-proc')[1].classList.toggle('btn-secondary');
    document.getElementsByClassName('btn-proc')[1].classList.toggle('btn-primary');
});
document.getElementsByClassName('procedure')[1].addEventListener('mouseleave', function() {
    document.getElementsByClassName('btn-proc')[1].classList.toggle('btn-secondary');
    document.getElementsByClassName('btn-proc')[1].classList.toggle('btn-primary');
});
document.getElementsByClassName('procedure')[2].addEventListener('mouseenter', function() {
    document.getElementsByClassName('btn-proc')[2].classList.toggle('btn-secondary');
    document.getElementsByClassName('btn-proc')[2].classList.toggle('btn-primary');
});
document.getElementsByClassName('procedure')[2].addEventListener('mouseleave', function() {
    document.getElementsByClassName('btn-proc')[2].classList.toggle('btn-secondary');
    document.getElementsByClassName('btn-proc')[2].classList.toggle('btn-primary');
});

document.getElementsByClassName('blog')[0].addEventListener('mouseenter', function() {
    document.getElementsByClassName('btn-blog')[0].classList.toggle('btn-secondary');
    document.getElementsByClassName('btn-blog')[0].classList.toggle('btn-primary');
});
document.getElementsByClassName('blog')[0].addEventListener('mouseleave', function() {
    document.getElementsByClassName('btn-blog')[0].classList.toggle('btn-secondary');
    document.getElementsByClassName('btn-blog')[0].classList.toggle('btn-primary');
});
document.getElementsByClassName('blog')[1].addEventListener('mouseenter', function() {
    document.getElementsByClassName('btn-blog')[1].classList.toggle('btn-secondary');
    document.getElementsByClassName('btn-blog')[1].classList.toggle('btn-primary');
});
document.getElementsByClassName('blog')[1].addEventListener('mouseleave', function() {
    document.getElementsByClassName('btn-blog')[1].classList.toggle('btn-secondary');
    document.getElementsByClassName('btn-blog')[1].classList.toggle('btn-primary');
});
document.getElementsByClassName('blog')[2].addEventListener('mouseenter', function() {
    document.getElementsByClassName('btn-blog')[2].classList.toggle('btn-secondary');
    document.getElementsByClassName('btn-blog')[2].classList.toggle('btn-primary');
});
document.getElementsByClassName('blog')[2].addEventListener('mouseleave', function() {
    document.getElementsByClassName('btn-blog')[2].classList.toggle('btn-secondary');
    document.getElementsByClassName('btn-blog')[2].classList.toggle('btn-primary');
});


//form appointment

let form = document.getElementById('appointment');
let formItem = document.getElementsByClassName('form-field');
let message = document.getElementById('message-appointment');
let appToSend = {
        name: '', 
        email: '',
        service: '',
        phone: '',
        date: '',
        time: '',
        message: ''
    };

const validate = event => {
    event.preventDefault();

    let error = false;
    message.classList.remove('error');
    message.classList.remove('done');
    message.innerText = '';

    for (let i=0; i<formItem.length; i++) {

        formItem[i].classList.remove('error');
        
        if (formItem[i].value.trim() === "") {
            formItem[i].classList.add('error');
            error = true;
        }
    }

    if (error === true) {
        message.classList.add('error');
        message.innerText = 'Fill all appointment fields!!!';
    }

    else if (error === false) {
        appToSend.name = document.getElementById('name-appointment').value;
        appToSend.email = document.getElementById('email-appointment').value;
        appToSend.service = document.getElementById('select-appointment').value;
        appToSend.phone = document.getElementById('phone-appointment').value;
        appToSend.date = document.getElementById('date-appointment').value;
        appToSend.time = document.getElementById('time-appointment').value;
        appToSend.message = document.getElementById('note-appointment').value;
        sendApp(appToSend);
    }
};

const sendApp = (sendData) => {
    fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(appToSend)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        message.classList.add('done');
        message.innerText = `Dziękujemy ${data.appointment.name}. Zostałeś zapisany!!!`;
        for (let i=0; i<formItem.length; i++) {

            formItem[i].value = '';
        }
    })
    .catch(error => {
        console.error(error);
    });
};

form.addEventListener('submit', validate);

