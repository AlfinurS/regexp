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
    if(idInput === "name"){
      isText(e.target.value);
    }
    if(idInput === "email"){
      isEmail(e.target.value);
    }
    if(idInput === "phone"){
      isPhone(e.target.value);
    }
  }
});

const textRegex = /^[а-яА-ЯёЁa-zA-Z0-9\s-_,@"'\.]+$/;
const isText = (val) => {
  let isNameCorrect = textRegex.test(val);
    if(isNameCorrect === false){
      const block = document.getElementById("name");
      block.classList.add('registration__error');
      const formaBlock = document.querySelector('.registration__form-inputs');
      const textError = `<p class="registration__error">Ошибка!</p>`;
      formaBlock.insertAdjacentHTML('afterbegin',textError);
    }
    return
};


const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9А-ЯЁа-яё]+\.)+[a-zA-ZА-ЯЁа-яё]{2,}))$/;

  const isEmail = (val) => {
    let isEmailCorrect = emailRegEx.test(val);
      if(isEmailCorrect === false){
        const block = document.getElementById("email");
        block.classList.add('registration__error');
        const formaBlock = document.querySelector('.registration__form-inputs');
        const textError = `<p class="registration__error">Ошибка!</p>`;
        formaBlock.insertAdjacentHTML('afterbegin',textError);
      }
      return
  };
  


const phoneRegex = /^.?.?.?.?\d{3}.?.?\d{3}.?.?.?\d{2}.?.?.?\d{2}$/;

const isPhone = (val) => {
  let isPhoneCorrect = phoneRegex.test(val);
    if(isPhoneCorrect === false){
      const block = document.getElementById("phone");
      block.classList.add('registration__error');
      const formaBlock = document.querySelector('.registration__form-inputs');
      const textError = `<p class="registration__error">Ошибка!</p>`;
      formaBlock.insertAdjacentHTML('afterbegin',textError);
    }
    return
};
