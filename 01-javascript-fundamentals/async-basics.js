// ASYNC / AWAIT
// Syntactic sugar over Promises. 

// 1. async function always returns a Promise 
async function greet() {
    return "Hello world";
}

greet().then(console.log);

// 2. await pauses until Promise settles 
function fetchUser(id) {
    return new Promise((resolve)=>
        setTimeout(()=> resolve ({id, name: 'Alice', teamId: 7}))
    ,300)
}

async function getUser() {
    const user = await fetchUser(1);
    console.log('User:', user.name);
    return user;
}

getUser()

// 3. Sequential vs parallel 
function getPost(id){
    return new Promise((res)=>{
        setTimeout(()=> res({id, title: 'Post' + id}))
    },200);
}

// Sequntil: ~600ms total 

async function getPostSequential() {
    const p1 = await getPost(1)
    const p2 = await getPost(2)
    const p3 = await getPost(3)
    return [p1, p2, p3];
}

// Parallel: ~200ms total 
async function getPostParallel() {
    const [p1, p2, p3] = await Promise.all([getPost(1), getPost(2), getPost(3)])
}

console.time('sequential')
getPostSequential().then(()=> console.timeEnd('sequential'))
console.time('parallel')
getPostParallel().then(()=> console.timeEnd('parallel'))
