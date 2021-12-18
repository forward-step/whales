
export class LogUtil {

    static delimiter() {
        console.log("========================================================================");
    }
  
  static info(method, variable, value) {
    console.log(method + " -> " + variable + ": " + value + " ============");
  }

  static infoInDetail(method, variable, value) {
      console.log(method + " -> " + variable + ": info");
      console.log("-----------------------------------");
      console.log(value);
      console.log("-----------------------------------");
  }
  
  static error(service, method, e) {
    console.log(service + " -> " + method + ": error");
    console.log("-----------------------------------");
    console.log(e);
    console.log("-----------------------------------");
  }
  
}