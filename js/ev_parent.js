Vue.component('my-child', {
    data: function(){
        return {
            message: ''
        }
    },
    template: `<p>ko: {{ message }}</p>`,
    mounted: function(){
        this.$root.message = 'koから';
    }
});

new Vue({
    el: '#app',
    data: {
        message: ''
    },
    mounted: function(){
        this.$refs.child.message = 'oyaから';
    }
});