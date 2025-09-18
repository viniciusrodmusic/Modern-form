const body = document.querySelector('.body')
const submitBtn = document.querySelector('.submit-btn')
const nameField = document.getElementById('name')
const lastNameField = document.getElementById('sobrenome')
const ageField = document.getElementById('idade')
const emailField = document.getElementById('email')
const birthdayField = document.getElementById('nascimento')
const phoneField = document.getElementById('telefone')
const resultsDiv = document.querySelector('.results')
const overlayResults = document.querySelector('.overlay')
const themeBtn = document.querySelector('.theme-btn')
const themeIcon = document.querySelector('.fa-moon')
const dadosForm = [nameField, lastNameField, emailField, ageField, birthdayField, phoneField];

const overlayMsg = [
    "Seu nome é: ",
    "Seu sobrenome é: ",
    "Seu email é: ",
    "Sua idade é: ",
    "Você nasceu em: ",
    "Seu telefone é: "
]

submitBtn.addEventListener('click', (e) => {

    e.preventDefault();
    if (resultsDiv.innerText == "") {
        dadosForm.forEach((item) => {
            let paragraphData = document.createElement('p')
            let paragraphContent = document.createTextNode(item.value)
            paragraphData.appendChild(paragraphContent)

            resultsDiv.append(paragraphData)

        })
    } else {
        alert('Você já adicionou os items...')
    }

})


themeBtn.addEventListener('click', (e) => {
    body.classList.toggle('black-theme');
    if (themeIcon.classList.contains('fa-moon')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun')
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon')
    }
})

resultsDiv.addEventListener('click', (e) => {
    if (resultsDiv.innerText != "") {

        overlayResults.classList.remove('disable');
            
        if (overlayResults.innerText == "") {
            /*
            LOOP que pega os valores de cada input e usa o index da iteração para
            Colocar uma mensagem da lista overlayMsg
            */
            dadosForm.forEach((item, index) => {
                let paragraphData = document.createElement('p');
                let paragraphContent = document.createTextNode(`${overlayMsg[index]} ${item.value}`);
                paragraphData.appendChild(paragraphContent);

                overlayResults.append(paragraphData);
            })
        }
    }

})

overlayResults.addEventListener('click', (e) => {
    overlayResults.classList.add('disable')
})