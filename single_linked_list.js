    class Node{
        constructor(value){
            this.value = value
            this.next = null
        }
    }

    class LinkedList{
        constructor(){
            this.head = null
            this.tail = null
            this.size = 0
        }

        append(value){
            const newNode = new Node(value)
            if(!this.head){
                this.head = newNode
                this.tail = newNode
                this.size++
                return
            }
            this.tail.next = newNode
            this.tail = newNode
            return
            
        }

        prepend(value){
            const newNode = new Node(value)
            if(!this.head){
                this.head = newNode
                this.tail = newNode
            }
            const first = this.head
            this.head = newNode
            this.head.next = first
            this.size++
            return
        }

        remove(value){
            let current = this.head
            if(!this.head){
                return 
            }

        
            if(this.head.value === value){
                
                this.head = this.head.next
                this.size--
                return
            }

                let next
                while(current){
                    next = current.next
                if(next.value === value){   
                        current.next = next.next
                        this.size--
                        return
                }
                    current = current.next
                }
            
        }

        display(){
            let print = ``

            let current = this.head

            while(current){
                print += `${current.value}->`
                current = current.next
            }
            print += null
            console.log(print)
            return
        }

        search(value){
            let current = this.head
            while(current){
                if(current.value === value){
                    return value
                }
                current.next
            }
        }
    }

    const list = new LinkedList()
    list.append(10)
    list.append(20)
    list.append(30)
    list.append(40)
    list.remove(40)
    list.prepend(0)
    list.display()

