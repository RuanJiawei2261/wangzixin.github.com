$(document).ready(function(){
	$(".zhibo").hide();
	$(".fanju").hide();
	$(".fenqu").hide();
	$("#l1").click(function(){
		$(".d1-1").css("border-width","0");
		$(".d1-1").css("border-color","#FFFFFF");
		$(this).css("border-width","0 0 4px 0");
		$(this).css("border-color","#FA7399");
		$(".container").hide();
		$(".zhibo").show();
	});
	$("#l2").click(function(){
		$(".d1-1").css("border-width","0");
		$(".d1-1").css("border-color","#FFFFFF");
		$(this).css("border-width","0 0 4px 0");
		$(this).css("border-color","#FA7399");
		$(".container").hide();
		$(".tuijian").show();
	});
	$("#l3").click(function(){
		$(".d1-1").css("border-width","0");
		$(".d1-1").css("border-color","#FFFFFF");
		$(this).css("border-width","0 0 4px 0");
		$(this).css("border-color","#FA7399");
		$(".container").hide();
		$(".fanju").show();
	});
	$("#l4").click(function(){
		$(".d1-1").css("border-width","0");
		$(".d1-1").css("border-color","#FFFFFF");
		$(this).css("border-width","0 0 4px 0");
		$(this).css("border-color","#FA7399");
		$(".container").hide();
		$(".fenqu").show();
	});
});