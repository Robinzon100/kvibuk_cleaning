const smsSenderBtn = document.getElementById("smsSenderBtn");
const numberInp = document.getElementById("numberInp");
const phoneumberForm = document.getElementById("phoneumberForm");

const roomAmount = document.querySelector('#amount-of-bathrooms')
const bathroomAmount = document.querySelector('#amount-of-bathrooms')


phoneumberForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formInfo = { 
        PhoneNumber: numberInp.value,
        roomAmount: roomAmount.value,
        bathroomAmount: bathroomAmount.value
    }

    fetch('/sms-sender', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formInfo)
    }).then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Something went wrong with your fetch');
        }
    })
})










    // (async () => {
    //     const rawResponse = await fetch('http://localhost:7000/sms-sender', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ recipient_PhoneNumber: numberInp.value })
    //     });
    //     const content = await rawResponse.json();
    //     console.log(content);
    // })();
