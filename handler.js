var DEBUG=true;
(function()
{
	var url=window.location.href;
	if(/http:\/\/www.codechef.com\/[^\/]*\/problems\/.*/.test(url) 
		|| /http:\/\/www.codechef.com\/problems\/.*/.test(url)) 
	{
		
		var buttons = $(".button-list");
		var title= $("table.pagetitle-prob").find("td").eq(0).find("h1").text();
		var id=$("table.pagetitle-prob").find("td").eq(0).find("p").text().split(" ")[2];
		add = "<li > <a href='#' title='" + title + "' id='" + id + "' hreff='" + url.replace('#','') + "' class='codeLater toDoAllowed' >CodeLater</a></li>"
		$("table.pagetitle-prob").find("td").eq(0).attr("width", "40%");
		buttons.append(add);

		//check if prob already added. if yes, then strike the CodeLater button.
		chrome.storage.sync.get( null, function (items)
		{
			for(k in items)
			{
				if(items[k]['href'].replace('#','')===url.replace('#',''))
				{ 
					console.log("shobhit"); 
					console.log("mainak");
					var info=$(".button-list").find("li").find("a.codeLater");
					info.css("text-decoration","line-through");
					info.removeClass("toDoAllowed");
					return;
				}
			}
		});

		$(document).on("click", ".codeLater", function(event)
		{
			var info=$(".button-list").find("li").find("a.codeLater");
			if (info.hasClass("toDoAllowed")) 
			{
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
