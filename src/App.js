import React from 'react';
import DrinkList from './components/DrinkList';

const drinks =[
  {name:'G&T',
    id:1,
    image:'https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2832&q=80'
  },
  {name:'Butter Beer',
  id:2,
  image:'https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2832&q=80'
  },
  {name:'Mimosa',
    id:3,
    image:'https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2832&q=80'
  },
  {name:'Cider',
  id:4,
  image:'https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2832&q=80'
  }
]


function App() {
  return (
    <div className="container">
      <h1>Hi there, cocktails?</h1>
     <div className="row">
       <DrinkList drinksthing={drinks}/>
     </div>
    </div>
  );
}

export default App;
