window.addEventListener('load', function() {
    //热门搜索
    let hotearchUl = document.querySelector('.hot-search');
    axios.get('http://124.221.249.219:8000/api/hot', {})
        .then(function(resStr) {
            let res = resStr.data;
            for (let i = 0; i < res.length; i++) {
                let result = res[i];
                // 创建一个li的节点 并且把li节点添加到ul中
                // 修改li节点innerHTML
                let liAdd = document.createElement('li');
                hotearchUl.appendChild(liAdd);
                let lis = `<a href="javascipt:;">${result}</a>`;
                liAdd.innerHTML = lis;
            }
        })
        .catch(function(error) {
            console.log(error);
            alert('你的网络似乎有些问题~')
        });

    //搜索展示
    var tbody = document.querySelector('tbody');

    //搜索历史
    let searchInput = document.querySelector('.search_input');
    let searchBtn = document.querySelector('.search_btn');
    let searchUl = document.querySelector('.old_text');
    searchBtn.onclick = function() {
        var li = document.createElement('li');
        if (searchInput.value == '') {
            alert('您没有输入内容');
            return false;
        } else {
            axios.get('http://124.221.249.219:8000/api/search', {
                    params: {
                        keyword: searchInput.value
                    },
                }).then(function(resStr) {
                    let res = resStr.data;
                    for (let i = 0; i < res.length; i++) {
                        let result = res[i];
                        //在tbody中创建行
                        var tr = document.createElement('tr');
                        tr.innerHTML = `<td>${result.title}</td>
                                <td>${result.artist}</td>`;
                        tbody.appendChild(tr);
                    }
                })
                .catch(function(error) {
                    alert('你的网络似乎有些问题~')
                });

            // li.innerHTML = searchInput.value + '<i class="iconfont icon-shanchu2 delete">';
            li.innerHTML = searchInput.value + '<a href="javascript:;" class="delete"><i class="iconfont icon-shanchu2"></a>';
            console.log();
            searchUl.insertBefore(li, searchUl.children[1]); // 把最新的发布放到最前面
            searchInput.value = '';

            //注册删除点击事件
            let removeBtn = document.querySelectorAll('.delete');
            for (var i = 0; i < removeBtn.length; i++) {
                removeBtn[i].addEventListener('click', function() {
                    // alert('xuanz~');
                    searchUl.removeChild(this.parentNode);
                })
            }
            //鼠标经过事件
            let lis = searchUl.querySelectorAll('li');
            for (var i = 1; i < lis.length; i++) {
                lis[i].addEventListener('mouseover', function() {
                    this.className = 'change';
                })
                lis[i].addEventListener('mouseout', function() {
                    this.className = '';
                })
            }
        }


    }

    searchInput.addEventListener('focus', function() {
        searchUl.className = 'old_text';
    })
    searchInput.addEventListener('blur', function() {
        searchUl.className = 'old_text hide';
    })


    //     /*   //搜索展示
    //     var tbody = document.querySelector('tbody');
    //     searchBtn.onclick = function() {
    //         axios.get('http://124.221.249.219:8000/api/search', {
    //                 params: {
    //                     keyword: searchInput.value
    //                 },
    //             }).then(function(resStr) {
    //                 let res = resStr.data;
    //                 for (let i = 0; i < res.length; i++) {
    //                     let result = res[i];
    //                     //在tbody中创建行
    //                     var tr = document.createElement('tr');
    //                     tr.innerHTML = `<td>${result.title}</td>
    //                     <td>${result.artist}</td>`;
    //                     tbody.appendChild(tr);
    //                 }
    //             })
    //             .catch(function(error) {
    //                 alert('你的网络似乎有些问题~')
    //             });
    //     }
    //  */
})