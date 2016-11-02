//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    mySwiperImage:[
      'http://img11.yiguoimg.com/e/ad/2016/161028/585749450339623260_800x400.jpg',
      'http://img11.yiguoimg.com/e/ad/2016/160927/585749449690947899_800x400.jpg',
      'http://img14.yiguoimg.com/e/ad/2016/161010/585749449889390922_800x400.jpg',
      'http://img09.yiguoimg.com/e/ad/2016/160825/585749448986042649_800x400.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 2000,
    tab: 'nul',
    homeNavArr:[
  {
    name:'新品超市',
    homeNavImg: 'http://m.360buyimg.com/mobilecms/s80x80_jfs/t3448/85/270623840/17721/9e74be55/5806336cNf8e2054d.png',
    url:'dishes'
  },
  {
    name:'订单查询',
    homeNavImg: 'http://m.360buyimg.com/mobilecms/s80x80_jfs/t3199/169/1818813995/12570/62402b0d/57d54364Needc47cd.png',
    url:'take',
    isSplot:true
  },
  {
    name:'推荐鲜选',
    homeNavImg: 'http://m.360buyimg.com/mobilecms/s80x80_jfs/t3079/222/1812395993/14681/29321e2c/57d54122N700d9c1b.png',
    url:'out'
  },
  {
    name:'我的关注',
    homeNavImg: 'http://m.360buyimg.com/mobilecms/s80x80_jfs/t3211/295/1824792746/12749/a74e2524/57d543ebN25337ef2.png',
    url:'bill'
  },
],
    newKindArr: [
   {newKindImage: 'http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg'},
   {newKindImage: 'http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg'},
   {newKindImage: 'http://img12.yiguoimg.com/e/ad/2016/161010/585749449889227082_260x320.jpg'},

],
  costArr: [
    {costImage: 'http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg'},
    {costImage: 'http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg'},
    {costImage: 'http://img12.yiguoimg.com/e/ad/2016/161010/585749449889227082_260x320.jpg'},

],
   hotArr:[
     { id: '101',
     hotImage: 'http://img10.yiguoimg.com/e/ad/2016/161008/585749449862226248_778x303.jpg',
     title: '三都港无公害黄花鱼550g',
     spuImage :'http://img05.yiguoimg.com/e/web/160223/00902/101057/add_cart.png',
     price: '10',
     des: '这个是对三都港无公害黄花鱼的表述，相信我们会爱上他的，好吃不贵，经济实惠，大家速速动起手指选购吧',
     mes: '海口',
     num: '3',
     image:[
        'http://img10.yiguoimg.com/e/ad/2016/161008/585749449862226248_778x303.jpg',
        'http://img14.yiguoimg.com/e/ad/2016/160929/585749449767461181_778x303.jpg',
        'http://img10.yiguoimg.com/e/ad/2016/161008/585749449862226248_778x303.jpg'
     ],
     norms: '斤/份'

   },
   {
  id: '201',
  hotImage: 'http://img14.yiguoimg.com/e/ad/2016/160929/585749449767461181_778x303.jpg',
  title: '智利蓝莓2盒（约125g/盒）',
  spuImage :'http://img05.yiguoimg.com/e/web/160223/00902/101057/add_cart.png',
  price: '10',
  norms: '斤/份',
  mes: '广州',
  num: '1',
  des: '这个是对三都港无公害黄花鱼的表述，相信我们会爱上他的，好吃不贵，经济实惠，大家速速动起手指选购吧'

  },
  {
  id: '301',
  hotImage: 'http://img12.yiguoimg.com/e/ad/2016/161009/585749449871663433_778x303.jpg',
  title: '澳大利亚脐橙12个约160g/个',
  spuImage :'http://img05.yiguoimg.com/e/web/160223/00902/101057/add_cart.png',
  price: '10',
  norms: '斤/盒',
  mes: '深圳',
  num: '1',
  des: '这个是对三都港无公害黄花鱼的表述，相信我们会爱上他的，好吃不贵，经济实惠，大家速速动起手指选购吧'
  },
  {
    id: '401',
    hotImage: 'http://img13.yiguoimg.com/e/ad/2016/160929/585749449767756093_778x303.jpg',
   title: '精选兰州百合150g(北京)',
   spuImage :'http://img05.yiguoimg.com/e/web/160223/00902/101057/add_cart.png',
   price: '20',
    norms: '斤/份',
    mes: '上海',
    num: '1',
   des: '这个是对三都港无公害黄花鱼的表述，相信我们会爱上他的，好吃不贵，经济实惠，大家速速动起手指选购吧'

 },
 {
  id: '501',
  hotImage: 'http://img09.yiguoimg.com/e/ad/2016/160906/585749449323454758_778x303.jpg',
  title: '云南蒙自石榴4个225g/个',
  spuImage :'http://img05.yiguoimg.com/e/web/160223/00902/101057/add_cart.png',
  price: '20',
   norms: '斤/袋',
   mes: '北京',
   num: '1',
  des: '这个是对三都港无公害黄花鱼的表述，相信我们会爱上他的，好吃不贵，经济实惠，大家速速动起手指选购吧'
},
   ]


 },
    toDetails:function(event){

      app.hotInfos=[];
      var temp = {id:'',title:'',hotImage:'',price:'',des:'',image:[],norms:'',mes:'',num:''};
      var images = new Array;
      temp.id = event.currentTarget.id;
      temp.title = event.currentTarget.dataset.title;
      temp.hotImage = event.currentTarget.dataset.hotImage;

      temp.price =  event.currentTarget.dataset.price;
      temp.des = event.currentTarget.dataset.des;
      temp.norms = event.currentTarget.dataset.norms;
      temp.mes = event.currentTarget.dataset.mes;
      temp.num = event.currentTarget.dataset.num;


      temp.image = event.currentTarget.dataset.image;


      app.hotInfos.push(temp);
      // console.log(temp.image)
      console.log(images);

      // console.log(app.hotInfos);


    }
})
