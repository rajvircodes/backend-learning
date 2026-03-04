// CLOSURES & SCOPE

// 1. Scope basics
var globalVar = 'I am global';

function outer() {
  var outerVar = 'I am outer';

  function inner() {
    var innerVar = 'I am inner';
    console.log(globalVar);  // accessible
    console.log(outerVar);   // accessible (closure)
    console.log(innerVar);   // accessible
  }

  inner();
  // console.log(innerVar); // ReferenceError - not accessible
}
outer();


// 2. let / const are block-scoped, var is function-scoped
{
  let blockLet = 'block';
  const blockConst = 'block const';
  var funcVar = 'function scoped';
}
// console.log(blockLet);   // ReferenceError
// console.log(blockConst); // ReferenceError
console.log(funcVar);       // works - var leaks out of blocks


// 3. Classic closure problem with var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var loop:', i), 100); // prints 3,3,3
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let loop:', j), 100); // prints 0,1,2
}


// 4. A closure is a function that remembers its outer scope
function makeCounter(start = 0) {
  let count = start;
  return {
    increment() { count++; },
    decrement() { count--; },
    value()     { return count; },
  };
}

const counter = makeCounter(10);
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.value()); // 11


// 5. Closures for data privacy
function createBankAccount(initialBalance) {
  let balance = initialBalance; // private - not accessible from outside

  return {
    deposit(amount)  { balance += amount; },
    withdraw(amount) {
      if (amount > balance) throw new Error('Insufficient funds');
      balance -= amount;
    },
    getBalance()     { return balance; },
  };
}

const account = createBankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance()); // 120
// account.balance is undefined - truly private


// 6. Memoization using closures
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key] !== undefined) {
      console.log('cache hit:', key);
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

const expensiveSquare = memoize((n) => {
  console.log('computing...');
  return n * n;
});

console.log(expensiveSquare(5)); // computing... 25
console.log(expensiveSquare(5)); // cache hit: 25
console.log(expensiveSquare(6)); // computing... 36