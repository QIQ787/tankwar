window.onload = function (  ) {
    var map = document.getElementById('map');
    // 纵向
    for (var i = 0;i<=map.offsetHeight/15;i++){
        var hr = document.createElement('hr');
        hr.style.position = 'absolute';
        hr.style.border = '0px';
        hr.style.height = '1px';
        hr.style.width = map.offsetWidth + 'px';
        hr.style.top = (i-1)*15+'px';
        // hr.style.backgroundColor = '#353533';
        hr.style.marginTop = '15px';
        map.appendChild(hr);
    }
    
    // 横向
    for (var i = 0;i<=map.offsetWidth/15;i++){
        var hr = document.createElement('hr');
        hr.style.position = 'absolute';
        hr.style.border = '0px';
        hr.style.height = map.offsetHeight + 'px';
        hr.style.width = '1px'
        hr.style.left = (i-1)*15+'px';
        hr.style.top = '0px';
        // hr.style.backgroundColor = '#353533';
        hr.style.marginLeft = '15px';
        hr.style.marginTop = '0px';
        map.appendChild(hr);
    }
}