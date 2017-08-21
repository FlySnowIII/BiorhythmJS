# BiorhythmJS
Javascriptでバイオリズムを作るものです。

使い方は簡単：  
1.biorhythm.jsをインポート  
`$hoge = 1`
<script src="biorhythm.js"></script>  
2.divを作成  
`$hoge = 1`
<div id="result"></div>  
3.JSで誕生日と表示スタート日を設定。  
`$hoge = 3`
//byear,bmonth,bday 誕生日  
//syear,smonth,sday 表示スタート日  
Biorhythm.setDate(byear,bmonth,bday,syear,smonth,sday);  
4.Biorhythm.calc(divID:String,長さ:number)  
`$hoge = 1`  
Biorhythm.calc('result',300);  


※長さは自由に調整できますが、高さは200で固定。  
※元ソースはここから: https://ao-system.net/javascript/code/1020/