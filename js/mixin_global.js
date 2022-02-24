Vue.mixin({
    created: function(){
        let { title, keyword, description } = this.$data;
        if(title){
            document.title = title;
        }
        if(keyword){
            document.querySelector("meta[name='keyword']").setAttribute('content', keyword);
        }
        if(description){
            document.querySelector("meta[name='description']").setAttribute('content', description);
        }
    }
});

Vue.component('my-mix',{
    data: function(){
        return {
            title: 'ミックスイン',
            keyword: 'mixin, component',
            description: '説明文を入れます',
        }
    },
    template: `<div>Global Mixin</div>`
});

new Vue({
    el: '#app'
});