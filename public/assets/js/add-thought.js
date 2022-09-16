{(const $thoughtForm = document.querySelector('#thought-form');

const handleThoughtSubmit = event => {
  event.preventDefault();

  const yourName = $thoughtForm.querySelector('#your-name').value;
  const feeling = $thoughtForm.querySelector('#feeling').value;
    return topping.value;
  });

  if (!yourName || !thought) {
    return;
  }

  const formData = { yourName, thought, feeling };

  fetch('/api/thought', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(postResponse => {
      console.log(postResponse);
    })
    .catch(err => {
      console.log(err);
      saveRecord(formData);
      // DO INDEXED DB STUFF HERE
    });
};

$thoughtForm.addEventListener('submit', handleThoughtSubmit);
