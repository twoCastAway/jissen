Vue.component('my-input',{
    props: [ `value` ],
    // template: `<label>
    //     名前：
    //     <input type="text" :value="value" @input="$emit('input', $event.target.value)"/>
    // </label>`,
    template: `<label>
        名前：
        <input type="text" v-model="internalValue"/>
    </label>`,
    //v-modelをv-bind:valueとv-onで記述するときは、対応するpropsと$emitを用意する
    computed: {
        internalValue: {
            get(){
                return this.value;
            }
        },
        set(newValue){
            if(this.value !== newValue){
                this.$emit('input', newValue);
            }
        }
    }
});

new Vue({
    el: '#app',
    data: {
        message: ''
    },

})