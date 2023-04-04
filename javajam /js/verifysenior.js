var age;

age = prompt("Enter your age:");
if (age >= 65) {
    output = "Free Friday Coffee Night for Seniors!";
    document.getElementById('verify').style.color = 'maroon';
    document.getElementById('verify').style.fontVariantCaps = 'small-caps';
} else if (age >= 18 && age <= 25) {
    output = "Have you considered the career opportunities available with JavaJam? Ask a team member today!<br>Enjoy Music and Make Memories!";
} else {
    output = "Enjoy Music and Make Memories!";
}

document.getElementById("verify").innerHTML = output;
