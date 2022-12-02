$('nav a').click(function () {
  $('nav a').removeClass('active')
  $(this).addClass('active')
})

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const msg = document.querySelector('#msg');
const msgCount = document.querySelector('#msg-count');
const msgSendBtn = document.querySelector('#msg-send-btn');
const nameBox = document.querySelector('#name-box');
const nameLine = document.querySelector('#name-underline');
const emailBox = document.querySelector('#email-box');
const emailLine = document.querySelector('#email-underline');
const phoneBox = document.querySelector('#phone-box');
const phoneLine = document.querySelector('#phone-underline');
const nameErr = document.querySelector('#name-box .underline');
const emailErr = document.querySelector('#email-box .underline');
const phoneErr = document.querySelector('#phone-box .underline');
const nameErrText = document.querySelector('#name-box .validation');
const emailErrText = document.querySelector('#email-box .validation');
const phoneErrText = document.querySelector('#phone-box .validation');
const msgErrText = document.querySelector('#msg-box .validation');

name.addEventListener('keyup', () => {
  if (name.value == '' ) {
    nameLine.style.width = '0%';
  } else {
    nameLine.style.width = '100%';
  }
})

email.addEventListener('keyup', () => {
  if (email.value != '' && email.value.slice(-10) == '@gmail.com') {
    emailLine.style.width = '100%';
  } else {
    emailLine.style.width = '0%';
  }
})

phone.addEventListener('keyup', () => {
  if (phone.value == '' ) {
    phoneLine.style.width = '0%';
  } else {
    phoneLine.style.width = '100%';
  }
})

msg.addEventListener('keyup', () => {
  if (msg.value.length > 100) {
    msg.style.borderColor = '#dd1d1d';
  } else {
    msg.style.borderColor = '#f5f2d0';
  }
  if (msg.value == '') {
    msgCount.textContent = 0;
  } else {
    msgCount.textContent = msg.value.length;
  }
})

msgSendBtn.addEventListener('click', () => {
  if (name.value == '') {
    nameErr.style.background = '#dd1d1d';
    nameErrText.textContent = 'Invalid name';
    nameLine.style.width = '0%';
  } else {
    nameErrText.textContent = '';
    nameErr.style.background = '#f5f2d0';
    nameLine.style.width = '100%';
  }
  if (email.value != '' && email.value.slice(-10) == '@gmail.com') {
    emailErrText.textContent = '';
    emailErr.style.background = '#f5f2d0';
    emailLine.style.width = '100%';
  } else {
    emailErr.style.background = '#dd1d1d';
    emailErrText.textContent = 'Invalid email';
    emailLine.style.width = '0%';
  }
  if (phone.value == '') {
    phoneErr.style.background = '#dd1d1d';
    phoneErrText.textContent = 'Invalid phone';
    phoneLine.style.width = '0%';
  } else {
    phoneErr.style.background = '#f5f2d0';
    phoneErrText.textContent = '';
    phoneLine.style.width = '100%';
  }
  if (msg.value == '') {
    msg.style.borderColor = '#dd1d1d';
    msgErrText.textContent = 'Invalid message';
    msgErrText.style.bottom = '-35px';
  } else {
    msg.style.borderColor = '#f5f2d0';
    msgErrText.textContent = '';
  }
  if (name.value != '' && email.value != '' && email.value.slice(-10) == '@gmail.com' && phone.value != '' && msg.value != '' && msg.value.length <= 100) {
    const validname = name.value;
    const validemail = email.value;
    const validphone = phone.value;
    const validmsg = msg.value;
    name.value = '';
    email.value = '';
    phone.value = '';
    msg.value = '';
    msgCount.textContent = 0;
    console.log(validname)
    console.log(validemail)
    console.log(validphone)
    console.log(validmsg)
  }
})