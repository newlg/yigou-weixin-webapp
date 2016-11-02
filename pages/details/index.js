var app = getApp()
Page({
  data: {
    toastHidden:true,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 2000,
    tab: 'nul'

  },
  onShow:function(){
    var that =this;
    that.setData({
      hotInfos: app.hotInfos,
    })
    console.log(app.hotInfos.image)
  },
  addSpu: function(event){

    this.setData({toastHidden:false})
    var temp = {id:'',title:'',hotImage:'',price:'',des:'',image:[],norms:'',mes:'',num:''};
    temp.id = event.currentTarget.id;
    temp.title = event.currentTarget.dataset.title;
    temp.hotImage = event.currentTarget.dataset.hotImage;

    temp.price =  event.currentTarget.dataset.price;
    temp.des = event.currentTarget.dataset.des;
    temp.test = event.currentTarget.dataset.test;
    temp.test = event.currentTarget.dataset.test;
    temp.norms = event.currentTarget.dataset.norms;
    temp.mes = event.currentTarget.dataset.mes;
    temp.num = event.currentTarget.dataset.num;


    temp.image = event.currentTarget.dataset.image;


    app.addCarts.push(temp);
      console.log(temp);


  },
  toastChange: function(){
    this.setData({toastHidden:true})
  }

})
