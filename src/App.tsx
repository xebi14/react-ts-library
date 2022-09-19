import './App.css';
import { Button } from './components/Button/Button';
import { Badge } from './components/Badge';
import { Avatar } from './components/Avatar';

function App() {
  return (
    <div className="App">
      {/* <Button btnLabel='Primary Button' btnSize ="px-6 py-3 text-base" variant='bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-white'/>
      <Button btnLabel='Primary Button' btnSize ="px-4 py-2 text-base" variant='bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-white'/>
      <Button btnLabel='Primary Button' btnSize ="px-4 py-2 text-sm" variant='bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 text-white'/>
      <br></br>
      <Button btnLabel='Secondary Button' btnSize ="px-6 py-3 text-base" variant='bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500 text-indigo-700'/>
      <Button btnLabel='Secondary Button' btnSize ="px-4 py-2 text-base" variant='bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500 text-indigo-700'/>
      <Button btnLabel='Secondary Button' btnSize ="px-4 py-2 text-sm" variant='bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500 text-indigo-700'/> */}

      <Button children ='Secondary Button' variant={Button.variant.SECONDARY} size ={Button.size.SMALL}/>
      <Button children ='Secondary Button' variant={Button.variant.SECONDARY} size ={Button.size.MEDUIM}/>

      <br></br>
      <br></br>

      {/* <Badge label='Gray Badge' bgColor='bg-gray-100 text-gray-800' size='px-2.5 py-0.5 text-xs font-medium'/>
      <Badge label='Green Badge ' bgColor='bg-green-100 text-green-800' size='px-2.5 py-0.5 text-xs font-medium'/>
      <Badge label='Blue Badge' bgColor='bg-blue-100 text-blue-800' size='px-2.5 py-0.5 text-xs font-medium'/>
      <Badge label='Pink Badge' bgColor='bg-pink-100 text-pink-800' size='px-2.5 py-0.5 text-xs font-medium'/>
      <br></br>
      <Badge label='Gray Badge' bgColor='bg-gray-100 text-gray-800' size='px-3 py-0.5 text-sm font-medium'/>
      <Badge label='Green Badge ' bgColor='bg-green-100 text-green-800' size='px-3 py-0.5 text-sm font-medium'/>
      <Badge label='Blue Badge' bgColor='bg-blue-100 text-blue-800' size='px-3 py-0.5 text-sm font-medium'/>
      <Badge label='Pink Badge' bgColor='bg-pink-100 text-pink-800' size='px-3 py-0.5 text-sm font-medium'/> */}
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
