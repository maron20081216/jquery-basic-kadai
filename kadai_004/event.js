$(function() {
  // HTMLドキュメントが読み込み完了したら「loadイベントが発生しました」とコンソール出力
  console.log('loadイベントが発生しました');

  // 画面をスクロールしたら「scrollイベントが発生しました」とコンソール出力
  $(document).on('scroll', () => {
    console.log('scrollイベントが発生しました');
  });
});