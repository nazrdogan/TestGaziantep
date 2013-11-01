function DetailView() {
	
	
	var YeniMaster=require('ui/common/yeni');
	var self = Ti.UI.createView();
	var yeniView=new YeniMaster();

	
	self.addEventListener('itemSelected', function(e) {
		
	});
	 self.add(yeniView);
	
	return self;
};

module.exports = DetailView;
