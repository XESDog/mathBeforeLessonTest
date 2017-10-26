class Utils{
  static debug = false;
   static print(){
     if(!Utils.debug)return;
     console.log.apply(this,arguments);
  }
}
export default Utils;
