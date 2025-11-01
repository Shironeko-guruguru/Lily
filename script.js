window.onload = function() {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) {
        console.error("Canvasの2Dコンテキストが取得できませんでした。");
        return;
    }
  
  const playerImage = new Image();
