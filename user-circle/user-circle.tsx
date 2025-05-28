type UserCircleProps = {
    imageUrl: string;
    size?: number;
    right?: string;
    bottom?: string;
};

export function UserCircle({
    imageUrl,
    size = 40, // дефолтний розмір
    right = "0px",
    bottom = "0px"
}: UserCircleProps) {
    return (
        <div
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
                position: "absolute",
                bottom: bottom,
                right: right,
            }}
        ></div>
    );
}
