import styles from "@/ui/Button/Button.module.css";
import classNames from "classnames";

export default function Button({
    type,
    isDisabled = false,
    size,
    value,
    onClick,
}) {
    const buttonClasses = classNames(styles.button, {
        [styles.small]: size === "small",
        [styles.large]: size === "large",
        [styles.primary]: type === "primary",
        [styles.secondary]: type === "secondary",
        [styles.disabled]: isDisabled,
        [styles.error]: type === "warning",
    });

    return (
        <input
            className={buttonClasses}
            type='button'
            value={value}
            onClick={onClick}
        />
    );
}
