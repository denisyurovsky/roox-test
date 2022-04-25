import './CustomButton.scss'

export const CustomButton = (props: any) => {
    return (
        <button className='custom-button' onClick={props.buttonAction}>{props.title}</button>
    )
}