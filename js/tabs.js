Vue.component('tab-member', {
    template: `<div class="tab">
        <h3>member</h3>
        <p>ここに文章の入力</p>
    </div>`,
    data: function(){
        return {
            name: ''
        }
    }
});
Vue.component('tab-new', {
    template: `<div class="tab">
        <h3>new</h3>
        <p>ここに文章の入力</p>
    </div>`,
    data: function(){
        return {
            name: ''
        }
    }
});
Vue.component('tab-env', {
    template: `<div class="tab">
        <h3>env</h3>
        <p>ここに文章の入力</p>
    </div>`,
    data: function(){
        return {
            name: ''
        }
    }
});

new Vue({
    el: '#app',
    methods: {
        onclick: function(tab){
            this.current = tab;
        }
    },
    computed: {
        tabNames: function(){
            return Object.keys(this.tabs);
        }
    },
    currentTab: function(){
        return 'tab-' + this.current;
    },
    data: {
        current: 'member',
        tabs: {
            'member' : 'メンバー紹介',
            'new' : '新刊紹介',
            'env' : '環境構築設定',
        }
    }
})