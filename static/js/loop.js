
function search() {
    let location = [
        ['湯沢市役所', "ranking"],
        ['岩山パークランド', "ranking"],
    ]
    for (let i = 0; i < location.length; i++) 
        lat2 = location[i][0]
        lng2 = location[i][1]
        //document.getElementById('render').innerHTML += location[i][0];
		//document.getElementById('render').innerHTML += location[i][0] + "<a href= https://www.yahoo.co.jp>詳細</a>";
		document.getElementById('render').innerHTML += location[i][0] + ("<a href= %s>詳細</a>","https://www.yahoo.co.jp");
		//document.write(location[i][0])
    }
