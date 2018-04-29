$(document).ready(function() {
	var castData=new Array();
	castData.characterId=new Array();
	castData.peopleId=new Array();
	$("div.container-fluid.p-3 div.c-card table.table.table-hover tbody tr td a[href*='characters']").each(function(i) {
		var href = $(this).attr('href');
		href=href.replace('/db/characters/','');
		href=href.replace('/edit','');
		castData['characterId'].push(href);
	});
	$("div.container-fluid.p-3 div.c-card table.table.table-hover tbody tr td a[href*='people']").each(function(i) {
		var href = $(this).attr('href');
		href=href.replace('/db/people/','');
		href=href.replace('/edit','');
		castData['peopleId'].push(href);
	});
	var finalstr='';
	for(var i=0;i<castData.characterId.length;i++){
	  finalstr=finalstr+castData.characterId[i]+","+castData.peopleId[i]+"\n";
	}
	console.log(finalstr);
})