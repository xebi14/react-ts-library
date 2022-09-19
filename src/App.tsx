import './App.css';
import { Button } from './components/Button/Button';
import { Badge } from './components/Badge';
import { Avatar } from './components/Avatar';

function App() {
  return (
    <div className="App">
      
      <Button children ='Secondary Button' variant={Button.variant.SECONDARY} size ={Button.size.SMALL}/>
      <Button children ='Secondary Button' variant={Button.variant.SECONDARY} size ={Button.size.MEDUIM}/>

      <br></br>
      <br></br>

      <Badge children='Green Badge' size={Badge.size.SMALL} color ={Badge.color.GREEN} />
      <Badge children='Green Badge' size={Badge.size.LARGE} color ={Badge.color.GREEN} />
      <Badge children='Blue Badge' size={Badge.size.SMALL} color ={Badge.color.BLUE} />
      <Badge children='Blue Badge' size={Badge.size.LARGE} color ={Badge.color.BLUE} />


      <br></br>
      <br></br>
      <Avatar size={Avatar.size.SMALL}/>
      <Avatar size={Avatar.size.MEDIUM}/>
      <Avatar size={Avatar.size.LARGE}/>

    </div>
  );
}

export default App;
