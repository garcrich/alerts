import './App.scss';
import AlertManager, { useAlertReducer } from './components/AlertManager';
import AlertForm from './components/AlertForm';
import { useReducer } from 'react';

function App() {
  const [sentAlerts, dispatch] = useReducer(useAlertReducer, [])

  return (
    <div>
      <AlertManager sentAlerts={sentAlerts} />
      <AlertForm dispatch={dispatch} />
    </div>
  );
}

export default App;
