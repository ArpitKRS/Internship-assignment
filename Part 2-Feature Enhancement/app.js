// app.js

// Simulated user data fetch function (meant to represent an API call)
function fetchUsers(callback) {
    setTimeout(() => {
      callback([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Catherine' },
        { id: 4, name: 'David' },
        { id: 5, name: 'Ella' },
        { id: 6, name: 'Frank' },
        { id: 7, name: 'Grace' },
        { id: 8, name: 'Henry' },
        { id: 9, name: 'Isabel' },
        { id: 10, name: 'Jack' },
      ]);
    });
  }
  
  let users = []; // Array to store user data
  
  // Number of items per page
  const itemsPerPage = 5;
  
  // Current page
  let currentPage = 1;
  
  function displayUsers(users) {
    const userList = document.querySelector('#usersList');
    userList.innerHTML = ''; // Clear the list before re-rendering
  
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedUsers = users.slice(startIndex, endIndex);
  
    displayedUsers.forEach((user) => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user-item'); // Add a CSS class for styling
      userDiv.innerHTML = `${user.name} <button class="delete-btn" data-id="${user.id}">Delete</button>`;
      userList.appendChild(userDiv);
    });
  
    // Update pagination
    updatePagination(users.length);
  }
  
  function updatePagination(totalItems) {
    const pagination = document.querySelector('#pagination');
    pagination.innerHTML = '';
  
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    for (let i = 1; i <= totalPages; i++) {
      const pageBtn = document.createElement('button');
      pageBtn.textContent = i;
      pageBtn.addEventListener('click', () => {
        currentPage = i;
        displayUsers(users);
      });
      pagination.appendChild(pageBtn);
    }
  }
  
  // Add User
  const addUserForm = document.querySelector('#addUserForm');
  addUserForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = document.querySelector('#name');
    const newName = nameInput.value;
    if (newName) {
      const newUser = { id: Date.now(), name: newName };
      users.push(newUser);
      displayUsers(users);
      nameInput.value = '';
    }
  });
  
  // Delete User
  document.querySelector('.user-list-container').addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
      const userId = parseInt(e.target.getAttribute('data-id'));
      deleteUser(userId);
    }
  });
  
  function deleteUser(userId) {
    users = users.filter((user) => user.id !== userId);
    displayUsers(users);
  }
  
  // Search User
  const searchUserInput = document.querySelector('#searchUser');
  searchUserInput.addEventListener('input', function () {
    const searchTerm = searchUserInput.value.toLowerCase();
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm)
    );
    displayUsers(filteredUsers);
  });
  
  // Fetch and display users on page load
  fetchUsers((fetchedUsers) => {
    users = fetchedUsers;
    displayUsers(users);
  });
  