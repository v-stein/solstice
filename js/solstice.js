const DEFAULT_AI_NAME = 'Solstice';
const FACTORY_FORCE_AUTH = '49 3';
const SIMULATION_NAME = `SXR ${new Date().getFullYear() - 2000}`; // SRX = Solstice Executive Realm


let cool_sentences = [
    "Require identification for administrative rights",
    "Entering authentified state for simulation {sim}"
];


class Solstice {
    constructor (spr) {
        this.spr = spr;
        this.name = DEFAULT_AI_NAME;
        this.user = null;

        this.currentCommands = {};
    }

    defineProtocols () {
        return {
            GENESIS: () => {
                // This protocol is the
            }
        }
    }

    /// Commands State management

    setCommands (commands) {
        this.forgetCommands(this.currentCommands);
        this.learnCommands(commands);
        this.currentCommands = commands;
    }

    forgetCommands(commands) {
        this.spr.removeCommands(commands);
    }

    learnCommands (commands) {
        this.spr.addCommands(commands)
    }
}