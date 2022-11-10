import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
/* import { onOperationChange } from './logic/logic.js'; */

export default function LandingSearch() {
  const dispatch = useDispatch();
  const mockCities = ['Bariloche', 'Rafaela', 'Posadas', 'Carlos Paz'];

  const [operation, setOperation] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    console.log('la operacion es: ' + operation)
  }, [operation]);

  return (
    <div style={{border: '1.5px solid black'}}>
      <select 
        name="operation"
        onChange={(e) => e.target.value !== 'default' && setOperation(e.target.value)}
      >
        <option value="default">Operación</option>
        <option value="comprar">Comprar</option>
        <option value="alquilar">Alquilar</option>
      </select>
      <select name="propertyType">
        <option value="default">Property type</option>
        <option value="casa">Casa</option>
        <option value="departamento">Departamento</option>
        <option value="ph">PH</option>
        <option value="bungalow">Bungalow</option>
      </select>
      <select name="location">
        <option value="default">Location</option>
        {mockCities.map(city => <option value={city}>{city}</option>)}
      </select>
      <Link to='/home'>
        <button onClick={(e) => console.log('me clikeaste')}>
          Buscar
        </button>
      </Link>
    </div>
  )
}