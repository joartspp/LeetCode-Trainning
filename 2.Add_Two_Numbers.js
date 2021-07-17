/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
*/

const l1 = [2,4,3];
const l2 = [5,6,4];

const addTwoNumbers = function(l1, l2) {
    let output = [];
    let tod = 0;
    for (let i = 0 ; i < l1.length ; i++) {
        if (l1[i]+l2[i] + tod >= 10) {
            output.push(l1[i]+l2[i] + tod - 10)
            for (let j = i+1 ; j <= i+1 ; j++) {
                tod = 1
            }
        } else {
            output.push(l1[i]+l2[i] + tod)
        }
    };
    return output
};

const ans = addTwoNumbers(l1,l2)

console.log(ans);