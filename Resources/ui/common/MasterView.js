//Master View Component Constructor
function MasterView() {
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white'
	});
	
	var AnaMenu=new Array('Genel Bilgiler','Akademik','Duyurular','Hastane','Foto Galeri','Video','İletişim');
var  tableData=[];	
	
	for (var i=1; i<AnaMenu.length; i++){
 
 var row = Ti.UI.createTableViewRow({
    className:'forumEvent', // used to improve table performance
    selectedBackgroundColor:'white',
    rowIndex:i, // custom property, useful for determining the row during events
    height:'80dp'
  });
 ClickEvent(row);
   var imageAvatar = Ti.UI.createImageView({
    image:'ui/common/download.jpeg',
    left:'10dp',
    backgroundColor:'red',
    width:'50dp', height:'50dp',
  });
  row.add(imageAvatar);
 
  var labelUserName = Ti.UI.createLabel({
    color:'#576996',
    font:{fontFamily:'Arial', fontSize:'20dp', fontWeight:'bold'},
    text:AnaMenu[i],
    left:'50dp', 
    textAlign:'center',
    width:'200dp', height: '30dp',
  });
  row.add(labelUserName);
   tableData.push(row);
	var table = Ti.UI.createTableView({
		data:tableData
	});
	self.add(table);
	
	//add behavior
	function ClickEvent(button){
		button.addEventListener('click', function(e) {
		//  alert(button.rowIndex);
		self.fireEvent('itemSelected', {
			name:e.rowData.title,
			price:e.rowData.price
			
		});
	});	
	}
		
	}
	
	return self;
};

module.exports = MasterView;