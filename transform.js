class Transform {
    getInfo() {
        return {
            "id": "Transform",
            "name": "Transform",
            "blocks": [{
                "opcode": "flipped",
                "blockType": "Boolean",
                "text": "flipped [AXIS]?",
                "arguments": {
                    AXIS: {
                        type: "String",
                        menu: "axisMenu"
                    }
                }
            }],
            "menus": {
                axisMenu: {
                    acceptReporters: true,
                    items: ["vertically", "horizontally"]
                }
            }
        };
    }
    flipped(TYPE, util) {
        return util.target.x;
    }
}
Scratch.extensions.register(new Transform());
