var options={valueNames:["name","description","category","thumb"]},featureList=new List("externship-sites",options,values),values=[{name:"Manchurian",phone:"0731 4282626",category:"Desi",description:"Riders Republic Cafe -&gt; ADDRESS : Vijay Nagar › 81&#44; Near RR Tyres&#44; Sayaji Club Road&#44; Bhamori&#44; Vijay Nagar&#44; Indore<br>700 for two people (approx.)<br> Credit Cards : accepted",thumb:4.5}];featureList.add({name:"Manchurian00",phone:"0731 4282621",category:"breakfast",description:"Ciders Republic Cafe -&gt; ADDRESS : Vijay Nagar › 81&#44; Near RR Tyres&#44; Sayaji Club Road&#44; Bhamori&#44; Vijay Nagar&#44; Indore<br>700 for two people (approx.)<br> Credit Cards : accepted",thumb:3.5}),$(".search").on("keyup",function(e){if(0===$(".list").children().length)console.log("yes"),$(".not-found").css("display","block");else{console.log("no"),$(".not-found").css("display","none");var r=document.getElementById("search").value;r.length>4&&(document.getElementById("search").blur(),window.scrollBy(0,190))}}),$("#filter-breakfast").click(function(){return featureList.filter(function(e){return"breakfast"==e.values().category?!0:!1}),!1}),$("#filter-lunch").click(function(){return featureList.filter(function(e){return"lunch"==e.values().category?!0:!1}),!1}),$("#filter-dinner").click(function(){return featureList.filter(function(e){return"dinner"==e.values().category?!0:!1}),!1}),$("#filter-Chinese").click(function(){return featureList.filter(function(e){return"Chinese"==e.values().category?!0:!1}),!1}),$("#filter-Geek").click(function(){return featureList.filter(function(e){return"Geek"==e.values().category?!0:!1}),!1}),$("#filter-Lebanese").click(function(){return featureList.filter(function(e){return"Lebanese"==e.values().category?!0:!1}),!1}),$("#filter-Coffee").click(function(){return featureList.filter(function(e){return"Coffee"==e.values().category?!0:!1}),!1}),$("#filter-Desi").click(function(){return featureList.filter(function(e){return"Desi"==e.values().category?!0:!1}),!1}),$("#filter-Italian").click(function(){return featureList.filter(function(e){return"Italian"==e.values().category?!0:!1}),!1}),$("#filter-Mexican").click(function(){return featureList.filter(function(e){return"Mexican"==e.values().category?!0:!1}),!1}),$("#filter-Continental").click(function(){return featureList.filter(function(e){return"Continental"==e.values().category?!0:!1}),!1}),$("#filter-none").click(function(){return featureList.filter(),!1}),"serviceWorker"in navigator&&navigator.serviceWorker.register("service-worker.js").then(function(){console.log("Service Worker Registered")});