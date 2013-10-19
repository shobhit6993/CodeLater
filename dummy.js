var DEBUG=false;
(function(){
	chrome.storage.sync.clear();
	obj={};
	var items={};
	var item={};
	items['id']="N1";
	items['title']="Treasure Hunting";
	items['href']="http://www.codechef.com/problems/N1";
	obj[items['href']]=items;

	if(DEBUG) console.log(items);
	item['id']="SUPERPLN";
	item['title']="SUper Plane";
	item['href']="http://www.codechef.com/problems/SUPERPLN";
	obj[item['href']]=item;
	
	if(DEBUG) console.log(item);

	chrome.storage.sync.set(obj);
	chrome.storage.sync.get( null, function (it){});

})();
