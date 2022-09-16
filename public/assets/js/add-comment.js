{(const $commentForm = document.querySelector('#comment-form');

const handleThoughtSubmit = event => {
  event.preventDefault();

  const commentorName = $commentForm.querySelector('#commentername').value;
  const comment = $commentForm.querySelector('#comment').value;
    return topping.value;
  });

  if (!commentorName || !comment) {
    return;
  }

  const formData = { commentorName, comment };

  fetch('/api/comment', {
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
    });
};

$commentForm.addEventListener('submit', handleCommentSubmit);
