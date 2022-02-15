new Vue({
    el: '#app',
    data: {
        pos: {
            left: 0,
            top: 0
        },
        show: false
    },
    methods: {
        onleftclick: function(){
            this.show = false;
        },
        onrightclick: function(ev){
            this.pos = {
                left: ev.pageX + 'px',
                top: ev.pageY + 'px'
            };
            this.show = true;
        }
    }
});