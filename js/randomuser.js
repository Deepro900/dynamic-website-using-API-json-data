const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUsers(data.results))

}
const displa yUsers = users => {
    const userContainer = document.getElementById('users-container');

    for (const user of users) {
        console.log(user);
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <h3>User Name: ${user.name.title} ${user.name.first}  ${user.name.last}</h3>
            <p>email:${user.email}</p>
            <P>User Location: ${user.location.city} , ${user.location.country}</P>
            
            `;
        userContainer.appendChild(userDiv);
    }

}