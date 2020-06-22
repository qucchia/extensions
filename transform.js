class Transform {
    getInfo() {
        return {
            "id": "Transform",
            "name": "Transform",
            "blocks": [{
                "opcode": "rotation_style",
                "blockType": "Reporter",
                "text": "rotation style",
                "arguments": {}
                }
            ]
        };
    }
    rotation_style({_, util}) {
        return util.target.rotationStyle || '';
    }
}
Scratch.extensions.register(new Transform());
