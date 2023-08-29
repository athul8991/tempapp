console.log("Started");

// const pr = fetch("https://jsonplaceholder.typicode.com/todos/1");

// pr.then((data)=>data.json()).then((data)=>{
//     console.log(data);
// });


// const prom = new Promise((res,reg)=>{
//     const pr2 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(data =>data.json()).then((data)=>{
//         res(data);
//     }).catch((err)=>{
//         reg("get Error");
//     })

// })

// prom.then((data)=>{
//     console.log(data);
// },(err)=>{
//     console.log(err);
// })

// let obj ={
//     name:"deecode",
//     age:40,
//     language:"malayalam"
// }

// const keyArray = Object.keys(obj)

// console.log(typeof(keyArray));
// key bbe7b7cc65da9ff85e601d80e7e560de

// fetch('https://api.openweathermap.org/data/2.5/weather?lat=11.874477&lon=75.370369&units=metric&appid=bbe7b7cc65da9ff85e601d80e7e560de')
// .then((data)=>data.json())
// .then((data)=>{
//     // console.log(data);
// });
const showTemp = document.createElement('h1');
const weatherType = document.createElement('h6');
const container = document.createElement('div');

container.classList.add('content')
showTemp.classList.add("showTemp");
weatherType.classList.add('wt');


//  const container = document.getElementById('container');
container.appendChild(showTemp);
container.appendChild(weatherType)

document.querySelector('#container').appendChild(container);

navigator.geolocation.getCurrentPosition((pos)=>{
    // let  = pos.coords;
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;
    // console.log(lat,lon);
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid=bbe7b7cc65da9ff85e601d80e7e560de')
    .then((data)=>data.json()).then((data)=>{
        [weather] = data.weather
        console.log(weather);
        showTemp.innerText = data.main.temp+" \xB0C";
        weatherType.innerText = weather.main;
    })
    
})


