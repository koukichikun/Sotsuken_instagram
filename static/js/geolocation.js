function search() {
    navigator.geolocation.getCurrentPosition(search2);
}

function search2(position) {
    //掲載場所と緯度経度のリスト(本番環境ではリストに4番目の要素としてローマ字URLを入れる)
    let location = [
        ['湯沢市役所', 39.181526961265234, 140.4936009639434],
        ['岩山パークランド', 39.70319319373812, 141.1912470267072],
        ['任天堂本社',34.96986233079344, 135.75674638153814],
        ['モリジョビ',39.704942562957086, 141.1428366418496],
    ];

    const R = Math.PI / 180;
    for (let i = 0; i < location.length; i++) {
        const R = Math.PI / 180;

        //ユーザーの現在地取得
        lat1 = position.coords.latitude *= R;
        lng1 = position.coords.longitude *= R;

        //リストをループで回す
        lat2 = location[i][1];
        lat2 *= R;

        lng2 = location[i][2];
        lng2 *= R;

        result = 6371 * Math.acos(Math.cos(lat1) * Math.cos(lat2) * Math.cos(lng2 - lng1) + Math.sin(lat1) * Math.sin(lat2));

        //5km以内で絞り込み(本番環境ではURL部分にリスト4番目に入れたローマ字を代入)
        if(result <= 5){
            document.getElementById('render').innerHTML += location[i][0] + "<br>\n" +"約"+ Math.round(result * 10) / 10　+"km " + "<a href= https://www.yahoo.co.jp>詳細</a>" + "<br>\n" + "<br>\n";
        }
    }
}