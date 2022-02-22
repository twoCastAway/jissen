Vue.directive('highlight', function(el, binding, vnode, oldVnode){
    if(binding.value === binding.oldValue){ return };
    console.log(binding.value);
    el.style.backgroundColor = binding.value;
});
//     {
//     bind: function(el, binding, vnode, oldVnode){
//     el.style.backgroundColor = binding.value;
//     },
// update: function(el, binding, vnode, oldVnode){
//     el.style.backgroundColor = binding.value;
//     },
//     }


new Vue({
    el: '#app',
    data: {
        name: 'name',
        color: 'yellow'
    },
    // directives: {
    //     highlight: {
    //         bind: function(el, binding, vnode, oldVnode){
    //             el.style.backgroundColor = binding.value;
    //         },
    //         update: function(el, binding, vnode, oldVnode){
    //             el.style.backgroundColor = binding.value;
    //         },
    //     }
    // }
});