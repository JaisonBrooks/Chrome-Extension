function getword(info, tab) {

	if (info.menuItemId === "context_child") {
		chrome.tabs.create({
			url : "https://www.google.com/search?q=" + info.selectionText,
		})
	}
	
	if (typeof info.selectionText === "undefined") {
		alert("selection text is undefined");
	}
}

chrome.contextMenus.onClicked.addListener(getword);
chrome.runtime.onInstalled.addListener(function() {

	var contexts = ["selection", "link", "editable"];
	var context_parent_title = chrome.i18n.getMessage('application_context_parent');
	var context_child_title = chrome.i18n.getMessage('application_context_child');

	chrome.contextMenus.create({
		"title" : context_parent_title,
		"contexts" : contexts,
		"id" : "context_parent"
	});
	chrome.contextMenus.create({
		"title" : context_child_title,
		"parentId" : "context_parent_title",
		"contexts" : contexts,
		"id" : "context_child"
	});
});
/** { Developed by Jaison Brooks } **/