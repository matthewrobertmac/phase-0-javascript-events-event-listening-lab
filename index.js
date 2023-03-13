const input = document.getElementById('button');

function addingEventListener() {
    input.addEventListener('click', function() {
        alert('I was clicked!');
      });
}

input.addingEventListener('click', addingEventListener);
