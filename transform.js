class Transform {
    getInfo() {
        return {
            "id": "Transform",
            "name": "Transform",
            "blocks": [{
                "opcode": "rotation_style",
                "blockType": "reporter",
                "text": "rotation style",
                "arguments": {}
                }
            ]
        };
    }
    rotation_style(_, util) {
        return 'Rotation style: ' + util.target.rotationStyle || '';
    }
}
Scratch.extensions.register(new Transform());
