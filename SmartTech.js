/*-------------Login Page-------------*/

const formDisplay = document.getElementById('intro');
const loginDisplay = document.getElementById('login');
const signButton = document.querySelector('#sign');
const passwordForgotButton = document.querySelector('#forget');
const reviewSection = document.getElementById('reviews');
const reviewTextArea = document.getElementById('youR');
// let arrowAnimator = document.querySelector('.arrow');
const customerSection = document.querySelector('.Customers');






const header = document.createElement('h2');
const names = ['Username:','Email:','Password:','Confirm Password:'];
// The For and id's
const forIds =['txt','email','pass','pass1'];
const placeholders=['Jacob','Enter you email address','Enter password','confirm password']
// inputs type
const inputType = ['text','email','password','password'];
function pageTop(){
    loginDisplay.innerHTML="";
    const sectionDisplay =document.createElement('section');
    sectionDisplay.setAttribute('id','login');
    loginDisplay.append(sectionDisplay,header);
}
function signUpForm(e){
    const passWord = document.querySelector('#pass');
    const passWordConfirm = document.querySelector('#pass1');
    pageTop();
    reviewSection.innerHTML="";
    header.innerHTML='Register';
    //4 loops needed
    for(let i = 0;i <4; i++){
        const block = document.createElement('div');
        const label=document.createElement('label');
        label.setAttribute('for',forIds[i]);
        label.setAttribute('required',true);
        label.innerHTML=names[i];
        block.append(label);
        const block0 = document.createElement('div');
        const input1 = document.createElement('input');
        input1.setAttribute('type',inputType[i]);
        input1.setAttribute('id',forIds[i]);
        input1.setAttribute('placeholder',placeholders[i]);
        block0.append(input1);
        loginDisplay.append(block,block0);
    }

    const block1 = document.createElement('div');
    block1.setAttribute('id','agree');
    const Terms = document.createElement('label');
    Terms.innerHTML='I agree to the terms & conditions?';
    Terms.setAttribute('for','rem');
    Terms.setAttribute('value',1);
    const termsConditions = document.createElement('input');
    termsConditions.setAttribute('type','checkbox');
    termsConditions.setAttribute('id','rem');
    termsConditions.setAttribute('class','rem');

    block1.append(termsConditions,Terms);

    const block2 = document.createElement('div');
    const buttonElement = document.createElement('button');
    buttonElement.innerHTML='Register';
    buttonElement.setAttribute('class','register')
    buttonElement.style.marginTop='2rem';
    // loginDisplay.append(block,buttonElement);

    block2.append(buttonElement);

    const block3 = document.createElement('div');
    block3.setAttribute('id','already');
    const ParagraphElement = document.createElement('p');
    ParagraphElement.innerHTML='Already a Member?';
    const aElement=document.createElement('a');
    aElement.innerHTML='Login';
    aElement.setAttribute('id','return');
    aElement.setAttribute('href','#');

    block3.append(ParagraphElement,aElement);

    loginDisplay.append(block1,block2,block3);

    const registerButton = document.querySelector('.register');

    // -------- To do-------
    // Implement passwordAuthenticator to work 😂😂😂😂😂----
    // Checking for password Authenticity
    function passwordAuthenticator(e){
        if(passWordConfirm.value !== passWord.value){
            passWordConfirm.textContent = "";
            console.log('Wrong Password entered');
            
        }
        }
        
    registerButton.addEventListener('click',passwordAuthenticator)

   
}
// Recover page Display Function
function passwordRecoveryForm(e){
    pageTop();
    reviewSection.innerHTML="";
    header.innerHTML='Reset Password';
    for(let i = 0;i <3; i++){
        const block = document.createElement('div');
        const label=document.createElement('label');
        label.setAttribute('for',forIds[i]);
        label.setAttribute('required',true);
        label.innerHTML=names[i];
        block.append(label);
        const block0 = document.createElement('div');
        const input1 = document.createElement('input');
        input1.setAttribute('type',inputType[i]);
        input1.setAttribute('id',forIds[i]);
        input1.setAttribute('placeholder',placeholders[i]);
        block0.append(input1);
        loginDisplay.append(block,block0);
    }
    const buttonElement = document.createElement('button');
    buttonElement.innerHTML='Reset';
    buttonElement.style.marginTop='2rem';
    loginDisplay.append(buttonElement);

}

//Arrow Display function
const arrowAnimator=document.createElement('div');
function arrowCreator(e){
    
    arrowAnimator.setAttribute('class','arrow');
    arrowAnimator.textContent ="▶▶";
    //  console.log("mouseenter and added");
    customerSection.append(arrowAnimator); 
}
// --------------To do------------
// -----------to make the arrowDestroyer delay for 10 seconds-----
function arrowDestroyer(e){
    arrowAnimator.classList.remove('.arrow')
    arrowAnimator.innerHTML='';
    // console.log("mouseleave and Removed");
    customerSection.append(arrowAnimator); 
}
// --To implement scroll effect on reviews
// onscroll
// scroll
// scrollX

   
    


customerSection.addEventListener('mouseenter',arrowCreator);
customerSection.addEventListener('mouseleave',arrowDestroyer);
passwordForgotButton.addEventListener('click',passwordRecoveryForm);
signButton.addEventListener('click',signUpForm);
