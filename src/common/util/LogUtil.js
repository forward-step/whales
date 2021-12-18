export class LogUtil {

    static get flag() {
        return false;
    }

    static delimiter() {
        if (this.flag) {
            console.log("========================================================================");
        }
    }

    static info(method, variable, value) {
        if (this.flag) {
            console.log(method + " -> " + variable + ": " + value + " ============");
        }
    }

    static infoInDetail(method, variable, value) {
        if (this.flag) {
            console.log(method + " -> " + variable + ": info");
            console.log("-----------------------------------");
            console.log(value);
            console.log("-----------------------------------");
        }
    }

    static error(service, method, e) {
        if (this.flag) {
            console.log(service + " -> " + method + ": error");
            console.log("-----------------------------------");
            console.log(e);
            console.log("-----------------------------------");
        }
    }

}