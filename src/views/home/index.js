import { fetchCharacters, fetchEpisodes } from '../../services/api'
import { useEffect, useState } from 'react'
import CharacterCard from './CharacterCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from '../../components/ui/Loader'
let page = 1
const EPISODE_LAST_PAGE = 41

const Home = () => {
  const [charactersData, setCharactersData] = useState({
    info: {},
    characters: []
  })

  const [episodes, setEpisodes] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const getCharacters = async () => {
    try {
      const { info, results } = await fetchCharacters(page)
      setCharactersData(prev => ({ info, characters: [...prev.characters, ...results]}))
      page += 1
    } catch (error) {
      console.error(error);
    }
  }

  const getEpisodes = async () => {
    try {
      const data = await fetchEpisodes(Array.from({ length: EPISODE_LAST_PAGE }, (_, i) => i + 1))
      const episodeList = {}
      data.forEach(({id, name }) => episodeList[id] = name)
      setEpisodes(episodeList)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true)
        await Promise.all([getCharacters(),getEpisodes()])
        setIsLoading(false)
      } catch (error) { 
        console.error(error);
      }
    }
    fetchAllData()
  }, [])

  return (
      isLoading ? (
        <div className="flex-grow flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <InfiniteScroll
          dataLength={charactersData.characters.length}
          hasMore={page < charactersData.info.pages}
          next={getCharacters}
          loader={<Loader />}
        >
          <ul className="flex justify-center gap-6 flex-wrap mx-auto py-6">
            {
              charactersData.characters.map(data => (
                <CharacterCard character={data} episodes={episodes} key={data.id} />
              ))
            }
          </ul>
        </InfiniteScroll>
      )
  )
}

export default Home;
