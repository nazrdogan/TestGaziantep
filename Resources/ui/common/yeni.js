//Master View Component Constructor
function MasterView1() {
	
		DetailView1 = require('ui/common/yeni');
		
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white'
	});
	
	//some dummy data for our table view
	var tableData = [
		{title:'Apples1', price:'1.25', hasChild:true, color: '#000'},
		{title:'Grapes', price:'1.50', hasChild:true, color: '#000'},
		{title:'Oranges', price:'2.50', hasChild:true, color: '#000'},
		{title:'Bananas', price:'1.50', hasChild:true, color: '#000'},
		{title:'Pears', price:'1.40', hasChild:true, color: '#000'},
		{title:'Kiwis', price:'1.00', hasChild:true, color: '#000'}
	];
	
	var table = Ti.UI.createTableView({
		data:tableData
	});
	self.add(table);
	
	//add behavior
	table.addEventListener('click', function(e) {
	//	alert('Test');
		var detailView1 = new DetailView1();
		var detailContainerWindow1 = Ti.UI.createWindow({
			title:'Product Details22',
			navBarHidden:false,
			backgroundColor:'#ffffff'
		});
		detailContainerWindow1.add(detailView1);
		//detailView.fireEvent('itemSelected',e);
		detailContainerWindow1.open();

	});
	
	return self;
};

module.exports = MasterView1;