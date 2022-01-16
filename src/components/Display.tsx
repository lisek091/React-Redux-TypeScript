import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/store";
import { GetHero } from "../redux/actions/HeroActions";
import { GetWorld } from "../redux/actions/WorldActions";
const Display = () => {
    const dispatch = useDispatch();
    const [heroNumber, setHeroNumber] = useState(0)
    const heroState = useSelector((state: RootState) => state.hero)
    const worldState = useSelector((state: RootState) => state.wrold)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setHeroNumber(event.target.value as any)
    const handleSubmit = () => {
        dispatch(GetHero(heroNumber))
    }
    useEffect(() => {
        heroState.hero && dispatch(GetWorld(heroState.hero?.homeworld))
    }, [heroState])
    return (
        <div>
            <input type='number' onChange={handleChange} />
            <button onClick={handleSubmit}>Search</button>
            {heroState.hero && (
                <div>
                    {heroState.hero.name} from {worldState && worldState.world?.name}
                </div>
            )}
        </div>
    )
}
export default Display
