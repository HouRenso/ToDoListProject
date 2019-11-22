function myFunction2(){
  var sheet = SpreadsheetApp.getActiveSheet();

  //ここでイベントを取得し、変数化、最後にはセル（行）を削除
    var start = sheet.getRange(2,2).getValue().toString();
    var title = sheet.getRange(2,3).getValue().toString();
    var descr = sheet.getRange(2,4).getValue().toString();
    var locat = sheet.getRange(2,5).getValue().toString();
    
    var startDate = new Date(start);
  //var endDate = new Date(start);
  //終日予定の場合はendDateを設定しなくても大丈夫だった！！
  //ToDOlistは枠が１日で終わるので開始も終了も同じに設定する
    var options={
      location:locat,
      description:descr
    }
    var id = "your calendar id";
    var cal = CalendarApp.getCalendarById(id);
    
    cal.createAllDayEvent(title, startDate, options);
    var events = cal.getEventsForDay(startDate);
  //events[0].addEmailReminder(960);
    events[0].addPopupReminder(960);
  //通知の方法をメールにするかアプリでするか？？
  //前日8:00AMに通知が来るようにしたい
  //getEventsが複数形であるところからとれるように、これは配列arrayである点に注意する
    sheet.deleteRow(2);  
}