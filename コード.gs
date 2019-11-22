function myFunction() {
  var sheet = SpreadsheetApp.getActiveSheet();
  
  for(var i = 2; sheet.getLastRow(); i++){
    var start = sheet.getRange(i,2).getValue().toString();
    var title = sheet.getRange(i,3).getValue().toString();
    var descr = sheet.getRange(i,4).getValue().toString();
    var locat = sheet.getRange(i,5).getValue().toString();
         
    if(title.length <= 0) {
            break;
        }
    
    var startTime = new Date(start);
    var endTime = new Date(start);
    //今回作るToDoListはTitleがカレンダー１日枠に収まるので開始日も終了日も同じになる
    var options={
      location:locat,
      description:descr
    }
    var id = "dd17433obujhg7ua5dbt8qmljc@group.calendar.google.com";
    var cal = CalendarApp.getCalendarById(id);
  
    cal.createEvent(title, startTime, endTime, options);
  }
}