
export class LogUtil {
  
  static info(method, variable, value) {
    console.log(method + " -> " + variable + ": " + value + " ============");
  }
  
  static error(service, method, e) {
    console.log(service + " -> " + method + ": error");
    console.log("-----------------------------------");
    console.log(e);
    console.log("-----------------------------------");
  }
  
}