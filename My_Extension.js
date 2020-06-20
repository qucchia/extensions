// This file was auto-generated
class My_Extension {
    getInfo() {
        return {
            "id": "My Extension",
            "name": "My Extension",
            "blocks": [
                {
                    "opcode": "substring",
                    "blockType": "String",
                    "text": "letters [NUM1] to [NUM2] of [STRING]",
                    "arguments": {
                        NUM1 {
                            "type": "number",
                            "default": 2
                        NUM2 {
                            "type": "number",
                            "default": 5
                        STRING {
                            "type": "string",
                            "default": "Hello, World!"
                    }
                }
            ],
            "menus": {
                "menuA": {
                    "acceptReporters": true
                    "items": ["a","b","c"]
                }
            }
        }
    }
}

Scratch.extensions.register(new My_Extension());
