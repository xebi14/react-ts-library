import './App.css';
import { Button } from './components/Button/Button';
import { Badge } from './components/Badge';
import { Avatar } from './components/Avatar';
import { Input } from './components/Input';

function App() {
  return (
    <div className="App">
      
      <Button children ='Secondary Button' variant={Button.variant.SECONDARY} size ={Button.size.SMALL}/>
      <Button children ='Secondary Button' variant={Button.variant.SECONDARY} size ={Button.size.MEDUIM}/>
      <br></br>
      <Button children ='Primary Button' variant={Button.variant.PRIMARY} size ={Button.size.MEDUIM}/>
      <Button children ='Primary Button' variant={Button.variant.PRIMARY} size ={Button.size.SMALL}/>
      <br></br>

      <Badge children='Green Badge' size={Badge.size.SMALL} color ={Badge.color.GREEN} />
      <Badge children='Green Badge' size={Badge.size.LARGE} color ={Badge.color.GREEN} />
      <Badge children='Blue Badge' size={Badge.size.SMALL} color ={Badge.color.BLUE} />
      <Badge children='Blue Badge' size={Badge.size.LARGE} color ={Badge.color.BLUE} />


      <br></br>
      <br></br>
      <Avatar size={Avatar.size.SMALL} status={Avatar.status.INVISIBLE}/>
      <Avatar size={Avatar.size.MEDIUM} status={Avatar.status.INVISIBLE}/>
      <Avatar size={Avatar.size.LARGE} status={Avatar.status.INVISIBLE}/>
      <br></br>
      <Avatar size={Avatar.size.SMALL} status={Avatar.status.OFFLINE}/>
      <Avatar size={Avatar.size.MEDIUM} status={Avatar.status.OFFLINE}/>
      <Avatar size={Avatar.size.LARGE} status={Avatar.status.OFFLINE}/>
      <br></br>
      <Avatar size={Avatar.size.SMALL} status={Avatar.status.ONLINE}/>
      <Avatar size={Avatar.size.MEDIUM} status={Avatar.status.ONLINE}/>
      <Avatar size={Avatar.size.LARGE} status={Avatar.status.ONLINE}/>
      <br></br>
      <Input />

    </div>
  );
}

export default App;
