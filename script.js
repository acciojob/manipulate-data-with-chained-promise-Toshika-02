//your JS code here. If required.
const outputInput = documet. getElementById("output")

function newMan(arr){
	return new Promise((res, rej) => {
		setTimeout(()=> {
			const evenNum = arr.filter((num) => num%2 == 0)
			res(evenNum);
		}, 1000);
	})
	 .then((evenNum) => {
		 return new Promise((res, rej) => {
			 setTimepout(() => {
				 const evenMult = evenNum.map((num) => num * 2);
				 outputInput.innerText = evenMult.join('');
				 res(evenMult)
			 }, 1000)
		 })
	 })

	  .catch((err) => {
		  console.error("Error", err)
	  })
}
 newMan(arr)