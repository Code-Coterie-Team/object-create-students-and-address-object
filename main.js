const studentOne = {
    name : "sara",
    age : 18,
    graduated : false,
    favorites : ["painting","driving","wallking"],
    country : "England"
}

const addressOne = {
    city : "London",
    street : "BL 123",
    avenue : {
        street : "one",
        plate : 1876,
        aparteman : "block 37th"
    }
}

const information = document.getElementById("student-info");

information.innerHTML = `
    <p> Name : ${studentOne.name} </P>
    <p> age : ${studentOne.age} </P>
    <p> graduated : ${studentOne.graduated} </P>
    <p> favorites : ${studentOne.favorites} </P>
    <p> country : ${studentOne.country} </P>
    <p> city : ${addressOne.city} </P>
    <p> avenue : ${addressOne.avenue} </P>

`
console.log("studentOne",studentOne);
console.log("addressOne",addressOne);