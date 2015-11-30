function RemoteTextEditor(textBoxID, textFileSelectID, filesDir) {
	this.textBoxID = textBoxID;
	this.textFileSelectID = textFileSelectID;
	this.filesDir = filesDir;
	this.xmlhttp = new XMLHttpRequest();

	this.SaveFile = (function(fileName) {

		xmlhttp.onreadystatechange = (function() {

		}).bind(this)

	}).bind(this)




	this.GetFileList = (function() {
		// Create request function
		xmlhttp.onreadystatechange = function(selectEleID){
			var filesArray = JSON.parse(xmlhttp.responseText);
			var selectEle = document.getElementById(selectEleID);
			var selectOptions = "";

			while (selectEle.length > 0) {
				selectEle.remove(0);
			}

			for (var file = 0; file < filesArray.length; file++) {
				selectEle.add(filesArray[file]);
			};

		}(this.textFileSelectID);

		// Create request
		xmlhttp.open("GET", "GetFileList.php");

		// send request
		xmlhttp.send(null);
	}).bind(this)




	this.LoadFileContents = (function() {

	}).bind(this)




	this.Sample = (function() {

	}).bind(this)
}