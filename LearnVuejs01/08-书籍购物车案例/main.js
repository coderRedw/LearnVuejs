const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        data: '2006-9',
        price: 85.00,
        count: 1
      },{
        id: 2,
        name: '《UNIX编程艺术》',
        data: '2006-2',
        price: 87.00,
        count: 1
      },{
        id: 3,
        name: '《编程珠几》',
        data: '2008-9',
        price: 45.00,
        count: 1
      },{
        id: 1,
        name: '《JavaScript》',
        data: '2001-9',
        price: 89.00,
        count: 1
      },
    ]
  },
  methods: {
    decrement(index) {
      return this.books[index].count--
    },
    increment(index) {
      return this.books[index].count++
    },
    removeBtn(index) {
      return this.books.splice(index,1)
    }
  },
  computed: {
    totolPrice() {
      let result = 0;
      for (let i =0; i < this.books.length;i++) {
        result += this.books[i].price * this.books[i].count
      }
      return result
    }
  },
  filters: {
    showPrice(price) {
      return "￥" +price.toFixed(2)
    }
  }
})