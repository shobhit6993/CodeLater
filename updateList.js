var DEBUG=true;
$(document).ready( function() 
{
	console.log($('.lst').find('img'));
	chrome.storage.sync.get( null, function (items)
	{
		$(".lst").html("");
		$(".lst").append("<table></table>")

		var i=0;
		for (var k in items)
		{
			var id,href,title;
			id = items[k]['id'];
			title = items[k]['title'];
			href= items[k]['href'];
			var tableentry = $(".lst > table");
			console.log(tableentry);
			tableentry.append("<tr><td><a target='_blank' href='" + href + "' >" + id+ "</a></td><td><a target='_blank' href='" + href + "' >" + title+ "</a></td><td><a href='#'><img src='delete.png' alt='DELETE' id='picture' /></a></td></tr>");
			i++;
		}
		if(i==0)
		{
			$(".lst").html("");
			$(".lst").append("Keep Calm and CODE more!")
		}
		$('.lst').on('click', 'img' ,function(event)
		{
			var delRow=$(this).parent().parent().parent().eq(0);
			var url=delRow.children("td").eq(0).find("a").attr("href");
			chrome.storage.sync.remove(url);
			delRow.remove();
		 });

	});
	
});