Vue.component('my-loading',{
    props: [ 'type' ],
    render: function(h){
        switch(this.type){
            case 'text':
                return h('p', '...Now Loading...');
            case 'image':
                return h('img', {
                    attrs: {
                        src: 'loading.gif',
                        alt: 'loading'
                    }
                });
            default: 
            console.error('type属性はimage、textいずれかで指定してください');
            return null;
        }
    }
})