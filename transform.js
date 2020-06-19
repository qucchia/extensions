class Transform {
    getInfo() {
        return {
            "id": "Transform",
            "name": "Transform",
            "blocks": [{
                "opcode": "flipped",
                "blockType": "Boolean",
                "text": "flipped vertically?",
                "arguments": {
                    AXIS: {
                        type: "String",
                        menu: "axisMenu"
                    }
                }
            }],
            "menus": {
                axisMenu: {
                    items: ["vertically", "horizontally"]
                }
            }
        };
    }
    flipped({TYPE}) {
        return false;
    }
}
Scratch.extensions.register(new Transform());
