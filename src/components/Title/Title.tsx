import './Title.scss'

export const Title = (props: {title: string}) => {
    return <span className='title'>{props.title}</span>
}