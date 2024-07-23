function fibonacci(num) {
// your code here
	let num1 = 0;
	let num2 = 1;
	let ans = 0;
	for(let i=2;i<=num;i++){
	ans = num1+num2;
		num1 = num2;
		num2 = ans;
	}
	return ans;
}

module.exports = fibonacci;
