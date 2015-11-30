function RemoteTextEditor(textBoxID, textFileSelectID) {
	this.textBoxID = textBoxID;
	this.textFileSelectID = textFileSelectID;
	this.filesDir = "MyFiles/";
	this.xmlhttp = new XMLHttpRequest();

	this.SaveFile = (function(fileName) {

		xmlhttp.onreadystatechange = (function() {
			if (this.xmlhttp.readyState == 4 && this.xmlhttp.status == 200) {

			}
		}).bind(this)

	}).bind(this)




	this.GetFileList = (function() {
		// Create response function
		this.xmlhttp.onreadystatechange = (function(){
			if (this.xmlhttp.readyState == 4 && this.xmlhttp.status == 200) {
				var response = this.xmlhttp.responseText;
				var filesArray = JSON.parse(response);
				var selectElement = document.getElementById(this.textFileSelectID);
				var selectOptions = "";

				while (selectElement.length > 0) {
					selectElement.remove(0);
				}

				for (var file = 0; file < filesArray.length; file++) {
					var option = document.createElement("OPTION");
					option.value = filesArray[file];
					option.text = filesArray[file];
					selectElement.add(option);
				};
			}
		}).bind(this)

		// Create request
		this.xmlhttp.open("GET", "GetFileList.php");

		// send request
		this.xmlhttp.send(null);
	}).bind(this)




	this.LoadFileContents = (function() {
		// Create response function
		this.xmlhttp.onreadystatechange = (function(){
			if (this.xmlhttp.readyState == 4 && this.xmlhttp.status == 200) {
				document.getElementById(this.textBoxID).innerHTML = this.xmlhttp.responseText;
			}
		}).bind(this)

		// Create request
		this.xmlhttp.open("GET", this.filesDir + document.getElementById(this.textFileSelectID).value);

		// send request
		this.xmlhttp.send(null);
	}).bind(this)




	this.Sample = (function() {

	}).bind(this)
}