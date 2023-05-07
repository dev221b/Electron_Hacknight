// const btn=document.getElementById("clickme");
// btn.addEventListener("click", myFunc);
// function myFunc(){
//     const noti = new Notification("Title of electron js notification",{
//         body: "Body of electron js notification"
//       })
// }




// const currentTime = document.querySelector("h1")
// const content = document.querySelector(".upcoming h2")
// const selectMenu = document.querySelectorAll("select")
// const setAlarmBtn = document.querySelector("button")
// let alarmTime, isAlarmSet = false;

// for (let i = 12; i>0 ; i--){
//     i = i<10? "0" + i : i;
//     let option = `<option value="${i}">${i}</option>`;
//     selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option)
// } 
// for (let i = 59; i>=0 ; i--){
//     i = i<10? "0" + i : i;
//     let option = `<option value="${i}">${i}</option>`;
//     selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option)
// } 
// for (let i = 2; i>0 ; i--){
//     let ampm = i==1? "AM ":"PM";
//     let option = `<option value="${ampm}">${ampm}</option>`;
//     selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option)
// } 

// setInterval(() => {
//     let date = new Date(),
//     h = date.getHours(),
//     m = date.getMinutes(),
//     s = date.getSeconds(),
//     ampm = "AM";

//     if(h>12) {
//         h = h-12;
//         ampm = "PM";
//     }
    
//     h = h==0? h=12 : h;

//     h = h<10? "0"+h : h;
//     m = m<10? "0"+m : m;
//     s = s<10? "0"+s : s; 

//     currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

//     if(alarmTime == `${h}:${m} ${ampm}`) {
//         const noti = new Notification("Title of electron js notification",{
//                     body: "Body of electron js notification"
//     })
//     }

// }, 1000);

// function setAlarm(){
    // if(isAlarmSet){
    //     alarmTime = "";
    //     setAlarmBtn.innerText = "Set Alarm";
    //     return isAlarmSet = false
    // }


//     let time = `${selectMenu[0].value} : ${selectMenu[1].value} ${selectMenu[2].value}`;
//     if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM"))
//     return alert("Please select a valid time to set reminder");
//     // content.classList.add("disable");
//     isAlarmSet = true;
//     alarmTime = time;
//     upcoming.innerText("Added a new alarm");
//     setAlarmBtn.innerText = "Delete";
// }
// setAlarmBtn.addEventListener("click", setAlarm);    


const currentTime = document.querySelector("h1"),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");

// let title = document.getElementById('title').value;

let alarmTime, isAlarmSet;
// ringtone = new Audio("./files/ringtone.mp3");

for (let i = 12; i > 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
    i = i < 10 ? `0${i}` : i;
    let option = `<option value="${i}">${i}</option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}
let ctr = 0;
setInterval(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
    if(h >= 12) {
        h = h - 12;
        ampm = "PM";
    }
    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
    
    if (alarmTime === `${h}:${m} ${ampm}` && ctr == 0) {
        ctr = ctr+1;
        const noti = new Notification("NotiKuttan",{
            body: document.getElementById('title').value},{
            timeoutType: "never"
        })
        noti.show();
    }
}, 1000);

function setAlarm() {
    // if (isAlarmSet) {
        
        
    // }

    // let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    // if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
    //     return alert("Please, select a valid time to set Alarm!");
    // }
    // alarmTime = time;



    // isAlarmSet = true;
    // setAlarmBtn.innerText = "Clear Alarm";

    // const remBox = document.querySelector("#upcoming")

    //     const upcRems = document.createElement("div")
    //     upcRems.className = "input-group2"
    //     remBox.appendChild(upcRems)

    //     const upcTitle = document.createElement("h3")
    //     upcTitle.innerText = document.getElementById('title').value
    //     upcRems.appendChild(upcTitle)

    //     const upcTime = document.createElement("h3")
    //     upcTime.innerText = time
    //     upcRems.appendChild(upcTime)

        // alarmTime = "";
        // document.getElementById('title').value = "";
        // selectMenu[0].value = ""
        // selectMenu[1].value = ""
        // selectMenu[2].value = ""
        // setAlarmBtn.innerText = "Set Alarm";
        // // return isAlarmSet = false;



        if (isAlarmSet) {
            alarmTime = "";
            document.getElementById('title').value = ""
            selectMenu[0].value = ""
            selectMenu[1].value = ""
            selectMenu[2].value = ""
            setAlarmBtn.innerText = "Set Reminder";
            return isAlarmSet = false;
        }
        let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
        if (time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM")) {
            return alert("Please select a valid time to set reminder");
        }
        alarmTime = time;
        isAlarmSet = true;
        // content.classList.add("disable");
        setAlarmBtn.innerText = "Clear Reminder";
}

setAlarmBtn.addEventListener("click", setAlarm);
