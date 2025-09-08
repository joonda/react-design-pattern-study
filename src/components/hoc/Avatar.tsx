export interface AvatarProps {
    name: string;
    description: string;
}

const Avatar = ({name, description}: AvatarProps) => {
    return (
        <div>
            <div>{name}</div>
            <p>{description}</p>
        </div>
    )
}

export default Avatar;