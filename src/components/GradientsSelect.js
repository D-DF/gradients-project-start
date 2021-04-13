import {uniqueTags} from "../gradients"

const GradientsSelect = () => {

    const selectElem = (e) => {
        console.log(e.target.value)
    }

    return (
        <>
        <h2 className="text-center my-4">Alyra Gradients</h2>
        <div className="input-group mb-3">
            <label className="input-group-text mb-4" htmlFor="select">Filter par tag</label>
            <select className="form-select mb-4" onChange={selectElem}>
                <option>Tous</option>
            {uniqueTags.map(color => <option value={color}>{color}</option>)}
        </select>
        </div>
        </>
    )
}

export default GradientsSelect