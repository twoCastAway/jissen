Vue.component('my-hello', {
    template: '#my-hello',
    data: function(){
        return {
            name: 'tsukasa'
        };
    }
})

new Vue({
    el: '#app'
})