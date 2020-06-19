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
    flipped({check}) {
        return false;
    }
}
Scratch.extensions.register(new Transform());
