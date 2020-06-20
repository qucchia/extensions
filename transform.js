class Transform {
    getInfo() {
        return {
            "id": "Transform",
            "name": "Transform",
            "blocks": [{
                "opcode": "transform_flipped",
                "blockType": "Boolean",
                "text": "flipped [AXIS]?",
                "arguments": {
                    AXIS: {
                        type: "String",
                        menu: "axisMenu"
                    }
                }
            }, {
                "opcode": "transform_scale",
                "blockType": "Reporter",
                "text" "[DIRECTION] scale",
                "arguments": {
                    DIRECTION: {
                        type: "String",
                        menu: "directionMenu"
                    }
                }
            }],
            "menus": {
                axisMenu: {
                    acceptReporters: true,
                    items: ["vertically", "horizontally"]
                },
                directionMenu: {
                    acceptReporters: true,
                    items: ["up", "down", "left", "right"]
                }
            }
        };
    }
    transform_flipped({AXIS}) {
        return AXIS;
    }
    transform_scale({DIRECTION}) {
        return DIRECTION;
}
Scratch.extensions.register(new Transform());
