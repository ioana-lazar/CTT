interface Props {
    pic: string;
}

const PictureCard = (props: Props) => {
    const {
        pic
    } = props;

    return (
        <div className='picture-card-wrapper'>
            <img
                className='picture-card-img'
                src={pic}
            />
        </div>
    )
}

export default PictureCard
