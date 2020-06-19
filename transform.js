class Transform {
    getInfo() {
        return {
            "id": "Transform",
            "name": "Transform",
            "blocks": [{
                "opcode": "check",
                "blockType": "Boolean",
                "text": "working?",
                "arguments": {}
            }],
            "menus": {}
        };
    }
    check({check}) {
        return true
    }
}
Scratch.extensions.register(new Transform());
