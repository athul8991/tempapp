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
showTemp.classList.add("showTemp");
document.body.appendChild(showTemp);
navigator.geolocation.getCurrentPosition((pos)=>{
    // let  = pos.coords;
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;
    // console.log(lat,lon);
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid=bbe7b7cc65da9ff85e601d80e7e560de')
    .then((data)=>data.json()).then((data)=>{
        console.log(data.main.temp);
        showTemp.innerText = data.main.temp+" \xB0C";
    })
    
})


