import { useEffect, useRef, useState } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';

import { sortPlacesByDistance } from './loc.js'

function App() {
	const modal = useRef();
	const selectedPlace = useRef();

  // let lastPickedPlaces  = JSON.parse(localStorage.getItem('selectedValueIds')) || [];
  // console.log("palces ->"+lastPickedPlaces);
	// const [pickedPlaces, setPickedPlaces] = useState([Object.values(lastPickedPlaces)]);
  const [pickedPlaces, setPickedPlaces] = useState([]);
	const [sortedAvaliablePlaces, setSortedAvaliablePlaces] = useState([]);
  
	// Ordenar card en base a la localizacion del usuario, funciones importadas de loc.js
	// console.log(AVAILABLE_PLACES);
  
	useEffect(() => {
	  navigator.geolocation.getCurrentPosition((position) => 
		setSortedAvaliablePlaces(
		  sortPlacesByDistance(
			AVAILABLE_PLACES,
			position.coords.latitude,
			position.coords.longitude
		  )
		)
	  );
	}, []); // La array vacia "[]" sirve para que solo lo haga una vez (cuando carga la pagina)
//   console.log(sortedPlaces);

  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

	const selectedIds = JSON.parse(localStorage.getItem('selectedValueIds')) || [];
	
	if (!selectedIds.find((myid) => myid === id)){
		localStorage.setItem("selectedValueIds", JSON.stringify([id, ...selectedIds]));
	}
	console.log(selectedIds);
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();

	const selectedIds = JSON.parse(localStorage.getItem('selectedValueIds')) || [];
	localStorage.setItem(
		"selectedValueIds", 
		JSON.stringify(selectedIds.filter((idValue)=> idValue !== selectedPlace.current))
	);
  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        {sortedAvaliablePlaces ? <Places
          title="Available Places"
          places={sortedAvaliablePlaces}
          onSelectPlace={handleSelectPlace}
        />:"Sorting places"}
      </main>
    </>
  );
}

export default App;
