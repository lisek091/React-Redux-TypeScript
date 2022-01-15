import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux";
import { GetHero } from "../redux/actions/HeroActions";



const Display = () => {

    const dispatch = useDispatch();
    const [heroNumber, setHeroNumber] = useState(0)
    const heroState = useSelector((state: RootState) => state.hero)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setHeroNumber(event.target.value as any)
    const handleSubmit = () => { dispatch(GetHero(heroNumber)) }
    return (
        <div>
            <input type='number' onChange={handleChange} />
            <button onClick={handleSubmit}>Search</button>
            {heroState.hero && (
                <div>
                    {heroState.hero.Info.name} from {heroState.hero.Info.homeworld}
                </div>
            )}
        </div>
    )
}

export default Display
