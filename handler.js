var DEBUG=true;
(function()
{
	var url=window.location.href;
	if(/http:\/\/www.codechef.com\/[^\/]*\/problems\/.*/.test(url) 
		|| /http:\/\/www.codechef.com\/problems\/.*/.test(url)) 
	{
		var buttons = $(".button-list");
		var title= $("table.pagetitle-prob").find("td").eq(0).find("h1").text();
		// if(DEBUG) console.log(title);
		var id=$("table.pagetitle-prob").find("td").eq(0).find("p").text().split(" ")[2];
		// if(DEBUG) console.log(id);
		add = "<li > <a href='#' title='" + title + "' id='" + id + "' hreff='" + url + "' class='codeLater toDoAllowed' >CodeLater</a></li>"
		// if(DEBUG) console.log(add);
		$("table.pagetitle-prob").find("td").eq(0).attr("width", "40%");
		buttons.append(add);

		$(document).on("click", ".codeLater", function(event)
		{
			// console.log("sho");
			var info=$(".button-list").find("li").find("a.codeLater");
			if (info.hasClass("toDoAllowed")) 
			{
			// console.log("sho");
				var obj={};
				var items={};
				items['id']=info.attr('id');
				items['title']=info.attr('title');
				items['href']=info.attr('hreff');
				obj[items['href']]=items;
				info.css("text-decoration","line-through");
				info.removeClass("toDoAllowed");
				chrome.storage.sync.set(obj);
				console.log(obj);
			};
			
		});
	}
})();