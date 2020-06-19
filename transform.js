class Transform {
    getInfo() {
        return {
            "id": "Transform",
            "name": "Transform",
            "blocks": [{
                "opcode": "flipped",
                "blockType": "Boolean",
                "text": "flipped vertically?",
                "arguments": {}
            }],
            "menus": {}
        };
    },
    flippedVertically: false,
    flippedHorizontally: false,
    flipped({check}) {
        return this.flippedVertically;
    }
}
Scratch.extensions.register(new Transform());
