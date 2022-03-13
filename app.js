/*
Problem  -  ১. বাজেট ক্যালকুলেটর 
আপনাকে মিনিমাম তিনটি ভ্যালু একটি ফাঙ্কশন এ রিসিভ করতে হবে | নিশ্চিত হতে হবে তিনটি ভ্যালু এ নম্বর । যদি কেউ স্ট্রিং অথবা অন্য যেকোনো ডাটা টাইপ পাস করলে একটি এরর শো করবে । অন্যতায় আউটপুট দেখাবে । 
মূল কাজটা হচ্চে যদি কেউ দোকান থেকে এই ৩ টি প্রোডাক্ট কিনে তাহলে টোটাল প্রাইস দেখাবে । 
তিনটি প্রোডাক্ট এর দাম : 
১.  Computer: 1000
২. Watch : 260
৩.Coffee: 50
*/
function budgetCal(p1, p2, p3) {
  let total;
  if (
    typeof p1 === "number" &&
    typeof p2 === "number" &&
    typeof p3 === "number"
  ) {
    total = p1 + p2 + p3;
  } else {
    total = "It's not a number";
  }
  return total;
}

/*
Problem - ২. প্রোডাক্ট সার্চ 
একটি এরে তে অবজেক্ট আকারে কিছু প্রোডাক্ট তাকবে । আপনাকে এই এরে থেকে সার্চ করা প্রোডাক্ট খুঁজে বের করতে হবে । যদি প্রোডাক্ট টি খুঁজে পাওয়া যায় তাহলে প্রোডাক্ট দেখাবে অন্যতায় Product Not Found বলে একটি এরর শো করবে ।

*/
var products = [
  {
    id: 1,
    title: "Laptop",
    price: 567,
    description:
      "Laptop Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper",
  },
  {
    id: 2,
    title: "Mobile",
    price: 367,
    description:
      "Mobile Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper",
  },
  {
    id: 3,
    title: "Watch",
    price: 180,
    description:
      "Watch Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper",
  },
  {
    id: 4,
    title: "Coffee",
    price: 40,
    description:
      "Coffee Lorem ipsum dolor sit amet consectetur adipiscing elit, magna etiam fermentum accumsan rhoncus ullamcorper",
  },
];

let y = "";
for (let i = 0; i < products.length; i++) {
  if (i.title === "Laptop") {
    y = "Okay";
  } else {
    y = "Not";
  }
}
console.log(y);
// let isProduct = products.find((n) => n.title === "Laptop");

//console.log(
//`Id : ${products[i].id} \nTitle : ${products[i].title} \nPrice : ${products[i].price}`
//);
// console.log(isProduct);

/*
Problem - ৩. হিডেন কোটিপতি ক্যালকুলেটর 
এইটা হচ্চে আপনার ক্লাশ ফাইভ এ আপনি কত টাকা ইনকাম করেছেন , আজকে এর হিসাব দিতে হবে । 
মনে করেন আপনি ক্লাস ফাইভ এ পড়ার সময় আপনাকে রেগুলার আপনার আম্মু ১০ টাকা করে খাওয়ার জন্য দিতেন কিন্তু আপনি এই টাকা না খেয়ে জমা করে রাখছেন । এখন আপনাকে এর হিসাব বের করতে হবে আপনি কত টাকা জমা করেছেন | আপনি একটি ফাঙ্কশন এ একটি সাল রিসিভ করবেন এবং আউট পুট আপনার পুরো সাল আপনি কত টাকা জমা করছেন এর 
একটা হিসাব দিবে  |
*/
function hiddenKotePote(year) {
  let total;
  if (year.toString().length === 4) {
    if (year) {
      //three conditions to find out the leap year
      if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
        total = "Your Total Amount is : " + 366 * 10;
      } else {
        total = "Your Total Amount is : " + 365 * 10;
      }
    } else {
      total = "Please Give me a Year";
    }
  } else {
    total = "Please Entar a Valid Year";
  }
  return total;
}
