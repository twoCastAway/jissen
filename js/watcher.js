new Vue({
    el: '#app',
    data: {
      name: '',
      upperName: ''
    },
    // created: function() {
    //   this.delayFunc = _.debounce(this.getUpper, 2000)
    // },
    // watch: {
    //   name: function(newValue, oldValue) {
    //     this.delayFunc();
    //   }
    // },    
    created: function(){
      let that = this;
      this.delayFunc = _.debounce(this.getUpper, 2000);
      let unWatch = this.$watch('name', function(newValue, oldValue){
        that.delayFunc();
      });
    },
    methods: {
      getUpper: function(){
        this.upperName = this.name.toUpperCase();
      }
    },
  });