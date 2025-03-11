export const Button = ({ className, ariaLabel, onClick, label }) => {
    return (
        <>
           <button className={className} aria-label={ariaLabel} onClick={onClick}>{label}</button>
        </>
    );
}
