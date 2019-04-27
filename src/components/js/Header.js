export default {
  name: 'Headers',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      //判断转跳的地点
      where:2,
      dre_route:["/login","/register","/","/practice","/test"],
    }
  },
  methods:{
    clickRouter:function(num){
      //alert(num);
      this.where=num;
      this.$router.push({path:this.dre_route[num]})
    },
  },
  watch :{
    where: function (value){

    }
  },
  computed:{
      
  },
}