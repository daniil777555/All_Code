class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(data){
        const node = new Node(data);

        if(!this.head) this.head = node;

        if(this.tail) this.tail.next = node;

        this.tail = node;
    }

    prepend(data){
        const node = new Node(data, this.head);

        this.head = node;

        if(!this.tail) this.tail = node;
    }

    find(data){
        if(!this.head) return;

        let current = this.head;
        while(current){
            if(current.data === data) return current
            current = current.next;
        }
    }

    insertAfter(previous, data){
        let previousEl = this.find(previous);

        if(!previousEl) return; 

        previousEl.next = new Node(data, previousEl.next);
    }

    toArray(){
        const array = [];
        let current = this.head;
        while(current){
            array.push(current);
            current = current.next;
        }

        return array;
    }

    remove(data){
        if(!this.head){
            return;
        }
      
        while(this.head && this.head.data === data){
            this.head = this.head.next;
        }
      
        let current = this.head;
        while(current.next){
            if(current.next.data === data){
                current.next = current.next.next;
            } else{
                current = current.next;
            }
        }
      
        if (this.tail.data === data) {
            this.tail = current;
        }
    }
}

const list = new LinkedList;
list.append("hello");
list.append("3456");
list.prepend("world");
list.prepend("987")
list.insertAfter("world", "foo");
list.remove("987")
list.remove("3456")
console.log(list);
console.log(list.toArray())