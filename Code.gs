function postMessageToDiscord(){

// made by rvbautista, link to the github when sharing the code 
// https://github.com/rvbautista/google-sheets-to-discord/
  
  var discordUrl = "discord_webhook";
  var sheet = SpreadsheetApp.getActiveSheet();
  var rows = sheet.getDataRange().getValues();

   var numRows = rows.length;

//  Logger.log(rows[1][1])

  for(var i=1;i<numRows;i++){
    //Takes data of Q Column
    var sentMark = rows[i][0];
    Logger.log(sentMark);
    if (sentMark == false){

      var message = rows[i][1];
      Logger.log(message);

      var payload = JSON.stringify({content: message});
      var params = {
          method: "POST",
          payload: payload,
          muteHttpExceptions: true,
          contentType: "application/json"
        };

      var response = UrlFetchApp.fetch(discordUrl, params);
      Logger.log(response.getContentText());

      var cell = sheet.getRange(i+1,1); 
      Logger.log(cell);
      cell.setValue(new Date()).setNumberFormat("MM/dd/yyyy hh:mm:ss");
    }
  }

}
