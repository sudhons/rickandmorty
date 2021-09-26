import { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group';

const CharacterCard = ({ character, episodes }) => {
  const nodeRef = useRef(null);

  const [shouldShowAll, setShouldShowAll] = useState(false)

  const toggleShouldShowAll = () => setShouldShowAll(prev => !prev)


  const episodeIds = character.episode.map(url => url.split('/').slice(-1))

  const getCharacterDetails = () => (
    <div className="h-64 overflow-y-auto">
      <div className="w-full py-2 px-4 border-b border-grey">
        <h5 className="uppercase text-2xs text-grey-deep">species</h5>
        <p>{character.species}</p>
      </div>
      <div className="flex border-b border-grey py-2 px-4">
        <div className="w-full">
          <h5 className="uppercase text-2xs text-grey-deep">gender</h5>
          <p>{character.gender}</p>
        </div>
        <div className="w-full px-2 border-l border-grey">
          <h5 className="uppercase text-2xs text-grey-deep">status</h5>
          <p>{character.status}</p>
        </div>
      </div>
      <div className="w-full py-2 px-4 border-b border-grey">
        <h5 className="uppercase text-2xs text-grey-deep">origin</h5>
        <p>{character.origin.name}</p>
      </div>
      <div className="w-full py-2 px-4 border-b border-grey">
        <h5 className="uppercase text-2xs text-grey-deep">location</h5>
        <p>{character.location.name}</p>
      </div>
      <div className="w-full py-2 px-4">
        <div className="flex justify-between">
          <h5 className="uppercase text-2xs text-grey-deep">Chapters</h5>
          <button
            className="bg-primary rounded py-px px-2 text-2xs hover:bg-blue hover:text-white"
            onClick={toggleShouldShowAll}
          >
            show&nbsp;all
          </button>
        </div>
        <p>{episodes[episodeIds[0]]}</p>
      </div>
    </div>
  )

  const getCharacterChapters = () => (
    <CSSTransition
      nodeRef={nodeRef}
      in={shouldShowAll}
      timeout={300}
      classNames="modal-all"
      unmountOnExit
    >
      <div
        className="absolute z-10 left-0 top-0 bottom-0 right-0 w-full h-64 overflow-y-auto transition overlay"
        ref={nodeRef}
      >
        <header className="flex justify-between items-center text-white sticky top-0 z-20 bg-blue px-5">
          <h4 className="uppercase text-xs">Chapters</h4>
          <button
            className="text-lg transition-colors hover:bg-red h-4 w-4 rounded overflow-hidden"
            onClick={toggleShouldShowAll}
          >
            <span className="inline-block transform -translate-y-1">&times;</span>
          </button>
        </header>
        <ul className="flex flex-wrap text-xs gap-1 px-3 py-2">
          {
            episodeIds.map(id => (
              <li className="border border-grey rounded px-1" key={id}>{episodes[id]}</li>
              ))
            }
        </ul>
      </div>
    </CSSTransition>
  )

  return (
    <li
      className="rounded-md flex flex-wrap md:flex-nowrap w-full max-w-md md:max-w-xl overflow-hidden transform transition duration-300 ease-in-out shadow hover:shadow-lg hover:scale-101 bg-alternate"
    >
      <div className="bg-grey w-full">
        <img
          className="w-full md:w-72 h-64 md:h-full object-cover"
          src={character.image}
          alt="charater_image"
        />
      </div>
      <div className="text-sm w-full flex flex-col">
        <h4
          className="flex justify-center items-center text-center text-xl md:text-2xl md:min-h-24 font-semibold p-4 bg-secondary"
        >
          {character.name}
        </h4>
        <div className="relative w-full h-64">
          { !shouldShowAll && getCharacterDetails() }
          { getCharacterChapters() }
        </div>
      </div>
  </li>
  )
}

export default CharacterCard;
