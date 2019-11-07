const plusBtn = document.querySelectorAll('.plus')
const minusBtn = document.querySelectorAll('.minus')


const amount = document.querySelectorAll('.amount')

let amountOfRooms = 0;
if (plusBtn && minusBtn) {
    for (let i = 0; i < plusBtn.length; i++) {
        plusBtn[i].addEventListener('click', () => {
            amount[i].value++;
        })

        minusBtn[i].addEventListener('click', () => {
            amount[i].value --;
        })
    }
}