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
        console.log(block);
    }
}

//const textOnPage = new TextRegExp();



const formName = document.querySelector("#name")
//const textName = formName.innerHTML;
const checkForm = (event) =>{
if(name.validity.typeMismatch)
    //const idBtn = event.target;
    console.log(textName)
  
}

const btnCheck = document.querySelector("#check");
btnCheck.addEventListener("input", checkForm);

    /* document.querySelector(".registration__btn").addEventListener('click', e => {
        if (e.target.classList.contains('check')){
            const idBtn = e.target;
            //let product = this.goods.find(product => product.id_product === +idBtnBuy);
            console.log(idBtn)
            //cart.addProduct(product);
        }

/*     document.querySelector(".search-form").addEventListener('submit', e => {
        console.log(e.target)
        this.filter(document.querySelector('.search-field').value)
        }); */
