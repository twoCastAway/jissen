Vue.directive('highlight',function(el, binding, vnode, oldVnode){
    switch(binding.arg){
        case 'bg':
            el.style.backgroundColor = binding.value;
            break;
        case 'border':
            el.style.borderStyle = 'solid';
            el.style.borderWidth = '1px';
            el.style.borderColor = binding.value;
            break;
        case 'text':
            el.style.fontWeight = 'bold';
            el.style.color = binding.value;
            break;
        default:
            throw new Error ('指定のハイライトは使用できません。');
    }
});

new Vue({
    el: '#app',
    data: {
        name: 'name',
        color: 'yellow'
    },
});