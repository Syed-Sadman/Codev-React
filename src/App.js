
import Msg from './comp/Message'
import Count from './comp/Count'
import Greet from './comp/Gree'
function App(){
  return(
    <div>

      <Msg/>
      <Greet name='Diana' heroName='Wonder Women'></Greet>
      <Count/>
     
    </div>
  );
}

export default App;