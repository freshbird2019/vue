const imgs = [];
export default{
	name: 'step2',
	data(){
		return{
			avatar:require('../img/img.jpg'),
			length:0,
      imgs:[],
			currentPage : 1 ,
      imgs_list : [] ,
  		totalpage : 0
		};
	},
	mounted (){
    this.imgs = JSON.parse(localStorage.getItem('imgs'));
    this.length=this.imgs.length;
    this.initUsers();
    this.inittotalpage ();
    //alert(this.totalpage);
  	},
	methods:{
		/*  */
			// 初始化渲染的数组
    initUsers : function(){
       this.imgs_list = this.imgs.slice(0,3);
    },
    // 初始化总页数
    inittotalpage  : function(){
      this.totalpage = this.imgs.length/3;
    },
   // 改变页面 这时候数据也会改变
    handleCurrentChange (val) {
    	//alert(val);
      this.currentPage = val
      this.imgs_list = this.imgs.slice((this.currentPage-1)*3,this.currentPage*3);
    },

		/*    */
		changeImage(e) {
                this.files = e.target.files[0]
                var reader = new FileReader()
                var that = this
                reader.readAsDataURL(this.files)
                reader.onload = function(e) {
                    that.avatar=this.result;
                    that.imgs.push({img:that.avatar,name:"aa",radio:false});
                	that.length=that.imgs.length;
                }
            },
        clear_all(){
        	this.imgs=[];
        	this.length=0;
        },
        //删除图片
      delete_img (val) {
        this.imgs.splice(val,1) ;
        this.length=this.imgs.length;
      },
	},
	 watch:{
            'length':function(val){
              localStorage.setItem('imgs', JSON.stringify(this.imgs));
            	this.initUsers();
            	this.inittotalpage();
            }
        }
}