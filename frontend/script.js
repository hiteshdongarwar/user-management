const API = "http://localhost:5000/users"

async function addUser() {

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const age = document.getElementById("age").value

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, age })
    })

    loadUsers()

}

async function loadUsers() {

    const res = await fetch(API)

    const data = await res.json()

    const list = document.getElementById("users")

    list.innerHTML = ""

    data.forEach(user => {

        list.innerHTML += `
<li>
${user.name} - ${user.email}
<button onclick="deleteUser('${user._id}')">Delete</button>
</li>
`

    })

}

async function deleteUser(id) {

    await fetch(API + "/" + id, {
        method: "DELETE"
    })

    loadUsers()

}

loadUsers()