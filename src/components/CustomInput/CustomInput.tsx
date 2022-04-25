import './CustomInput.scss'

export const CustomInput = (props: any) => {

    return (
        <div className='user-page-view__input'>
        <span>
            {props.inputTitle}
        </span>
            <input required onChange={props.onChange} disabled={props.disabled} defaultValue={props.defaultValue}/>
        </div>
    )
}