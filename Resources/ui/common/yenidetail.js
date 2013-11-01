function DetailView1() {
	
	
	var YeniMaster=require('ui/common/yeni');
	var self = Ti.UI.createView();
	var yeniView=new YeniMaster();
	var lbl = Ti.UI.createLabel({
		text:'Please select an item',
		height:'auto',
		width:'auto',
		color:'#000'
	});
	self.add(lbl);
	
	self.addEventListener('itemSelected', function(e) {
	//	lbl.text = e.name+': $'+e.price;
	});
	 self.add(yeniView);
	
	return self;
};

module.exports = DetailView1;
