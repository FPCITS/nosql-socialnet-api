const $thoughtList = document.querySelector('#thought-list');

const getThoughtList = () => {
  fetch('/api/thoughts')
    .then(response => response.json())
    .then(thoughtListArr => {
      thoughtListArr.forEach(printThought);
    })
    .catch(err => {
      console.log(err);
    });
};

const printThought = ({ _id, yourName, feeling, commentCount, thought, createdAt }) => {
  const thoughtCard = `
    <div class="col-12 col-lg-6 flex-row">
      <div class="card w-100 flex-column">
        <h3 class="card-header">${yourName}</h3>
        <div class="card-body flex-column col-auto">
          <h4 class="text-dark">Your Thought ${thought}</h4>
          <p>On ${createdAt}</p>
          <p>${commentCount} Comments</p>
          <h5 class="text-dark">You were feeling: ${feeling}
          <ul>
            
          </ul>
          <a class="btn display-block w-100 mt-auto" href="/thought?id=${_id}">See the discussion.</a>
        </div>
      </div>
    </div>
  `;

  $thoughtList.innerHTML += thoughtCard;
};

getThoughtList();
