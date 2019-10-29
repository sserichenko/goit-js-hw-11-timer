let time = '';
const targetDate = new Date('Nov 17, 2019');


/*
* Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
* миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
*/
const days = Math.floor(time / (1000 * 60 * 60 * 24));
/*
* Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
* остатка % и делим его на количество миллисекунд в одном часе
* (1000 * 60 * 60 = миллисекунды * минуты * секунды)
*/
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
/*
* Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
* миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
*/
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
/*
* Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
* миллисекунд в одной секунде (1000)
*/
const secs = Math.floor((time % (1000 * 60)) / 1000);

// const ourDays = document.querySelector("[data-value=days]");
// const ourHours = document.querySelector("[data-value=hours]");
// const ourMins = document.querySelector("[data-value=mins]");
// const ourSecs = document.querySelector("[data-value=secs]");

// const timerId = setInterval(() => {
//   time = targetDate.getTime() - Date.now();
//   const days = Math.floor(time / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   const secs = Math.floor((time % (1000 * 60)) / 1000);
//   ourDays.textContent = String(days).padStart(3, '0');
//   ourHours.textContent = String(hours).padStart(2, '0');
//   ourMins.textContent = String(mins).padStart(2, '0');
//   ourSecs.textContent = String(secs).padStart(2, '0');
// },1000);


//РЕШЕНИЕ ЧЕРЕЗ КЛАСС//
//========================================================

//   const ourDays = document.querySelector("[data-value=days]");
//   const ourHours = document.querySelector("[data-value=hours]");
//   const ourMins = document.querySelector("[data-value=mins]");
//   const ourSecs = document.querySelector("[data-value=secs]");

// class CountdownTimer {
//   constructor({ selector, targetDate}){
//     this.selector = document.querySelector(`${selector}`);
//     this.target = targetDate.getTime();

//   };
//   mySetInterval(){
    
//     setInterval(() =>{
//         let currentTime = Date.now();
//         let time = this.target - currentTime;
//         const days = Math.floor(time / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//         const secs = Math.floor((time % (1000 * 60)) / 1000);
//         ourDays.textContent = String(days).padStart(3, '0');
//         ourHours.textContent = String(hours).padStart(2, '0');
//         ourMins.textContent = String(mins).padStart(2, '0');
//         ourSecs.textContent = String(secs).padStart(2, '0');
//     },1000)
//   }
// }

// const timer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Nov 17, 2019'),
// });

// timer.mySetInterval();