import ModelTest from './model/_Model';
let model = ModelTest.instance;
import Btn from './view/main/world/_Btn';

(function(){
  window.addEventListener('load', init, false);

  function init(){
    var btn = new Btn('btn');
  }
})();