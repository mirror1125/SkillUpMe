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
	var tbody_skill = document.getElementById("skill");
	tbody_skill.innerHTML = null;

	for (var i = 0; i < profile["skill"].length; i++) {
		var tr_skill = document.createElement("tr");
		var td_name = document.createElement("td");

		td_name.innerText = profile["skill"][i]["name"] + "　レベル：";

		var td_level = document.createElement("td");
		var level = Math.floor(Math.sqrt(profile["skill"][i]["exp"]))
		td_level.innerText = level;

		var td_toNext = document.createElement("td");
		td_toNext.innerText = "NEXT：" + (Math.pow(level + 1, 2) - profile["skill"][i]["exp"]) + "時間";
		tr_skill.append(td_name);
		tr_skill.append(td_level);
		tr_skill.append(td_toNext);
		tbody_skill.append(tr_skill);
	}
}
