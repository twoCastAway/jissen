Vue.component('banner-member',{
    template: `<div class="banner">
        <h3>banner-memberです</h3>
        <p>ここに文章を書く</p>
    </div>`
});
Vue.component('banner-new',{
    template: `<div class="banner">
        <h3>banner-newです</h3>
        <p>ここに文章を書く</p>
    </div>`
});
Vue.component('banner-env',{
    template: `<div class="banner">
        <h3>banner-envです</h3>
        <p>ここに文章を書く</p>
    </div>`
});

// let bannerMember = {
//     template: `<div class="banner">
//         <h3>banner-memberです</h3>
//         <p>ここに文章を書く</p>
//     </div>`
// };
// let bannerNew = {
//     template: `<div class="banner">
//         <h3>banner-newです</h3>
//         <p>ここに文章を書く</p>
//     </div>`
// };
// let bannerEnv = {
//     template: `<div class="banner">
//         <h3>banner-envです</h3>
//         <p>ここに文章を書く</p>
//     </div>`
// };

new Vue({
    el: '#app',
    // components: {
    //     'banner-member' : bannerMember, 
    //     'banner-new' : bannerNew ,
    //     'banner-env' : bannerEnv
    // },
    data: {
        current: 0,
        components: [
            'member', 'new', 'env'
        ]
    },
    //起動時に切り替え用タイマーを準備
    created: function(){
        let that = this;
        this.interval = setInterval(function(){
            that.current = (that.current + 1) % that.components.length;
        },3000);
    },
    //コンポーネント破棄時にタイマーも破棄
    beforeDestory: function(){
        clearInterval(this.interval);
    },
    computed: {
    //CurrentBannerを取得
        currentBanner: function(){
            return 'banner-' + this.components[this.current];
        }
    }
})