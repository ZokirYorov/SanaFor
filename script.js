let dateNode = document.getElementById("date")
let sekundomerNode = document.getElementById("sekundomer")
let date = new Date()
sekundomerNode.innerText = getTime(date)

setInterval(function (){
    date = new Date()
    sekundomerNode.innerText = getTime(date)
}, 1000)

function getTime(date){

    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

date = new Date('July 30, 1992 03:24:00')
let dayString = ""

switch (date.getDay()){
    case 1: dayString = "Dushanba " + date.getFullYear(); break;
    case 2: dayString = "Seshanba " + date.getFullYear(); break;
    case 3: dayString = "Chorshanba " + date.getFullYear(); break;
    case 4: dayString = "Payshanba " + date.getFullYear(); break;
    case 5: dayString = "Juma " + date.getFullYear(); break;
    case 6: dayString = "Shanba " + date.getFullYear(); break;
    case 0: dayString = "Yakshanba " + date.getFullYear(); break;
}

dateNode.innerText = dayString


let persons = [
    {
        name: "Mirzohid",
        birthDate: 'July 30, 2022 03:24:00'
    },
    {
        name: "Zokir",
        birthDate: 'March 24, 2022 03:24:00'
    },
]

let birthNode = document.getElementById("birth")

for (let i = 0; i < persons.length; i++){
    let birthDate = persons[i].birthDate;
    birthNode.innerHTML += persons[i].name + " " + Math.ceil((new Date() - new Date(birthDate)) / (1000 * 60 * 60 * 24))+ "<br>"
}