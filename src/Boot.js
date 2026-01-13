import Phaser from "phaser";

// Import assets so Parcel can process them
import baseMapJson from "../assets/BaseMap.json";
import tilesImage from "../assets/tiles.png";
import boyImage from "../assets/boy.png";
import backgroundImage from "../assets/background.png";

class Boot extends Phaser.Scene {
  constructor() {
    super({
      key: "Boot"
    });
  }

  preload() {
    // Imported images provide URLs automatically - use them directly
    this.load.image("springTiles", tilesImage);

    this.load.spritesheet("Tommy", boyImage, {
      frameWidth: 32,
      frameHeight: 32
    });

    this.load.image("springBackground", backgroundImage);
    
    // Create a blob URL from the imported JSON data
    // This allows Phaser's loader to process it as a URL
    const jsonBlob = new Blob([JSON.stringify(baseMapJson)], { type: 'application/json' });
    const jsonUrl = URL.createObjectURL(jsonBlob);
    this.load.tilemapTiledJSON("SpringLevel", jsonUrl);
  }

  create() {
    this.scene.start("Play");
  }
}

export default Boot;
