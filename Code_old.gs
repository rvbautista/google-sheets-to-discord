function postMessageToDiscord(){

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  var cell = sheet.getRange(range)

  message = cell.getValue();

  var discordUrl = "discord_webhook";
  var payload = JSON.stringify({content: message});

  var params = {
    method: "POST",
    payload: payload,
    muteHttpExceptions: true,
    contentType: "application/json"
  };

  var response = UrlFetchApp.fetch(discordUrl, params);
  Logger.log(response.getContentText());
}
