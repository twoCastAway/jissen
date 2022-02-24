//　サンプルコードの都合上、ローカルにプラグインを登録している？
// let MyUtil = {
//     install: function(app, options){
//         app.filter('trim',function(value){
//             if(typeof value !== 'string'){
//                 return value;
//             }
//             return value.trim();
//         })
//     }
// }


Vue.use(MyUtil);

new Vue({
    el: '#app',
    data: {
        str: '       WINGS Project        '        
    }
});