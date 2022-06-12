window.addEventListener('load', function() {
    // 歌单功能
    let recommendBtn = document.querySelector('.recommend_btn');
    let officialBtn = document.querySelector('.official_btn');
    let tatsujinBtn = document.querySelector('.tatsujin_btn');

    let officialUl = document.querySelector('.officialUl');
    let recommendUl = document.querySelector('.recommendUl');
    let tatsujinUl = document.querySelector('.tatsujinUl');
    recommendBtn.addEventListener('click', function() {
        recommendUl.className = 'recommendUl styek-green imgList';
        officialUl.className = 'officialUl hide imgList';
        tatsujinUl.className = 'tatsujinUl hide imgList';
    });
    officialBtn.addEventListener('click', function() {
        axios.get('http://124.221.249.219:8000/api/recommendations', {})
            .then(function(resStr) {
                let res = resStr.data;
                let data = res.offical;
                for (let i = 0; i < data.length; i++) {
                    let result = data[i];
                    // 创建一个li的节点 并且把li节点添加到ul中
                    // 修改li节点innerHTML
                    let liAdd = document.createElement('li');
                    officialUl.appendChild(liAdd);
                    let lis = `
                                <div class="image official_image">
                                 <img src='${result.cover}'>
                                </div>
                                <div class="txt">
                                    <a href="javascript:;">${result.title}</a>
                                    <p>播放量：${result.views}</p>
                                </div>`;
                    liAdd.innerHTML = lis;
                }
                officialUl.className = 'officialUl imgList';
                recommendUl.className = 'recommendUl hide imgList';
                tatsujinUl.className = 'tatsujinUl hide imgList';
            })
            .catch(function(error) {
                alert('你的网络似乎有些问题~')
            });
    })

    tatsujinBtn.addEventListener('click', function() {
            axios.get('http://124.221.249.219:8000/api/recommendations', {})
                .then(function(resStr) {
                    let res = resStr.data;
                    let data = res.tatsujin;
                    for (let i = 0; i < data.length; i++) {
                        let result = data[i];
                        // 创建一个li的节点 并且把li节点添加到ul中
                        // 修改li节点innerHTML
                        let liAdd = document.createElement('li');
                        tatsujinUl.appendChild(liAdd);
                        let lis = `
                                <div class="image official_image">
                                 <img src='${result.cover}'>
                                </div>
                                <div class="txt">
                                    <a href="javascript:;">${result.title}</a>
                                    <p>播放量：${result.views}</p>
                                </div>`;
                        liAdd.innerHTML = lis;
                    }
                    tatsujinUl.className = 'tatsujinUl imgList';
                    officialUl.className = 'officialUl hide imgList';
                    recommendUl.className = 'recommendUl imgList hide';
                })
                .catch(function(error) {
                    alert('你的网络似乎有些问题~')
                });
        })
        //轮播图
    let oLeft = document.querySelector('#angleLeft');
    let oRight = document.querySelector('#angleRight');
    let oImglist = document.querySelector('.imgList');

    let index = 0;
    oRight.addEventListener('click', function() {
        index++;
        oImglist.style.left = index * (-1200) + "px";
        if (index === 2) {
            // setTimeout(() => {
            index = 0;
            oImglist.style.left = 0;
            // oImglist.style.transition = 'none';
            // }, 40)

        }
        circle = index;
        for (var i = 0; i < allA.length; i++) {
            allA[i].className = 'navs';
        }
        allA[circle].className = 'navs active';
    })
    oLeft.addEventListener('click', function() {
            index--;
            oImglist.style.left = index * 1200 + "px";
            if (index === -1) {
                // setTimeout(() => {
                index = 1;
                oImglist.style.left = index * (-1200) + "px";
                // oImglist.style.transition = 'none';
                // }, 40)
            }
            circle = index;
            for (var i = 0; i < allA.length; i++) {
                allA[i].className = 'navs';
            }
            allA[circle].className = 'navs active';
        })
        //导航点
    var circle = 0;
    var allA = document.getElementById('pointer').getElementsByClassName('navs');
    //设置默认选中的效果
    allA[index].className = 'navs active';

    let select = document.querySelector('.select');
    let btn = document.querySelector('.wspecial');
    btn.addEventListener('mouseover', function() {
        console.log(1);
        select.style.display = 'block';
    })
    btn.addEventListener('mouseout', function() {
        select.style.display = 'none';
    })

    let ipt = document.querySelector('input');
    ipt.addEventListener('focus', function() {
        location.href = 'search.html';
    })
})