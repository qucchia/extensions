class Test {
  getInfo() {
    return {
      id: "Test",
      name: "Test",
      color1: '#FF8C1A',
      color2: '#DB6E00',
      blocks: [],
      menus: {}
    }
  }
}

Scratch.extensions.register(new Test());
