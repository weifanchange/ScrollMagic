$(document).ready(function () {
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // //single-Element
    // new ScrollMagic.Scene({
    //     triggerElement: '.aboutArea',
    //     // duration: 300,
    //     duration: '90%',
    //     triggerHook: 0.9, //0 ~ 1 (觸發起始點)
    // })
    // .setClassToggle('.aboutArea', 'show') //add class to aboutArea
    // .addIndicators({
    //     name: 'fade scene',
    //     colorTrigger: 'black',
    //     indent: 200,
    //     colorStart: '#75C695',
    //     colorEnd: 'pink'
    // }) // this requires a plugin
    // .addTo(controller);

    // // 觸發次數
    // //build a scene
    // new ScrollMagic.Scene({
    //     triggerElement: '.aboutArea',
    //     triggerHook: 0.9, //0 ~ 1 (觸發起始點)
    //     reverse: false	// 反向卷軸不會有效果(只發生一次)
    // })
    // .setClassToggle('.aboutArea', 'fade-in') //add class to aboutArea
    // .addIndicators() // this requires a plugin
    // .addTo(controller);

    // Multi-Element
    $('.addshow').each(function(){
        // console.log(this);
        // build a scence
        new ScrollMagic.Scene({
            triggerElement: this,
            // duration: '300',
            // duration: '90%', // 距離 (設定觸發結束位置)
            triggerHook: 0.5, //0 ~ 1 (觸發起始點)
        })
        .setClassToggle(this,'show') // add class to project01
        .addIndicators() // this requires a plugin
        .addTo(controller);
    });


    // // pin the bannerArea (滑鼠滾動，固定 .bannerArea 背景)
    // new ScrollMagic.Scene({
    //     triggerElement: '.bannerArea',
    //     triggerHook: 0, // 觸發點
    //     duration: '30%' // 約30%解除鎖定(前30%不會顯示東西)
    // })
    // // 加上 pushFollowers: false (30%解除鎖定，70%繼續鎖定)
    // // (前30%第二頁滾動，第一頁背景不動，後70%第一、二頁同時滾動(恢復瀏覽器預設效果))
    // .setPin('.bannerArea',{pushFollowers: false})
    // .addIndicators() // this requires a plugin
    // .addTo(controller);

    // // pin again (滑鼠滾動，固定 .bannerArea 背景)
    // new ScrollMagic.Scene({
    //     triggerElement: '.aboutArea',
    //     triggerHook: 0.4    //約40%十，再次鎖定
    // })
    // .setPin('.bannerArea',{pushFollowers: false})
    // .addIndicators() // this requires a plugin
    // .addTo(controller);


    // // parallax
    // new ScrollMagic.Scene({
    //     triggerElement: '.parallaxBox',
    //     triggerHook: 1,
    //     duration: '100%'
    // })
    // .setTween(TweenMax.from('.parallaxBox .Img', 1, {y: '-50%', ease:Power0.easeNone}))
    // .addIndicators()
    // .addTo(controller);

    // // parallax multi-TweenMax
    // var parallaxTl = new TimelineMax();
    // parallaxTl
    //     .from('.parallaxBox .Txt', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
    //     .from('.parallaxBox .Img', 2, {y: '-50%', ease:Power0.easeNone}, 0);
    // new ScrollMagic.Scene({
    //     triggerElement: '.parallaxBox',
    //     triggerHook: 1,
    //     duration: '100%'
    // })
    // .setTween(parallaxTl)
    // .addIndicators()
    // .addTo(controller);
});


