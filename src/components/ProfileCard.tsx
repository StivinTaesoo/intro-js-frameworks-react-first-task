import "../App.css";

interface ProfileCardProps {
    name: string;
    image: string;
    description: string;
}
const ProfileCard: React.FC<ProfileCardProps> = ({
    name,
    image,
    description,
}) => {
    return (
        <div className="profile_card">
            <div className="image_container">
                <img src={image} alt={`${name}'s image`} />
            </div>
            <div className="profile_text">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <button>Follow</button>
        </div>
    );
};

export default ProfileCard;
