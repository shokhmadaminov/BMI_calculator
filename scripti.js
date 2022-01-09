// CONTAINER SELECTORS
const inputIsm = document.getElementById('ism')
const inputVes = document.getElementById('vesi')
const inputBoy = document.getElementById('boyi')
const natijaBtn = document.getElementById('container_btn')
// MODAL SELECTORS
const darkBackground = document.querySelector('.dark-background')
const modal = document.querySelector('.modal')
const timeModal = document.querySelector('.timeModal')
const modalText = document.querySelector('.modal-text')
const semirishBtn = document.getElementById('semirish')
const ozishBtn = document.getElementById('ozish')
const mushakBtn = document.getElementById('mushak')
const revAnim = document.querySelector('.reverseAnimation')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const ves = inputVes.value
    const boy = inputBoy.value
    const bmi = (ves / boy**2).toFixed(1)
    darkBackground.classList.remove('hidden')
    modal.classList.remove('hidden')
    calculateBmi(bmi)
})

function calculateBmi(bmi) {
    if(bmi <= 18.5) {
        modalText.textContent = `${inputIsm.value} siz ozg'insiz! Ves yeg'ishga harakat qiling, ko'rkam ko'rinish olishga harakat qiling. Pastdagi linkga bosing va semirish uchun mutahasislardan maslaxat oling`
        mushakBtn.classList.add('hidden')
        semirishBtn.classList.remove('hidden')
        ozishBtn.classList.add('hidden')
    } else if(bmi > 18.5 && bmi < 24.9) {
        modalText.textContent = `${inputIsm.value} sizning holaingiz normal! Siz ozg'in ham emassiz, semiz ham emassiz. Faqat mushaklaringizga yana ishlov bering, pastdagi havolaga bosing va ko'rkam ko'rinish uchun maslahatlar oling`
        mushakBtn.classList.remove('hidden')
        semirishBtn.classList.add('hidden')
        ozishBtn.classList.add('hidden')
    }else if(bmi < bmi > 25 && bmi < 29.9) {
        modalText.textContent = `${inputIsm.value} sizda ortiqcha massa mavjud! Ozishga harakat qilib ko'ring. Pastdagi havolaga bosing va ozish uchun mutahasislardan maslahatlar oling.`
        mushakBtn.classList.add('hidden')
        semirishBtn.classList.add('hidden')
        ozishBtn.classList.remove('hidden')
    } else if(bmi > 30) {
        modalText.textContent = `${inputIsm.value} Sizda keragidan ancha ortiqcha ves mavjud! Siz ortiqcha semizsiz, sog'ligingizga be e'tibor bo'lmang. Shifokor ko'rigidan o'ting. Pastdagi havolaga bosing va ozish uchun mutahasislardan maslahatlar oling.`
        mushakBtn.classList.add('hidden')
        semirishBtn.classList.add('hidden')
        ozishBtn.classList.remove('hidden')
    }
    inputIsm.value = ''
    inputVes.value = ''
    inputBoy.value = ''
}

document.addEventListener('click', (e)=> {
    if(e.target !== modal){
        modal.classList.add('hidden')
        darkBackground.classList.add('hidden')
    }
})
timeModal.addEventListener('click', ()=> {
        modal.classList.add('hidden')
        darkBackground.classList.add('hidden')
})
document.addEventListener('keydown', (e)=> {
    if(e.key == 'Escape') {
            modal.classList.add('hidden')
            darkBackground.classList.add('hidden') 
    }
})




