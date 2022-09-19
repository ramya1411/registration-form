import "./Forminput.css"

const Forminput = (props) => {
    const {label ,errorMessage, onChange, id, ...inputprops} = props;
    return(
        <div className="ip">
            <label>{label}</label>
            <input {...inputprops} onChange= {onChange}/>
            <span>{errorMessage}</span>
        </div>
    )
}
export default Forminput;