$(document).ready(function(){
	$(".biaoqian").hide();
	$(".dongtai").hide();
	$("#l1").click(function(){
		$(".d1-1").css("border-width","0");
		$(".d1-1").css("border-color","#FFFFFF");
		$(this).css("border-width","0 0 4px 0");
		$(this).css("border-color","#FA7399");
		$(".container").hide();
		$(".zhuifan").show();
	});
	$("#l2").click(function(){
		$(".d1-1").css("border-width","0");
		$(".d1-1").css("border-color","#FFFFFF");
		$(this).css("border-width","0 0 4px 0");
		$(this).css("border-color","#FA7399");
		$(".container").hide();
		$(".dongtai").show();
	});
	$("#l3").click(function(){
		$(".d1-1").css("border-width","0");
		$(".d1-1").css("border-color","#FFFFFF");
		$(this).css("border-width","0 0 4px 0");
		$(this).css("border-color","#FA7399");
		$(".container").hide();
		$(".biaoqian").show();
	});

});

function csubstr(str,len){
 if(str.length>10){
    return str.substring(0,len)+"...";
 }else{
    return str;
 }
}