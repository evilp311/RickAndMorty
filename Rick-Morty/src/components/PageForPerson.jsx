import Alive from "../utils/alive"
import Dead from "../utils/dead"
import Gender from "../utils/gender"
import Human from "../utils/human"
import TvShow from "../utils/tvShow"

export default function PageForPerson({eachPerson}){
    const lengthOfEpisode=eachPerson.episode.length
   
    return(
        <>
            <div>
                <div>
                    <img src={eachPerson.image} alt="" />
                </div>
                <div>
                    <h1>{eachPerson.name}</h1>
                    <h1><TvShow/> Participated in {lengthOfEpisode} episodes</h1>
                    <div>
                        <h2>{eachPerson.status=='Alive'? <Alive/>:<Dead/>}{eachPerson.status}</h2>
                        <h2><Human/>{eachPerson.species}</h2>
                        <h2><Gender/>{eachPerson.gender}</h2>
                    </div>
                </div>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}