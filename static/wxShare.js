var wxShare = function(shareConfig) {
    $.getJSON("https://weixin.xueersi.com/Share/conf?shareUrl=" + encodeURIComponent(location.href.split('#')[0]) + "&jsonCallback=?", function(data) {
        if (data.sign) {
            var wxData = data.msg.wxConf;
            wx.config({
                debug: false,
                appId: wxData.appId,
                timestamp: wxData.timeStamp,
                nonceStr: wxData.nonceStr,
                signature: wxData.signature,
                jsApiList: ['onMenuShareTimeline',
                    'onMenuShareAppMessage',
                    'onMenuShareQQ',
                    'onMenuShareWeibo',
                    'onMenuShareQZone'
                ]
            });
            wx.ready(function() {
                wx.onMenuShareTimeline({
                    title: shareConfig.desc,
                    link: location.href.split('#')[0],
                    desc: shareConfig.desc,
                    imgUrl: shareConfig.img,
                    success: function() {

                    },
                    cancel: function() {

                    }
                });
                wx.onMenuShareAppMessage({
                    title: shareConfig.title,
                    link: location.href.split('#')[0],
                    desc: shareConfig.desc,
                    imgUrl: shareConfig.img,
                    success: function() {

                    },
                    cancel: function() {

                    }
                });
                wx.onMenuShareQQ({
                    title: shareConfig.title,
                    link: location.href.split('#')[0],
                    desc: shareConfig.desc,
                    imgUrl: shareConfig.img,
                    success: function() {

                    },
                    cancel: function() {

                    }
                });
            });
        }
    })
}
