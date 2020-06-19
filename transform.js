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
    }
    flipped: {
        vertically: false,
        horizontally: false
    },
    flipped({check}) {
        return this.flipped.vertically;
    }
}
Scratch.extensions.register(new Transform());
