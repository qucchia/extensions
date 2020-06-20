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
            }, {
                "opcode": "list",
                "blockType": "Reporter",
                "text": "list [LIST]",
                "arguments": {}
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
        return TYPE;
    }
    list() {
        return [1,2,3,4,5];
    }
}
Scratch.extensions.register(new Transform());
