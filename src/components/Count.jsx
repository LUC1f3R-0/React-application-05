export const Count = ({ label, className }) => {
    console.log("count rendered")
    return (
        <>
            <h1 className={className}>{label}</h1>
        </>
    );
}
