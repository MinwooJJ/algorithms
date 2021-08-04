// node
class Node {
	constructor(element) {
		this.element = element;
		this.next = null;
	}
}

// linked-list
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// adds an element at the end
	add(element) {
		let node = new Node(element);

		let curr;

		if(this.head === null) {
			this.head = node;
		} else {
			curr = this.head;

			// iterate to the end of the list
			while(curr.next) {
				curr = curr.next;
			}

			curr.next = node;
		}

		this.size++;
	}

	// insert element at the position
	insertAt(element, index) {
		if(index < 0 || index > this.size) {
			return console.error("Enter a valid index");
		} else {
			let node = new Node(element);
			let curr, prev;

			curr = this.head;

			// add the element to the head
			if(index === 0) {
				node.next = this.head;
				this.head = node;
			} else {
				curr = this.head;
				let it = 0;

				while(it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// add an element
				node.next = curr;
				prev.next = node;
			}

			this.size++;
		}
	}

	// removes an element from the position
	removeFrom(index) {
		if(index < 0 || index >= this.size) {
			return console.error("Enter a valid index");
		} else {
			let curr, prev, it = 0;
			curr = this.head;
			prev = curr;

			// delete head
			if(index === 0) {
				this.head = curr.next;
			} else {
				while(it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// remove the element
				prev.next = curr.next;
			}

			this.size--;

			// return the removed element
			return curr.element;
		}
	}

	// removes an element from the list
	removeElement(element) {
		let curr = this.head;
		let prev = null;

		while(curr !== null) {
			if(curr.element === element) {
				if(prev === null) {
					this.head = curr.next;
				} else {
					prev.next = curr.next;
				}
				
				this.size--;
				
				return curr.element;
			}

			prev = curr;
			curr = curr.next;
		}

		// Not found the element
		return -1;
	}

	// finds the index of element
	indexOf(element) {
		let count = 0;
		let curr = this.head;

		while(curr !== null) {
			if(curr.element === element) {
				return count;
			}

			count++;
			curr = curr.next;
		}

		return -1;
	}

	// checks if the list is empty
	isEmpty() {
		return this.size === 0;
	}

	// size of list
	sizeOfList() {
		return this.size;
	}

	// prints the list
	printList() {
		let curr = this.head;
		let str = "";

		while(curr) {
			str += curr.element + " ";
			curr = curr.next;
		}

		return str;
	}
}