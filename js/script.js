document.body.style.margin = '0px';
document.body.style.height = '100vh';
document.body.style.backgroundColor = 'white';
document.body.style.display = 'flex';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';
 
let container = document.body.appendChild(document.createElement('div'));
container.style.height = '800px';
container.style.aspectRatio = '3/2';
container.style.maxHeight = '90%';
container.style.maxWidth = '95%'
container.style.display = 'flex';
container.style.alignItems = 'center';
container.style.justifyContent = 'space-evenly';
 
for (let i = 0; i < 2; i++){
    let player = container.appendChild(document.createElement('div'));
    let name = player.appendChild(document.createElement('div'));
    let points = player.appendChild(document.createElement('div'));
    let pointsContainer = points.appendChild(document.createElement('div'));
    let number = player.appendChild(document.createElement('div'));
    
    player.id = `player${i}`;
    player.style.height = '80%';
    player.style.aspectRatio = '1/2';
    player.style.backgroundColor = 'lightgrey';
    player.style.display = 'flex';
    player.style.flexDirection = 'column';
    player.style.alignItems = 'center';
    player.style.justifyContent = 'space-around';
    
    name.id = `name${i}`;
    name.style.width = '90%';
    name.style.textAlign = 'center';
    name.style.fontSize = '5vmin';

    points.style.width = '90%';
    points.style.height = '15%';
    points.style.backgroundColor = 'lightblue';
    points.style.display = 'flex';
    points.style.alignItems = 'center';
    points.style.justifyContent = 'center';
    
    pointsContainer.id = `points${i}`
    pointsContainer.style.fontSize = '5vmin';
    pointsContainer.innerText = "0";
    
    number.id = `card${i}`;
    number.style.height = '65%';
    number.style.width = '90%';
    number.style.backgroundImage = 'url("images/2C.png")';
    number.style.backgroundSize = 'cover';
    number.style.backgroundPosition = 'center';
    number.style.margin = '10% 0';
    number.style.display = 'flex';
    number.style.alignItems = 'center';
    number.style.justifyContent = 'center';
}
 
let generateContainer = document.getElementById('player0').insertAdjacentElement('afterend', document.createElement('div'));
let generate = generateContainer.appendChild(document.createElement('div'));
let attempts = generateContainer.appendChild(document.createElement('div'));
generateContainer.style.height = '20%';
generateContainer.style.aspectRatio = '3/2';
generateContainer.style.backgroundColor = 'limegreen';
generateContainer.style.display = 'flex';
generateContainer.style.alignItems = 'center';
generateContainer.style.justifyContent = 'center';
generateContainer.style.flexDirection = "column";
 
generate.innerText = "Generate";
generate.style.fontSize = '4vmin';
 
attempts.id = "attempts";
attempts.innerText = "You have 3 more attempts";
attempts.style.fontSize = '2vmin';
 
let points1 = 0, points2 = 0;
let number1, number2;
let attemptsCount = 3;
 
const nickname = prompt("Enter your name:", "Player") ?? "";
document.getElementById('name0').textContent = nickname.length > 0 ? nickname : "Player";
document.getElementById('name1').textContent = "Computer";
 
let numbers = [2, 3, 4, 6, 7, 8, 9, 10, 11];
for (var i = 0; i < 100; i++){
    console.log(numbers[Math.floor(Math.random() * (numbers.length - 1))]);
}
 
generateContainer.onclick = () => {
    number1 = numbers[Math.floor(Math.random() * (numbers.length - 1))];
    number2 = numbers[Math.floor(Math.random() * (numbers.length - 1))];
    points1 += number1;
    points2 += number2;
    document.getElementById("points0").innerText = points1;
    document.getElementById("points1").innerText = points2;
    document.getElementById("attempts").innerText = `You have ${--attemptsCount} more attempts`;
    document.getElementById("card0").style.backgroundImage = `url("images/${number1}S.png")`;
    document.getElementById("card1").style.backgroundImage = `url("images/${number2}C.png")`;
    setTimeout(() => {
        if (attemptsCount == 0) {
            alert(points1 == points2 ? "It's a draw" : 
            `${points1 > points2 ? document.getElementById('name0').textContent : "Computer"} has won.`);
            points1 = 0, points2 = 0;
            document.getElementById("points0").innerText = 0;
            document.getElementById("points1").innerText = 0;
            attemptsCount = 3;
            document.getElementById("attempts").innerText = `You have ${attemptsCount} more attempts`;
        };
    }, 500);
}