class TextRegExp{
    constructor(container = '.box'){
        this.container = container;
        this.text = document.querySelector(`.text`);
        this.finalText ();
        this.render()
    }
    
    finalText() {
    const text = this.text.innerHTML;
    let res = text.replace(/\B'|'\B/g, '"');
    const block = document.querySelector(this.container);
    block.insertAdjacentHTML('beforeend',`<p class="new_text">${res}</p>`)
    }
}

//const textOnPage = new TextRegExp();

addEventListener("input", (e) => {
  if(e.target.classList.contains('registration__form-input')){
    const idInput = e.target.id;
    validateField(e.target.value, idInput);
  }
});

const textRegex = /^[а-яА-ЯёЁa-zA-Z0-9\s-_,@"'\.]+$/;

const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9А-ЯЁа-яё]+\.)+[a-zA-ZА-ЯЁа-яё]{2,}))$/;

const phoneRegex = /^.?.?.?.?\d{3}.?.?\d{3}.?.?.?\d{2}.?.?.?\d{2}$/;

const validateText = (val) => {
  return textRegex.test(val);
}

const validateEmail = (val) => {
  return emailRegEx.test(val);
}

const validatePhone = (val) => {
  return phoneRegex.test(val);
}

const validatorsMap = {
  name: validateText,
  email: validateEmail,
  phone: validatePhone,
}



const validateField = (val, key) => {
  let isFieldCorrect = validatorsMap[key](val);
    if(isFieldCorrect === false){
      const block = document.getElementById(key);
      block.classList.add('registration__error');
      const wrapper = document.getElementById(`wrapper-${key}`);
      wrapper.classList.add('has-error');
    } else {
      const block = document.getElementById(key);
      block.classList.remove('registration__error');
      const wrapper = document.getElementById(`wrapper-${key}`);
      wrapper.classList.remove('has-error');
    }
    return
};

const submitForm = (e) => {
  e.preventDefault();
  const formElement = document.querySelector("form")
  const formData = new FormData(formElement);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const isFieldCorrectName  = validatorsMap["name"](name);
  const isFieldCorrectEmail = validatorsMap["email"](email);
  const isFieldCorrectPhone = validatorsMap["phone"](phone);
  if(isFieldCorrectName === false) {
    return
  }
  if(isFieldCorrectEmail === false) {
    return
  }
  if(isFieldCorrectPhone === false) {
    return
  }
  console.log({
    name,
    email,
    phone
  })
}

const btnSubmit = document.getElementById('check').addEventListener('click', submitForm);