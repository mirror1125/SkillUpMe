window.onload = function(){
  getJSON();
}

function getJSON() {
	var req = new XMLHttpRequest();						// XMLHttpRequest オブジェクトを生成する
	req.onreadystatechange = function() {				// XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
		if(req.readyState == 4 && req.status == 200){	// サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合

			var data = JSON.parse(req.responseText);	// 取得した JSON ファイルの中身を変数へ格納
      console.log(data);
		}
	};
	req.open("GET", "./json/status.json", false);				// HTTPメソッドとアクセスするサーバーのURLを指定
	req.send(null);										// 実際にサーバーへリクエストを送信
}
