window.addEventListener('load', function() {

    // 创建以当前title为属性的table 点击这个属性名,则展示当前的
    let rankingTitleUl = document.querySelector('.ranking-left');
    let divAdd = document.querySelector('.ranking-right').querySelector('div');
    axios.get('http://124.221.249.219:8000/api/ranking', {}).then(function(resStr) {
        let res = resStr.data;
        for (let i = 0; i < res.length; i++) {
            let result = res[i];
            let liAdd = document.createElement('li');
            rankingTitleUl.appendChild(liAdd);
            liAdd.innerHTML = `<a href="#">${result.title}</a>`;
            console.log(result.top3[0].title);
            for (let j = 0; i < 3; j++) {
                var tbody = document.createElement('tbody');
                table.appendChild(tbody);

                tbody.innerHTML = `<tr>
                <td rowspan="3"><img src="${result.cover}"></td>
                <td rowspan="3">${result.views}</td>
                <td rowspan="3">${result.update_frequence}</td>
                <td>1</td>
                <td>${result.top3.title}</td>
                <td>${result.top3.artist}</td>
            </tr>
            <tr>
            <td>2</td>
            <td>${result.top3.title}</td>
            <td>${result.top3.artist}</td>
            </tr>
            <tr>
            <td>3</td>
            <td>${result.top3.title}</td>
            <td>${result.top3.artist}</td>
            </tr>`;
            }

        }
    }).catch(function(error) {
        alert('你的网络似乎有些问题~')
    });
})