# BiorhythmJS
Javascriptでバイオリズムを作るものです。

使い方は簡単：  
1.biorhythm.jsをインポート  
    `<script src="biorhythm.js"></script>`  
2.divを作成  
    `<div id="result"></div>`  
3.JSで誕生日と当日を設定。  
    `//byear,bmonth,bday 誕生日`  
    `//syear,smonth,sday 当日`  
    `Biorhythm.setDate(byear,bmonth,bday,syear,smonth,sday);`  
4.Biorhythm.calc(divID:String,長さ:number,高さ:number)  
    `Biorhythm.calc("result",300,200);`  


※長さ・高さが自由に調整できます。  
※元ソースはここから: https://ao-system.net/javascript/code/1020/  


[Green] Physical 身体  
[Red] Sensitivity(Emotional)感情  
[Blue] Intellectual 知性  

