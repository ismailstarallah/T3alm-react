import './App.css';
import { useState } from 'react';
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Chou', isFruit: false, id: 1 },
  { title: 'Ail', isFruit: false, id: 2 },
  { title: 'Pomme', isFruit: true, id: 3 },
];


function Profile() {
 return (
   <>
     <h1>{user.name}</h1>
     <img
       className="avatar"
       src={user.imageUrl}
       alt={'Photo de ' + user.name}
       style={{
         width: user.imageSize,
         height: user.imageSize
       }}
     />
   </>
 );
}

function Listitem() {
  const listItems = products.map(product =>
    <li key={product.id}
    style={{
      color: product.isFruit ? 'magenta' : 'darkgreen'
    }}
    >
      {product.title}
    </li>
  );
  
  return (
    <ul>{listItems}</ul>
  );
}

function Header() {
  return <h1>Header with another way</h1>;
}

function MyButton() {
  function handleClick() {
    alert('Vous avez cliqué !');
  }

  return (
    <button onClick={handleClick}>
      Cliquez ici
    </button>
  );
}

function Hookstrik() {
  const [count, setCount] = useState(0); //pour rndre les button independants il faut de bougé ce code à partir d’ici dans la composante MyButton1

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Des compteurs indépendants</h1>
      <MyButton1 count={count} onClick={handleClick} />
      <MyButton1 count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton1({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Cliqué {count} fois
    </button>
  );
}



function App() {
  return (<>
  <link rel="stylesheet" href="./app.css"/>
  <h4>App component hooks trick</h4>
  <Hookstrik />
  <h4>App component header</h4>
  <Header/>
  <h4>App component Profile</h4>
  <Profile/>
  <h4>App component Listitem</h4>
  <Listitem />
  <h4>App component MyButton</h4>
  <MyButton/>
</>);
}

export default App;