var missingNumber = function(a) {
    let n=a.length;
  	let total = Math.floor((n + 1) * (n + 2) / 2);
		for (let i = 0; i < n; i++)
			total -= a[i];
		return total;
};