window.onload = function() {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) {
        console.error("Canvasの2Dコンテキストが取得できませんでした。");
        return;
    }
  
  const playerImage = new Image();

  const assets = {
    images: {},
    imageSources: {
      umidukaaoi:"chara/UmidukaAoi.png"
    },
    load: function(onComplete) {
      const sources = this.imageSources;
      const images = this.images;
      const numImages = Object.keys(sources).length;
      let numLoaded = 0;
      if (numImages === 0) {
                onComplete();
                return;
      }
      console.log("ローディング開始...")

      for (const key in sources) {
                const img = new Image();
                img.src = sources[key];
                
                img.onload = () => {
                    numLoaded++;
                    images[key] = img;
                    console.log(`  ${key} (${sources[key]}) ロード完了`);
                    
                    if (numLoaded === numImages) {
                        console.log("ローディング完了");
                        onComplete();
                    }
                };
                img.onerror = () => {
                    console.error(`${key} (${sources[key]}) のロードに失敗`);
                    numLoaded++;
                    if (numLoaded === numImages) {
                        console.log("ローディング完了 (一部失敗あり)。");
                        onComplete();
                    }
                };
            }
        }
    };

  function initializeGame() {
    
  }
