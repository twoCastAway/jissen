let app = new Vue({
    el: '#app',
    data: {
        message: '皆さん、ohayou！',
        flag: undefined,
        email: 'Tsukasak4991@gmail.com',
        // current: new Date().toLocaleString()
        current: new Date(),
        author: {
            name: '山田'
        }
    },
    // computed: {
    //     // localEmail: function() {
    //     //     return this.email.split('@')[0].toLowerCase();
    //     // },


    //     randomc: function() {
    //         return Math.random();


    //     }
    // },
    // methods: {
    //     // localEmail: function() {
    //     //     return this.email.split('@')[0].toLowerCase();
    //     // }


    //     onClick: function() {
    //         this.current = new Date().toLocaleString();
    //     },
    //     radomm: function() {
    //         return Math.random();


    //     }
    // },


    // created: function(){
    //     let that = this;
    //     this.timer = setInterval(function(){
    //         that.current = new Date();
    //     },1000);
    // },
    // beforeDestroy: function(){
    //     clearInterval(this.timer);
    // }


    created: function(){
        let that = this;
        this.timer = setTimeout(function(){
            that.author = Object.assign({}, that.author, { company: 'WINGSプロジェクト', sex: 'male', age: 18 })
        },3000);
    },
    beforeDestroy: function(){
        clearInterval(this.timer);
    }
  });