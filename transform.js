class Transform {
  getInfo() {
    return {
      id: "Transform",
      name: "Transform",
      blocks: [
        {
          opcode: "getRotationStyleOfSprite",
          blockType: "reporter",
          text: "rotation style",
          arguments: {}
        }
      ]
    };
  }  
  
  getRotationStyleOfSprite(_, util) {
    return util.target.rotationStyle || '';
  }
}

Scratch.extensions.register(new Transform());
