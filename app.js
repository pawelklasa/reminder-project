// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.datepicker');
//   var instances = M.Datepicker.init(elems, );
// });

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('select');
//   var instances = M.FormSelect.init(elems, );
// });

// // Reminder constructor
// function Reminder(reminderTitle, reminderDate, reminderPriority, reminderText) {
//   this.reminderTitle = reminderTitle;
//   this.reminderDate = reminderDate;
//   this.reminderPriority = reminderPriority;
//   this.reminderText = reminderText;
// }

// document.getElementById('btn').addEventListener('click', function(e) {
//   let reminderTitle = document.getElementById('textarea1').value,
//       reminderDate = document.getElementById('date').value,
//       reminderPriority = document.getElementById('priority').value,
//       reminderText = document.getElementById('textarea2').value;

//   // Getting all elements in item-holder
//   const itemHolder = document.getElementById('item-holder'),
//         itemCard = document.createElement('div'),
//         title = document.createElement('h5'),
//         text = document.createElement('p'),
//         date = document.createElement('p'),
//         close = document.createElement('i'),
//         edit = document.createElement('i'),
//         priority = document.createElement('i');

//   // Creating each item in a card
//   itemHolder.appendChild(itemCard);
//   itemCard.className = 'item card-item';

//   itemCard.appendChild(title);
//   title.innerHTML = reminderTitle;

//   itemCard.appendChild(close);
//   close.className = 'far fa-times-circle fa-sm close';
  
//   // Close
//   close.addEventListener('click', function(event) {
//     // debugger;
//     event.target.parentElement.remove();
//     console.log('clicked');
//   });

//   itemCard.appendChild(edit);
//   edit.className = 'far fa-edit fa-sm edit';

//   itemCard.appendChild(priority);
//   priority.className = 'fas fa-flag fa-sm priority';

//   itemCard.appendChild(date);
//   date.className = 'no-p-margin date';
//   date.innerHTML = reminderDate;

//   itemCard.appendChild(text);
//   text.innerHTML = reminderText;

//   document.getElementById('textarea1').value = '';
//   document.getElementById('date').value = '';
//   document.getElementById('priority').value = '';
//   document.getElementById('textarea2').value = '';

//   // Priority colour change
//   if (reminderPriority === 'P1') {
//   priority.style = 'color: #e6496b';
//   }
//   if (reminderPriority === 'P2') {
//     priority.style = 'color: #f46c22'
//   }
//   if (reminderPriority === 'P3') {
//     priority.style = 'color: #fccc98'
//   }

//   e.preventDefault();

// });

// Refactoring for modular js

// IIFE

// (function() {
//   // Declare private functions and vars

//   return {

//     // Declare public functions and vars
//   }
// })();


// Item Controller 
const ItemCtrl = (function () {

  //Reminder Constructor
  const Reminder = function( reminderTitle, reminderDate, reminderPriority, reminderText ) {
    this.reminderTitle = reminderTitle;
    this.reminderDate = reminderDate;
    this.reminderPriority = reminderPriority;
    this.reminderText = reminderText;
  }

  const data = {
    reminderTitle: 'Pav',
    reminderDate: '06-04-82',
    reminderPriority: 'p1',
    reminderText: 'text goes here'
  }

  return {
    logData: function () {
      return data;
    }
  }


})();

// UI Controller
const UICtrl = (function () {
  
})();

// App Controller
const App = (function( ItemCtrl, UICtrl ) {

  console.log(ItemCtrl.logData());

})( ItemCtrl, UICtrl );

