class Module {
    constructor(name, enter, leave, card) {
        this.name = name;
        this.enter = enter;
        this.leave = leave;
        this.card = card;
    }

    enterModule() {
        this.card.visible = true;
        this.enter();
    }

    leaveModule() {
        this.card.visible = false;
        this.leave();
    }
}

class Modules {
    static modules = [];
    static current = 0;

    static addModule(name, enter, leave, card) {
        this.modules.push(new Module(name, enter, leave, card));
    }

    static nextModule() {
        this.modules[this.current].leaveModule();
        this.current = (this.current + 1) % this.modules.length;
        this.modules[this.current].enterModule();
    }

    static previousModule() {
        this.modules[this.current].leaveModule();
        this.current = (this.current - 1 + this.modules.length) % this.modules.length;
        this.modules[this.current].enterModule();
    }

    static start() {
        this.current = 0;
        this.modules[this.current].enterModule();
    }
}

// Assuming `cards` array is populated with your text sprites as in your existing code

