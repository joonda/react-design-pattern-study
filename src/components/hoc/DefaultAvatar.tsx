import Avatar, {type AvatarProps} from "./Avatar.tsx";

interface DefaultAvatarProps {
    name: string;
}

const defaultAvatar = (Component: React.ComponentType<AvatarProps>) => {
    return ({name}: DefaultAvatarProps) => (
        <Component name={name} description="Hello!"/>
    )
}

const DefaultAvatar = defaultAvatar(Avatar)

export default DefaultAvatar