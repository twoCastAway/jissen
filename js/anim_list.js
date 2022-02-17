new Vue({
    el: '#app',
    data: {
        todo: '',
        items: [
            'A書籍の構成案作成',
            'X記事の著者校正',
            '今月締の請求書作成',
            'WINGSメンバー面接',
        ]
    },
    methods: {
        onadd: function(){
            // console.log(this.items[0]);
            this.items.unshift(this.todo);
            this.todo = '';
        },
        onremove: function(){
            let that = this;
            this.items = this.items.filter(function(value){
                return value !== that.todo;
            });
            this.todo = '';
        },
        onsort: function(){
            this.items.sort();
        }
    }
})