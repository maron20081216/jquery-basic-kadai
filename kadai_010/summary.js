$(function() {
  // 「文字色変化」ボタンを押すと、色が変わる（色は任意）
  $('#change-color').on('click', function() {
    $('#target').css('color', 'blue');
  });

  // 「文字内容変化」ボタンを押すと、文字が切り替わる（内容は任意）
  $('#change-text').on('click', function() {
    $('#target').text('こんばんわ！');
  });

  // 「フェードアウト」ボタンを押すと、フェードアウトで文字が消える
  $('#fade-out').on('click', function() {
    $('#target').fadeOut();
  });

  // 「フェードイン」ボタンを押すと、フェードインで文字が現れる
  $('#fade-in').on('click', function() {
    $('#target').fadeIn();
  });

})