window.onload = function () {
	viewOnLoad();
}

function viewOnLoad() {
	var req = new XMLHttpRequest();						// XMLHttpRequest オブジェクトを生成する
	req.onreadystatechange = function () {				// XMLHttpRequest オブジェクトの状態が変化した際に呼び出されるイベントハンドラ
		if (req.readyState == 4 && req.status == 200) {	// サーバーからのレスポンスが完了し、かつ、通信が正常に終了した場合

			var profile = JSON.parse(req.responseText);	// 取得した JSON ファイルの中身を変数へ格納

			setStatus(profile);
			setSkill(profile);

		}
	};
	req.open("GET", "./json/status.json", false);		// HTTPメソッドとアクセスするサーバーのURLを指定
	req.send(null);										// 実際にサーバーへリクエストを送信
}

function setStatus(profile) {
	document.getElementById("name").innerHTML = profile["name"];
	document.getElementById("level").innerHTML = profile["level"];
	document.getElementById("hp").innerHTML = profile["hp"];
	document.getElementById("mp").innerHTML = profile["mp"];
	document.getElementById("power").innerHTML = profile["power"];
	document.getElementById("strength").innerHTML = profile["strength"];
	document.getElementById("quickness").innerHTML = profile["quickness"];
	document.getElementById("wisdom").innerHTML = profile["wisdom"];
}

function setSkill(profile) {

}
