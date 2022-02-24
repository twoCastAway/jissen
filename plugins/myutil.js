//composition API に対応していないから、provide,inject構文が適用できない？
export default{
    // MyUtil : {
        install: function(app, options){
            app.filter('trim',function(value){
                if(typeof value !== 'string'){
                    return value;
                }
                return value.trim();
            },options)

            app.provide('MyUtil',options)
        }
    // }
}

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