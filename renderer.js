// const noti = new Notification("Title of electron js notification",{
//   body: "Body of electron js notification"
// })
// noti.onclick();
const btn=document.getElementById("clickme");
btn.addEventListener("click", myFunc);
function myFunc(){
    const noti = new Notification("Title of electron js notification",{
        body: "Body of electron js notification"
      })
}