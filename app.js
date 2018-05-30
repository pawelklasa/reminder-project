document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, );
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, );
});

// Reminder constructor
function Reminder(reminderTitle, reminderDate, reminderPriority, reminderText) {
  this.reminderTitle = reminderTitle;
  this.reminderDate = reminderDate;
  this.reminderPriority = reminderPriority;
  this.reminderText = reminderText;
}

document.getElementById('btn').addEventListener('click', function(e) {
  const reminderTitle = document.getElementById('textarea1').value,
        reminderDate = document.getElementById('date').value,
        reminderPriority = document.getElementById('priority').value,
        reminderText = document.getElementById('textarea2').value;

  // Getting all elements in item-holder
  const itemHolder = document.getElementById('item-holder'),
        itemCard = document.createElement('div'),
        title = document.createElement('h4'),
        text = document.createElement('p'),
        date = document.createElement('p'),
        close = document.createElement('i'),
        edit = document.createElement('i'),
        priority = document.createElement('i');

  // Creating each item in a card
  itemHolder.appendChild(itemCard);
  itemCard.className = 'item card-item';

  itemCard.appendChild(title);
  title.innerHTML = reminderTitle;

  itemCard.appendChild(close);
  close.className = 'far fa-times-circle fa-sm close';
  
  // Close
  close.addEventListener('click', function(event) {
    debugger;
    event.target.parentElement.remove();
    console.log('clicked');
  });

  itemCard.appendChild(edit);
  edit.className = 'far fa-edit fa-sm edit';

  itemCard.appendChild(priority);
  priority.className = 'fas fa-flag fa-sm priority';

  itemCard.appendChild(date);
  date.className = 'no-p-margin date';
  date.innerHTML = reminderDate;

  itemCard.appendChild(text);
  text.innerHTML = reminderText;

  // Priority colour change
  if (reminderPriority === 'P1') {
  priority.style = 'color: #e6496b';
  }
  if (reminderPriority === 'P2') {
    priority.style = 'color: #f46c22'
  }
  if (reminderPriority === 'P3') {
    priority.style = 'color: #fccc98'
  }

  // Remove modal
  modal.style.display = "none";

  e.preventDefault();

});


