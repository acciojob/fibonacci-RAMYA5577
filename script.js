function fibonacci(num) {
// your code here
	int num1 = 0;
	int num2 = 1;
	int ans = 0;
	for(let i=0;i<num;i++){
	ans = num1+num2;
		num1 = num2;
		num2 = ans;
	}
	return ans;
}

module.exports = fibonacci;
