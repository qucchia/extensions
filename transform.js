class Transform {
    getInfo() {
        return {
            "id": "Transform",
            "name": "Transform",
            "blocks": [{
                "opcode": "x_pos",
                "blockType": "Repoter",
                "text": "x position",
                "arguments": {}
                }
            ]
        };
    }
    x_pos({_, util}) {
        return util.target.rotationStyle || '';
    }
}
Scratch.extensions.register(new Transform());
