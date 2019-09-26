# ScrollMagic

參考網址
https://www.youtube.com/watch?v=QpedXxC0e5o&list=PLkEZWD8wbltnyDKWAgQfRDP_l0BC-zlU-

官網
https://scrollmagic.io/

Docs
https://scrollmagic.io/docs/index.html

Github
https://github.com/janpaepke/ScrollMagic/tree/development#availability

---

※若要使用 TweenMax 請記得去 TweenMax 官網下載 TweenMax 套件

---

範例1.

<pre>
$(document).ready(function () {
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();
    //single-Element
    new ScrollMagic.Scene({
        triggerElement: '.aboutArea',
        // duration: 300, // 執行範圍
        duration: '90%',  // 執行範圍
        triggerHook: 0.9, // 0 ~ 1 (觸發起始點)
    })
    .setClassToggle('.aboutArea', 'show') //add class to aboutArea
    .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        indent: 200,
        colorStart: '#75C695',
        colorEnd: 'pink'
    }) // this requires a plugin
    .addTo(controller);
});

---

範例2.

<pre>
    $(document).ready(function () {
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();
    // 觸發次數
    //build a scene
    new ScrollMagic.Scene({
        triggerElement: '.aboutArea',
        triggerHook: 0.9, //0 ~ 1 (觸發起始點)
        reverse: false	// 反向卷軸不會有效果(只發生一次)
    })
    .setClassToggle('.aboutArea', 'fade-in') //add class to aboutArea
    .addIndicators() // this requires a plugin
    .addTo(controller);
});
</pre>

---

範例3.

<pre>
    $(document).ready(function () {
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();
    // Multi-Element
    $('.addshow').each(function () {
        // console.log(this);
        // build a scence
        new ScrollMagic.Scene({
            triggerElement: this,
            // duration: '300',
            // duration: '90%', // 距離 (設定觸發結束位置)
            triggerHook: 0.5, //0 ~ 1 (觸發起始點)
        })
            .setClassToggle(this, 'show') // add class to project01
            .addIndicators() // this requires a plugin
            .addTo(controller);
    });
});
</pre>

---

範例4. setPin 的應用

<pre>
    $(document).ready(function () {
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();
    // pin the bannerArea (滑鼠滾動，固定 .bannerArea 背景)
    new ScrollMagic.Scene({
        triggerElement: '.bannerArea',
        triggerHook: 0, // 觸發點
        duration: '30%' // 約30%解除鎖定(前30%不會顯示東西)
    })
    // 加上 pushFollowers: false (30%解除鎖定，70%繼續鎖定)
    // (前30%第二頁滾動，第一頁背景不動，後70%第一、二頁同時滾動(恢復瀏覽器預設效果))
    .setPin('.bannerArea',{pushFollowers: false})
    .addIndicators() // this requires a plugin
    .addTo(controller);
    // pin again (滑鼠滾動，固定 .bannerArea 背景)
    new ScrollMagic.Scene({
        triggerElement: '.aboutArea',
        triggerHook: 0.4    //約40%十，再次鎖定
    })
    .setPin('.bannerArea',{pushFollowers: false})
    .addIndicators() // this requires a plugin
    .addTo(controller);
});
</pre>

---

範例5. parallax

※此處有用到 TweenMax 請記得引入套件

<pre>
    $(document).ready(function () {
    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();
    // parallax
    new ScrollMagic.Scene({
        triggerElement: '.parallaxBox',
        triggerHook: 1,
        duration: '100%'
    })
    .setTween(TweenMax.from('.parallaxBox .Img', 1, {y: '-50%', ease:Power0.easeNone}))
    .addIndicators()
    .addTo(controller);
    // parallax multi-TweenMax
    var parallaxTl = new TimelineMax();
    parallaxTl
        .from('.parallaxBox .Txt', 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
        .from('.parallaxBox .Img', 2, {y: '-50%', ease:Power0.easeNone}, 0);
    new ScrollMagic.Scene({
        triggerElement: '.parallaxBox',
        triggerHook: 1,
        duration: '100%'
    })
    .setTween(parallaxTl)
    .addIndicators()
    .addTo(controller);
});
</pre>

