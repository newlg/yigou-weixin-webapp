var app = getApp()
Page({
  data:{

  },
  onShow: function(){
    var that = this;
    that.setData({
      addCarts:app.addCarts,
    })
  },
  bindMinus: function(e){
    console.log('--');
    var index = parseInt(e.currentTarget.dataset.index);
        var num = this.data.addCarts[index].num;
        if (num > 1) {
           num --;
        }
        // if(num == 0){  app.addCarts = [];}
        app.addCarts = this.data.addCarts;
        app.addCarts[index].num = num;
        console.log(app.addCarts)

        this.setData({
          addCarts: app.addCarts
        });


  },
  bindPlus: function(e){
    var index = parseInt(e.currentTarget.dataset.index);
        var num = this.data.addCarts[index].num;
        // 自增
         num ++;
        console.log(num);

        app.addCarts = this.data.addCarts;
        app.addCarts[index].num = num;
        console.log(app.addCarts)

        // var much =   parseInt(app.addCarts[index].num) * parseInt(app.addCarts[index].price);
        // console.log(parseInt(this.data.addCarts[index].price))

        money =
        this.setData({
          addCarts: app.addCarts
        });


  }
})
