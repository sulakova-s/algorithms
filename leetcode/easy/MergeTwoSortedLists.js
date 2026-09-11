/* 
  You are given the heads of two sorted linked lists list1 and list2.

  Merge the two lists into one sorted list. The list should be made by
  splicing together the nodes of the first two lists.

  Return the head of the merged linked list.
  
  Example 1:
    Input: list1 = [1,2,4], list2 = [1,3,4]
    Output: [1,1,2,3,4,4]
  
  Example 2:
    Input: list1 = [], list2 = []
    Output: []

  Example 3:
    Input: list1 = [], list2 = [0]
    Output: [0]
*/

// Time complexity: O(n)
// Space complexity: O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

  const result = { val: 0, next: null };
  let tail = result;

  while (list1 !== null && list2 !== null) {

    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    }
    else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  while (list1 !== null) {
    tail.next = list1;
    list1 = list1.next;
    tail = tail.next;
  }

  while (list2 !== null) {
    tail.next = list2;
    list2 = list2.next;
    tail = tail.next;
  }

  return result.next;
};


// Test case
const list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } };
const list2 = { val: 1, next: { val: 3, next: { val: 4, next: null } } };

console.log(mergeTwoLists(list1, list2));


