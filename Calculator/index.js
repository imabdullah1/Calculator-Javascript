// console.time('Check duration');

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

let arr = Array.from(buttons);
arr.forEach((button) => {
	button.addEventListener('click', (e) => {
		switch (e.target.innerHTML) {
			case '=':
				string = eval(string);
				input.value = string;
				break;
			case 'AC':
				string = '';
				input.value = string;
				break;
			case 'Del':
				string = string.substring(0, string.length - 1);
				input.value = string;
			default:
				string += e.target.innerHTML;
				input.value = string;
				break;
		}
		// if (e.target.innerHTML == '=') {
		// 	string = eval(string);
		// 	input.value = string;
		// } else if (e.target.innerHTML == 'AC') {
		// 	string = '';
		// 	input.value = string;
		// } else if (e.target.innerHTML == 'Del') {
		// 	string = string.substring(0, string.length - 1);
		// 	input.value = string;
		// } else {
		// 	string += e.target.innerHTML;
		// 	input.value = string;
		// }
	});
});

// // alert('click on OK');
// // setTimeout(() => {
// // 	console.log('Checking the time duration');
// // }, 2000);

// // console.timeEnd('Check duration');

// async function loadFile() {
// 	let fileLoaded = false;
// 	if (fileLoaded) {
// 		return 'File is Loaded';
// 	} else {
// 		throw 'File in NOT loaded';
// 	}
// }

// loadFile()
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});
