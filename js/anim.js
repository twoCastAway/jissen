new Vue({
    el: '#app',
    data: {
        show: true
    },
    methods: {
        onclick: function(){
            this.show = !this.show;
        }
    },
})