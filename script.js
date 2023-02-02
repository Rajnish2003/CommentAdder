let form = document.querySelector('form');
let user = document.querySelector('#username');
let comment = document.querySelector('#comment');
let list = document.querySelector('.list');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!user.value || !comment.value) {
        alert("Username and comment cannot be empty!!!");
    }
    else if (user.value.indexOf(' ') != -1) {
        alert("Username cannot contain space!!!");
    }
    else if (user.value.length < 6) {
        alert("Username size must be more than 6");
    }
    else {
        let h2 = document.createElement('h3');
        let p = document.createElement('p');
        h2.innerHTML = user.value;
        p.innerHTML = comment.value;
        h2.classList.add('app');
        console.log(h2);
        console.log(p);

        let li = document.createElement('li');
        li.insertAdjacentElement("afterbegin", h2);
        console.log(li);
        h2.insertAdjacentElement('afterend', p);
        let hr = document.createElement('hr');
        p.insertAdjacentElement("afterend", hr);

        list.appendChild(li);
        user.value = "";
        comment.value = "";

    }
})