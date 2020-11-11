// Main context menu
chrome.contextMenus.create({
    "id": "parentMenu",
    "title": "Bookmark this page",
    "onclick": addBookmark
})

/**
 * 
 */
function addBookmark() {
    // create root folder
    // createRootFolder()
    // Get active tab
    chrome.tabs.query({
        active: true
    }, (tabs) => {
        var curTab = tabs[0]
        // Create folder
        chrome.bookmarks.create({
            'parentId': this.parentId,
            'title': getName(curTab.url),
            'url': curTab.url
        });
    });
}

/**
 * Create root folder
 */
function createRootFolder() {
    // Create folder
    chrome.bookmarks.create({
        'parentId': '1',
        'title': 'Test Folder'
    })
}

/**
 * Get bookmark name
 */
function getName(url) {
    return prompt("Enter bookmark name") || url;
}