document.getElementById('getText')
.addEventListener('click', getText);

document.getElementById('getUsers')
.addEventListener('click', getUsers);

document.getElementById('getPost')
.addEventListener('click', getPosts);


document.getElementById('addPost')
.addEventListener('submit', addPost);

function getText()
{
   // when click on button, get data from sample.txt

fetch('sample.txt')
.then((res)=> res.text())
.then((txtData)=> 
// console.log(txtData)
{
    document.getElementById('output').innerHTML=txtData;
}
)
.catch((error)=> console.log(error));
}


function getUsers()
{
    fetch('usersData.json')
    .then(res=> res.json())
    .then(data=>{

        // es-6 standards

         let output ='<h2 class="mb-4">Users</h2>';
    //   console.log(JSON.stringify(data));

data.forEach(function(users){
    // template strings  can use multiple lines
output+=`
<ul class="list-group mb-3">
<li class="list-group-item"> ID: ${users.id}</li>
<li class="list-group-item"> Name: ${users.name}</li>
<li class="list-group-item"> Email: ${users.email}</li>

</ul>`;
});
document.getElementById('output').innerHTML=output;
    }
    );
}



// fetch from Json holder remote API

function getPosts()
{
fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=> res.json())
.then((data)=>{

    let output ='<h2 class="mb-4" >Posts</h2>';
data.forEach((posts)=>{

output+=`
<div class="card card-body mb-3">
<h3>${posts.title}</h3>
<p>${posts.body}</p>
</div>
`;

});
document.getElementById('output').innerHTML=output;
});
}

//form

function addPost(e)
{
e.preventDefault();


let title = document.querySelector('#title').value;
let body = document.querySelector('#body').value;

fetch('https://jsonplaceholder.typicode.com/posts',
{
    method:'POST',
    headers: {
        'Accept': 'application/json, text/plain, */*',
   'Content-type':'application/json'
   
    },
    body: JSON.stringify({title:title, body:body})

})
.then((res)=>res.json())
.then((data)=>console.log(data));
}