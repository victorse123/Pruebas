import React from 'react'

const CardModal = ({character}) => {
  return (
    <div className="character">
      <div className="character__name">
        <p>
          {character.name || 'name'}
        </p>
      </div>
      <div className="character__image">
        <img src={character.image} />
      </div>
      <div className="character__details">
        <p><span>Estatus: </span>
          {character.status || 'status'}
        </p>
        <p><span>Genero: </span>
          {character.gender || 'gender'}
        </p>
        <p><span>Especie: </span>
          {character.species || 'species'}
        </p>
        <p><span>Locación: </span>
          {character.location.name || 'location'}
        </p>
      </div>
    </div>
  )
}

export default CardModal