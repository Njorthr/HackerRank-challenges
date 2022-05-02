/*
Two friends like to pool their money and go to the ice cream parlor. They always choose two distinct flavors and they spend all of their money.

Given a list of prices for the flavors of ice cream, select the two that will cost all of the money they have.

Example.  

The two flavors that cost  and  meet the criteria. Using -based indexing, they are at indices  and .

Function Description

Complete the icecreamParlor function in the editor below.

icecreamParlor has the following parameter(s):

int m: the amount of money they have to spend
int cost[n]: the cost of each flavor of ice cream
Returns

int[2]: the indices of the prices of the two flavors they buy, sorted ascending
*/
/*
 * Complete the 'icecreamParlor' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER m being the money
 *  2. INTEGER_ARRAY arr bein the flavors array
*/
function icecreamParlor(m, arr) {
    // Write your code here  
    const result = [];
    let num; 
    for(let i = 0; i < arr.length ; i++) {
        num = m - arr[i];
        if(arr.includes(num)) {
            let num2 = arr.indexOf(num)
            if(num2 != i ) {
                execute(num2, i, result);
                return result;
            }
        }
        
    }

}
function execute(num2, i , result) {
    
            result.push(num2 + 1 )
            result.push(i + 1)
            result.sort(function(a,b){return a - b});
            return result;
    
}