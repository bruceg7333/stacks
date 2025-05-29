/**
 * in an imperative programming language, 
 * we create an empty array doubleArray
 * then go over each item in arr,
 * and push to doubledArray the num multiplied by 2
 */


const arr = [1, 2, 3, 4, 5];
const doubledArray = [];

for (let num of arr) {
	doubledArray.push(num * 2);
}

/**
 * In function paradigm(/ˈpærədaɪm/)
 * we can just use the Javascript map() functional method
 * to create a new array with the doubled values
 * 
 * we're kind of simply saying that doubledArray4FunctionalMethod is
 *  when you take the first array and multiply each element by 2
 * 我们只是简单地说: doubledArray4FunctionalMethod 是 当你取第一个数组并将它的每个成员乘以2
 */

const doubledArray4FunctionalMethod = arr.map(num => num * 2);


